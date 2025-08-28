import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginForm: React.FC = () => {
    const { signIn } = useAuth()!;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await signIn(email, password);
        } catch (err: any) {
            setError(err.message);
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleLogin} className="max-w-sm mx-auto p-4 border rounded">
            <h2 className="mb-4 text-lg font-bold">Login</h2>
            <div className="mb-2">
                <label className="block mb-1">Email</label>
                <input
                    type="email"
                    className="w-full border px-2 py-1 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block mb-1">Password</label>
                <input
                    type="password"
                    className="w-full border px-2 py-1 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {error && <div className="mb-2 text-red-500">{error}</div>}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
                disabled={loading}
            >
                {loading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    );
};

export default LoginForm;