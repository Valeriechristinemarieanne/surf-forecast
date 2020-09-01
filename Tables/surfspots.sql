DROP TABLE IF EXISTS surfspots CASCADE;

CREATE TABLE surfspots (
    id SERIAL PRIMARY KEY,
    country TEXT,
    surfspotdisplayname TEXT,
    surfspotimg VARCHAR,
    surfspotdescriptionlong VARCHAR,
    surfspotdescriptionshort VARCHAR,
    lat INT,
    lng INT
);