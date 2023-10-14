export class GoodReceiptNote {
    deliver: string;
    deliver_address: string;
    delivery_time: Date;
    ware_house_name: string;
    ware_house_flag: boolean;
    delete_flag: boolean;
    receipt_date: Date;
    constructor(deliver: string,
        deliver_address: string,
        delivery_time: Date,
        ware_house_name: string,
        ware_house_flag: boolean,
        delete_flag: boolean,
        receipt_date: Date
    ) {
        this.deliver = deliver;
        this.deliver_address = deliver_address;
        this.delivery_time = delivery_time;
        this.ware_house_name = ware_house_name;
        this.ware_house_flag = ware_house_flag;
        this.delete_flag = delete_flag;
        this.receipt_date = receipt_date;
    }
}