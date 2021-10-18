import * as fs from "fs";

export interface FilesystemInterface {
    readFile(filename: string): string;
    writeFile(filename: string, contents: string): void;
}

export const realFilesystemModule: FilesystemInterface = {
    readFile(filename) {
        return fs.readFileSync(filename, "utf-8");
    },
    writeFile(filename, contents) {
        return fs.writeFileSync(filename, contents);
    },
};
