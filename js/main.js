/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/

const generateList = (stringArray) => {
    const liList = stringArray
      .reduce(
        (prev, current) => `${prev}
      <li>${current}</li>`,
        ""
      )
      .trim();
  
    let htmlTemplate = `
    <ul>
      ${liList}
    </ul>`;
  
    return htmlTemplate;
  };
  
  console.log(generateList(["első", "második", "harmadik"]));