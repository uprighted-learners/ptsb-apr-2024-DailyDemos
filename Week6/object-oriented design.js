// Encapsulation

// data hiding and aggregation


// Inheritance

// taking all of the properties and methods
// overwriting some methods as needed
// and you can add new methods

class Wave {
    constructor(){
        this.type = "regular"
    }

    describe(){
        console.log(`This is a ${this.type} wave.`)
    }
}

class SurfingWave extends Wave {
    constructor(){
        super();
        this.type = 'surfing';
    }

    //describe exists because of Wave

    //add a new method
    surf() {
    console.log(`Surf's up on this ${this.type} wave!`);
  }
}

// Create instances of each class
const regularWave = new Wave();
const surfingWave = new SurfingWave();

// Output descriptions
regularWave.describe(); // Output: This is a regular wave.
surfingWave.describe(); // Output: This is a surfing wave.

// Output specific method
surfingWave.surf(); // Output: Surf's up on this surfing wave!


// Abstraction = hiding Complexity or just simplification of complexity

const item = "Staff"

let myDndCharacter = new Dnd(stats); //dnd class shouldn't access item within its class

class Dnd {

    getItem(){
        return item; //dont do this
    }
}

