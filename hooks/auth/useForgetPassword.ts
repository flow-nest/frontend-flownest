import { useTranslation } from "react-i18next";
import { ForgotPasswordValidationSchema } from "@/validations/validationSchemas";

export const useForgetPassword = (forgotPasswordFunction: (email: string) => Promise<void>) => {
    const { t } = useTranslation();

    const handleForgetPassword = async (values: any) => {
        try {
            await forgotPasswordFunction(values);
        } catch (error) {
            console.error("Forget password error:", error);
            // Here you could add more error handling, like showing a toast message
        }
    };

    return {
        validationSchema: ForgotPasswordValidationSchema(t),
        handleForgetPassword
    };
};