/**
 * A base64 encoded track, due to lavalink being developed in java it cannot be decoded "normally".
 *
 * @see https://www.npmjs.com/package/@lavalink/encoding
 */
export declare type TrackHash = string;
export interface Track {
    track: TrackHash;
    info: TrackInfo;
}
export interface TrackInfo {
    identifier: string;
    isStream: boolean;
    isSeekable: boolean;
    author: string;
    length: number;
    position: number;
    title: string;
    uri: string;
    sourceName: string;
}
//# sourceMappingURL=track.d.ts.map