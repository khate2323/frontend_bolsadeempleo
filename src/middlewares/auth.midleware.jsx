import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SessionGuard = ({ children }) => {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken')


    useEffect(() => {
        if (!accessToken) {
            navigate('/');
        }
    }, [accessToken, navigate]);

    if (!accessToken) return null

    return children;
};

export default SessionGuard;
