;(function(){
    "use strict";

    function ucFirst() {
        let str = prompt('Введите слово в нижнем регистре: ', 'вася');
        let firstLetter = str.charAt(0);
        let upperChar = firstLetter.toUpperCase();
        let otherWords = str.slice(1);

        /* Или
        let newStr = str.charAt(0).toUpperCase() + str.slice(1);
         */

        return upperChar+otherWords;
    }

    alert(ucFirst());

})();