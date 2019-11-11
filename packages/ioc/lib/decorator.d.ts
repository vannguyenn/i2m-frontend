import { interfaces } from 'inversify';
import { SCOPE } from './constants';
export declare const Field: <T>(name: string, scope?: SCOPE) => (target: any) => any;
export declare const Store: <T>(identifier: string | symbol | interfaces.Newable<T> | interfaces.Abstract<T>, scope?: SCOPE) => (target: any) => any;
export declare const Service: <T>(identifier: string | symbol | interfaces.Newable<T> | interfaces.Abstract<T>, scope?: SCOPE) => (target: any) => any;
export declare const singleton: <T>(identifier: string | symbol | interfaces.Newable<T> | interfaces.Abstract<T>) => (target: any) => any;
