import User from '../../model/user-model';
import * as auth from '../../services/auth-service';

export function index(req, res) {
    // FIND ALL USERS
    User.find({}, (error, users) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ users: users });
    });
}

export function update(req, res) {
    // UPDATE USER
    const user = new User(req.body.user);
    
    User.findByIdAndUpdate({ _id: user._id }, user, error => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(204).json();
    });
}

export function remove(req, res) {
    // DELETE USER
    const id = auth.getUserId(req);
    
    User.findOne({ _id: req.params.id }, (error, user) => {
        if (error) {
            return res.status(500).json();
        }
        if (!user) {
            return res.status(404).json();
        }
        User.deleteOne({ _id: req.params.id }, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}

export function show(req, res) {
    // GET USER BY ID
    User.findOne({ _id: req.params.id }, (error, user) => {
        if (error) {
            return res.status(500).json();
        }
        if (!user) {
            return res.status(404).json();
        }
        return res.status(200).json({ user: user });
    });
}