import { ReactElement, useEffect } from "react";
import requestSummary from "../utils/requestSummary";
import { useInput } from "../utils/InputContext";
import timeout from "../utils/testTimeout";

const TextInput = (): ReactElement => {
    const { readingText, loading, handleChange, handleResult, handleLoading } =
        useInput();

    useEffect(() => {
        handleChange("");
    }, []);
    return (
        <div className="text-black relative">
            <textarea
                className="w-full max-h-64 h-10 absolute bottom-0 left-0 resize-none"
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
                        timeout(1000);
                        // handleResult(summary);
                        handleLoading(false);
                    }
                }}
            />
        </div>
    );
};

export { TextInput };
