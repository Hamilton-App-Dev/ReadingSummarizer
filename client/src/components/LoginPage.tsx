import { LoginButton } from "./LoginPage/LoginButton";

const LoginPage = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-4">Summarizer</h2>
            <p className="mb-3">
                By{" "}
                <a href="https://www.hamiltonappdev.com/">AppDev at Hamilton</a>
            </p>
            <LoginButton />
        </div>
    );
};

export default LoginPage;
