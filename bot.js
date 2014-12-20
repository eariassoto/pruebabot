/**
 * Created by Emmanuel on 19/12/2014.
 */

var Twit = require('twit');

var Bot = module.exports = function (config) {
    this.twit = new Twit(config);
    this.stream = this.twit.stream('user');
};

Bot.prototype.post = function (id, param, callback) {
    this.twit.post(id, param, callback);
};

Bot.prototype.get = function (id, param, callback) {
    this.twit.get(id, param, callback);
};

Bot.prototype.tweet = function (status, callback) {
    if (typeof status !== 'string') {
        return callback(new Error('tweet must be of type String'));
    } else if (status.length > 140) {
        return callback(new Error('tweet is too long: ' + status.length));
    }
    this.post('statuses/update', {status: status}, callback);
};

Bot.prototype.message = function(text, user_id, callback){
    this.post('direct_messages/new', {user_id: user_id, text: text}, callback);
};

Bot.prototype.follow = function(screen_name, user_id, callback){
    this.post('friendships/create', {user_id: user_id, screen_name: screen_name, follow: true}, callback);
};

Bot.prototype.userExist = function(screen_name, callback){
    this.get('users/show', {screen_name: screen_name}, callback);
};



