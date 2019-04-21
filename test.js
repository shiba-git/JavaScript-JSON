
var $timeline = $('ul.timeline');

json.forEach(function(item){

    $timeline.append(
    '<li>' +
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
});