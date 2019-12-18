import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    nameOfChild: String,
    password: String,
    isAdmin: Boolean
});
userSchema.set('timestamps', true);

userSchema.statics.passwordMatches = function(password, hash) {
    return bcrypt.compareSync(password, hash);
}

userSchema.pre('save', function(next) {
    const unsafePassword = this.password;
    this.password = bcrypt.hashSync(unsafePassword);
    next();
});

export default mongoose.model('user', userSchema);