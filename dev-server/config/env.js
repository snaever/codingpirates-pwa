import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

export function setEnvironment(app) {
    if (process.env.NODE_ENV !== 'production') {
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}

function setDevEnv(app) {
    process.env.NODE_ENV = 'development';
    process.env.DB_URL = 'mongodb://localhost:27017/codingpirates-db'
    process.env.TOKEN_SECRET = 'AD2E27F8DBBDF7FC5C1D397D3D35D'
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(cors());
}

function setProdEnv(app) {
    process.env.DB_URL = 'mongodb+srv://cpDbUser:A2pF7TzvEwQyXnIt@cp-db-lqdoo.mongodb.net/?retryWrites=true&w=majority'
    process.env.TOKEN_SECRET = 'A259BC3F8DE526E6187838C686131'
    app.use(bodyParser.json());
    app.use(express.static(__dirname + '/../../dist'));
}