"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodReceiptNote = void 0;
class GoodReceiptNote {
    constructor(deliver, deliver_address, delivery_time, ware_house_name, ware_house_flag, delete_flag, receipt_date) {
        this.deliver = deliver;
        this.deliver_address = deliver_address;
        this.delivery_time = delivery_time;
        this.ware_house_name = ware_house_name;
        this.ware_house_flag = ware_house_flag;
        this.delete_flag = delete_flag;
        this.receipt_date = receipt_date;
    }
}
exports.GoodReceiptNote = GoodReceiptNote;
