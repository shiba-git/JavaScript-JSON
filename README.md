JavaScript XMLでJSONを取得し、HTML生成。

現会社の環境でも、データベースを外部に頼んでおり、データベースを使うのに面倒な手続きや、時間がかかる場合がある。
そのために、XMLとJSONを勉強。


##最初は、以下のテンプレートを利用
https://startbootstrap.com/template-overviews/agency/

##サイトのAboutの部分をJOSN化してみた。
liの部分をすべて削除し、中身をdata.jsonに格納。

##XMLHttpRequestを使い、data.jsonを取得
req.open('GET','https://jsontest-shiba0405.c9users.io/startbootstrap-agency-gh-pages/data.json');

##JavaScriptのappend()を使い、HTML生成。

