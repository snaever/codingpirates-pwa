import express from 'express';
const app = express();
const port = 3000

import { registerRoutes } from './routes';
import { setEnvironment } from './config/env';

setEnvironment(app);
registerRoutes(app);

app.get('/', (req, res) => {
    if (process.env.NODE_ENV !== 'production') {
        return res.send('Running server in development mode');
    } else {
        return res.sendFile('index.html', { root: __dirname + '/../dist' });
    }
});

app.listen(port, () => {
    console.log(`Coding Pirates webapp listening on port ${port} in ${process.env.NODE_ENV} mode!`);
});