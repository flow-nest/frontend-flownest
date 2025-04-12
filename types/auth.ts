export interface User {
    id: string;
    email: string;
    name: string;
    phone: string;
    address: string;
    // Add other user properties here
}

// Define the shape of the credentials object (adjust as needed)
export interface Credentials {
    id?: string;
    email?: string;
    password?: string;
    name?: string;
    phone?: string;
    address?: string;
    otp?: string;
}