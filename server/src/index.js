import express from "express";
import cors from 'cors';
import * as morse from './morse-routes.mjs';
import bodyParser from 'body-parser';
const app = express()
const port = 8000
app.use(cors());
app.use(bodyParser.json())




app.get('/morse', morse.getAll)
app.get('/morse/:id', morse.get)
app.put('/morse/:id', morse.update)
app.delete('/morse/:id', morse.remove)
app.post('/morse', morse.create)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})