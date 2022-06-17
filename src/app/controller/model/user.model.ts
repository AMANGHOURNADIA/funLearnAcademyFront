import {Role} from './role.model';

export class User {
    public id = 0;
    public email: string;
    public fullname: string;
    public username: string;
    public password: string;
    public phone: string;
    public authorities: Array<Role>;
    public role: string;
    public accountNonExpired: boolean;
    public credentialsNonExpired: boolean;
    public accountNonLocked: boolean;
    public enabled: boolean;
    public image: string;
    public token: string;

}
