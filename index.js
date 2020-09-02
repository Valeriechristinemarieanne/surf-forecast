const express = require("express");
const app = express();
const compression = require("compression");
const surfspots = require("./surfspots.json");
const countries = require("./countries.json");
const {
    allCountries,
    selectedCountry,
    allSurfspots,
    selectedSurfspot,
} = require("./db.js");
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

app.get("/server/allCountries/:country", (req, res) => {
    console.log("req.params country:", req.params);
    const { country } = req.params;

    selectedCountry(country)
        .then((result) => {
            console.log("result from countries server route", result.rows);
            console.log(
                "result from countries server route",
                result.rows[0].country
            );
            const selectedcountry = result.rows[0].country;
            console.log("just declared const", selectedcountry);

            allSurfspots(selectedcountry).then((result) => {
                console.log(
                    "result from allSurfspots serverroute",
                    result.rows
                );
                res.json(result.rows);
            });
        })
        .catch((err) => {
            console.log("response from countries function: ", err);
        });
});

app.get("/server/allCountries/:country/:surfspot", (req, res) => {
    console.log("req.params surfspot:", req.params);
    const { surfspot } = req.params;

    selectedSurfspot(surfspot)
        .then((result) => {
            console.log("result from surfspot server route", result.rows);
            console.log("result from surfspot server route", result.rows[0]);
            const selectedsurfspot = result.rows[0].country;
            console.log("just declared const", selectedsurfspot);
            res.json(result.rows);
        })
        .catch((err) => {
            console.log("response from surfspot function: ", err);
        });
});

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function () {
    console.log("I'm listening.");
});
