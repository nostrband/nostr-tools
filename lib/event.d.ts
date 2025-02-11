export declare enum Kind {
    Metadata = 0,
    Text = 1,
    RecommendRelay = 2,
    Contacts = 3,
    EncryptedDirectMessage = 4,
    EventDeletion = 5,
    Repost = 6,
    Reaction = 7,
    BadgeAward = 8,
    ChannelCreation = 40,
    ChannelMetadata = 41,
    ChannelMessage = 42,
    ChannelHideMessage = 43,
    ChannelMuteUser = 44,
    Blank = 255,
    Report = 1984,
    ZapRequest = 9734,
    Zap = 9735,
    RelayList = 10002,
    ClientAuth = 22242,
    HttpAuth = 27235,
    ProfileBadge = 30008,
    BadgeDefinition = 30009,
    Article = 30023
}
export declare type EventTemplate<K extends number = Kind> = {
    kind: K;
    tags: string[][];
    content: string;
    created_at: number;
};
export declare type UnsignedEvent<K extends number = Kind> = EventTemplate<K> & {
    pubkey: string;
};
export declare type Event<K extends number = Kind> = UnsignedEvent<K> & {
    id: string;
    sig: string;
};
export declare function getBlankEvent(): EventTemplate<Kind.Blank>;
export declare function getBlankEvent<K extends number>(kind: K): EventTemplate<K>;
export declare function finishEvent<K extends number = Kind>(t: EventTemplate<K>, privateKey: string): Event<K>;
export declare function serializeEvent(evt: UnsignedEvent<number>): string;
export declare function getEventHash(event: UnsignedEvent<number>): string;
export declare function validateEvent<T>(event: T): event is T & UnsignedEvent<number>;
export declare function verifySignature(event: Event<number>): boolean;
/** @deprecated Use `getSignature` instead. */
export declare function signEvent(event: UnsignedEvent<number>, key: string): string;
/** Calculate the signature for an event. */
export declare function getSignature(event: UnsignedEvent<number>, key: string): string;
