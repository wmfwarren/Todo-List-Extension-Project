"use strict";

app.controller("NavCtrl", function($scope) {
	$scope.navItems = [
		{
			name: "Logout", 
			url: "#/logout"
		}, 
		{
			name: "All Items",
			url: "#/items/list"
		}, 
		{
			name: "New Items",
			url: "#/items/new"
		}
		];
});