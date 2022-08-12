/*
- A `js/second.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként kap egy tetszőleges 
típusú elemeket tartalmazó tömböt és egy tetszőleges primitív értéket!
- A függvény neve `checker` legyen!
- A függvény __visszatérési értéke__ egy objektum, amely a következő 
property-ket tartalmazza:
- `exists`: Értéke true/false attól függően, hogy a második paraméterként 
megadott érték megtalálható-e a tömbben
- `index`: Értéke egy szám; ha a második paraméterként megadott érték 
megtalálható a tömbben, akkor a tömbben lévő indexe, 
ha nem, akkor -1 legyen az értéke
- `allElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömb minden eleme number típusú-e vagy sem
- `someElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömbben van-e number típusú elem vagy sem
*/
"use strict";
const checker = (someArray, a) => {
    return {
        exists: someArray.find((item) => item === a) ? true : false,
        index: someArray.find((item) => item === a)
         ? someArray.findIndex((item) => item === a)
         : -1,
        allElementsAreNumbers: someArray.some((item) => isNaN(item)) ? false :true,
        someElementsAreNumbers: someArray.every((item) => isNaN(item))
         ? false
         : true,
    };
};

console.log(checker([8, 22, "asd"], 6));





// const checker = (anyArray, a) => {
//     return {
//       exists: anyArray.find((item) => item === a) ? true : false,
//       index: anyArray.find((item) => item === a)
//         ? anyArray.findIndex((item) => item === a)
//         : -1,
//       allElementsAreNumbers: anyArray.some((item) => isNaN(item)) ? false : true,
//       someElementsAreNumbers: anyArray.every((item) => isNaN(item))
//         ? false
//         : true,
//     };
//   };
  
//   console.log(checker([4, 66, "gsd"], 4));