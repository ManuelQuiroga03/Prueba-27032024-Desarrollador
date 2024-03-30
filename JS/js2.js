const txt3 = document.getElementById("txt3");
const texto2 = `
function formatDuration(seconds) {
    const units = {
        segundo: 1,
        minuto: 60,
        hora: 3600,
        día: 86400,
        año: 31536000,
    };
    const components = [];
    if (seconds === 0) {
        return "ahora";
    }
    for (const unit of Object.keys(units).reverse()) {
        const unitValue = units[unit];
        const amount = Math.floor(seconds / unitValue);
        if (amount > 0) {
        components.push(\`\${amount} \${unit}\${amount > 1 ? "s" : ""}\`);
        seconds -= amount * unitValue;
        }
    }
    if (components.length === 1) {
        return components[0];
    } else {
        return components.join(", ").replace(/,([^,]*)$/, " y\$1");
    }
}
`;

//Función para convertir los segundos a un formato
function formatDuration(seconds) {
    // Unidades de tiempo y sus valores en segundos
    const units = {
        segundo: 1,
        minuto: 60,
        hora: 3600,
        día: 86400,
        año: 31536000,
    };

    // Array para almacenar los componentes de la duración formateada
    const components = [];

    // Manejar el caso especial de 0 segundos
    if (seconds === 0) {
        return "ahora";
    }

    // Recorremos las unidades de tiempo en orden descendente
    for (const unit of Object.keys(units).reverse()) {
        const unitValue = units[unit];
        const amount = Math.floor(seconds / unitValue);

        if (amount > 0) {
        // Agregamos el componente a la lista
        components.push(`${amount} ${unit}${amount > 1 ? "s" : ""}`);
        seconds -= amount * unitValue;
        }
    }

    // Devolvemos la cadena formateada
    if (components.length === 1) {
        return components[0];
    } else {
        return components.join(", ").replace(/,([^,]*)$/, " y$1");
    }
}

//Test para ejercicio 2
function runTests2() {
    const testCases = [
        { input: 0, expected: "ahora" },
        { input: 62, expected: "1 minuto y 2 segundos" },
        { input: 3662, expected: "1 hora, 1 minuto y 2 segundos" },
        { input: 123456789, expected: "3 años, 246 días, 17 horas, 39 minutos y 29 segundos" }
        ];
    
        const resultsTable = document.getElementById("resultsBody");
    
        for (let i = 0; i < testCases.length; i++) {
        const { input, expected } = testCases[i];
        const result = formatDuration(input); // Convertir el input usando la función formatDuration
        const row = resultsTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.textContent = `Test ${i + 1}`;
        cell2.textContent = input;
        cell3.textContent = result;
        }
    
        const resultsTableElement = document.getElementById("resultsTable");
        resultsTableElement.style.display = "block";
}



//Botón ejercicio 2
function showTxt2() {
    const txt2 = document.getElementById('txt2');
    const textoConSaltosDeLinea2 = texto2.replace(/\n/g, "<br>");
    const resultsTable = document.getElementById('resultsTable');
    
    if (txt2.style.display === "none") {
    txt2.style.display = "block";
    resultsTable.style.display = "none";
    } else {
    txt2.style.display = "none";
    resultsTable.style.display = "block";
    runTests2();
    }
    
    btn2.textContent = resultsTable.style.display === "none" ? "Probar" : "Ver código";
    txt2.innerHTML = textoConSaltosDeLinea2; // Asignar el texto al elemento <p> con saltos de línea

}

// Ejemplos de uso
// console.log(formatDuration(0)); // "ahora"
// console.log(formatDuration(62)); // "1 minuto y 2 segundos"
// console.log(formatDuration(3662)); // "1 hora, 1 minuto y 2 segundos"
// console.log(formatDuration(123456789)); // "3 años, 246 días, 17 horas, 39 minutos y 29 segundos"
