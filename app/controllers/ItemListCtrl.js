"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage, $location, AuthFactory) {

//must call it items still for iteration in the partial
	
	$scope.userID = AuthFactory.getUser();

	if(AuthFactory.isAuthenticated()){
		ItemStorage.getItemList()
		.then((itemCollection) => {
			$scope.items = itemCollection;
		});
	} else {
		// alert("Please Log In");
	}

$scope.flipCompleted = function(item) {
	console.log("item", item );
	if (item.isCompleted === true){
		item.isCompleted = false;
		ItemStorage.putIsCompleted(item);
	} else {
		item.isCompleted = true;
		ItemStorage.putIsCompleted(item);

	}
}

$scope.deleteItemCall = function(item) {
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