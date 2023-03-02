import { createContext, useContext, useState } from "react";
import { FileWithPath } from "react-dropzone";
interface contextValues {
    fileData: FileWithPath | undefined;
    readingText: string;
    result: string;
    loading: boolean;
    handleLoading: (loadState: boolean) => void;
    handleChange: (text: string) => void;
    handleResult: (text: string) => void;
    handleFileChange: (file: FileWithPath) => void;
}

interface providerProps {
    children?: JSX.Element | JSX.Element[];
}

const InputContext = createContext<contextValues | undefined>(undefined);

function InputProvider({ children }: providerProps) {
    const [readingText, setReadingText] = useState<string>("");
    const [fileData, setFileData] = useState<FileWithPath | undefined>();
    const [result, setResult] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleLoading = (loadState: boolean): void => setLoading(loadState);
    const handleChange = (text: string): void => setReadingText(text);
    const handleFileChange = (file: FileWithPath | undefined): void =>
        setFileData(file);
    const handleResult = (text: string): void => setResult(text);

    const value = {
        fileData,
        readingText,
        result,
        loading,
        handleLoading,
        handleChange,
        handleResult,
        handleFileChange,
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
