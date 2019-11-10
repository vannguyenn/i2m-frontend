import { interfaces } from 'inversify';
export declare const useField: <T>(name: string) => T;
export declare const useStore: <T>(identifier: string | symbol | interfaces.Newable<T> | interfaces.Abstract<T>) => T;
export declare const useService: <T>(identifier: string | symbol | interfaces.Newable<T> | interfaces.Abstract<T>) => T;
export declare const useInstance: <T>(identifier: string | symbol | interfaces.Newable<T> | interfaces.Abstract<T>) => T;
