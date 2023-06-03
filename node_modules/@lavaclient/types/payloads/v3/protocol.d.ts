export interface Headers {
    Authorization: string;
    /**
     * Total number of shards your bot is operating on.
     *
     * @deprecated This header is no longer required for the dev branch.
     */
    "Num-Shards"?: string;
    /**
     * The name of your client, optionally in the format NAME/VERSION
     */
    "Client-Name"?: string;
    /**
     * The user id of the bot you are playing music with.
     */
    "User-Id": string;
    /**
     * The resume-key specified in the "configureResuming" operation.
     */
    "Resume-Key"?: string;
}
/**
 * The available operations.
 */
export declare type OpCode = "voiceUpdate" | "play" | "stop" | "pause" | "seek" | "volume" | "filters" | "destroy" | "stats" | "playerUpdate" | "event" | "configureResuming" | "equalizer";
//# sourceMappingURL=protocol.d.ts.map