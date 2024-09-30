import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule
import { ConfigModule } from '@nestjs/config';  // Import ConfigModule
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true, // Make the configuration globally available
        }),
        MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://host.docker.internal:27017/mydatabase'), // Connect to MongoDB using environment variable
        AuthModule,
        UsersModule,
        TasksModule,
    ],
})

export class AppModule {}
