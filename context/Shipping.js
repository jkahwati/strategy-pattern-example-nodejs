const DHL = require('../companies/DHL')
const Domesa = require('../companies/Domesa')
const Zoom = require('../companies/Zoom')

module.exports = class Shipping {

    constructor(type) {
        switch(type) {
            case "DHL":
                this.company = new DHL()
                break
            case "Domesa":
                this.company = new Domesa()
                break
            case "Zoom":
                this.company = new Zoom()
                break
        }

    };

    calculate () {
        return this.company.calculate();
    }

}