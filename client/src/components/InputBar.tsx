import { FileWithPath } from "react-dropzone";
import { TextInput } from "./TextInput";
import { FileDrop } from "./FileDrop";
import { useState } from "react";
import { useInput } from "../utils/InputContext";
import ToggleInput from "./ToggleInput";

const InputBar = ({ allowed }: { allowed: boolean }) => {
    const [enabled, setEnabled] = useState<boolean>(false);

    return (
        <div
            className={`align-middle shadow py-2 px-4 w-full bg-primary-500 h-32 flex flex-col items-start relative justify-between ${
                !allowed && "blur-sm cursor-not-allowed select-none opacity-40"
            }`}
        >
            <ToggleInput
                enabled={enabled}
                handleEnabled={() => setEnabled(!enabled)}
            />
            <div className="w-full flex items-center">
                {enabled ? (
                    <FileDrop allowed={allowed} />
                ) : (
                    <TextInput allowed={allowed} />
                )}
            </div>
        </div>
    );
};

export { InputBar };
