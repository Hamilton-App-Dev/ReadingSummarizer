import { FileWithPath } from "react-dropzone";

async function requestSummaryFile(file?: FileWithPath): Promise<string> {
    // const url: string = import.meta.env.VITE_URL_ENDPOINT + "/uploadPDF";
    const url: string = "https://hamiltonsummarizer.com/uploadPDF";
    let summary: string = "";
    const formData = new FormData();
    if (!file) return "No File";
    formData.append("file", file);

    let response: any;

    try {
        response = await fetch(url, {
            method: "POST",
            // headers: { "Content-Type": "application/json" },
            // body: JSON.stringify({ readingText: readingText }),
            body: formData,
        });
        if (!response.ok) throw new Error(response.statusText);
        console.log("showed response: ");
        console.log(response);
        response = await response.json();
    } catch (err) {
        console.error(err);
    }
    summary = response.summary;
    return summary;
}

interface summaryResponse {
    code: number;
    status: boolean;
    summary: string;
}

async function requestSummaryText(readingText?: string): Promise<string> {
    // const url: string = import.meta.env.VITE_URL_ENDPOINT + "/uploadPDF";
    const params = new URLSearchParams("readingText=" + readingText);
    const url: string =
        "https://hamiltonsummarizer.com/summarizeText?" + params.toString();

    let summary: string = "";
    let response: any;

    try {
        response = await fetch(url, {
            method: "GET",
            // headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error(response.statusText);
        console.log("showed response: ");
        console.log(response);
        response = await response.json();
    } catch (err) {
        console.error(err);
    }
    summary = response.summary;
    return summary;
}

export { requestSummaryFile, requestSummaryText };
