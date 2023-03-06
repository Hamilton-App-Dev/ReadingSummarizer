import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-4">Summarizer</h2>
            <p className="mb-3">
                By{" "}
                <a
                    className="text-indigo-600"
                    href="https://www.hamiltonappdev.com/"
                >
                    AppDev at Hamilton
                </a>
            </p>
            <p
                className="underline cursor-pointer"
                onClick={() => loginWithRedirect()}
            >
                Log In
            </p>
        </div>
    );
};

export default LoginPage;
