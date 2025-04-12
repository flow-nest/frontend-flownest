import { useTranslation} from "react-i18next";
import { loginValidationSchema} from "@/validations/validationSchemas";

export const useLoginForm = (loginFunction: (values: any) => Promise<void>) => {
    const { t } = useTranslation();

    const handleLogin = async (values: any) => {
        try {
            await loginFunction(values);
        } catch (error) {
            console.error("Login error:", error);
            // Here you could add more error handling, like showing a toast message
        }
    };

    return {
        validationSchema: loginValidationSchema(t),
        handleLogin
    };
}