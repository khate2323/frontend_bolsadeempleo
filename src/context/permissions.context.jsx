// src/context/permissions.context.jsx
import React, { createContext, useContext, useMemo } from 'react';
import { useAuth } from './auth.context';

const PermissionsContext = createContext();

export const usePermissions = () => useContext(PermissionsContext);

export const PermissionsProvider = ({ children }) => {
    const { user } = useAuth();

    const permissions = useMemo(() => {
        if (!user) return {};

        console.log(user.role_name);
        
        switch (user.role_name) {
            case 'EMPRESA':
                return {
                    isCompany: true,
                    canCreateOffer: true,
                    canEditProfile: true,
                    canSeeApplicants: true,
                };
            case 'EGRESADO':
                return {
                    isGraduated: true,
                    canApply: true,
                    canViewOffers: true,
                    canEditCV: true,
                };
            case 'ADMINISTRADOR':
                return {
                    isAdmin: true,
                    canManageUsers: true,
                    canViewReports: true,
                };
            default:
                return {};
        }
    }, [user]);

    return (
        <PermissionsContext.Provider value={permissions}>
            {children}
        </PermissionsContext.Provider>
    );
};
