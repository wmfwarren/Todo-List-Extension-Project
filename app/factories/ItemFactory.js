"use strict";
app.factory("ItemStorage", function(FirebaseURL, $q, $http, AuthFactory) {

	var getItemList = function() {
		let items = [];
		return $q((resolve, reject) => {
			$http.get(`${FirebaseURL}/items.json?orderByKey="uid"&equalTo"${AuthFactory.getUser()}"`)
			.success((itemObject) => {
				let itemCollection = itemObject;
				Object.keys(itemCollection).forEach((key) => {
					itemCollection[key].id = key;
					items.push(itemCollection[key]);
				});
				resolve(items);
			})
			.error((error) => {
				reject(error);
			});
		});
	};

	var postNewItem = function(newItem) {
		return $q((resolve, reject) => {
			$http.post(
				`${FirebaseURL}/items.json`,
				JSON.stringify(newItem))
			.success((objFromFirebase) => {
				resolve(objFromFirebase);
			})
			.error((error) => {
				reject(error);
			});
		});
	};

	var deleteItem = function(listItemID) {
		console.log(listItemID, "this is delete item")
		return $q((resolve, reject) => {
			$http.delete(
				`${FirebaseURL}/items/${listItemID}.json`
			)
			.success((data) => {
				// console.log("Data from delete", data );
				resolve(data);
			})
			.error((error) => {
				reject(error);
			});
		});
	};

	return {getItemList, postNewItem, deleteItem};
});