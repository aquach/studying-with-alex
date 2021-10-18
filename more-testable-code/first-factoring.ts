import * as fs from "fs";

export function numRepeatedWords(inputData: string): number {
    const lines = inputData.split("\n");
    const words = lines
        .flatMap((l) => l.split(" "))
        .filter((w) => w.length > 0);

    const seenWords = new Set();
    const repeatedWords = new Set();

    words.forEach((w) => {
        if (seenWords.has(w)) {
            repeatedWords.add(w);
        }
        seenWords.add(w);
    });

    return repeatedWords.size;
}

if (require.main === module) {
    if (process.argv.length != 4) {
        console.error("Wrong number of args.");
        process.exit(1);
    }

    const inputFilename = process.argv[2];
    const outputFilename = process.argv[3];

    const inputData = fs.readFileSync(inputFilename, "utf-8");
    const result = numRepeatedWords(inputData);
    fs.writeFileSync(outputFilename, result.toString());
}
