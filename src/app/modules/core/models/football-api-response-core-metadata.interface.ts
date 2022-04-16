export interface FootballApiResponseCoreMetadata {
    [key: string]: any;
    results: number;
    paging: {
        current: number;
        total: number;
    };
}
