
import "./App.css";
import LoginPage from "./components/LoginPage";
import ProductPage from "./components/ProductPage";
import { useAuth0 } from "@auth0/auth0-react";
import TextInput from "./components/TextInput";

function App() {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="app">
            {isAuthenticated ? <ProductPage /> : <LoginPage />}
        </div>
    );
}

export default App;
