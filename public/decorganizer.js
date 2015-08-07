// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    // onend: function (event) {
    //   var textEl = event.target.querySelector('p');

    //   textEl && (textEl.textContent =
    //     'moved a distance of '
    //     + (Math.sqrt(event.dx * event.dx +
    //                  event.dy * event.dy)|0) + 'px');
    // }
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
  }

  window.dragMoveListener = dragMoveListener;


interact('.resize-drag')
  .draggable({
    onmove: window.dragMoveListener
  })
  .resizable({
    edges: { left: true, right: true, bottom: true, top: true }
  })
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

    // update the element's style
    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
    target.textContent = event.rect.width + '×' + event.rect.height;
  });


var myDropzone = new Dropzone("div#frame", {url: "/file/post", addRemoveLinks: true, previewsContainer: false, acceptedFiles: '.jpg, .pdf, .png'});

Dropzone.autoDiscover = false;

 
var app = angular.module('decorganizer', []);

app.controller('MainCtrl', function ($scope, Pictures) {
  $scope.images;

  // $scope.getImgName = function() {
  //   Pictures.getImgName()
  //   .then(function(images) {
  //     console.log(images);
  //     $scope.images = images;
  //   })
  //   .catch(function(err){
  //   console.log('error', err);
  //   });
  // };


  myDropzone.on("addedfile", function(file) {
      console.log(file);
      //$scope.getImgName();
    });
 
});


