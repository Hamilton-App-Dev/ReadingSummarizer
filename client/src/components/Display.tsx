import { useState, ReactNode } from "react";
import { useInput } from "../utils/InputContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import {
    faCircle1,
    faCircle2,
    faCircle3,
    faCircle4,
    faCircle5,
    faCircle6,
} from "@fortawesome/pro-solid-svg-icons";

interface TutorialCardProps {
    icon: IconDefinition;
    heading: string;
    description: string;
}
const TutorialCard = ({ icon, heading, description }: TutorialCardProps) => {
    return (
        <div className="h-64 w-[350px] rounded-lg flex flex-col items-center justify-center bg-white bg-opacity-5 border cursor-pointer border-white border-opacity-10">
            <FontAwesomeIcon className="text-white w-12 h-12" icon={icon} />
            <h3 className="font-bold text-2xl my-2">{heading}</h3>
            <p className="w-10/12 mt-2 text-center">{description}</p>
        </div>
    );
};
const Display = () => {
    const { result, loading, tutorial } = useInput();
    const tutorialContent = [
        {
            icon: faCircle1,
            heading: "Log In",
            description:
                "Make a Summarizer account with your Hamilton Gmail or Google Account.",
        },
        {
            icon: faCircle2,
            heading: "Type Readings",
            description:
                "Type or paste in your articles or documents into the textbox. There is no character limit!",
        },
        {
            icon: faCircle3,
            heading: "Upload Files",
            description:
                "Hit the toggle switch to upload files instead. Upload any PDF file.",
        },
        {
            icon: faCircle4,
            heading: "Submit",
            description:
                "Press the submit button to recieve your summary shortly! You will get a summary in an appropriate number of bullet points.",
        },
        {
            icon: faCircle5,
            heading: "Repeat",
            description:
                "Please use Summarizer in moderation! Note that Summarizer can output innacurate or incorrect summaries.",
        },
        {
            icon: faCircle6,
            heading: "Support Us",
            description:
                "This is the first and introductory project to demonstrate what we can do! Follow us at hamiltonappdev.com.",
        },
    ];
    const bulletPoints = result.split("\n").filter((word) => word.length > 0);

    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center w-full bg-primary-300">
                Loading...
            </div>
        );
    }
    return (
        <div className="flex-1 w-full max-h-[calc(100vh-32px-128px)] overflow-scroll bg-primary-300">
            {tutorial ? (
                <div className="flex flex-wrap gap-2 w-[calc(100%)] py-12 justify-center">
                    {tutorialContent.map((cardData, index) => (
                        <TutorialCard
                            icon={cardData.icon}
                            heading={cardData.heading}
                            description={cardData.description}
                            key={index}
                        />
                    ))}
                </div>
            ) : (
                <div className="py-12 px-6">
                    <h2 className="text-3xl mb-4 font-extrabold mx-auto w-fit">
                        Here is your summary in {bulletPoints.length} bullet
                        {bulletPoints.length > 0 && "s"}.
                    </h2>
                    <div className="flex flex-col gap-12">
                        {bulletPoints.map((bullet) => (
                            <div className="py-4 rounded-lg flex flex-col items-center justify-center bg-white bg-opacity-5 border cursor-pointer border-white border-opacity-10">
                                {bullet}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export { Display };
