import { useRef, ReactElement, useEffect } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/pro-solid-svg-icons";

import { useInput } from "../utils/InputContext";
import { requestSummaryText } from "../utils/requestSummary";
import timeout from "../utils/testTimeout";

const TextInput = ({ allowed }: { allowed: boolean }): ReactElement => {
    const {
        fileData,
        readingText,
        loading,
        tutorial,
        handleChange,
        handleResult,
        handleLoading,
        handleTutorial,
    } = useInput();

    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        handleChange("");
    }, []);
    return (
        <div className="w-full mb-4 text-black ">
            <div className="h-10 relative">
                <textarea
                    ref={inputRef}
                    className="w-full h-10 max-h-64 absolute bottom-0 left-0 resize-none block  rounded-md border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={readingText}
                    onChange={(e) => {
                        if (allowed) {
                            handleChange(e.target.value);
                            e.target.style.height = "2rem";
                            e.target.style.height = `${e.target.scrollHeight}px`;
                        }
                    }}
                    onKeyDown={async (e) => {
                        if (loading || !allowed) {
                            e.preventDefault();
                            return;
                        }
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            if (tutorial) handleTutorial(false);

                            handleLoading(true);
                            const temp = readingText;
                            handleChange("");
                            if (inputRef.current)
                                inputRef.current.style.height = "2rem";

                            const summary = await requestSummaryText(temp);
                            handleLoading(false);
                            handleResult(summary);
                        }
                    }}
                />
                <button
                    onClick={async () => {
                        if (!allowed) return;
                        console.log(readingText);
                        if (tutorial) handleTutorial(false);

                        handleLoading(true);
                        const temp = readingText;
                        handleChange("");
                        if (inputRef.current)
                            inputRef.current.style.height = "2rem";
                        const summary = await requestSummaryText(temp);
                        handleLoading(false);
                        handleResult(summary);
                    }}
                    className="absolute top-1/2 -translate-y-1/2 right-4 "
                >
                    <FontAwesomeIcon
                        className=" text-black h-4 w-4"
                        icon={faPaperPlane}
                    />
                </button>
            </div>
        </div>
    );
};

export { TextInput };
