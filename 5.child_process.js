/**
 * Created by liuzhe on 16/7/17.
 */
var url = require('url');
var fs = require('fs');
var DOWNLOAD_DIR = './';
var spawn = require('child_process').spawn;
// 使用curl下载文件的函数
var download_file_curl = function(file_url) {
    // 提取文件名
    var file_name = url.parse(file_url).pathname.split('/').pop();
    // 创建一个可写流的实例
    var file = fs.createWriteStream(DOWNLOAD_DIR + file_name);
    // 使用spawn运行curl
    var curl = spawn('curl', [file_url]);
    // 为spawn实例添加了一个data事件
    curl.stdout.on('data', function(data) { file.write(data); });
    // 添加一个end监听器来关闭文件流
    curl.stdout.on('end', function(data) {
        file.end();
        console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
    });
    // 当子进程退出时，检查是否有错误，同时关闭文件流
    curl.on('exit', function(code) {
        if (code != 0) {
            console.log('Failed: ' + code);
        }
    });
    download_file_curl('http://pic.baidu.jpg');

};