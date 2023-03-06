import { Switch } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faFilePdf } from "@fortawesome/pro-solid-svg-icons";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

interface ToggleInputProps {
    enabled: boolean;
    handleEnabled: () => void;
}
export default function ToggleInput({
    enabled,
    handleEnabled,
}: ToggleInputProps) {
    return (
        <Switch.Group as="div" className="flex items-center">
            <Switch
                checked={enabled}
                onChange={handleEnabled}
                className={classNames(
                    enabled ? "bg-indigo-600" : "bg-gray-200",
                    "relative inline-flex h-8 items-center w-20 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                )}
            >
                <span className="sr-only">Use setting</span>
                <span
                    className={classNames(
                        enabled ? "translate-x-12" : "translate-x-0",
                        "pointer-events-none relative inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                    )}
                >
                    <span
                        className={classNames(
                            enabled
                                ? "opacity-0 duration-100 ease-out"
                                : "opacity-100 duration-200 ease-in",
                            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                        )}
                        aria-hidden="true"
                    >
                        <FontAwesomeIcon
                            className="text-black w-3 h-3"
                            icon={faPencil}
                        />
                    </span>
                    <span
                        className={classNames(
                            enabled
                                ? "opacity-100 duration-200 ease-in"
                                : "opacity-0 duration-100 ease-out",
                            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                        )}
                        aria-hidden="true"
                    >
                        <FontAwesomeIcon
                            className="text-black w-3 h-3"
                            icon={faFilePdf}
                        />
                    </span>
                </span>
            </Switch>
            <Switch.Label as="span" className="ml-3">
                <span className="text-sm font-medium text-white">
                    Change Upload Type
                </span>{" "}
                <span className="text-sm text-gray-400">
                    ({enabled ? "To Text" : "To PDF"})
                </span>
            </Switch.Label>
        </Switch.Group>
    );
}
