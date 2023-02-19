import { InputProvider } from "../utils/InputContext";
import { LogoutButton } from "./ProductPage/LogoutButton";
import { InputBar } from "./InputBar";

const ProductPage = () => {
    return (
        <InputProvider>
            <InputBar />
            <LogoutButton />
        </InputProvider>
    );
};

export default ProductPage;
