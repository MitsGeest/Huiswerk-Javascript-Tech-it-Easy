// Opdracht 2 - Elementen in de DOM plaatsen
// Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!
//
// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.


// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent.
// Log de uitkomst in de console.
//
// ======= STAPPENPLAN =======
// 0.   Tel op de een of andere manieren alle waarden van de object property 'sold' bij elkaar op. Ik gebruik hiervoor een functie
// 1.   Maak een forloop die de gehele array afgaat
// 2.   Schrijf wat er met de output moet gebeuren (optellen van waarden .sold)
// 3.   Return output
// 4.   Declareer een variabel die gelijkt is aan het aanroepen van de functie met argument 'inventory.
// 5.   Console log de variabel
// 6.   Check in de browser of het werkt.

function tvsSold(array){
    let output = 0;

    for (let i = 0; i < array.length; i++) {
        output = output + array[i].sold;
    }

    return output;
}

const tvsSoldOne = tvsSold(inventory);
console.log(tvsSoldOne);


// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
//
// ======= STAPPENPLAN =======
// 1.   HTML    - Zorg ervoor dat de plek waar het cijfer in de HTML code komt, een id heeft
// 2.   CSS     - Zorg dat diezelfde id in het css bestand de kleur groen heeft
// 3.   JS      - Declareer een variabel
// 4.   JS      - Stel de variabel gelijk aan document.getElementById (id = html id)
// 5.   JS      - stel dan de variabel.textContent gelijk aan de variabel met het antwoord uit vraag 2a

const amountSold = document.getElementById("tvs-sold");
amountSold.textContent = tvsSoldOne;



// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent.
// Log de uitkomst in de console.
//
// ======= STAPPENPLAN =======
// 1.   Zelfde for loop als 1a maar dan met object property 'originalStock'
// 2.   Log in console
// 3.   Check in de browser of het werkt.

function tvsBought(array){
    let output = 0;

    for (let i = 0; i < array.length; i++) {
        output = output + array[i].originalStock;
    }

    return output;
}

const tvsBoughtOne = tvsBought(inventory);
console.log(tvsBoughtOne);



// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
//
// ======= STAPPENPLAN =======
// [] 1.    Zelfde plan als bij 2b maar dan met data uit 2c.

const amountBought = document.getElementById("tvs-bought");
amountBought.textContent = tvsBoughtOne;



// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
//
// ======= STAPPENPLAN =======
// [] 1.    Declareer variabel 'toSell' die gelijk is aan de som 'aantal ingekochte tv's - aantal verkochte tv's'
// [] 2.    Zie verder 1b en 2d.


const toSell = tvsBoughtOne - tvsSoldOne

const amountToSell = document.getElementById("tvs-to-sell");
amountToSell.textContent = toSell;
