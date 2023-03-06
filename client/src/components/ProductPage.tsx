import { InputProvider } from "../utils/InputContext";
import { InputBar } from "./InputBar";
import { Header } from "./Header";
import { Display } from "./Display";

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
