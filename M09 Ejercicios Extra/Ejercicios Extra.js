/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var ArrayOfArrays = []
   var claves = (Object.keys(objeto))
   var valores = (Object.values(objeto))
   for (var i = 0; i < claves.length; i++) {
      var newArray = [claves[i], valores[i]]
      ArrayOfArrays.push(newArray)
   }
   return ArrayOfArrays
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var keysAndValues = {}
   var alphabetic = string.split("").sort()

   for (var i = 0; i < alphabetic.length; i++) {
      var letra = alphabetic[i];
      if (!keysAndValues[letra]) {
         keysAndValues[letra] = 1;
      } else {
         keysAndValues[letra]++;
      }
   }
   return keysAndValues
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrayDelString = string.split("")
   var upperCaseLetters = []
   var lowerCaseLetters = []
   for (var i = 0; i < arrayDelString.length; i++) {
      var letra = arrayDelString[i]
      if (letra === letra.toUpperCase()) {
         upperCaseLetters.push(letra)
      } else {
         lowerCaseLetters.push(letra)
      }
   }
   return (upperCaseLetters.join("") + lowerCaseLetters.join(""))
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var theWord = frase.split(" ")
   var nuevaFrase = []
   for (var i = 0; i < theWord.length; i++) {
   var theMirror = theWord[i].split("").reverse().join("")
   nuevaFrase.push(theMirror)
   }
   var theJoin = nuevaFrase.join(" ")
   return theJoin
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var number = numero.toString()
   var arrayOfNumbers = number
   var arrayOfNumbersMirror = number.split("").reverse().join("")
   if (arrayOfNumbers === arrayOfNumbersMirror) {
      return ("Es capicua")
   } else {
      return ("No es capicua")
   }
}
function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arrayofString = string.split("")
   var stringSinLetras = []
   for (var i = 0; i < arrayofString.length; i++) {
      var letra = arrayofString[i]
      if (letra !== "a" && letra !== "b" && letra !== "c") {
         stringSinLetras.push(letra)
      }
   }
   return stringSinLetras.join("")
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var acumuladorDeLongitudes = []
   for (var i = 0; i < arrayOfStrings.length; i++) {
      var cadenaActual = arrayOfStrings[i]
      acumuladorDeLongitudes.push(cadenaActual);
   }
   var nuevoPeroOrdenado = acumuladorDeLongitudes.sort((a, b) => a.length - b.length);
   return nuevoPeroOrdenado
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var acumuladorIgualitario = []
   for (var i = 0; i < array1.length; i++) {
      var element1 = array1[i]
      for (var j = 0; j < array2.length; j++) {
         var element2 = array2[j]
         if (element1 === element2) {
            acumuladorIgualitario.push(element1)
         }
      }   
   }
return acumuladorIgualitario
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
