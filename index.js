const express = require("express");
const app = express();
const compression = require("compression");
const {
    allCountries,
    selectedCountry,
    allSurfspots,
    selectedSurfspot,
} = require("./db.js");

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
    allCountries()
        .then((result) => {
            res.json(result.rows);
        })
        .catch((err) => {
            console.log("err in allCountries db query server route: ", err);
        });
});

app.get("/server/allCountries/:country", (req, res) => {
    const { country } = req.params;

    selectedCountry(country)
        .then((result) => {
            const selectedcountry = result.rows[0].country;

            allSurfspots(selectedcountry)
                .then((result) => {
                    res.json(result.rows);
                })
                .catch((err) => {
                    console.log(
                        "err in allSurfspots db query server route: ",
                        err
                    );
                });
        })
        .catch((err) => {
            console.log("err in selectedCountry db query server route: ", err);
        });
});

app.get("/server/allCountries/:country/:surfspot", (req, res) => {
    const { surfspot } = req.params;

    selectedSurfspot(surfspot)
        .then((result) => {
            res.json(result.rows);
        })
        .catch((err) => {
            console.log("err in selectedSurfspot db query server route: ", err);
        });
});

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function () {
    console.log("I'm listening.");
});
