import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ description: 'Username' })
    username!: string;

    @ApiProperty({ description: 'Password' })
    password!: string;
}
