import express from 'express';
import moongose from 'mongoose';
import { router } from './router';

const app = express();

const port = 3000;

moongose
    .connect(
        'mongodb+srv://dbUserMongo:MgzYw!K3Fs!WtuC@cluster0.3tb88yy.mongodb.net',
    )
    .then(() => {
        app.use(router);
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.listen(port, () => {
            console.log(`SERVER ON ${port}`);
        });
    })
    .catch(error => console.log('ERROR MONGO ' + error));
