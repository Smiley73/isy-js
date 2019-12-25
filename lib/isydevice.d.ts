/// <reference types="node" />
import { ISY } from './isy';
import { ISYNode } from './isynode';
import { ISYScene } from './isyscene';
export declare class ISYDevice extends ISYNode {
    readonly typeCode: string;
    readonly deviceClass: any;
    readonly parentAddress: any;
    readonly category: number;
    readonly subCategory: number;
    readonly type: any;
    _parentDevice: ISYDevice;
    readonly scenes: ISYScene[];
    readonly formatted: any[string];
    readonly uom: any[string];
    readonly pending: any[string];
    constructor(isy: ISY, node: any);
    convertTo(value: any, uom: number): any;
    convertFrom(value: any, uom: number): any;
    addLink(isyScene: ISYScene): void;
    readonly parentDevice: ISYDevice;
    refreshProperty(propertyName: any): Promise<void>;
    updateProperty(propertyName: string, value: string): Promise<any>;
    sendCommand(command: any, ...parameters: any[]): Promise<any>;
    refresh(): Promise<any>;
    handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
}
declare type Constructor<T> = new (...args: any[]) => T;
export declare const ISYBinaryStateDevice: <T extends Constructor<ISYDevice>>(Base: T) => {
    new (...args: any[]): {
        [x: string]: any;
        readonly state: boolean;
        updateState(state: boolean): Promise<any>;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice;
        readonly scenes: ISYScene[];
        readonly formatted: any;
        readonly uom: any;
        readonly pending: any;
        convertTo(value: any, uom: number): any;
        convertFrom(value: any, uom: number): any;
        addLink(isyScene: ISYScene): void;
        readonly parentDevice: ISYDevice;
        refreshProperty(propertyName: any): Promise<void>;
        updateProperty(propertyName: string, value: string): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        family: any;
        folder: string;
        parent: any;
        parentType: number;
        readonly elkId: string;
        nodeType: number;
        propertyChanged: import("events").EventEmitter;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        handleEvent(event: any): boolean;
        onPropertyChanged(propertyName: any, callback: (...args: any[]) => void): void;
    };
} & T;
export declare const ISYLevelDevice: <T extends Constructor<ISYDevice>>(base: T) => {
    new (...args: any[]): {
        [x: string]: any;
        readonly level: number;
        updateLevel(level: number): Promise<any>;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice;
        readonly scenes: ISYScene[];
        readonly formatted: any;
        readonly uom: any;
        readonly pending: any;
        convertTo(value: any, uom: number): any;
        convertFrom(value: any, uom: number): any;
        addLink(isyScene: ISYScene): void;
        readonly parentDevice: ISYDevice;
        refreshProperty(propertyName: any): Promise<void>;
        updateProperty(propertyName: string, value: string): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        family: any;
        folder: string;
        parent: any;
        parentType: number;
        readonly elkId: string;
        nodeType: number;
        propertyChanged: import("events").EventEmitter;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        handleEvent(event: any): boolean;
        onPropertyChanged(propertyName: any, callback: (...args: any[]) => void): void;
    };
} & T;
export {};