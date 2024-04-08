// Quando l’utente fa click sul bottone submit del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.
//quindi aggiungi addEventListener però non "click" perché l'evento è un submit di un form!!
//in realtà puoi anche usare click ma devi riferirti al form!?

// Il prezzo finale è dato dal numero di ore * prezzo orario.
// sviluppo backend il prezzo orario è di 20.50€/l’ora
// sviluppo frontend il prezzo orario è di 15.30€/l’ora
// analisi progettuale il prezzo orario è di 33.60€/l’ora

// codice promozionale OPZIONALE tra i seguenti (crea un array)
// YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.

// Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.
// quindi aggiungi condizioni if else per i codici (con il metodo includes per l'array)
// e poi un alert se il codice non è valido

// Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro)
// quindi formatta di conseguenza




//provo a creare la funzione per capire se sta funzionando ciò che ho fatto

function calcolaPreventivo() {
    //si recupera prima l'input dell'utente
    const numeroOre = parseFloat(document.getElementById("numeroOre").value); //convertiamo stringa in numero decimale
    const work = document.getElementById("work").value; //.value proprietà per accedere al valore di un elemento HTML
    const promo = document.getElementById("promo").value;

//inizio definendo variabili e arrays che andrò a utilizzare nella funzione
// Object dei prezzi orari per i diversi tipi di lavoro
  const prezziOrari = {
    BD: 20.50,
    FD: 15.30,
    PA: 33.60
};

// Array dei codici promozionali validi
const codiciValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


//proseguo controllando che quello che inserisce l'utente sia valido
if (isNaN(numeroOre) || numeroOre <= 0) { //se non è un numero o è inferiore uguale a 0, alert!
    alert("Inserisci un numero valido di ore");
    console.log(numeroOre)
}

// Verifica se il tipo di lavoro inserito è valido
if (!prezziOrari[work]) { //se non esiste un prezzo orario per il lavoro specificato, allora non hai inserito un lavoro, alert!
    alert("Seleziona il tipo di lavoro");
    console.log(work)
}

// Proviamo a calcolare il prezzo senza sconto
const prezzoSenzaSconto = prezziOrari[work] * numeroOre;
console.log(prezzoSenzaSconto)

// Calcola il prezzo finale e applica lo sconto se necessario
let prezzoFinale;
if (codiciValidi.includes(promo)) { //usiamo il metodo includes per controllare dentro all'array
    prezzoFinale = prezzoSenzaSconto - (prezzoSenzaSconto * 0.25);
    console.log(prezzoFinale)
} else {
    alert("Il codice promozionale inserito non è valido");
    prezzoFinale = prezzoSenzaSconto;
    console.log(prezzoSenzaSconto)
}

// Formattiamo il prezzo finale come stringa con simbolo dell'euro e due decimali
    const prezzoFormattato = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(prezzoFinale);

// dobbiamo mostrare il prezzo finale nel div specificato nell'HTML tramite il metodo innerHTML
   document.getElementById("Result").innerHTML = "Prezzo finale: <br>" + prezzoFormattato; //creiamo una stringa
};

//in tutto questo non avevo aggiunto la prima cosa fondamentale per capire se ciò che sto facendo è giusto ovvero l'addEventListener
//tramite il DOM recupero il pulsante calcolaPreventivo
const calcolaPreventivoButton = document.getElementById("calcolaPreventivo");

// Aggiungo un listener sull'evento del click sul pulsante 
document.getElementById("calcolaPreventivo").addEventListener("click", function(event) {
    event.preventDefault(); //questo serve per impedire il comportamento predefinito del pulsante (ricaricamento della pagina) che invece si azionerà solo quando io lo clicco (o l'utente in questo caso)
    //function(event) è una funzione anonima che si riferisce all'evento di click e per la quale utilizziamo poi il metodo preventDefault
    calcolaPreventivo() //alla fine richiamiamo la funzione cosicché venga eseguita solo quando l'utente clicca
});