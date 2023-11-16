import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
    user: null,
    login: () => null,
    logout: () => null,
});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user') || 'null');

        setUser(storedUser);

    }, []);

    console.log('AuthContext state:', { user });

    const login = (userData) => {
        console.log(userData)
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', userData.token);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
