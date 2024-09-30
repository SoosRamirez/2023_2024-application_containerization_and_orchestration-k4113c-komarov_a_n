import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './schemas/task.schema';
import {UpdateTaskDto} from "./dto/update-task.dto";

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

    async createTask(taskData: UpdateTaskDto, userId: string): Promise<Task> {
        const newTask = new this.taskModel({ ...taskData, user_id: userId });
        return newTask.save();
    }

    async getTasksByUser(userId: string): Promise<Task[] | null> {
        return this.taskModel.find({ user_id: userId }).exec();
    }

    async updateTask(taskId: string, taskData: UpdateTaskDto): Promise<Task | null> {
        return this.taskModel.findByIdAndUpdate(taskId, taskData, { new: true }).exec();
    }
}
