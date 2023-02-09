import 'dotenv/config';
import express from 'express';
import {randomDeck, randomCard} from './model.mjs';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/randomcard', (req, res) => {
    randomCard()
    .then(random => {
        res.send(random)
    }) 
});

app.get('/randomdeck', (req, res) => {
    randomDeck()
    .then(random => {
        res.send(random)
    }) 
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});