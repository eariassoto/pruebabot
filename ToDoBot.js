/**
 * Created by Emmanuel on 19/12/2014.
 */
var Bot = require("./bot");
var bot;

var TODOBot = module.exports = function (config) {
    this.bot = new Bot(config);
    bot = this;
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
    });
};

TODOBot.prototype.follow = function(screen_name, user_id) {
    this.bot.follow(screen_name, user_id, function (err, reply) {
        if (err)
            console.log(err);
        else
            console.log('Ahora sigues a ' + screen_name);
    });
};

TODOBot.prototype.onFollow = function(){
    this.bot.stream.on('follow', function (event) {
        if(event.source.screen_name != 'eariasbot'){
            console.log("Ahora te sigue " + event.source.name);
            bot.follow(event.source.screen_name, event.source.id);
        }
    });
};
