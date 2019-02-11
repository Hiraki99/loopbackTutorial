import { Model } from '@loopback/repository';
export declare class User extends Model {
    id: number;
    username: string;
    email?: string;
    constructor(data?: Partial<User>);
}
