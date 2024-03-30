const txt4 = document.getElementById("txt4");
const texto3 = `
function movie(card, ticket, perc) {
    let n = 1;
    let systemA = n * ticket;
    let systemB = card;

    while (Math.ceil(systemB) >= systemA) {
        n++;
        systemA += ticket;
        systemB += ticket * Math.pow(perc, n);
        systemB = Math.ceil(systemB);
    }
    console.log(systemA, 'sistema A');
    console.log(systemB, 'sistema B');
    return n;
}
`;

//Función para obtener los tickets por sistema
function movie(card, ticket, perc) {
    let n = 1; // Inicializar el número de veces que ha ido al cine como 1
    let systemA = n * ticket; // Calcular el costo del sistema A (comprar un boleto cada vez)
    let systemB = card; // Inicializar el saldo de la tarjeta del sistema B

    // Mientras el saldo de la tarjeta del sistema B sea mayor o igual al costo del sistema A
    while (Math.ceil(systemB) >= systemA) {
        n++; // Incrementar el número de veces que ha ido al cine
        systemA += ticket; // Incrementar el costo del sistema A con el precio del boleto
        systemB += ticket * Math.pow(perc, n); // Incrementar el saldo del sistema B con el precio del boleto actualizado según el descuento
        systemB = Math.ceil(systemB); // Redondear el saldo del sistema B al siguiente dólar
    }

    // Devolver el número de veces que ha ido al cine necesario para que el sistema B sea más barato que el sistema A
    // console.log(systemA, 'sistema A');
    // console.log(systemB, 'sistema B');
    return n;
}



function runTests3() {
    const testCases = [
        { card: 500, ticket: 15, perc: 0.9, expected: 43 },
        { card: 100, ticket: 10, perc: 0.95, expected: 24 }
        ];
    
        const resultsTable2 = document.getElementById("resultsBody2");
    
        for (let i = 0; i < testCases.length; i++) {
        const { card, ticket, perc, expected } = testCases[i];
        const result = movie(card, ticket, perc); // Ejecutar la función movie con los parámetros dados
        const row = resultsTable2.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.textContent = `Test ${i + 1}`;
        cell2.textContent = `${card}, ${ticket}, ${perc}`;
        cell3.textContent = result;
        }
    
    const resultsTableElement2 = document.getElementById("resultsTable2");
    resultsTableElement2.style.display = "block";
}


function showTxt3() {
    const txt4 = document.getElementById('txt4');
    const textoConSaltosDeLinea3 = texto3.replace(/\n/g, "<br>");
    const resultsTable2 = document.getElementById('resultsTable2');
    
    if (txt4.style.display === "none") {
    txt4.style.display = "block";
    resultsTable2.style.display = "none";
    } else {
    txt4.style.display = "none";
    resultsTable2.style.display = "block";
    runTests3();
    }
    
    btn3.textContent = resultsTable2.style.display === "none" ? "Probar" : "Ver código";
    txt4.innerHTML = textoConSaltosDeLinea3; // Asignar el texto al elemento <p> con saltos de línea

}

// Ejemplos de uso
// console.log(movie(500, 15, 0.9)); // debería devolver 43
// console.log(movie(100, 10, 0.95)); // debería devolver 24
