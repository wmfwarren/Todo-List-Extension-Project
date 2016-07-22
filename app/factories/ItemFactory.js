"use strict";
app.factory("ItemStorage", function(FirebaseURL, $q, $http) {

	var getItemList = function() {
		let items = [];
		return $q((resolve, rejcet) => {
			$http.get(`${FirebaseURL}/items.json`)
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

	return {getItemList, postNewItem};
});