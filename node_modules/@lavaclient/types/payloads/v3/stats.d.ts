export interface MemoryStats {
    /**
     * The free memory.
     */
    free: number;
    /**
     * The used memory.
     */
    used: number;
    /**
     * The allocated memory.
     */
    allocated: number;
    /**
     * The reservable memory.
     */
    reservable: number;
}
export interface CPUStats {
    /**
     * The amount of cores on the CPU.
     */
    cores: number;
    /**
     * The system load on the cores on the CPU.
     */
    systemLoad: number;
    /**
     * The lavalink load on the cores on the CPU.
     */
    lavalinkLoad: number;
}
export interface FrameStats {
    /**
     * The amount of sent frames.
     */
    sent?: number;
    /**
     * The amount of nulled frames.
     */
    nulled?: number;
    /**
     * The amount of deficit frames.
     */
    deficit?: number;
}
//# sourceMappingURL=stats.d.ts.map