/**
 * Created by liuzhe on 16/7/17.
 */
var async = require("async");
async.series([function(callback){
    callback(null, "tv is over");
},function(callback){
    callback(null, 'homework is down');
}],function(err, results) {
    console.log(results);
});