/**
 * Bech32 regex.
 * @see https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki#bech32
 */
export declare const BECH32_REGEX: RegExp;
export declare type ProfilePointer = {
    pubkey: string;
    relays?: string[];
};
export declare type EventPointer = {
    id: string;
    relays?: string[];
    author?: string;
};
export declare type AddressPointer = {
    identifier: string;
    pubkey: string;
    kind: number;
    relays?: string[];
};
declare type Prefixes = {
    nprofile: ProfilePointer;
    nrelay: string;
    nevent: EventPointer;
    naddr: AddressPointer;
    nsec: string;
    npub: string;
    note: string;
};
declare type DecodeValue<Prefix extends keyof Prefixes> = {
    type: Prefix;
    data: Prefixes[Prefix];
};
export declare type DecodeResult = {
    [P in keyof Prefixes]: DecodeValue<P>;
}[keyof Prefixes];
export declare function decode<Prefix extends keyof Prefixes>(nip19: `${Prefix}1${string}`): DecodeValue<Prefix>;
export declare function decode(nip19: string): DecodeResult;
export declare function nsecEncode(hex: string): `nsec1${string}`;
export declare function npubEncode(hex: string): `npub1${string}`;
export declare function noteEncode(hex: string): `note1${string}`;
export declare function nprofileEncode(profile: ProfilePointer): `nprofile1${string}`;
export declare function neventEncode(event: EventPointer): `nevent1${string}`;
export declare function naddrEncode(addr: AddressPointer): `naddr1${string}`;
export declare function nrelayEncode(url: string): `nrelay1${string}`;
export {};
