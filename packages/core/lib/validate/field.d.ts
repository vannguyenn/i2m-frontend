export declare const required: (value: any) => string;
export declare const maxLength: (length?: number) => (value: any) => string;
export declare const minLength: (length?: number) => (value: any) => string;
export declare const matchPassword: (value: any, allValues: any) => "" | "Should match with Password.";
export declare const email: (value: any) => any;
