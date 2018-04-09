export interface Item {
    code: string;
    title: string;
    description: string;
    imagePath: string;
    startDate: Date;
    endDate: Date;
    startTime: Date;
    endTime: Date;
    publishTime: Date;
    days: string;
    isActive: boolean;
    publishType: number;
    id: number;
}

export interface Result {
    page: number;
    totalCount: number;
    maxPageNumber: number;
    maxResultCount: number;
    isPreviousEnable: boolean;
    isNextEnable: boolean;
    items: Item[];
}

export interface campaignPreview {
    result: Result;
    targetUrl?: any;
    success: boolean;
    error?: any;
    unAuthorizedRequest: boolean;
    __abp: boolean;
}