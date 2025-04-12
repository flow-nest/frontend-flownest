import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import axios from 'axios';

// Définition du type pour les données utilisateur
interface User {
    id: string;
    email: string;
    username?: string;
    role?: string;
    // Ajoutez d'autres propriétés utilisateur selon vos besoins
}

// Interface pour le store utilisateur
interface UserState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;

    // Actions
    setUser: (user: User | null) => void;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    fetchUserProfile: () => Promise<void>;
    updateUserProfile: (userData: Partial<User>) => Promise<boolean>;
}

// Création du store avec persistance
const useUserStore = create<UserState>()(
    persist(
        (set, get) => ({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,

            // Définir l'utilisateur
            setUser: (user) => set({
                user,
                isAuthenticated: !!user,
                error: null
            }),

            // Connexion utilisateur
            login: async (email, password) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await axios.post('http://localhost:3000/api/auth/login', {
                        email,
                        password,
                    });

                    if (response.status !== 200) {
                        set({
                            isLoading: false,
                            error: response.data?.message || 'Login failed',
                            isAuthenticated: false
                        });
                        return false;
                    }
                    console.log("response:", response.data.data)

                    const { user, access_token, refresh_token  } = response.data.data;

                    // Stocker les tokens dans des cookies
                    if (access_token) {
                        document.cookie = `access_token=${access_token}; path=/; max-age=${60 * 60 * 24}; ${process.env.NODE_ENV === 'production' ? 'secure; ' : ''}samesite=strict`;
                    }

                    if (refresh_token) {
                        document.cookie = `refresh_token=${refresh_token}; path=/; max-age=${60 * 60 * 24 * 7}; ${process.env.NODE_ENV === 'production' ? 'secure; ' : ''}samesite=strict`;
                    }

                    console.log("user data:",user)

                    // Mettre à jour le store avec les données utilisateur
                    set({
                        user: user,
                        isAuthenticated: true,
                        isLoading: false,
                        error: null
                    });

                    return true;
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || 'An error occurred during login';
                    set({
                        isLoading: false,
                        error: errorMessage,
                        isAuthenticated: false
                    });
                    return false;
                }
            },

            // Déconnexion utilisateur
            logout: () => {
                set({ isLoading: true, error: null });
                // Supprimer les cookies
                document.cookie = 'access_token=; path=/; max-age=0';
                document.cookie = 'refresh_token=; path=/; max-age=0';

                console.log("logout:")

                // Réinitialiser le store
                set({
                    user: null,
                    isAuthenticated: false,
                    error: null,
                    isLoading: false
                });
            },

            // Récupérer le profil utilisateur
            fetchUserProfile: async () => {
                const { isAuthenticated } = get();
                if (!isAuthenticated) return;

                set({ isLoading: true, error: null });
                try {
                    const response = await axios.get('http://localhost:3000/api/users/profile', {
                        headers: {
                            // Ajouter automatiquement le token d'accès à la requête
                            Authorization: `Bearer ${getCookie('access_token')}`
                        }
                    });

                    if (response.status === 200) {
                        set({
                            user: response.data,
                            isLoading: false
                        });
                    }
                } catch (error: any) {
                    set({
                        isLoading: false,
                        error: error.response?.data?.message || 'Failed to fetch user profile'
                    });
                }
            },

            // Mettre à jour le profil utilisateur
            updateUserProfile: async (userData) => {
                const { user, isAuthenticated } = get();
                if (!isAuthenticated || !user) return false;

                set({ isLoading: true, error: null });
                try {
                    const response = await axios.put('http://localhost:3000/api/users/profile', userData, {
                        headers: {
                            Authorization: `Bearer ${getCookie('access_token')}`
                        }
                    });

                    if (response.status === 200) {
                        set({
                            user: { ...user, ...userData },
                            isLoading: false
                        });
                        return true;
                    }
                    return false;
                } catch (error: any) {
                    set({
                        isLoading: false,
                        error: error.response?.data?.message || 'Failed to update profile'
                    });
                    return false;
                }
            }
        }),
        {
            name: 'user-storage', // nom pour le stockage persistant
            storage: createJSONStorage(() => localStorage), // utiliser localStorage pour la persistance
            partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }), // ne persister que ces propriétés
        }
    )
);

// Fonction utilitaire pour récupérer un cookie
function getCookie(name: string): string {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || '';
    return '';
}

export default useUserStore;