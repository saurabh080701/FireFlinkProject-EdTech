import { Navigate } from "react-router-dom";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const Name = window.localStorage.getItem("name")

    if (Name === ""|| Name === null) {
        return <Navigate to='/login' />;
    } else {
        return <>{children}</>;
    }
};

export default PrivateRoute;
