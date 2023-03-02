import { InputProvider } from "../utils/InputContext";
import { InputBar } from "./InputBar";
import { LogoutButton } from "./ProductPage/LogoutButton";
import { Tutorial } from "./Tutorial";
import SideBar from "./TWSideBar";

const ProductPage = () => {
    return (
        <InputProvider>
            <div className="flex h-full">
                <SideBar />
                <div className="h-screen flex-1 w-full">
                    <Tutorial />
                    <InputBar />
                </div>
            </div>
        </InputProvider>
    );
};

export default ProductPage;
