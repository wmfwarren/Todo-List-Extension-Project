"use strict";

app.controller("ItemViewCtrl", function($scope, $routeParams, ItemStorage) {
	$scope.items = [];
	// $scope.selectedItem = {};

	ItemStorage.getItemList()
	.then((itemCollection) => {
		$scope.items = itemCollection;

		$scope.selectedItem = $scope.items.filter((item) => {
			return item.id === $routeParams.itemId;
		})[0];
	});
});