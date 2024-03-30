const txt1 = document.getElementById('txt1');
const texto = `
function validarParentesis(cadena) {
  const pila = [];

  for (const caracter of cadena) {
    if (caracter === "(") {
      pila.push(caracter);
    } else if (caracter === ")") {
      if (!pila.length) {
        return false;
      }
      pila.pop();
    }
  }
  return !pila.length;
}`;



function validarParentesis(cadena) {
  // Pila para almacenar los paréntesis abiertos
  const pila = [];

  // Recorremos la cadena caracter por caracter
  for (const caracter of cadena) {
    // Si encontramos un paréntesis abierto, lo apilamos
    if (caracter === "(") {
      pila.push(caracter);
    } else if (caracter === ")") {
      // Si encontramos un paréntesis cerrado, verificamos que la pila no esté vacía
      if (!pila.length) {
        // Si la pila está vacía, el orden de los paréntesis no es válido
        return false;
      }

      // Si la pila no está vacía, desapilamos el último paréntesis abierto
      pila.pop();
    }
  }

  // Si la pila está vacía al final de la cadena, el orden de los paréntesis es válido
  return !pila.length;
}

//Test para ejercicio 1
function runTests() {
  const testCases = ["()", ")(()))", "(", "(())((()())())"];
  const testResults = testCases.map(testCase => ({
    input: testCase,
    result: validarParentesis(testCase)
  }));

  const resultsTable0 = document.getElementById("resultsBody0");

  // Limpiar la tabla antes de agregar nuevos resultados
  resultsTable0.innerHTML = "";

  // Iterar sobre los resultados y agregar cada uno como una fila a la tabla
  for (let i = 0; i < testResults.length; i++) {
    const row = resultsTable0.insertRow();
    const { input, result } = testResults[i];
    row.insertCell(0).textContent = `Test ${i + 1}`;
    row.insertCell(1).textContent = `"${input}"`;
    row.insertCell(2).textContent = result;
  }

  // Mostrar la tabla
  const resultsTableElement0 = document.getElementById("resultsTable0");
  resultsTableElement0.style.display = "block";
}


//Botón ejercicio 1
function showTxt1 (){
  const txt0 = document.getElementById('txt0');
  // Reemplazar los saltos de línea con elementos <br>
  const textoConSaltosDeLinea = texto.replace(/\n/g, "<br>");

  if (txt0.style.display === "none") {
    txt0.style.display = "block";
    resultsTable0.style.display = "none";
  } else {
    txt0.style.display = "none";
    resultsTable0.style.display = "block";
    runTests();
  }
  
  // Cambiar el texto del botón
  btn1.textContent = resultsTable0.style.display === "none" ? "Probar" : "Ver código";
  txt0.innerHTML = textoConSaltosDeLinea; // Asignar el texto al elemento <p> con saltos de línea
}


// console.log(validarParentesis("()")); // true
// console.log(validarParentesis(")(()))")); // false
// console.log(validarParentesis("(")); // false
// console.log(validarParentesis("(())((()())())")); // true
