import { z } from 'zod';

export const formInputSchema = z.object({
    name: z.string().min(5),
    email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    message: z.string().min(5),
});