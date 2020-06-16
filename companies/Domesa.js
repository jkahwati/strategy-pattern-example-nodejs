const ShippingStrategy = require("./ShippingStrategy");

module.exports = class Domesa extends ShippingStrategy {

    constructor () {
        super()
    }

    //Override
    calculate() {
        console.log("Domesa cobra 60")
        return 60;
    };

}