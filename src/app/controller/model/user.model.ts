import {Role} from './role.model';

export class User {
    id = 0;
    email: string;
    fullname: string;
    username: string;
    password: string;
    phone: string;
    authorities: Array<Role>;
    role: string;
    accountNonExpired: boolean;
    credentialsNonExpired: boolean;
    accountNonLocked: boolean;
    enabled: boolean;
    image: string;
    token: string;
}
