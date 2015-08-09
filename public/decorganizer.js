var counter = 0;

$("#button").click(function() {
  $("#wall").append("<img id='img"+counter+ "' class='resize-drag' />");
});

document.getElementById("button").addEventListener('change',function(e){
  var url = window.URL.createObjectURL(e.target.files[0]);
  console.log(e.target.files)
  var tag = "#img" + counter;
  $(tag).attr("src", ""+url+"");
  counter++;
},false);

$("img").click(function(){
    alert("The paragraph was clicked.");
    //remove element?
});


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



// var element = document.getElementById('wall');
// var wallX = element.width;
// var wallY  = element.height;

// interact('.resize-drag')
//   .draggable({
//     snap: {
//       targets: [
//         {x: wallX, y: wallY}
//       ],
//     //   range: Infinity,
//     //   relativePoints: [ { x: 0, y: 0 } ]
//     // },
//     // inertia: true,
//     // restrict: {
//     //   restriction: element.parentNode,
//     //   elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
//     //   endOnly: true
//     }
//   })
  // .on('dragmove', function (event) {
  //   x += event.dx;
  //   y += event.dy;

  //   event.target.style.webkitTransform =
  //   event.target.style.transform =
  //       'translate(' + x + 'px, ' + y + 'px)';
  // });






