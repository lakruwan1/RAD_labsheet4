class Dog{
    constructor(Breed, Age, Color){
        this.Breed = Breed;
        this.Age = Age;
        this.Color = Color;
    }
    Eat(){console.log(`${this.Breed} is Eating`)}
    Sleep(){console.log(`${this.Breed} is Sleeping`)}
    Sit(){console.log(`${this.Breed} is Sitting`)}
    Run(){console.log(`${this.Breed} is Running`)}
}

const dog1 = new Dog("Breed", 3, "Black");
const dog2 = new Dog("Boxer", 2, "White");
const dog3 = new Dog("Podle", 1, "Brown");

console.log("The breed of dog1 is = " + dog1.Breed)
dog1.Eat();

console.log("The age of dog2 is = " + dog2.Age)
dog2.Sleep();

console.log("The color of dog3 is = " + dog3.Color)
dog3.Sit();
dog3.Run();