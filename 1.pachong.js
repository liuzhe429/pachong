/**
 * Created by liuzhe on 16/7/17.
 */
var request = require('request');
var iconv = require('iconv-lite');
request({url: 'http://top.baidu.com/category?c=10&fr=topindex'
    , encoding: null},function(err,response,body){
    if(err)
        console.error(err);
    body = iconv.decode(body, 'gbk').toString();
    var regex = /<a href=".\/buzz\?b=\d+&c=\d+">.+<\/a>/g;
    console.log(body.match(regex));
})