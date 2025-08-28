import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Polling App</h1>
            <p>Please choose an option:</p>
            <ul>
                <li>
                    <Link href="/auth/login">Login</Link>
                </li>
                <li>
                    <Link href="/auth/register">Register</Link>
                </li>
            </ul>
        </div>
    );
};

export default HomePage;