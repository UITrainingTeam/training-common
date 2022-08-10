export interface IPaginable {
    pageSize: number;
    pageIndex: number;
    totalPages: number;
    totalRecords?: number;
}

export interface IApiResponse<T> {
    data: T;
    pagination: IPaginable;
}
