"use strict";

var app = angular.module("ToDoApp", ["ngRoute"])
.constant("FirebaseURL", "https://angular-todo-list-748e0.firebaseio.com/");

app.config(($routeProvider, FBCreds) => {

	let authConfig = {
		apiKey: FBCreds.apiKey,
		authDomain: FBCreds.authDomain
	}

	firebase.initializeApp(authConfig);

	$routeProvider.
	when("/items/list", {
		templateUrl: "partials/item-list.html",
		controller: "ItemListCtrl"
	}).
	when("/items/new", {
		templateUrl: "partials/item-new.html",
		controller: "ItemNewCtrl"
	}).
	when("/items/details/:itemId", {
		templateUrl: "partials/item-details.html",
		controller: "ItemViewCtrl"
	}).
	when("/login", {
		templateUrl: "partials/login.html",
		controller: "LoginCtrl"
	}).
	when("/logout", {
		templateUrl: "partials/logout.html",
		controller: "LogoutCtrl"
	}).
	otherwise("/items/list");
});