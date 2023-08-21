import {useAuth} from "../context/AuthProvider.jsx";


function MainPage() {
    const auth = useAuth()


    return (
        <div>
            <h1>Welcome {auth.user.username}</h1>
        </div>
    );
}

export default MainPage;