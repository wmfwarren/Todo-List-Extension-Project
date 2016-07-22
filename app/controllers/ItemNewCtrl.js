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
		uid: null
	};
	

	$scope.addNewItem = function() {
		console.log("added new item", $scope.newTask);
		ItemStorage.postNewItem($scope.newTask)
		.then ((response) => {
			$scope.newTask.uid = AuthFactory.getUser();
			$location.url("/items/list");
		});
	}
})