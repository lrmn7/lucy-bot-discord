export declare type RoutePlannerClass = "RotatingIpRoutePlanner" | "NanoIpRoutePlanner" | "RotatingNanoIpRoutePlanner";
/** Base Interfaces */
export interface IpBlockStats {
    type: string;
    size: string;
}
export interface FailingAddress {
    address: string;
    failingTimestamp: number;
    failingTime: string;
}
export interface RoutePlannerStatus {
    class: RoutePlannerClass | null;
    details: RoutePlannerDetails | null;
}
export interface RoutePlannerDetails {
    ipBlock: IpBlockStats;
    failingAddresses: FailingAddress[];
}
/** Classes */
export declare type RoutePlanner = RotatingNanoIpRoutePlanner | NanoIpRoutePlanner | RotatingIpRoutePlanner;
export interface RotatingIpRoutePlanner extends RoutePlannerStatus {
    class: "RotatingIpRoutePlanner";
    details: {
        rotateIndex: string;
        ipIndex: string;
        currentAddress: string;
    } & RoutePlannerDetails;
}
export interface NanoIpRoutePlanner extends RoutePlannerStatus {
    class: "NanoIpRoutePlanner";
    details: {
        currentAddressIndex: number;
    } & RoutePlannerDetails;
}
export interface RotatingNanoIpRoutePlanner extends RoutePlannerStatus {
    class: "RotatingNanoIpRoutePlanner";
    details: {
        blockIndex: string;
        currentAddressIndex: number;
    } & RoutePlannerDetails;
}
//# sourceMappingURL=route-planner.d.ts.map