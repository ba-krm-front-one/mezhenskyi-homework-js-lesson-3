;(function(){
    "use strict";

    function showRandom(){
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        alert(randomNumber);
    }
    showRandom();
    showRandom();

})();