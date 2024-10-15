import { User } from './user.interface';

declare global {
  namespace Express {
    interface Request {
      user?: any; // Use the correct type of your user object (replace `any` with `User` if you have one)
    }
  }
}
