import { TextInput } from "./TextInput";
import { FileDrop } from "./FileDrop";
import { useState } from "react";
const InputBar = () => {
    const [file, setFile] = useState(false);
    return (
        <>
            {file ? <FileDrop /> : <TextInput />}
            <button onClick={() => setFile(!file)}>Toggle</button>
        </>
    );
};

export { InputBar };
