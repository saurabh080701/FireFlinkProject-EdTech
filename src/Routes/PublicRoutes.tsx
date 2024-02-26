import { Navigate } from "react-router-dom";

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const Name = window.localStorage.getItem("name")

    if (Name === ""|| null) {
        return <Navigate to='/users' />;
    } else {
        return <>{children}</>;
    }
};

export default PublicRoute;
