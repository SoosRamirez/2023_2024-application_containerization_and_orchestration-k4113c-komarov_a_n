import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import * as bcrypt from 'bcrypt';
import {User} from './schemas/user.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser(username: string, password: string): Promise<User> {
        const hash_password = await bcrypt.hash(password, 10);

        const newUser = new this.userModel({ username, hash_password });
        return newUser.save();
    }

    async findByUsername(username: string): Promise<User | null> {
        return this.userModel.findOne({username});
    }

    async findById(id: string): Promise<User | null> {
        return this.userModel.findById(id).exec();
    }

    async validateUser(username: string, password: string): Promise<User | null> {
        const user = await this.findByUsername(username);
        if (user && (await bcrypt.compare(password, user.hash_password))) {
            return user;
        }
        return null;
    }
}
