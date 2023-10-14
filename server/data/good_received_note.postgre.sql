CREATE TABLE IF NOT EXISTS public.good_received_note (
    id integer NOT NULL DEFAULT nextval('good_received_note_id_seq'::regclass),
    delivery_address text COLLATE pg_catalog."default",
    deliver text COLLATE pg_catalog."default",
    delivery_time timestamp with time zone,
    warehoused_flag boolean,
    delete_flag boolean,
    received_date timestamp with time zone,
    warehouse_name text COLLATE pg_catalog."default",
    CONSTRAINT good_received_note_pkey PRIMARY KEY (id)
) TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.good_received_note OWNER to postgres;