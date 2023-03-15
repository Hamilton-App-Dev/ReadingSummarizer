import { useDropzone, FileWithPath } from "react-dropzone";
import { useInput } from "../utils/InputContext";
import timeout from "../utils/testTimeout";
import { requestSummaryFile } from "../utils/requestSummary";
import { useCallback, useState } from "react";

const FileDrop = () => {
    const {
        loading,
        tutorial,
        fileData,
        handleLoading,
        handleFileChange,
        handleResult,
        handleTutorial,
    } = useInput();
    const [doneUploading, setDoneUploading] = useState<boolean>(false);
    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        acceptedFiles.forEach((file: FileWithPath) => {
            handleLoading(true);
            handleFileChange(file);
            handleLoading(false);
            setDoneUploading(true);
        });
    }, []);

    function fileSizeValidator(file: FileWithPath) {
        const maxSize = 100000000; // 100mb
        if (file.size > maxSize) {
            return {
                code: "file-too-large",
                message: `File size is larger than 100mb`,
            };
        }

        return null;
    }

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        fileRejections,
        acceptedFiles,
    } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            "application/pdf": [".pdf"],
        },
        disabled: doneUploading,
        validator: fileSizeValidator,
    });

    const files = acceptedFiles.map((file: FileWithPath) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <div className="w-full h-full">
            <div
                className="flex flex-col h-[calc(100%-20px)] w-full items-center justify-center mt-2 text-center border-2 border-dashed rounded-2xl border-slate-600 p-6"
                {...getRootProps()}
            >
                <input {...getInputProps()} />

                {isDragActive ? (
                    <p className="text-4xl font-bold text-blue-600">
                        Drop the files here ...
                    </p>
                ) : (
                    <p className="text-2xl font-bold">
                        {doneUploading ? (
                            <button
                                onClick={async () => {
                                    handleLoading(true);
                                    const summary = await requestSummaryFile(
                                        fileData
                                    );
                                    if (tutorial) handleTutorial(false);
                                    handleLoading(false);
                                    setDoneUploading(false);
                                    handleResult(summary);
                                    console.log(fileData);
                                }}
                            >
                                Submit
                            </button>
                        ) : (
                            "Drag your files here"
                        )}
                    </p>
                )}
                {fileRejections.length ? (
                    <p className="block text-center text-xl pt-4 text-red-300">
                        Use a different file!
                    </p>
                ) : null}
            </div>
        </div>
    );
};

export { FileDrop };
