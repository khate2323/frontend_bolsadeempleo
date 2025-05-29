// src/context/auth.context.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { apiService } from '../services/api.service';
// Crea el contexto
const AuthContext = createContext();

// Hook para acceder al contexto
export const useAuth = () => useContext(AuthContext);

// Provider del contexto
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // info del usuario autenticado
    const [loading, setLoading] = useState(true); // controla carga inicial

    const fetchUser = async () => {
        try {
            const token = localStorage.getItem('accessToken');
            if (!token) {
                setLoading(false);
                return;
            }

            const response = await apiService.get(`/users/get-info-session`)
            console.log("#andres=>", response.data.data);
            setUser(response.data.data);
            localStorage.setItem('user', JSON.stringify(response.data.data));

        } catch (error) {
            console.error("Error al obtener el usuario:", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
