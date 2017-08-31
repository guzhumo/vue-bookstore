let http = require('http'),
    fs = require('fs'),
    url = require('url');

function readyBooks(callback) {
  fs.readFile('./books.json', 'utf8', function (err, data) {
    if (err || data.length === 0) data = '[]';
    callback(JSON.parse(data));//异步只能通过回调函数 返回
  })
}

function writeBook(data,callback){
  fs.writeFile('./books.json', JSON.stringify(data), callback);
}

http.createServer(function (req, res) {
  let {pathname, query} = url.parse(req.url,true);
  if ( pathname === '/book') {
    let id = query.id;
    switch (req.method) {
      case 'GET':
        if (id) {
          readyBooks(function (data) {
            var book = data.find(item=>item.id == id);
            res.end(JSON.stringify(book));
          })
        }else {
          readyBooks(function (data) {
            res.end(JSON.stringify(data))
          });
        }
        break;
      case 'POST':
        var str = '';
        req.on('data',function (data) {
          str += data;
        });
        req.on('end',function () {
          var book = JSON.parse(str);
          readyBooks(function (books) {
            book.id = books.length ? books[books.length - 1].id + 1 : 1;
            books.push(book);
            writeBook(books,function () {
              res.end(JSON.stringify(book));
            })
          })
        });
        break;
      case 'PUT':
        var str = '';
        req.on('data',function (data) {
          str += data;
        });
        req.on('end', function () {
          //book代表前台要我们改成这个结果
          var book = JSON.parse(str);
          readyBooks(function (books) {
            books = books.map(item=>{
              if (item.id == id) {
                return book;
              }
              return item;
            });
            writeBook(books, function () {
              //RESTFUL风格
              //修改成功后，返回修改的那一项
              res.end(JSON.stringify(book))
            })
          });
        });
        break;
      case 'DELETE':
        readyBooks(function (books) {
          books = books.filter(item => item.id != id);
          console.log(books);
          writeBook(books,function () {
            res.end(JSON.stringify({}));
          });
        });
        break;
    }
  }else {
    res.statusCode = 404;
    res.end();
  }
}).listen(4000);
