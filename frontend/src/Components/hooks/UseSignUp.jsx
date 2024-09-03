import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

function UseSignUp() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ username, fullname, password, confirmPassword }) => {
        const success = handleInputErrors({ username, fullname, password, confirmPassword });
        if (!success) {
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('http://localhost:8000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username,fullname, password, confirmPassword })
            });
            const data = await res.json();

            if (res.ok) {
                localStorage.setItem('user', JSON.stringify(data));
                setAuthUser(data);
            } else {
                throw new Error(data.error || 'Something went wrong');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup, error };
}

export default UseSignUp;

function handleInputErrors({ fullname, username, password, confirmPassword }) {
    if (!fullname || !username || !password || !confirmPassword) {
        console.log('Please fill all the details');
        return false;
    }

    if (password !== confirmPassword) {
        console.log('Password does not match');
        return false;
    }

    if (password.length < 6) {
        console.log('Password must be at least 6 characters');
        return false;
    }

    return true;
}
