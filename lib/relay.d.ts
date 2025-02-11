import { type Event } from './event.ts';
import { type Filter } from './filter.ts';
declare type RelayEvent = {
    connect: () => void | Promise<void>;
    disconnect: () => void | Promise<void>;
    error: () => void | Promise<void>;
    notice: (msg: string) => void | Promise<void>;
    auth: (challenge: string) => void | Promise<void>;
};
export declare type CountPayload = {
    count: number;
};
export declare type TopPayload = {
    ids: string[];
};
declare type SubEvent<K extends number> = {
    event: (event: Event<K>) => void | Promise<void>;
    count: (payload: CountPayload) => void | Promise<void>;
    top: (payload: TopPayload) => void | Promise<void>;
    eose: () => void | Promise<void>;
};
export declare type Relay = {
    url: string;
    status: number;
    connect: () => Promise<void>;
    close: () => void;
    sub: <K extends number = number>(filters: Filter<K>[], opts?: SubscriptionOptions) => Sub<K>;
    list: <K extends number = number>(filters: Filter<K>[], opts?: SubscriptionOptions) => Promise<Event<K>[]>;
    get: <K extends number = number>(filter: Filter<K>, opts?: SubscriptionOptions) => Promise<Event<K> | null>;
    count: (filters: Filter[], opts?: SubscriptionOptions) => Promise<CountPayload | null>;
    top: (filters: Filter[], opts?: SubscriptionOptions) => Promise<TopPayload | null>;
    publish: (event: Event<number>) => Promise<void>;
    auth: (event: Event<number>) => Promise<void>;
    off: <T extends keyof RelayEvent, U extends RelayEvent[T]>(event: T, listener: U) => void;
    on: <T extends keyof RelayEvent, U extends RelayEvent[T]>(event: T, listener: U) => void;
};
export declare type Sub<K extends number = number> = {
    sub: <K extends number = number>(filters: Filter<K>[], opts: SubscriptionOptions) => Sub<K>;
    unsub: () => void;
    on: <T extends keyof SubEvent<K>, U extends SubEvent<K>[T]>(event: T, listener: U) => void;
    off: <T extends keyof SubEvent<K>, U extends SubEvent<K>[T]>(event: T, listener: U) => void;
};
export declare type SubscriptionOptions = {
    id?: string;
    verb?: 'REQ' | 'COUNT' | 'TOP';
    skipVerification?: boolean;
    alreadyHaveEvent?: null | ((id: string, relay: string) => boolean);
};
export declare function relayInit(url: string, options?: {
    getTimeout?: number;
    listTimeout?: number;
    countTimeout?: number;
    topTimeout?: number;
}): Relay;
export {};
