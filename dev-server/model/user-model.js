import mongoose, { mongo } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const userSchema = new mongoose.Schema({
    email: String,
    firstname: String,
    lastname: String,
    nameOfChild: String,
    password: String
});
userSchema.set('timestamps', true);

userSchema.virtual('fullName').get(function() {
    const firstname = this.firstname;
    const lastname = this.lastname;
    return `${firstname} ${lastname}`;
});

userSchema.pre('save', function(next) {
    const unsafePassword = this.password;
    this.password = bcrypt.hashSync(unsafePassword);
    next();
});

export default mongoose.model('user', userSchema);