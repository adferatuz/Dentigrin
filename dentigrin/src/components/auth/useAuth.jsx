import { createContext, useContext, useState} from "react";
import apiService from "../../services/apiService.js";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

     const login = async (formValues) => {
        if(formValues){
            const userInformation = await apiService.post('login', formValues);
            if (userInformation.success) {
                setUser(userInformation.data.user);
                setIsAuthenticated(true);
                localStorage.setItem('isAuthenticated', 'true')
            } else {
                // Manejar el caso en que el usuario no fue encontrado
                console.log('Usuario no encontrado');
                setIsAuthenticated(false);
                localStorage.removeItem('isAuthenticated');
            }
        }
    }

    const logout = () => {
        setIsAuthenticated(false)
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}