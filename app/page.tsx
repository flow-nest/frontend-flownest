"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/useAuthStore";
import { LoadingScreen } from "@/components/ui/loading-screen";

export default function HomePage() {
  const router = useRouter();
  const { isAuthenticated, user } = useUserStore();

  useEffect(() => {
    // Redirection basée sur l'état d'authentification
    const redirectUser = () => {
      if (isAuthenticated && user) {
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    };

    // Ajouter un petit délai pour assurer que le chargement est visible
    const timer = setTimeout(redirectUser, 1000);

    return () => clearTimeout(timer);
  }, [isAuthenticated, user, router]);

  // Afficher un écran de chargement pendant la redirection
  return <LoadingScreen message="Redirecting..." />;
}