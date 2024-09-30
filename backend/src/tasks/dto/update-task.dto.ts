import {ApiProperty} from "@nestjs/swagger";

export class UpdateTaskDto {
    @ApiProperty({ description: 'The name of the task' })
    name?: string;

    @ApiProperty({ description: 'The description of the task', required: false })
    description?: string;

    @ApiProperty({ description: 'The deadline of the task' })
    deadline?: Date;

    @ApiProperty({ description: 'Priority of the task (Low, Medium, High)' })
    priority?: string;

    @ApiProperty({ description: 'Category of the task', required: false })
    category?: string;
}