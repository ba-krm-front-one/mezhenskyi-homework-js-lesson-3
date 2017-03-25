;(function(){
    "use strict";
    function showNumber() {
        let number;

        do {
            number = prompt("Введите число больше 100: ", '100');
        } while (number <= 100 && number != null);
    }
    showNumber();

})();