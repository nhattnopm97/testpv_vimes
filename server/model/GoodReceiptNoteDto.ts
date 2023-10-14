import { Medicine } from "./MedicineDto.interface";

export interface GoodReceiptNoteDto {
    deliver: string;
    address: string;
    delivery_time: Date;
    warehouse_name: string;
    medicine: Medicine[];
}