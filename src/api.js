import feathers from 'feathers';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import cors from 'cors';
import compress from 'compression';
import path from 'path';
import configuration from 'feathers-configuration';
import socketio from 'feathers-socketio';
import bodyParser from 'body-parser';
import Services from './services';

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

app.use(compress())
    .options('*', cors())
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .configure(hooks())
    .configure(rest())
    .configure(socketio())
    .configure(Services)
    .listen(1337);