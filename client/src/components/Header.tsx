import { useInput } from "../utils/InputContext";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { handleTutorial } = useInput();
    const { logout } = useAuth0();
    return (
        <div className="h-8 w-full flex justify-between items-center">
            <div className="cursor-pointer flex items-center font-extrabold mx-2">
                <div className="w-4 h-4 mx-2 invert">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                    >
                        <path d="M0 64C0 28.7 28.7 0 64 0C192 0 320 0 448 0c35.3 0 64 28.7 64 64c0 42.9 0 85.8 0 128.7c-5.3-.5-10.6-.7-16-.7c-97.2 0-176 78.8-176 176c0 16.6 2.3 32.7 6.6 48c-5.8 0-11.6 0-17.3 0c-41.2 30.9-82.5 61.9-123.7 92.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3c0-26.7 0-53.3 0-80c-32 0-64 0-96 0c-35.3 0-64-28.7-64-64C0 256 0 160 0 64zm168 48c-13.3 0-24 10.7-24 24s10.7 24 24 24c21.3 0 42.7 0 64 0c0 45.3 0 90.7 0 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-45.3 0-90.7 0-136c21.3 0 42.7 0 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-88 0c-29.3 0-58.7 0-88 0zM640 368c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zm-93.5-66.2c2.8-5 1.7-11.1-2.6-14.9s-10.6-4-15.1-.6c-32 24-64 48-96 72c-4.1 3.1-5.8 8.5-4.2 13.4s6.2 8.2 11.4 8.2c11.9 0 23.7 0 35.6 0c-10 18.1-20.1 36.1-30.1 54.2c-2.8 5-1.7 11.1 2.6 14.9s10.6 4 15.1 .6c32-24 64-48 96-72c4.1-3.1 5.8-8.5 4.2-13.4s-6.2-8.2-11.4-8.2c-11.9 0-23.7 0-35.6 0c10-18.1 20.1-36.1 30.1-54.2z" />
                    </svg>
                </div>
                <p>Summarizer</p>
            </div>
            <div className="flex">
                <div
                    className="mx-2 cursor-pointer"
                    onClick={() => {
                        handleTutorial(true);
                    }}
                >
                    See Tutorial
                </div>
                <div
                    className="mx-2 cursor-pointer"
                    onClick={() =>
                        logout({
                            logoutParams: { returnTo: window.location.origin },
                        })
                    }
                >
                    Log Out
                </div>
            </div>
        </div>
    );
};

export { Header };
