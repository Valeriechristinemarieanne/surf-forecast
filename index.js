const express = require("express");
const app = express();
const compression = require("compression");
const surfspots = require("./surfspots.json");

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

app.get("/server/allCountries/:country/:surfspot", (req, res) => {
    /* console.log("req.params:", req.params); */
    /* const { country } = req.params; */
    const { surfspot } = req.params;

    /* const selectedCountry = surfspots.find((item) => {
        console.log("item.country: ", item.country);
        console.log("country: ", country);
        return item.country.toLowerCase() == country.toLowerCase();
    }); */
    const selectedSurfspot = surfspots.find((item) => {
        return item.name.toLowerCase() == surfspot.toLowerCase();
    });

    console.log("selectedSurfspot", selectedSurfspot);
    res.json(selectedSurfspot);
});

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function () {
    console.log("I'm listening.");
});
