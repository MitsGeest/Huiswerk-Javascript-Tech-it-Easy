// Opdracht 1 - Array Methoden
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.


// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
// ======= STAPPENPLAN =======
// [X] 1.   Maak een variable waarin de nieuwe array opgeslagen kan worden
// [] 2.   schrijf de array map methode uit, met een parameter (liefst naam enkelvoud van orginele array)
// [X] 3.   Gebruik de puntnotatie .type in de return value (parameter.type)
// [X] 4.   Console log de functie
// [X] 5.   Check in de console van de browser of het gelukt is.


const tvType = inventory.map((banaan) => {
    return banaan.type;
    });
console.log(tvType);

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
// Log de uitkomst in de console.
// ======= STAPPENPLAN =======
// [X] 0.   Bepaal welke tv's uitverkocht zijn door de 'original stock' te vergelijken met 'sold' in de inventory array.
//         Als de getallen gelijk zijn is het product uitverkocht.
// [X] 1.   Schrijf een functie met array filter methode. Maak een variable ('soldOut') waarin de nieuwe array opgeslagen kan worden
// [] 2.   Gebruik een herkenbare parameter voor de functie.
// [X] 3.   Vergelijk de twee object properties 'originalStock' en 'sold' met elkaar
// [X] 5.   Als beide object properties gelijk zijn moet het hele object in de nieuwe array geplaatst worden
// [X] 6.   Return
// [X] 7.   Console log
// [X] 8.   Check in browser of het werkt.

const soldOut = inventory.filter((banaan) => {

    return banaan.originalStock === banaan.sold;
});

console.log(soldOut);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
// Log de uitkomst in de console.
// ======= STAPPENPLAN =======
// [X] 0.   Bepaal welke tv's over ambilight beschikken door te checken of ambilight = true waar is
//
// [X] 1.   Doe alles wat je bij 1b ook gedaan hebt, maar in plaats van twee object properties te vergelijken check je nu of
//          de object property ambilight van het object 'options' waar is. Als dat zo is moet het hele object in de nieuwe array.
// [X] 2.   Console log
// [X] 3.   Check in de browser of het werkt.

const ambilight = inventory.filter((banaan) => {
    return banaan.options.ambiLight === true;
});

console.log(ambilight);

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
// Log de uitkomst in de console.

// [X] 0.   Gebruik de array sort methode
// [X] 1.   Zorg dat de sort methode op basis van de object property 'price' van laag naar hoog sorteert
// [X] 2.   Console log
// [X] 3.   Check in browser of het werkt.

inventory.sort((a, b) => a.price - b.price);
console.log(inventory);