import { TextInput } from "./TextInput";
import { FileDrop } from "./FileDrop";

import { useState } from "react";
const InputBar = () => {
    const [file, setFile] = useState(false);
    return (
        <div className="align-top w-full bg-red-400 h-48 flex flex-col items-center justify-between">
            {file ? <FileDrop /> : <TextInput />}
            <button className="w-64 my-6" onClick={() => setFile(!file)}>
                {file ? "Paste Readings Instead" : "Upload File Instead"}
            </button>
        </div>
    );
};

export { InputBar };
