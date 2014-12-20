/**
 * Created by Emmanuel on 19/12/2014.
 */
var TODOBot = require("./ToDoBot");
var config = require('./config');

var todobot = new TODOBot(config);

//todobot.tweet("hola");
//todobot.message("hola mundo2!", 201962090);
todobot.onFollow();