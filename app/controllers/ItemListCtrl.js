"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage) {

//must call it items still for iteration in the partial
	ItemStorage.getItemList()
	.then((itemCollection) => {
		$scope.items = itemCollection;
	});

})