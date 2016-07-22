"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage, $location) {

//must call it items still for iteration in the partial
	ItemStorage.getItemList()
	.then((itemCollection) => {
		$scope.items = itemCollection;
	});


$scope.deleteItemCall = function(item){
	ItemStorage.deleteItem(item)
	.then((itemCollection) => {
		$scope.items = itemCollection;
		$location.path("/items/list");
		ItemStorage.getItemList()
		.then((itemCollection) => {
			$scope.items = itemCollection;
		});
	});
};

})