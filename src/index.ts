import express from 'express';
import moongose from 'mongoose';
import { router } from './router';

const app = express();

const port = 3000;

moongose
    .connect(
        // @TODO: Usar variáveis de ambiente para esconder credenciais
        'mongodb+srv://dbUserMongo:MgzYw!K3Fs!WtuC@cluster0.3tb88yy.mongodb.net',
    )
    .then(() => {
        app.use(express.json());
        app.use(router);
        app.listen(port, () => {
            console.log(`SERVER ON ${port}`);
        });
    })
    .catch(error => console.log('ERROR MONGO ' + error));
