import { useDropzone, FileWithPath } from "react-dropzone";
import { useInput } from "../utils/InputContext";
import timeout from "../utils/testTimeout";
import { requestSummaryFile } from "../utils/requestSummary";
import { useCallback, useState } from "react";

const FileDrop = () => {
    const { loading, fileData, handleLoading, handleFileChange } = useInput();
    const [doneUploading, setDoneUploading] = useState<boolean>(false);
    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        acceptedFiles.forEach((file: FileWithPath) => {
            console.log(file);
            handleLoading(true);
            handleFileChange(file);
            handleLoading(false);
            setDoneUploading(true);
        });
    }, []);

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
    });

    const files = acceptedFiles.map((file: FileWithPath) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <div className="w-full h-full">
            <div
                className="flex flex-col h-full w-full items-center justify-center text-center border-2 border-dashed rounded-2xl border-slate-600 p-6"
                {...getRootProps()}
            >
                <input {...getInputProps()} />

                {isDragActive ? (
                    <p className="text-4xl font-bold text-blue-600">
                        Drop the files here ...
                    </p>
                ) : (
                    <p className="text-2xl font-bold">
                        {acceptedFiles.length ? (
                            <button
                                onClick={() => {
                                    requestSummaryFile(fileData);
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
                        Only .pdf files accepted
                    </p>
                ) : null}
            </div>
        </div>
    );
};

export { FileDrop };
