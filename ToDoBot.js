/**
 * Created by Emmanuel on 19/12/2014.
 */
var Bot = require("./bot");

var TODOBot = module.exports = function (config) {
    this.bot = new Bot(config);
};

TODOBot.prototype.tweet = function(status) {
    this.bot.tweet(status, function (err, reply) {
        if (err)
            console.log(err);
        else
            console.log('\nTweet: ' + (reply ? reply.text : reply));
    })
};

TODOBot.prototype.message = function(text, user_id) {
    this.bot.message(text, user_id, function (err, reply) {
        if (err)
            console.log(err);
        else
            console.log('Mensaje enviado');
    })
};

TODOBot.prototype.onFollow = function(){
    this.bot.onFollow();
};