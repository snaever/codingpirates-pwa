import { StringUtil } from '../../utilities/string-util';
import User from '../../model/user-model';

export function index(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.isValid) {
        return res.status(400).json({ message: validation.message });
    }

    const user = new User ({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        nameOfChild: req.body.nameOfChild,
        isAdmin: req.body.isAdmin
    });
    user.save(error => {
        if (error) {
            if (error.code === 11000) {
                return res.status(403).json({ message: 'Email address is already used' });
            }
            return res.status(500).json();
        }
        return res.status(201).json();
    });
}

function validateIndex(body) {
    let errors = '';
    if(StringUtil.isEmpty(body.email)) {
        errors += 'Email is required. ';
    }
    if(StringUtil.isEmpty(body.password)) {
        errors += 'Password is required. '
    }
    if(StringUtil.isEmpty(body.name)) {
        errors += 'Name is required. '
    }

    return {
        isValid: StringUtil.isEmpty(errors),
        message: errors
    }
}