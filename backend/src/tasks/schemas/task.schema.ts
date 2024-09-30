import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
    @Prop({ required: true })
    name!: string;  // Use the `!` operator

    @Prop()
    description!: string;

    @Prop({ required: true })
    deadline!: Date;

    @Prop()
    category!: string;

    @Prop({ required: true, enum: ['Low', 'Medium', 'High'] })
    priority!: string;

    @Prop({ required: true })
    user_id!: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
