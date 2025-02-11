import { type EventTemplate, type Event } from './event.ts';
import { Relay } from './relay.ts';
/**
 * Authenticate via NIP-42 flow.
 *
 * @example
 * const sign = window.nostr.signEvent
 * relay.on('auth', challenge =>
 *   authenticate({ relay, sign, challenge })
 * )
 */
export declare const authenticate: ({ challenge, relay, sign }: {
    challenge: string;
    relay: Relay;
    sign: <K extends number = number>(e: EventTemplate<K>) => any;
}) => Promise<void>;
