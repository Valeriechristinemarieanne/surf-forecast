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
    console.log("allCountries query running");
    return db.query(`SELECT * FROM countries`);
};

//////// Display all surfspots from selected country \\\\\\\\\\\\\
exports.allSurfspots = (country) => {
    console.log("country: ", country);
    console.log("allSurfspots query running");
    return db.query(
        `SELECT * FROM surfspots INNER JOIN countries ON surfspots.country=countries.country WHERE countries.country=$1`,
        [country]
    );
};

//////// Display all surfspots from selected country \\\\\\\\\\\\\
exports.selectedCountry = (country) => {
    console.log("selectedCountry query running");
    return db.query(`SELECT * FROM countries WHERE country=$1`, [country]);
};

/* WHERE country IN (SELECT * FROM surfspots */
/* JOIN surfspots ON countries.country = surfspots.country  */
