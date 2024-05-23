CREATE SCHEMA db;

CREATE TABLE db."user" (
	id uuid NOT NULL,
	email varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT user_pkey PRIMARY KEY (id)
);

INSERT INTO db."user"
(id, email, "name")
VALUES('94cb8e9c-b6eb-4fb2-b418-d97bfe85dd1f'::uuid, 'root', 'Tiago Mendonça');