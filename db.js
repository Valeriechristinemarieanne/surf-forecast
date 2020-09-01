// This module handles my queries:
const spicedPg = require("spiced-pg");

let db;
if (process.env.DATABASE_URL) {
    db = spicedPg(process.env.DATABASE_URL);
} else {
    const { dbUser, dbPass } = require("./secrets");
    db = spicedPg(`postgres:${dbUser}:${dbPass}@localhost:5432/surfforecast`);
}

//////// GIVE ME ALL THE COUNTRIES \\\\\\\\\\\\\
exports.allCountries = () => {
    console.log("allCountries query running");
    return db.query(`SELECT * from countries`);
};
