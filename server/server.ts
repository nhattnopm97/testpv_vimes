import express, { Express, Request, Response } from 'express';
// import pool from './util/databasae';
import cors from 'cors';
const bodyParser = require('body-parser');

const app: Express = express();
const port = 3456;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const goodReceiptNote = require("./routes/goodReceiptNote.routes");


app.use("/goodReceiptNote", goodReceiptNote);

app.post("/", async (req, res) => {
  console.log(req.path);
  // console.log(req.body);
  res.status(200).json({
    message: "oke",
  })
})

app.get('/', async (req: Request, res: Response) => {
  // const currentTime = new Date();
  // const text = 'INSERT INTO good_received_note(delivery_address, deliver, delivery_time, original_documents, voting_maker, received_date, warehoused_flag, delete_flag) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id'
  // const values = ["name", "code", currentTime, "aaaaaaaaaa", "bbbbbbbbbb", currentTime, false, false];
  // const response = await pool.query(text, values)
  // console.log(response.rows[0]);
  // res.send('Express + TypeScript Server');
  res.json({
    message: "hello world"
  })
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});