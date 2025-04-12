import { router } from 'expo-router';

export const useAuthNavigation = () => {
    const navigateBack = () => router.back();
    const navigateToRegister = () => router.push('/(routes)/register');
    const navigateToForgotPassword = () => router.push('/(routes)/forget-password');
    const navigateToLogin = () => router.push('/(routes)/login');
    const navigateToHome = () => router.push('/(tabs)');

    return { navigateBack, navigateToRegister, navigateToForgotPassword, navigateToLogin, navigateToHome };
};
