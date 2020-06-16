const ShippingStrategy = require("./ShippingStrategy");

module.exports = class DHL extends ShippingStrategy {

    constructor () {
        super()
    }

    //Override
    calculate() {
        console.log("DHL cobra 50")
        return 50;
    };

}