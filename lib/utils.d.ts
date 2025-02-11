import type { Event } from './event.ts';
export declare const utf8Decoder: TextDecoder;
export declare const utf8Encoder: TextEncoder;
export declare function normalizeURL(url: string): string;
export declare function insertEventIntoDescendingList(sortedArray: Event<number>[], event: Event<number>): any[];
export declare function insertEventIntoAscendingList(sortedArray: Event<number>[], event: Event<number>): any[];
export declare class MessageNode {
    private _value;
    private _next;
    get value(): string;
    set value(message: string);
    get next(): MessageNode | null;
    set next(node: MessageNode | null);
    constructor(message: string);
}
export declare class MessageQueue {
    private _first;
    private _last;
    get first(): MessageNode | null;
    set first(messageNode: MessageNode | null);
    get last(): MessageNode | null;
    set last(messageNode: MessageNode | null);
    private _size;
    get size(): number;
    set size(v: number);
    constructor();
    enqueue(message: string): boolean;
    dequeue(): string | null;
}
