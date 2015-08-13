/**
 * Created by tkyoder on 8/13/15.
 */
function say(filename){
    return fs.readFileSync(filename);
}

var fs = require("fs");

module.exports.say = say;