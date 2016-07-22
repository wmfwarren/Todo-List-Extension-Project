"use strict";

app.factory("AuthFactory", () => {

	var currentUserID = null;
	var provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().onAuthStateChanged( (user) => {
		if(user) {
			currentUserID = user.uid;
		} else {
		currentUserID = null;
		console.log("no one logged in" );
		}
	});

	var authWithProvider = function(){
		return firebase.auth().signInWithPopup(provider);
	}

	var isAuthenticated = function() {
		return (currentUserID) ? true : false;
	}

	let getUser = function(){
		return currentUserID;
	}

	return {getUser, isAuthenticated, authWithProvider};

})