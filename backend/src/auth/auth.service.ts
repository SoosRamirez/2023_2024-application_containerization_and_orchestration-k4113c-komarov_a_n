import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async signup(createUserDto: CreateUserDto) {
        const user = await this.usersService.createUser(createUserDto.username, createUserDto.password);
        return user; // You can return the created user or any other relevant response
    }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.validateUser(username, password);
        if (user) {
            const { hash_password, ...result } = user.toObject();
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
