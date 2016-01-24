/**
 * Created by lutay.d on 24.01.2016.
 */
var quad = require('./quadratic');

quad(2,4,1, function(err,quadsolve) {
    if (err) {
        console.log('Error: ', err);
    }
    else {
        console.log("Roots are "+quadsolve.root1() + "  " + quadsolve.root2());
    }
});