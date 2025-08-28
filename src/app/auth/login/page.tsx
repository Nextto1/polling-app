import React from 'react';
import LoginForm from '../../../components/LoginForm';

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;