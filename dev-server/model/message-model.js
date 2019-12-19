import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    body: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
});
messageSchema.set('timestamps', true);

export default mongoose.model('post', messageSchema);