const express = require("express");
const router = express();
import { GoodReceiptNoteDto } from '../model/GoodReceiptNoteDto';
// import { GoodReceiptNote } from '../model/goodReceiptNote.interface';
import pool from '../util/databasae';

router.post("/", async (req, res) => {
    console.log(req.body);
    let { address, deliver, delivery_time, warehouse_name, medicine }: GoodReceiptNoteDto = req.body;
    const now = new Date();
    // const goodReceiptNote = new GoodReceiptNote(deliver, address, delivery_time, warehouse_name, false, false, now);
    try {
        const text = 'INSERT INTO good_received_note(delivery_address, deliver, delivery_time, received_date, warehoused_flag, warehouse_name, delete_flag) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id'
        const values = [address, deliver, delivery_time, now, false, warehouse_name, false];
        const response = await pool.query(text, values);
        const resultId = response.rows[0].id
        medicine.map(async (mdc, index: number) => {
            const query = 'INSERT INTO medicine_in_received_note(received_id, name, code, unit, document_quantity, reality_quantity, unit_price) VALUES($1, $2, $3, $4, $5, $6, $7)';
            const valuesMDC = [resultId, mdc.name, mdc.code, mdc.unit, mdc.reality_quantity, mdc.reality_quantity, mdc.money];
            let result = await pool.query(query, valuesMDC);
            console.log(result, index);
        })
        console.log("case" + deliver + "+++pass+++");
        res.status(200).json({
            message: "case" + deliver + "+++pass+++"
        })
    } catch (error) {
        console.log("case" + deliver + "---fail---");
        console.log(error);
        res.status(400).json({
            message: "case" + deliver + "---fail---"
        })
    }
});

module.exports = router;