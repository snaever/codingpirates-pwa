import postRoutes from './api/post/posts-routes';
import eventRoutes from './api/event/events-routes';
import messageRoutes from './api/message/messages-routes';
import regRoutes from './api/register/register-routes';
import userRoutes from './api/user/user-routes';
import authRoutes from './api/auth/auth-routes';


export function registerRoutes(app) {
    app.use('/api', postRoutes);
    app.use('/api', eventRoutes);
    app.use('/api', messageRoutes);
    app.use('/api', regRoutes);
    app.use('/api', userRoutes);
    app.use('/api', authRoutes);
}