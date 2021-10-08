import { IUser } from './user.interface';

export interface IUserResponse {
  incomplete_results: boolean;
  items: IUser[];
  total_count: number;
}
