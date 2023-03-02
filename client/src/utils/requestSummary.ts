import { FileWithPath } from "react-dropzone";

async function requestSummaryFile(file?: FileWithPath): Promise<string> {
    // const url: string = import.meta.env.VITE_URL_ENDPOINT + "/uploadPDF";
    const url: string = "http://170.187.167.124/uploadPDF";
    let summary: string = "";
    const formData = new FormData();
    if (!file) return "No File";
    formData.append("file", file);

    try {
        const response = await fetch(url, {
            method: "POST",
            // headers: { "Content-Type": "application/json" },
            // body: JSON.stringify({ readingText: readingText }),
            body: formData,
        });
        if (!response.ok) throw new Error(response.statusText);
        console.log("showed response: ");
        console.log(response);
        summary = await response.json();
    } catch (err) {
        console.error(err);
    }
    console.log(summary);
    return summary;
}

interface ParamsType {
    readingText: string;
}

async function requestSummaryText(readingText?: string): Promise<string> {
    // const url: string = import.meta.env.VITE_URL_ENDPOINT + "/uploadPDF";
    const url: string =
        'http://170.187.167.124/summarizeText?readingText="' +
        readingText +
        '"';
    let summary: string = "";

    try {
        const response = await fetch(url, {
            method: "GET",
            // headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) throw new Error(response.statusText);
        console.log("showed response: ");
        console.log(response);
        summary = await response.json();
    } catch (err) {
        console.error(err);
    }
    console.log(summary);
    return summary;
}

export { requestSummaryFile, requestSummaryText };
