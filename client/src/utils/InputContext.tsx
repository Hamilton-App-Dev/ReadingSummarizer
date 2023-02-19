import { createContext, useContext, useState } from "react";

interface contextValues {
    readingText: string;
    result: string;
    loading: boolean;
    handleLoading: (loadState: boolean) => void;
    handleChange: (text: string) => void;
    handleResult: (text: string) => void;
}

interface providerProps {
    children?: JSX.Element | JSX.Element[];
}

const InputContext = createContext<contextValues | undefined>(undefined);

function InputProvider({ children }: providerProps) {
    const [readingText, setReadingText] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const handleLoading = (loadState: boolean): void => setLoading(loadState);
    const handleChange = (text: string): void => setReadingText(text);
    const handleResult = (text: string): void => setResult(text);

    const value = {
        readingText,
        result,
        loading,
        handleLoading,
        handleChange,
        handleResult,
    };

    return (
        <InputContext.Provider value={value}>{children}</InputContext.Provider>
    );
}

function useInput() {
    const context = useContext(InputContext);
    if (context === undefined) {
        throw new Error("useCount must be used within a CountProvider");
    }
    return context;
}

export { InputProvider, useInput };
