import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Coding Pirates webapp listening on port ${port}!`))