// Funzione per generare un numero casuale tra un minimo e un massimo inclusi
function generaNumeroCasuale(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

  // Funzione per generare il codice CP casuale con 5 numeri
    function generaCodiceCP() {

        let codiceCP = "";

        for (let i = 0; i < 5; i++) {

        codiceCP += Math.floor(Math.random() * 10);

        }

        return codiceCP;
}

  // Funzione per calcolare il prezzo del biglietto
function calcolaPrezzo() {
    // Valori inseriti dall'utente
    let km = parseFloat(document.getElementById("km").value);
    let eta = parseInt(document.getElementById("eta").value);
    let nomeCognome = document.getElementById("nomeCognome").value;

    // Calcola il prezzo in base ai Km
    let prezzo = km * 0.21;

    // Sconti
    let offerta = "Tariffa Standard";
    if (eta < 18) {
    prezzo *= 0.8; // Sconto del 20% per i minorenni
    offerta = "Tariffa Under 18 | Sconto20% |";
    } 
    else if (eta >= 65) {
    prezzo *= 0.6; // Sconto del 40% per gli over 65
    offerta = "Tariffa Over 65 | Sconto40% |";
    }

    // Numeri casuali per la carrozza e il codice CP
    let carrozza = generaNumeroCasuale(1, 20);
    let codiceCP = generaCodiceCP();

    // Visualizza il nome del passeggero
    document.getElementById("nomePasseggero").textContent = nomeCognome;

    // Aggiorna l'offerta, carrozza, codice CP e il prezzo del biglietto
    document.getElementById("offerta").textContent = offerta;
    document.getElementById("carrozza").textContent = carrozza;
    document.getElementById("codiceCP").textContent = codiceCP;
    document.getElementById("prezzo").textContent = prezzo.toFixed(2) + " €";
}

  // Funzione per resettare i campi del modulo
function resetCampi() {
    document.getElementById("nomeCognome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("eta").value = "";
    document.getElementById("nomePasseggero").textContent = "Nome del passeggero";
    document.getElementById("offerta").textContent = "Tariffa Standard";
    document.getElementById("carrozza").textContent = "N/A";
    document.getElementById("codiceCP").textContent = "N/A";
    document.getElementById("prezzo").textContent = "Prezzo Biglietto";
}

// pulsante "Genera"
document.getElementById("genera").addEventListener("click", calcolaPrezzo);

// pulsante "Annulla"
document.getElementById("annulla").addEventListener("click", resetCampi);
