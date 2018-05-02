var http = require('http');
var _url = require('url');    //引用url模块，处理url地址相关操作
var cheerio = require("cheerio");    //引用cheerio模块,使在服务器端像在客户端上操作DOM,不用正则表达式
var iconv = require('iconv-lite');    //解决编码转换模块
var BufferHelper = require('bufferhelper');    //关于Buffer我后面细说
var mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'zhangshuo',
  password : '111111'
});

function baiduNews(){
    var link = "http://news.baidu.com/ent";
    //抓取页面
    download(link, function (data) {
        var doc = data.toString();
        var $ = cheerio.load(doc);
        var list = [];
        $("#instant-news ul li a").each(function (i, e) {
            var item = $(e).text();
            var link = $(e).attr('href');
            list.push({title: item, link})
        });
        connection.query("use mydb");
        // connection.query("select * from MyGuests",  function (error, results, fields) {
        //     if (error) throw error;
        //     console.log('results', results);
            
        // });
        list.forEach(item => {
            //console.log(item.title)
            var query = `insert into news (title, link) values ('${item.title}','${item.link}')`;
            //console.log('query', query)
            connection.query(query);
        });
    });
}
baiduNews();
//加载第三方页面
function download(url, callback) {
    http.get(url, function (res) {
        var bufferHelper = new BufferHelper();    //解决中文编码问题
        res.on('data', function (chunk) {
            bufferHelper.concat(chunk);
        });
        res.on("end", function () {
            //注意，此编码必须与抓取页面的编码一致，否则会出现乱码，也可以动态去识别
            var val = iconv.decode(bufferHelper.toBuffer(), 'utf8');    
            callback(val);
        });
    }).on("error", function () {
        callback(null);
    });
}

module.export = baiduNews;