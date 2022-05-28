import { Role } from '../enum/role.enum';
import { StatusType } from '../enum/status.enum';
import { IActionRecord } from './action-record.interface';

export interface IAddress {
  phone: string;
  country: string;
  province: string;
  district: string;
  street: string;
}

export interface IUserMetadata {
  age: number;
  habit: string;
}

export interface IUser extends IActionRecord {
  userId: string;
  name: string;
  pass: string;
  email: string;
  status: StatusType;
  isDelete: boolean;
  isResetPassword: boolean;
  metadata?: IUserMetadata;
  roles: Role[];
  addr1: IAddress;
  addr2?: IAddress;
}
