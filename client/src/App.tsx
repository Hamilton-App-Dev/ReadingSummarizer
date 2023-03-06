import { FC, ReactElement } from "react";
import LoginPage from "./components/LoginPage";
import ProductPage from "./components/ProductPage";
import { useAuth0 } from "@auth0/auth0-react";

const App: FC = (): ReactElement => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="h-full w-full overflow-hidden">
            {isAuthenticated ? <ProductPage /> : <LoginPage />}
        </div>
    );
};

export default App;
