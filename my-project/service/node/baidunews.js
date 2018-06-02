/**
 * Created by AdminWeb on 2018-5-25.
 */
const cheerio = require('cheerio'); //引用cheerio模块,使在服务器端像在客户端上操作DOM,不用正则表达式
const superagent = require('superagent');  //是个 http 方面的库，可以发起 get 或 post 请求
const mysql = require('mysql');
const schedule =require('node-schedule');
//nodemailer模块邮箱发送
const nodemailer = require('nodemailer');
//转hash模块
const fnv = require('fnv-plus');
//盛放每次抓取的内容
let items = [];

//创建数据库连接
const db = mysql.createConnection({
  host: '47.93.34.250',
  user: 'zhaolei',
  password: '111111',
  port: '3306',
  database: 'newsdb'
});
db.connect(function (err) {
  if (err) console.log('连接失败');
  else {
    console.log('连接成功');
  }
});
//抓取数据
function fetchData() {
  var link = "http://news.baidu.com/ent";
  superagent.get(link)
    .end(function (err, sres) {
      if (err) {
        return next(err);
      }
      let $ = cheerio.load(sres.text);

      $('#instant-news ul li a').each(function (idx, element) {
        let $element = $(element);
        //转hash哈希值
        let titleHash = fnv.hash($element.text(), 64).str();
        let info = {
          title: $element.text(),
          link: $element.attr('href'),
          source: link,
          typeId: 1,
          typeName: $('#col_toparea .mod .hd h3').text(),
          grabDate: new Date().toLocaleString(),
          // grabDate: new Date()
          titleHash: titleHash
        };
        items.push(info);
        //保存数据
        db.query('insert into test_table set ?', info, function (err, result) {
          // if (err) throw err;
          try {
            if (!!result) {
              console.log('插入成功');
              console.log(result.insertId);
            } else {
              console.log('插入失败');
            }
          }catch (err){
            console.log('插入失败');
          }
        });
      });
      // db.end(); //在每次定时任务插入数据库后我写了一个end()方法，取消数据库的连接，结果下一次重启抓取信息后，上面连接数据库的方法不会再执行，就会报Cannot enqueue quit after invoking quit.连接不上数据库，只能把这个方法去掉
      //执行发送邮件的函数
      console.log(items);
      sendmail();
    });
}

//抓取的内容发送QQ邮箱(是为了每次抓取的内容都发送邮箱);
let transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user: '976243776@qq.com',
    pass: 'ogxrqnwdyovfbceg'
  }
});
let mailOptions = {
  //发送者
  from: '976243776@qq.com',
  //接受者，可以同时发送给多个邮箱，以逗号隔开
  // to: '976243776@qq.com,943009096@qq.com,773058077@qq.com',
  to: '976243776@qq.com,773058077@qq.com',
  //发送内容的标题
  subject: '实时新闻抓取内容',
  //内容
  //text: 'Hello world', // 文本
  html: '<h2>实时新闻已经抓取</h2>'
};
//执行发送邮件的函数
function sendmail() {
  transporter.sendMail(mailOptions, function (err, info) {
    if (err){
      console.log('发送失败，失败原因是：'+err);
      return;
    }else {
      console.log('发送成功');
    }
  });
}


//定时模块定时启动抓取数据函数函数
let rule     = new schedule.RecurrenceRule();
let times    = [1,11,21,31,41,51];
rule.second  = times;
schedule.scheduleJob(rule, function(){
  fetchData();
});




