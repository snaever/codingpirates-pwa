import mongoose from 'mongoose';

const messageChildSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    body: String

});
messageChildSchema.set('timestamps', true);

const messageParentSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    messages: [messageChildSchema]

});
messageParentSchema.set('timestamps', true);

export default mongoose.model('message', messageParentSchema);