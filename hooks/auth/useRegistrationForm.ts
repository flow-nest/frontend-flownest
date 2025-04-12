import { useTranslation } from 'react-i18next';
import { RegisterValidationSchema} from "@/validations/validationSchemas";
import * as Yup from 'yup';

export const useRegistrationForm = (signupFunction: (values: any) => Promise<void>) => {
    const { t } = useTranslation();

    const handleRegister = async (values: any) => {
        try {
            await signupFunction(values);
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    return { validationSchema: RegisterValidationSchema(t), handleRegister };
};