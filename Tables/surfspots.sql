DROP TABLE IF EXISTS surfspots CASCADE;

CREATE TABLE surfspots (
    id SERIAL PRIMARY KEY,
    country TEXT,
    surfspotname TEXT,
    surfspotdisplayname TEXT,
    surfspotimg VARCHAR,
    surfspotdescriptionlong VARCHAR,
    surfspotdescriptionshort VARCHAR,
    lat INT,
    lng INT
);

INSERT INTO surfspots (country, surfspotname, surfspotdisplayname, surfspotimg, surfspotdescriptionlong, surfspotdescriptionshort) VALUES ('morocco','anchorpoint','Anchor Point','https://surfforecast.s3.amazonaws.com/louis-hansel-shotsoflouis-57W456Hxmng-unsplash.jpg','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl pretium fusce id velit. Lobortis mattis aliquam faucibus purus in massa tempor nec. Lectus quam id leo in vitae turpis massa sed. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Ut tellus elementum sagittis vitae et leo duis ut. Vitae congue eu consequat ac felis donec et. Cursus eget nunc scelerisque viverra mauris in aliquam. Nibh tellus molestie nunc non blandit. Ullamcorper sit amet risus nullam eget felis eget nunc. In aliquam sem fringilla ut morbi tincidunt augue interdum.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl pretium fusce id velit.', '30.543675', '-9.724311' ),