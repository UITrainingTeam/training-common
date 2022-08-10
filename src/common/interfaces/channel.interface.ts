import { IActionRecord } from './action-record.interface';

export interface IChannel extends IActionRecord {
    channelCode: string;
    channelName: string;
    channelPass: string;
    channelMembers: string[];
}
