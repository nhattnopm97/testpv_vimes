-- Table: public.medicine_storage
-- DROP TABLE IF EXISTS public.medicine_storage;
CREATE TABLE IF NOT EXISTS public.medicine_storage (
    id bigint NOT NULL,
    name text COLLATE pg_catalog."default",
    code text COLLATE pg_catalog."default" NOT NULL,
    currentcy text COLLATE pg_catalog."default",
    quantity bigint NOT NULL,
    unit_price bigint,
    total bigint,
    CONSTRAINT "MedicineStorage_pkey" PRIMARY KEY (id)
) TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.medicine_storage OWNER to postgres;