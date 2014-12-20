/**
 * Created by Emmanuel on 19/12/2014.
 */

var Twit = require('twit');

var Bot = module.exports = function (config) {
    this.twit = new Twit(config);
    this.stream = this.twit.stream('user');
};

//
//  post a tweet
//
Bot.prototype.tweet = function (status, callback) {
    if (typeof status !== 'string') {
        return callback(new Error('tweet must be of type String'));
    } else if (status.length > 140) {
        return callback(new Error('tweet is too long: ' + status.length));
    }
    this.twit.post('statuses/update', {status: status}, callback);
};

Bot.prototype.message = function(text, user_id, callback){
    this.twit.post('direct_messages/new', {user_id: user_id, text: text}, callback);
};

Bot.prototype.onFollow = function(){
  this.stream.on('follow', function (event) {
      console.log("Ahora te sigue " + event.source.name);
  })
};



