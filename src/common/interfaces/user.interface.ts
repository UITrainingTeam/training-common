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
export interface IUser extends IActionRecord {
  userId: string;
  name: string;
  pass: string;
  email: string;
  status: StatusType;
  isDelete: boolean;
  isResetPassword: boolean;
  metadata?: Record<string, any>;
  roles: Role[];
  addr1: IAddress;
  addr2?: IAddress;
}

export interface AuthLoginModel {
  username: string;
  password: string;
}

export interface AuthReponseModel {
  userInfo: IUser,
  access_token: string;
}
