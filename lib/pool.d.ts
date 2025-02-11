import { type Relay, type Sub, type SubscriptionOptions } from './relay.ts';
import type { Event } from './event.ts';
import type { Filter } from './filter.ts';
export declare class SimplePool {
    private _conn;
    private _seenOn;
    private eoseSubTimeout;
    private getTimeout;
    private seenOnEnabled;
    constructor(options?: {
        eoseSubTimeout?: number;
        getTimeout?: number;
        seenOnEnabled?: boolean;
    });
    close(relays: string[]): void;
    ensureRelay(url: string): Promise<Relay>;
    sub<K extends number = number>(relays: string[], filters: Filter<K>[], opts?: SubscriptionOptions): Sub<K>;
    get<K extends number = number>(relays: string[], filter: Filter<K>, opts?: SubscriptionOptions): Promise<Event<K> | null>;
    list<K extends number = number>(relays: string[], filters: Filter<K>[], opts?: SubscriptionOptions): Promise<Event<K>[]>;
    publish(relays: string[], event: Event<number>): Promise<void>[];
    seenOn(id: string): string[];
}
