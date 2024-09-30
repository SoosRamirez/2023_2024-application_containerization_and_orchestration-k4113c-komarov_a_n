import { Request } from 'express';

// Extend the Express Request interface to include the user object with userId
export interface CustomRequest extends Request {
    user: {
        userId: string;
    };
}
