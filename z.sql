CREATE TABLE admin (
    id serial,
    userid character varying(50),
    password text
);

CREATE TABLE users (
    id serial,
    userid character varying(50),
    password text
);

CREATE TABLE days(
    id serial,
    name VARCHAR(20)
);
INSERT INTO days(name)
VALUES('sunday'),('monday'),('tuesday'),('wednesday'),('thursday'),('friday'),('saturday');


DROP TABLE IF EXISTS sunday, monday, tuesday, wednesday, thursday, friday, saturday;

CREATE TABLE sunday (
    id serial PRIMARY KEY,
    logo bytea,
    team_name VARCHAR(40),
    country text,
    results VARCHAR(40),
    odd VARCHAR(10),
    time text
);

CREATE TABLE monday (LIKE sunday INCLUDING ALL);
CREATE TABLE tuesday (LIKE sunday INCLUDING ALL);
CREATE TABLE wednesday (LIKE sunday INCLUDING ALL);
CREATE TABLE thursday (LIKE sunday INCLUDING ALL);
CREATE TABLE friday (LIKE sunday INCLUDING ALL);
CREATE TABLE saturday (LIKE sunday INCLUDING ALL);