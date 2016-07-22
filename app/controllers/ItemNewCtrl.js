"use strict";

app.controller("ItemNewCtrl", function($scope, ItemStorage, $location, AuthFactory) {
	$scope.newTask = {
		assignedTo: "",
		dependencies: "",
		dueDate: "",
		isCompleted: false,
		location: "",
		task: "",
		urgency: "",
		uid: AuthFactory.getUser()
	};
	

	$scope.addNewItem = function() {
		console.log("added new item", $scope.newTask);
		ItemStorage.postNewItem($scope.newTask)
		.then ((response) => {
			$location.url("/items/list");
		});
	}
})