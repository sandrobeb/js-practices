function CoffeeMachine(power, capacity) {
    let pow = power;

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Value has to be positive.");
        }
        if (amount > capacity) {
            throw new Error("You can't put more water, than " + capacity);
        }
        waterAmount = amount;
    };

    this.getWaterAmount = function () {
        return waterAmount;
    };

    this.getPower = function () {
        return pow;
    }
}

let coffeeMachine = new CoffeeMachine(200, 100);
console.log(coffeeMachine.getPower());