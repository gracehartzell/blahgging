// const { name, weapon, room } = {
//     "name": "Rusty", 
//     "room": "kitchen",
//     "weapon":"candlestick"
// };

// let [a, , b] = [1, 2, 3];
// console.log(a, b)

// let [c, ...d] = [1, 2, 3];
// console.log(c, d);

// const game = {
//     "suspects" : [
//         {
//             name: "Rusty",
//             color: "orange"
//         },
//         {
//             name: "Miss Scarlet",
//             color: "red"
//         }
//     ]
// };

// // console.log(game["suspects"]);

// let suspects = game.suspects;
// // to get just the colors:
// let [ color1, color2 ] = [suspects[0].color, suspects[1].color];
// console.log(color1);

// let [{color: firstColor}, {color: secondColor}] = suspects;
// console.log(firstColor);







// for (let suspect in game.suspects) {
//     console.log(suspect)
// };

// for (let i = 0; i < game.suspects.length; i++) {
//     // console.log(game.suspects[i]);
// };



/**************************************************************/
/************** LIST TRANSFORMATIONS AND FOREACH **************/
/**************************************************************/


function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log(`my name is ${name}`);
        }
    };
};

let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
let suspectsList = [];
 /*
 Need to pass the string ('Miss Scarlet') into the function in order to get the object with her name and the details being returned from function. 
   e.g.
        x = CreateSuspectObjects('Miss Scarlet');
        console.log(x); // => ​​​​​{ name: 'Miss Scarlet',  color: 'Scarlet', speak: [λ: speak] }
 */

for (let i = 0; i < suspects.length; i++) {
    suspectsList.push(CreateSuspectObjects(suspects[i]));
};

_.each(suspects, (name) => {
    let suspectObj = CreateSuspectObjects(name);
    suspectsList.push(suspectObj);
});

