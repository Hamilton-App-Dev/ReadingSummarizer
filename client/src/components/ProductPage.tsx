import { InputProvider } from "../utils/InputContext";
import { InputBar } from "./InputBar";
import { LogoutButton } from "./ProductPage/LogoutButton";
import { Tutorial } from "./Tutorial";

const ProductPage = () => {
    return (
        <InputProvider>
            <div className="flex flex-col h-full w-full">
                <Tutorial />
                <InputBar />
            </div>
            <div className="absolute bottom-3 right-3">
                <LogoutButton />
            </div>
        </InputProvider>
    );
};

export default ProductPage;
