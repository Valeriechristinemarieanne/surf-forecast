// This module handles my queries:
const spicedPg = require("spiced-pg");

let db;
if (process.env.DATABASE_URL) {
    db = spicedPg(process.env.DATABASE_URL);
} else {
    const { dbUser, dbPass } = require("./secrets");
    db = spicedPg(`postgres:${dbUser}:${dbPass}@localhost:5432/surfforecast`);
}

//////// Display all countries \\\\\\\\\\\\\
exports.allCountries = () => {
    return db.query(`SELECT * FROM countries`);
};

//////// Display all surfspots from selected country \\\\\\\\\\\\\
exports.selectedCountry = (country) => {
    return db.query(`SELECT * FROM countries WHERE country=$1`, [country]);
};

//////// Display all surfspots from selected country \\\\\\\\\\\\\
exports.allSurfspots = (country) => {
    return db.query(
        `SELECT * FROM surfspots INNER JOIN countries ON surfspots.country=countries.country WHERE countries.country=$1`,
        [country]
    );
};

//////// Display selected surfspot \\\\\\\\\\\\\
exports.selectedSurfspot = (surfspot) => {
    return db.query(`SELECT * FROM surfspots WHERE surfspotname=$1`, [
        surfspot,
    ]);
};

/* WHERE country IN (SELECT * FROM surfspots */
/* JOIN surfspots ON countries.country = surfspots.country  */
