import { ReactElement, useEffect } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { useInput } from "../utils/InputContext";
import { requestSummaryText } from "../utils/requestSummary";
import timeout from "../utils/testTimeout";

const TextInput = (): ReactElement => {
    const {
        fileData,
        readingText,
        loading,
        handleChange,
        handleResult,
        handleLoading,
    } = useInput();

    useEffect(() => {
        handleChange("");
    }, []);
    return (
        <div className="w-full mb-4 text-black ">
            <div className="h-10 relative">
                <textarea
                    className="w-full h-10 max-h-64 absolute bottom-0 left-0 resize-none block  rounded-md border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={readingText}
                    onChange={(e) => {
                        handleChange(e.target.value);
                        e.target.style.height = "2rem";
                        e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                    onKeyDown={async (e) => {
                        if (loading) return;
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleLoading(true);
                            // const summary = await requestSummary(readingText);
                            await timeout(1000);
                            // handleResult(summary);
                            handleLoading(false);
                        }
                    }}
                />
                <button
                    onClick={() => {
                        console.log(readingText);
                        requestSummaryText(readingText);
                    }}
                    className="absolute top-1/2 -translate-y-1/2 right-4 text-black"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export { TextInput };
