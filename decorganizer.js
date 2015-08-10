var counter = 0;

$("#button").click(function() {
  $("#wall").append("<img id='img"+counter+ "' class='resize-drag'/>");

    $("img").click(function(event){
      $(this).addClass("activeImg");
       $(this).siblings().removeClass("activeImg");
    });
});

$("#deleted").click(function() {
  $(".activeImg").remove();
});


document.getElementById("button").addEventListener('change',function(e){
  var url = window.URL.createObjectURL(e.target.files[0]);
  var tag = "#img" + counter;
  $(tag).attr("src", ""+url+"");
  counter++;
},false);


function dragMoveListener (event) {
  var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  };

window.dragMoveListener = dragMoveListener;

interact('.resize-drag')
  .draggable({
    onmove: window.dragMoveListener
  })
  .resizable({
    edges: { left: true, right: true, bottom: true, top: true },
  })
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

    // update the element's style
    target.style.width  = event.rect.width + 'px';
    target.style.height = (event.rect.width * .67) + 'px';
    

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
    //target.textContent = event.rect.width + '×' + event.rect.height;
  });




