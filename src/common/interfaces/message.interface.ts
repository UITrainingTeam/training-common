import { IActionRecord } from './action-record.interface';

export interface IMessage extends IActionRecord {
  channelCode: string;
  content: string;
}
