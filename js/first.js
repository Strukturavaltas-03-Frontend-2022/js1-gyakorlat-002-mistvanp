/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig
__térjen vissza__ az elemek egész számra kerekített összegével!
*/
"use strict";
const brutto = (numbArray) => {
    return Math.round(
        numbArray
            .map((item) => item * 1.27)
            .reduce((prevoiusValue, currentValue) => prevoiusValue + currentValue )
    );
};



console.log(brutto([1, 2, 3, 4, 5, 6, 7, 8]))







