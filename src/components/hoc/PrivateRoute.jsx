import React, {Suspense} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import NavBar from "../navBar/NavBar.jsx";
import {useAuth} from "../../context/AuthProvider.jsx";
import ErrorBoundary from "../../ErrorBoundary.jsx";


function PrivateRoute() {

    const auth = useAuth()

    return auth.user
        ?
        (
            <div>
                <NavBar/>
                <div className="App">
                    <ErrorBoundary>
                        <Outlet/>
                    </ErrorBoundary>


                </div>
            </div>
        )
        :
        <Navigate to="/login" replace/>
}

export default PrivateRoute;