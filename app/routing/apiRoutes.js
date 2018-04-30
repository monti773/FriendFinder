var friendsData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    let newuser = req.body;
    newuser.score = newuser.score.map(score => parseInt(score));
    friendsData.unshift(newuser);

    const findTotalScore = friendsData => {
      let [currentUser, ...otherUsers] = friendsData;
      let bestMatches = [];
      let lowestCompatibility = 1000;
    
      otherUsers.forEach((otherUser) => {
          let compatibility = totalDifference(currentUser.score, otherUser.score);
          otherUser.compatibility = compatibility;
    
          if (lowestCompatibility > compatibility) {
              lowestCompatibility = compatibility;
              bestMatches = [];
              bestMatches.push(otherUser);
        } else if (lowestCompatibility === compatibility) {
              lowestCompatibility = compatibility;
              bestMatches.push(otherUser);
        }
      });
        return bestMatches;
    }
    
    function totalDifference(currScores, otherUserScores) {
      let tempArray = [];
    
      for (let i = 0; i < otherUserScores.length; i++) {
        let difference = Math.abs(currScores[i] - otherUserScores[i]);
        tempArray.push(difference);
      }
      return tempArray.reduce((total, num) => total + num);
    }
    
    const bestMatch = findTotalScore(friendsData);
    displayMatchInfo(bestMatch);

    function displayMatchInfo (bestMatch) {
      bestMatch.forEach((userInfo) => {
      });
      res.json(bestMatch);
    }
  });
}