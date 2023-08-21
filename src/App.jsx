import './App.css';
import React, {lazy, Suspense} from "react";

import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./components/hoc/PrivateRoute.jsx";




import LayoutDetail from "./components/hoc/LayoutDetail.jsx";
import {AuthProvider} from "./context/AuthProvider.jsx";


const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))
const LoginPage = lazy(() => import('./pages/LoginPage.jsx'))
const MainPage = lazy(() => import('./pages/MainPage.jsx'))

const CharactersPage = lazy(() => import('./pages/CharactersPage.jsx'))
const EpisodePage = lazy(() => import('./pages/EpisodePage.jsx'))
const LocationPage = lazy(() => import('./pages/LocationPage.jsx'))

const DetailCharacters = lazy(() => import('./components/detailCharacters/DetailCharacters.jsx').then(module => ({
    default: module.DetailCharacters
})))

const DetailLocation = lazy(() => import('./components/detailLocation/DetailLocation.jsx').then(module => ({
    default: module.DetailLocation
})))

const DetailEpisodes = lazy(() => import('./components/detailEpisodes/DetailEpisodes.jsx').then(module => ({
    default: module.DetailEpisodes
})))


function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<PrivateRoute/>}>
                    <Route index element={<Suspense fallback={<div>loading ...</div>}><MainPage/></Suspense>}/>
                    <Route path="characters"
                           element={<Suspense fallback={<div>loading ...</div>}><CharactersPage/></Suspense>}/>
                    <Route path="episodes"
                           element={<Suspense fallback={<div>loading ...</div>}><EpisodePage/></Suspense>}/>
                    <Route path="locations"
                           element={<Suspense fallback={<div>loading ...</div>}><LocationPage/></Suspense>}/>
                    <Route path="/" element={<LayoutDetail/>}>
                        <Route path="characters/:id"
                               element={<Suspense fallback={<div>loading ...</div>}><DetailCharacters/></Suspense>}/>
                        <Route path="episodes/:id"
                               element={<Suspense fallback={<div>loading ...</div>}><DetailEpisodes/></Suspense>}/>
                        <Route path="locations/:id"
                               element={<Suspense fallback={<div>loading ...</div>}><DetailLocation/></Suspense>}/>
                    </Route>

                </Route>


                <Route path="login" element={<Suspense fallback={<div>loading..</div>}><LoginPage/></Suspense>}/>
                <Route path="*" element={<Suspense fallback={<div>loading..</div>}><NotFoundPage/></Suspense>}/>
            </Routes>
        </AuthProvider>

    );
}

export default App;
