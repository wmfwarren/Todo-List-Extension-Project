"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage) {

//must call it items still for iteration in the partial
	$scope.items = ItemStorage.getItemList();

})