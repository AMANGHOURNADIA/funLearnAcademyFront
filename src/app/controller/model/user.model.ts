import {Role} from './role.model';

export class User {
    protected id: number;
    protected email: string;
    protected fullname: string;
    protected username: string;
    protected password: string;
    protected role: string;
    protected accountNonExpired: string ;
    protected credentialsNonExpired: string;
    protected accountNonLocked: string;
    protected enabled: string;
    protected image: string;
    protected  authorities: Role ;

}
