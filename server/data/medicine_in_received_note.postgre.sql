-- Table: public.medicine_in_received_note
-- DROP TABLE IF EXISTS public.medicine_in_received_note;
CREATE TABLE IF NOT EXISTS public.medicine_in_received_note (
    id integer NOT NULL DEFAULT nextval('medicine_inreceived_note_id_seq'::regclass),
    received_id bigint,
    name text COLLATE pg_catalog."default",
    code text COLLATE pg_catalog."default",
    unit text COLLATE pg_catalog."default",
    document_quantity bigint,
    reality_quantity bigint,
    unit_price bigint,
    CONSTRAINT medicine_inreceived_note_pkey PRIMARY KEY (id)
) TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.medicine_in_received_note OWNER to postgres;