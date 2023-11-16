import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

const ProtectedRoute = (WrappedComponent) => {
    const Auth = (props) => {
        const { user } = useContext(AuthContext);

        if (!user) {
            if (typeof window !== 'undefined') {
                window.location.href = '/login';
            }
            return null;
        }

        return <WrappedComponent {...props} />;
    };

    return Auth;
};

export default ProtectedRoute;