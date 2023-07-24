export type CLIOptions = {
    _: string[];
    debug: boolean;
    flags: string;
    optionalMdExtension: boolean;
    allowOtherExtensions: boolean;
    noEmptyFiles: boolean;
    quietMode: boolean;
    help: boolean;
    ignorePatterns: string[];
    ignorePatternsFrom: string;
    ignoreStatusCodes: number[];
};

export type Issue = {
    message: string;
    path: string;
};

export type Position = {
    line: number;
    column: number;
};

export interface ILink {
    link: string;
    isValid: boolean;
    position: Position;
    statusCode?: number;
}

export interface IMDFile {
    absoluteLinks: Set<ILink>;
    internalLinks: Set<ILink>;
    invalidLinks: Set<ILink>;
    links: Set<ILink>;
    path: string;
    relativeLinks: Set<ILink>;
    relativePath: string;
    titles: Set<string>;
    validateLinks: () => Promise<void>;
}

export type Message = {
    message: string;
    level?: 'info' | 'warning' | 'error';
}
