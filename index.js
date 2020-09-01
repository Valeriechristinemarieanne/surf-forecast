const express = require("express");
const app = express();
const compression = require("compression");
const surfspots = require("./surfspots.json");
const countries = require("./countries.json");
const { allCountries } = require("./db.js");
const { response } = require("express");

// My middleware
app.use(express.static("./public"));
app.use(compression());

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/",
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

// ROUTES
app.get("/server/allCountries/", (req, res) => {
    console.log("I trying to get all country information");
    allCountries()
        .then((result) => {
            console.log("result from allCountries server route", result.rows);
            res.json(result.rows);
        })
        .catch((err) => {
            console.log("response from allCountries function: ", err);
        });
});

app.get("/server/allCountries/:country/:surfspot", (req, res) => {
    console.log("req.params:", req.params);
    const { surfspot } = req.params;
    const selectedSurfspot = surfspots.find((item) => {
        return item.name.toLowerCase() == surfspot.toLowerCase();
    });

    console.log("selectedSurfspot", selectedSurfspot);
    res.json(selectedSurfspot);
});

app.get("/server/allCountries/:country", (req, res) => {
    console.log("req.params:", req.params);
    const { country } = req.params;

    const selectedCountry = countries.find((item) => {
        console.log("item.country: ", item.country);
        console.log("country: ", country);
        return item.country.toLowerCase() == country.toLowerCase();
    });

    console.log("selectedCountry", selectedCountry);
    res.json(selectedCountry);
});

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function () {
    console.log("I'm listening.");
});
