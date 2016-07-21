"use strict";
app.factory("ItemStorage", function() {
var items = [
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
		 task: "Vengeance for Zul'jin",
		 isCompleted: false,
		 dueDate: "5/21/16",
		 assignedTo: "Zul'jin",
		 location: "Kalimdor",
		 urgency: "medium",
		 dependencies: "hammock, cat, pillow, blanket"
		}
	];

	var getItemList = function() {
		return items;
	};

	var postNewItem = function(newItem) {
		items.push(newItem);
	};

	return {getItemList, postNewItem};
});