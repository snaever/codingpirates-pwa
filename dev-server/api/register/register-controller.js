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
        firstname: req.body.firstname,
        lastname: req.body.lastname
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
    if(StringUtil.isEmpty(body.firstname)) {
        errors += 'Firstname is required. '
    }
    if(StringUtil.isEmpty(body.lastname)) {
        errors += 'Lastname is required. '
    }

    return {
        isValid: StringUtil.isEmpty(errors),
        message: errors
    }
}