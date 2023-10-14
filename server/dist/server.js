"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const databasae_1 = __importDefault(require("./util/databasae"));
const cors_1 = __importDefault(require("cors"));
const bodyParser = require('body-parser');
const app = (0, express_1.default)();
const port = 3456;
app.use((0, cors_1.default)());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const goodReceiptNote = require("./routes/goodReceiptNote.routes");
app.use("/goodReceiptNote", goodReceiptNote);
app.post("/", async (req, res) => {
    console.log(req.path);
    res.status(200).json({
        message: "oke",
    });
});
app.get('/', async (req, res) => {
    const currentTime = new Date();
    const text = 'INSERT INTO good_received_note(delivery_address, deliver, delivery_time, original_documents, voting_maker, received_date, warehoused_flag, delete_flag) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id';
    const values = ["name", "code", currentTime, "aaaaaaaaaa", "bbbbbbbbbb", currentTime, false, false];
    const response = await databasae_1.default.query(text, values);
    console.log(response.rows[0]);
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
