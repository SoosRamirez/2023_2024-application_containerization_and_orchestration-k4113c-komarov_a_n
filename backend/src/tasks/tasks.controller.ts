import { Controller, Post, Get, Body, Param, Request, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {UpdateTaskDto} from "./dto/update-task.dto";
import {CustomRequest} from "../interfaces/custom-request.interface";
import {ApiOperation} from "@nestjs/swagger";

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    @ApiOperation({ summary: 'Create new task' }) // Summary for Swagger
    async createTask(@Body() taskData: UpdateTaskDto, @Request() req: CustomRequest) {
        return this.tasksService.createTask(taskData, req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiOperation({ summary: 'Get all tasks' }) // Summary for Swagger
    async getTasks(@Request() req: CustomRequest) {
        return this.tasksService.getTasksByUser(req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Post('update/:taskId')
    @ApiOperation({ summary: 'Update task' }) // Summary for Swagger
    async updateTask(@Param('taskId') taskId: string, @Body() taskData: UpdateTaskDto) {
        return this.tasksService.updateTask(taskId, taskData);
    }
}
