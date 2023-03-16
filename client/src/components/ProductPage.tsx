import { useState, Fragment, useEffect } from "react";
import { InputProvider } from "../utils/InputContext";
import { InputBar } from "./InputBar";
import { Header } from "./Header";
import { useAuth0 } from "@auth0/auth0-react";
import { Display } from "./Display";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/pro-solid-svg-icons";

const DisableModal = ({ name }: { name: string }) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
            <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                    <FontAwesomeIcon
                        icon={faHand}
                        className="h-6 w-6 text-red-600"
                    />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">
                        You have been placed on the waitlist!
                    </h3>
                    <div className="mt-2">
                        <p className="text-sm my-4 text-gray-500">
                            Hello {name}!
                        </p>
                        <p className="text-sm text-gray-500">
                            Thank you for signing up for Summarizer! Someone
                            from AppDev at Hamilton will be swift to grant you
                            access to the Summarizer!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductPage = () => {
    const { getIdTokenClaims } = useAuth0();
    const [allowed, setAllowed] = useState<boolean>(false);
    const [name, setName] = useState<string>("");

    useEffect(() => {
        const getClaims = async () => {
            let name: any = "";
            const claims = await getIdTokenClaims();
            console.log(claims);
            setAllowed(claims?.summarizer_allow);

            name = claims?.nickname;
            if (claims?.given_name) name = claims?.given_name;

            setName(name);
        };
        getClaims();
    }, []);

    return (
        <InputProvider>
            <div className="h-full w-full flex flex-col">
                <Header />
                <Display allowed={allowed} />
                <InputBar allowed={allowed} />
                {!allowed && <DisableModal name={name} />}
            </div>
        </InputProvider>
    );
};

export default ProductPage;
