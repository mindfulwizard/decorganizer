app.factory('Pictures', function ($http) {
	return {

		getImgName: function() {
     		return $http.get('/img')
     		.then(function(response) {
        		return response.data;
     		});
  		},


	};
});

app.factory('InteractJS', function () {


});

app.factory('Dropzone', function () {


});