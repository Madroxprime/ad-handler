const ActiveDirectory = require('activedirectory');
let ad;

module.exports = function(settings){
    if (!ad ){
        ad = ActiveDirectory(settings);
    }
    return ad;
}
