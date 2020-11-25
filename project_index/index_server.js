const express = require('express')

const app = express()


// 랜더링할 파일이 있는 디렉토리
app.set('views', __dirname + '/views');
// 사용하는 뷰 엔진
app.set('view engine', 'ejs');

//디자인 파일이 위치할 정적 요소들을 저장하는 디렉토리
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index');
});
app.listen(3000, function () {
	console.log('server on!');
});

