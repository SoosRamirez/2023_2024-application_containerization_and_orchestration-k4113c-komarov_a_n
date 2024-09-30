import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import {ApiOperation} from "@nestjs/swagger";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('signup')
    @ApiOperation({ summary: 'Create a new user' })
    async signup(@Body('username') username: string, @Body('password') password: string) {
        return this.usersService.createUser(username, password);
    }
}
