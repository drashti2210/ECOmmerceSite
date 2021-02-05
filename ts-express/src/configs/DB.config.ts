import { connect, set } from 'mongoose'
import logger from '../services/logger.service';
import { db } from './keys';

export const initDB = () => {
    set('debug', false);

    connect(db.DB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Mongodb server connected!')
    }).catch((err) => {
        console.log('Error occured!')
        console.log(err)
    })
}