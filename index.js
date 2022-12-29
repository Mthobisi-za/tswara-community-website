const express = require("express");
const exhbs = require("express-handlebars");
const body = require("body-parser");
const app = express();
const crypto = require("crypto");
const PORT = process.env.PORT || 5000
app.use(express.static("public"));
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.engine(
    "handlebars",
    exhbs.engine({ layoutsDir: "views/layouts", defaultLayout: "main" })
);
app.set("view engine", "handlebars");
app.get('/', (req, res) => {
    res.render('index')
});
app.get('/privacy', (req, res) => {
    res.render('privacy')
});

app.get('/client/:name/:surname/:userid', (req, res) => {

    // Signature generation
    const generateAPISignature = (data, passPhrase = null) => {
        // Arrange the array by key alphabetically for API calls
        let ordered_data = {};
        Object.keys(data).sort().forEach(key => {
            ordered_data[key] = data[key];
        });
        data = ordered_data;

        // Create the get string
        let getString = '';
        for (let key in data) {
            getString += key + '=' + encodeURIComponent(data[key]).replace(/%20/g, '+') + '&';
        }

        // Remove the last '&'
        getString = getString.substring(0, getString.length - 1);
        if (passPhrase !== null) { getString += `&passphrase=${encodeURIComponent(passPhrase.trim()).replace(/%20/g, "+")}`; }

        // Hash the data and create the signature
        return crypto.createHash("md5").update(getString).digest("hex");
    }
    var name = req.params.name;
    var surname = req.params.surname;
    var id = req.params.userid;
    res.render('client', { name, surname, id });
})
app.get('/status/:state', (req, res) => {
    var state = req.params.state;
    console.log(state);
    if (state == 'success') {
        res.redirect('tswara://?status=success');
    } else {
        res.redirect('tswara://?status=failed');
    }
})
app.listen(PORT, () => {
    console.log("Server started on " + PORT);
});