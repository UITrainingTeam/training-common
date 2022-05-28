import { Role } from '../enum/role.enum';
import { IActionRecord } from './action-record.interface';

export interface IMenuConfig {
  title: string;
  keyLang: string;
  href: string;
  icon: string;
  order: number;
  role: Role[];
  children: IMenuConfig[];
}

export interface IAppConfig extends IActionRecord {
  name: string;
  value: IMenuConfig | any;
}
