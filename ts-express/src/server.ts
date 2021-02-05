import app from './app'
import { initDB } from './configs/DB.config';
import { PORT } from './configs/keys';

app.listen(PORT, () => {
    console.log(`Http server is up and running on port -> ${PORT}`)
    initDB();
}).on('error', (err) => {
    console.log(err);
});



