const ShippingStrategy = require("./ShippingStrategy");

module.exports = class Zoom extends ShippingStrategy {

    constructor () {
        super()
    }
    
    //Override
    calculate() {
        console.log("Zoom cobra 100")
        return 100;
    };

}