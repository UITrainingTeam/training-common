export interface ISocketResponse<T> {
    message: T;
    topic: string;
}