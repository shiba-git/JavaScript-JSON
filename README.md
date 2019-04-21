JavaScript XMLでJSONを取得し、HTML生成。  
==================

現会社の環境でも、データベースを外部に頼んでおり、データベースを使うのに面倒な手続きや、時間がかかる場合がある。
そのために、XMLとJSONを勉強。


最初は、以下のテンプレートを利用  
---------------------------------
https://startbootstrap.com/template-overviews/agency/

サイトのAboutの部分をJSON化してみた。 
---------------------------------
liの部分をすべて削除し、中身をdata.jsonに格納。  
```
    {  
        "id": 1,    
        "class": "",  
        "imgPath": "img/about/1.jpg",  
        "time": "2009-2011",  
        "title": "Our Humble Beginnings",  
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"  
    },  
```

##XMLHttpRequestを使い、data.jsonを取得  
---------------------------------
`req.open('GET','https://jsontest-shiba0405.c9users.io/startbootstrap-agency-gh-pages/data.json');`

##JavaScriptのappend()を使い、HTML生成。
---------------------------------
```
    timeline.prepend(  
      '<li class="' + item.class + '">' +  
        '<div class="timeline-image">' +  
          '<img class="rounded-circle img-fluid" src="' + item.imgPath + '" alt="">' +   
        '</div>' +  
        '<div class="timeline-panel">' +   
          '<div class="timeline-heading">' +   
            '<h4>' + item.time + '</h4>' +   
            '<h4 class="subheading">' + item.title + '</h4>' +  
          '</div>' +  
          '<div class="timeline-body">' +  
            '<p class="text-muted">' + item.description + '</p>' +   
          '</div>' +  
        '</div>' +  
      '</li>'   
      );  
```
