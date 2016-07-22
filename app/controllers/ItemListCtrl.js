"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage, $location, AuthFactory) {

//must call it items still for iteration in the partial
	
	if(AuthFactory.isAuthenticated()){
		ItemStorage.getItemList()
		.then((itemCollection) => {
			$scope.items = itemCollection;
		});
	} else {
		// alert("Please Log In");
	}

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