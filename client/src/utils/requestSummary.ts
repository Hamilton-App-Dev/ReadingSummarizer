async function requestSummary(readingText: string): Promise<string> {
    const url = "http://127.0.0.1:5000/summarize";
    let summary: string = "";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ readingText: readingText }),
        });
        if (!response.ok) throw new Error(response.statusText);
        summary = await response.json();
    } catch (err) {
        console.error(err);
    }
    return summary;
}

export default requestSummary;
