import { useDropzone } from "react-dropzone";

const FileDrop = () => {
    const onDrop = () => {};
    const { getRootProps, getInputProps, isDragActive, fileRejections } =
        useDropzone({
            onDrop,
            maxFiles: 1,
            accept: {
                "application/pdf": [".pdf"],
            },
        });

    return (
        <div
            className="flex cursor-pointer flex-col w-full items-center justify-center text-center border-2 border-dashed rounded-2xl border-slate-600 p-6"
            {...getRootProps()}
        >
            <input {...getInputProps()} />

            {isDragActive ? (
                <p className="text-4xl font-bold text-blue-600">
                    Drop the files here ...
                </p>
            ) : (
                <p className="text-4xl font-bold ">Drag your files here</p>
            )}
            {fileRejections.length ? (
                <p className="block text-center text-xl pt-4 text-red-300">
                    Only .pdf files accepted
                </p>
            ) : null}
        </div>
    );
};

export { FileDrop };
