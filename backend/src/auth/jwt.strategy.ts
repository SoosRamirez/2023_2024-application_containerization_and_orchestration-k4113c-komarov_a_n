import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import {UsersService} from "../users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'mySuperSecretKey',  // Use ConfigService to fetch the secret
        });
    }

    async validate(payload: any) {
        console.log('Validating payload:', payload); // Log the payload
        const user = await this.usersService.findById(payload.sub);
        if (!user) {
            console.error('User not found:', payload.sub);
        }
        return user;
    }
}
