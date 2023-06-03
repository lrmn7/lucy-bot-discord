export declare enum ExceptionSeverity {
    /**
     * The cause is known and expected, indicates that there is nothing wrong with the library itself.
     */
    Common = "COMMON",
    /**
     * If the probable cause is an issue with the library or when there is no way to tell what the cause might be.
     * This is the default level and other levels are used in cases where the thrower has more in-depth knowledge
     * about the error.
     */
    Fault = "FAULT",
    /**
     * The cause might not be exactly known, but is possibly caused by outside factors. For example when an outside
     * service responds in a format that we do not expect.
     */
    Suspicious = "SUSPICIOUS"
}
export interface FriendlyException {
    /**
     * Severity of the exception.
     */
    severity: ExceptionSeverity;
    /**
     * A message which is understandable to end-users
     */
    message: string;
    /**
     * The cause of this exception, with technical details.
     */
    cause: string;
}
//# sourceMappingURL=exception.d.ts.map