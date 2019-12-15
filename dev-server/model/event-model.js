import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    dateTime: String,
    regularSession: Boolean
});
eventSchema.set('timestamps', true);

export default mongoose.model('event', eventSchema);