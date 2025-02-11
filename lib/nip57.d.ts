import { Kind, type Event, type EventTemplate } from './event.ts';
export declare function useFetchImplementation(fetchImplementation: any): void;
export declare function getZapEndpoint(metadata: Event<Kind.Metadata>): Promise<null | string>;
export declare function makeZapRequest({ profile, event, amount, relays, comment }: {
    profile: string;
    event: string | null;
    amount: number;
    comment: string;
    relays: string[];
}): EventTemplate<Kind.ZapRequest>;
export declare function validateZapRequest(zapRequestString: string): string | null;
export declare function makeZapReceipt({ zapRequest, preimage, bolt11, paidAt }: {
    zapRequest: string;
    preimage?: string;
    bolt11: string;
    paidAt: Date;
}): EventTemplate<Kind.Zap>;
