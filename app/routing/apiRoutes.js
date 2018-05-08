// Data
const friends = require("../data/friends");

module.exports = (app) => {
    // Displays all friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // Create New friend - takes in JSON input
    app.post("/api/friend", function(req, res) {
        const newFriend = req.body;

        console.log(newFriend);

        friends.push(newFriend);
        res.json(newFriend);
    });
};