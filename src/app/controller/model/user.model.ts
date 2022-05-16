import {Role} from './role.model';

export class User {
    id: number;
    email: string;
    fullname: string;
    username: string;
    password: string;
    authorities: Array<Role>;
    role: string;
    accountNonExpired: boolean;
    credentialsNonExpired: boolean;
    accountNonLocked: boolean;
    enabled: boolean;
    image: string;
}
