const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];


/**************************************************************/
/**************** FOREACH AND _.EACH EXERCISE *****************/
/**************************************************************/

const _ = {};

_.each = function(list, callback) {
    // check if array or object:
    if (Array.isArray(list)) {
        // loop through array
        for (let i = 0; i < list.length; i++) {
            // call the callback with a list item
            callback(list[i], i, list); // value from list, API for each function (send the index), entire list 
        }
    } else {
        for (let key in list) {
            callback(list[key], key, list) // [] because it's a variable
        };
    }
};

_.each(['sally', 'george', 'porgie'], function(name, i, list) { // sally, 0
   if (list[i + 1]) {
       console.log(name, ' is younger than', list[i + 1])
   }
   else {
       console.log(name, 'is the oldest');
   }
});


/**************************************************************/
/************************ MAP EXERCISE ************************/
/**************************************************************/

_.map = function(collection, callback) {
	let returnArr = [];
		if (Array.isArray(collection) === false) { // if it's not an array
		  if (typeof collection === 'object') {
			for (let keys in collection) {
			returnArr.push(callback(collection[keys]));
		    }  
	      } 
        }
        for (let i = 0; i < collection.length; i++) { //if it is an array
            returnArr.push(callback(collection[i]));
        }
	return returnArr;
}; 


const weapons = ['candlestick', 'lead pipe', 'revolver'];
const makeBroken = (item) => {
    return `broken ${item}`;
};

function brokenItems() {
    return weapons.map(makeBroken);   
}
const brokenWeapons = _.map(weapons, makeBroken); 
console.log(brokenItems());

// let brokenItems = weapons.map(makeBroken);



/**************************************************************/
/*********************** FILTER EXERCISE **********************/
/**************************************************************/

_.filter = function(arr, cb) {
    const storage = [];
    _.each(arr, function(item, i, list) {
        if (cb(item, i, list) === true) {
                storage.push(item);
            }
    });
    return storage;
};

// Filter by those who were present: 
_.filter(videoData, function(suspectObject) {
    return suspectObject.present;
});




/**************************************************************/
/************************** EXERCISE **************************/
/**************************************************************/

const suspects = _.filter(videoData, function(suspectObject) {
    return suspectObject.present;
});

const suspectsName = _.map( suspects , suspect => {
    return suspect.name;
});



