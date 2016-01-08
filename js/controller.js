var app = angular.module('app', ['ngDialog']);


app.controller('MainController', function ($scope, ngDialog) {
   

    $scope.openConfirm = function () {
     
        ngDialog.openConfirm({
            template: 'CambiarContrasena.html',
            className: 'ngdialog-theme-default',
            scope: $scope
        }).then(function (value) {
            console.log('Modal promise resolved. Value: ', value);
        }, function (reason) {
            console.log('Modal promise rejected. Reason: ', reason);
        });
	};

	$scope.cambiarContrasena = function(cambio){

		if(typeof cambio != 'undefined'){
			if(cambio.contrasena!=cambio.confirmacion){
				alert("Diferentes");
			}
		    console.log(cambio.anterior);
		    console.log(cambio.contrasena);	    
		    console.log(cambio.confirmacion);
	    }
    };

});