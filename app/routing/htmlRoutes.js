

var path = require("path");
//var app = express();

module.exports = function(app){
    app.get("/home", function(require, res){
        res.sendFile(path.join(__dirname, "../public/home.html" ));
    })


app.get("/survey", function(require, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});


//default
app.use(function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html" ));
})

};
