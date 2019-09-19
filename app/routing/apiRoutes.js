var friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        console.log(req.body.scores);

        var user = req.body;
        
        for(var i=0; i< user.scores.length; i+=){
            user.scores[i] = parseInt(user.scores[i])
        }

        var bffIndex = 0
        var minDiff =0

            for(var i= 0; i<friends.length; i++){
                console.log(friends[i].name);
                var totalDiff = 0
                for(var j=0; j<friends[i].scores; j++){
                    console.log(friends[i].scores[j])
                    var scoreDiff = Math.abs(user.scores[j] - friends[i].scores[j]);
                    totalDiff += scoreDiff;
                }
                if(totalDiff < minDiff){
                    bffIndex = i
                    minDiff = totalDiff
                } 
            }
            return bffIndex;
        
        
        
    })
    res.json(req.body);
}

