import { useDropzone, FileWithPath } from "react-dropzone";
import { useInput } from "../utils/InputContext";
import timeout from "../utils/testTimeout";
import { useCallback, useState } from "react";

const FileDrop = () => {
	const [file, setFile] = useState<FileWithPath>();
	const { loading, handleLoading } = useInput();
	const handleUpload = async (uploadUrl?: string) => {
		const formData = new FormData();
		if (!file) return;
		console.log(file);
		formData.append("file", file);
		handleLoading(true);
		await timeout(500);
		// post request to upload file goes here
		handleLoading(false);
		setFile(undefined);
	};

	const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
		acceptedFiles.forEach((file: FileWithPath) => {
			console.log(file);
			setFile(file);
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
	});

	const files = acceptedFiles.map((file: FileWithPath) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	return (
		<div>
			<div
				className="flex flex-col items-center justify-center text-center border-2 border-dashed rounded-2xl border-slate-600 p-6"
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
			<aside>
				<ul>{files}</ul>
			</aside>
			<button className="my-3" onClick={() => handleUpload()}>
				Submit
			</button>
		</div>
	);
};

export { FileDrop };
