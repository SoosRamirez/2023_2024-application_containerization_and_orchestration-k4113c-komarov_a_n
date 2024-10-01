import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule,
        PassportModule,
        JwtModule.register({
            secret: 'mySuperSecretKey',
            signOptions: { expiresIn: '60m' }, // Token expiration time
        }),
        UsersModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
