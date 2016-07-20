"use strict";

var app = angular.module("ToDoApp", []);

app.controller("navCtrl", ($scope) => {
	$scope.navItems = [{name: "Logout"}, {name: "All Items"}, {name: "New Items"}];
});

app.controller("ToDoCtrl", ($scope) => {
	$scope.showListView = true;
	$scope.newtask = {};
	$scope.items = [
		{
		 id: 0,
		 task: "kill the Batman",
		 isCompleted: false,
		 dueDate: "12/5/17",
		 assignedTo: "Joker",
		 location: "Gotham",
		 urgency: "urgent",
		 dependencies: "sunshine, clippers, hat, water, headphones"
		},
		{
		 id: 1,
		 task: "kill all humans",
		 isCompleted: false,
		 dueDate: "12/5/3001",
		 assignedTo: "Bender",
		 location: "Universe",
		 urgency: "Low",
		 dependencies: "wifi, tissues, vodka"
		},
		{
		 id: 2,
		 task: "take a nap",
		 isCompleted: false,
		 dueDate: "5/21/16",
		 assignedTo: "Joe",
		 location: "Joe's house",
		 urgency: "medium",
		 dependencies: "hammock, cat, pillow, blanket"
		}
	];
	$scope.allItem = function() {
		console.log("all items clisked");
		$scope.showListView = true;
	}
	$scope.newItem = function() {
		console.log("new item clicked" );
		$scope.showListView = false;
	}
	$scope.addNewItem = function() {
		$scope.newTask.isCompleted = false;
		$scope.newTask.id = $scope.items.length;
		console.log("added new item", $scope.newTask);
		$scope.items.push($scope.newTask);
		$scope.newTask = {};
	}
});



