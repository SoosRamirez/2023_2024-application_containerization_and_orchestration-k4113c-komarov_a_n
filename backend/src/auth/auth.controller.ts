import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation} from "@nestjs/swagger";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')  // Add the signup route
    @ApiOperation({ summary: 'Signup user' }) // Summary for Swagger
    async signup(@Body() createUserDto: CreateUserDto) {
        return this.authService.signup(createUserDto); // Call the signup method from the AuthService
    }

    @Post('login')
    @ApiOperation({ summary: 'Login user' }) // Summary for Swagger
    async login(@Body('username') username: string, @Body('password') password: string) {
        const user = await this.authService.validateUser(username, password);
        if (!user) {
            return { message: 'Invalid credentials' };
        }
        return this.authService.login(user);
    }
}
