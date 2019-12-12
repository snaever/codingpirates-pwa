import User from '../../model/user-model';
import Event from '../../model/event-model';
import * as auth from '../../services/auth-service';

export function index(req, res) {
    // FIND ALL EVENTS
    Event.find({}, (error, events) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ events: events });
    });
}

export function create(req, res) {
    const id = auth.getUserId(req);
    User.findOne({ _id: id }, (error, user) => {
        if (error && !user) {
            console.log('1');
            return res.status(500).json();
        }
        const event = new Event(req.body.event);
        event.author = user._id;

        event.save(error => {
            if (error) {
                console.log('2');
                return res.status(500).json();
            }
            return res.status(201).json();
        });
    });
}

export function update(req, res) {
    const id = auth.getUserId(req);

    User.findOne({ _id: id }, (error, user) => {
        if (error) {
            return res.status(500).json();
        }
        if (!user) {
            return res.status(404).json();
        }

        const event = new Event(req.body.event);
        event.author = user._id;
        Event.findByIdAndUpdate({ _id: event._id }, event, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}

export function remove(req, res) {
    const id = auth.getUserId(req);
    Event.findOne({ _id: req.params.id }, (error, event) => {
        if (error) {
            return res.status(500).json();
        }
        if (!event) {
            return res.status(404).json();
        }
        if (event.author._id.toString() !== id) {
            return res.status(403).json({ message: 'Not allowed to delete another user\'s event' });
        }
        Event.deleteOne({ _id: req.params.id }, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}

export function show(req, res) {
    // GET EVENT BY ID
    Event.findOne({ _id: req.params.id }, (error, event) => {
        if (error) {
            return res.status(500).json();
        }
        if (!event) {
            return res.status(404).json();
        }
        return res.status(200).json({ event: event });
    });
}