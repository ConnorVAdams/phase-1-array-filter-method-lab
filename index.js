const findMatching = (arr, driverName) => {
    return arr.filter(element => {
        return element.toLowerCase() === driverName.toLowerCase();
    });
};

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const fuzzyMatch = (arr, letters) => { //Pass in an array of drivers and a string of letters of any length.
    const lengthOfStr = letters.length; //Determine the length of the string.
    return arr.filter(element => { //Iterate through each element the array.
        if (element.slice(0, lengthOfStr) === letters) { //Compare first two letters of active element to argument.
            return element; //If it's a match, return that element (NOT FirstXLetters!)
        };
    });
};

const matchName = (arr, nameArg) => {
    return arr.filter(element => {
        return element.name === nameArg;
    });
};