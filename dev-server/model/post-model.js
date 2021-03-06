import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
});
postSchema.set('timestamps', true);

export default mongoose.model('post', postSchema);