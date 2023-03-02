import { FileWithPath } from "react-dropzone";
import { TextInput } from "./TextInput";
import { FileDrop } from "./FileDrop";
import { requestSummaryFile } from "../utils/requestSummary";
import { useState } from "react";
import { useInput } from "../utils/InputContext";
import ToggleInput from "./ToggleInput";

const InputBar = () => {
    const [enabled, setEnabled] = useState<boolean>(false);

    return (
        <div className="align-middle w-full bg-red-400 h-1/5 flex flex-col items-start relative justify-between ">
            <ToggleInput
                enabled={enabled}
                handleEnabled={() => setEnabled(!enabled)}
            />
            <div className="w-full flex items-center">
                {enabled ? <FileDrop /> : <TextInput />}
            </div>
        </div>
    );
};

export { InputBar };
