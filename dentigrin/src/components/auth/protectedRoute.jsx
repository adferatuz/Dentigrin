import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "./useAuth"

export const ProtectedRoute = ({children}) => {
    const { isAuthenticated } = useAuth()
    const location = useLocation()

    if(!isAuthenticated) {
        return <Navigate to='/login' state={{ location }} />
    }        

    return children
}

