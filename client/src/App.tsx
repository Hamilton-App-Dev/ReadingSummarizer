import { useState } from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
    const [count, setCount] = useState(0);
    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <div className="app">
            <nav>
                <LoginButton />
                <LogoutButton />
            </nav>
        </div>
    );
}

export default App;
