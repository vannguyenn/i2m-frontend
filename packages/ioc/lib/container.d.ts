import { Container } from 'inversify';
import 'reflect-metadata';
export declare const container: Container;
export declare const provide: (serviceIdentifier: string | symbol | import("inversify/dts/interfaces/interfaces").interfaces.Newable<any> | import("inversify/dts/interfaces/interfaces").interfaces.Abstract<any>, force?: boolean) => (target: any) => any;
export declare const fluentProvide: (serviceIdentifier: string | symbol | import("inversify/dts/interfaces/interfaces").interfaces.Newable<any> | import("inversify/dts/interfaces/interfaces").interfaces.Abstract<any>) => import("inversify-binding-decorators/dts/interfaces/interfaces").default.ProvideInWhenOnSyntax<any>;
