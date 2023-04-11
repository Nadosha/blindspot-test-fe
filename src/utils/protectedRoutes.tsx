import {ROUTES} from "@Utils/routes";
import {useAuth} from "@API/auth";
import {useEffect} from "react";
import {getAuthToken} from "@Utils/Cookies";

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ router, children }) => {
    //Identify authenticated user
    const { isSignedIn, data } = useAuth()

    let unprotectedRoutes = [
        ROUTES.SIGNUP,
    ];

    let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

    if (isBrowser() && !isSignedIn && pathIsProtected) {
        router.push(ROUTES.SIGNUP);
    }

    if ((!data || !isSignedIn) && pathIsProtected) {
        return (<></>);
    }

    return children;
};

export default ProtectedRoute;