export interface User {
    id: string;
    email: string;
    created_at: string;
}

export interface LoginFormData {
    email: string;
    password: string;
}

export interface RegisterFormData {
    email: string;
    password: string;
    confirmPassword: string;
}