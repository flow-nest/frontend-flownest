import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useAuthStore } from "@/store/authStore";
import { ResetPasswordValidationSchema } from "@/validations/validationSchemas";

export const useResetPassword = (updateFunction: (values: any) => Promise<void>) => {
    const { t } = useTranslation();

    const handleResetPassword = async (values: { newPassword: string; confirmPassword: string }) => {
        try {
            await updateFunction(values.confirmPassword);
            // Handle success (e.g., show success message, navigate to login screen)
        } catch (error) {
            console.error('Reset password error:', error);
        }
    };

    return {
        validationSchema: ResetPasswordValidationSchema(t),
        handleResetPassword
    };
};