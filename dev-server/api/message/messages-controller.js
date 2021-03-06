import User from '../../model/user-model';
import Message from '../../model/message-model';
import moment from 'moment';
import * as auth from '../../services/auth-service';

export function index(req, res) {
    // FIND ALL MESSAGES
    Message.find({}, (error, messages) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ messages: messages });
    })
    .populate('author', 'name', 'user')
    .populate('messages.author', 'name', 'user')
}

export function create(req, res) {
    // CREATE MESSAGE
    const id = auth.getUserId(req);

    User.findOne({ _id: id }, (error, user) => {
        if (error && !user) {
            return res.status(500).json();
        }
        const message = new Message(req.body.message);
        message.author = user._id;
        message.messages[0].author = user._id;

        message.save(error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(201).json();
        });
    });
}

export function show(req, res) {
    // GET MESSAGE BY ID
    Message.findOne({ _id: req.params.id }, (error, message) => {
        if (error) {
            return res.status(500).json();
        }
        if (!message) {
            return res.status(404).json();
        }
        return res.status(200).json({ message: message });
    })
    .populate('author', 'name', 'user')
    .populate('messages.author', 'name', 'user')
}

export function update(req, res) {
    const message = new Message(req.body.message);
    
    var request = { body: req.body.message.messages[0].body, author: auth.getUserId(req)  };

    Message.findByIdAndUpdate(
       { _id: message._id },
       { $push: { messages: request  } },

      function (error) {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
}