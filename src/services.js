import service from 'feathers-sequelize';
import Sequelize from 'sequelize';
import Promise from 'bluebird';
import fs from 'fs.promised';
import Debug from 'debug';
import path from 'path';

const Services = function () {
    const app = this,
        sequelize = new Sequelize(app.get('postgres'), {
            dialect: 'postgres',
            logging: Debug('pgsql')
        });

    return fs.readdir(path.join(__dirname, 'models'))
        .then(entries => {
            return Promise.map(entries, entry => {
                app.use(`/${path.basename(entry, '.js')}`, service({
                    Model: sequelize.import(path.join(__dirname, 'models', entry))
                }));
            });
        });
};

export default Services;