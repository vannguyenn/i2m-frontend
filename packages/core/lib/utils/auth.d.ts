import { NextContext } from 'next';
export declare const getToken: (ctx: NextContext<Record<string, string | string[]>>) => string;
export declare const auth: (ctx: NextContext<Record<string, string | string[]>>, url?: string) => void;
