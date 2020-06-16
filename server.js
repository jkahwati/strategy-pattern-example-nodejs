const Shipping = require('./context/Shipping')

var shipping = new Shipping();

// Calculating shipping DHL
shipping = new Shipping("DHL")
shipping.calculate();
// Calculating shipping Domesa
shipping = new Shipping("Domesa")
shipping.calculate();
// Calculating shipping Zoom
shipping = new Shipping("Zoom")
shipping.calculate();