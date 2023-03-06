import { InputProvider } from "../utils/InputContext";
import { InputBar } from "./InputBar";
import { Header } from "./Header";
import { LogoutButton } from "./ProductPage/LogoutButton";
import { Display } from "./Display";
import SideBar from "./TWSideBar";

const ProductPage = () => {
    return (
        <InputProvider>
            <div className="h-full w-full flex flex-col">
                <Header />
                <Display />
                <InputBar />
            </div>
        </InputProvider>
    );
};

export default ProductPage;
