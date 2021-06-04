//Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true/false).
//TIP: No accedas a 'id' con punto (.) o con corchetes ([]).
const user = {
  name: "Javi",
  age: 31,
};
const user1 = {
  id: 12,
  name: "Oscar",
  age: 36,
};

const hasId = (user) => (user.id ? true : false);

console.log(hasId(user));
console.log(hasId(user1));

//Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.
const teachers = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];

const head = ([first]) => first;

console.log(head(teachers));

//Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los elementos menos el primero.
//TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.
const tail = ([, ...rest]) => rest;

console.log(tail(teachers));

//Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el primer elemento ha sido colocado en la última posición.
//TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.
const swapFirstToLast = ([first, ...rest]) => {
  const result = rest;
  result.push(first);
  return result;
};

console.log(swapFirstToLast(teachers));

//Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto la propiedad id si la hubiera.
//TIP: No modifiques el objeto de entrada. Piensa en destructuring y rest.
const excludeId = ({ id, ...rest }) => rest;

console.log(excludeId(user));
console.log(excludeId(user1));

//Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array filtrado con aquellas palabras que empiecen por a.
const wordsArray = ["camion", "alfombra", "maceta", "radio", "amuleto"];

const wordsStartingWithA = (array) =>
  array.filter((word) => word[0] === "a" || word[0] === "A");

console.log(wordsStartingWithA(wordsArray));

//Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la concatenación de todos, separados por |.

const concat = (...string) => string.join("|");

console.log(concat("perro", "gato", "camello", "tortuga"));

//Implementa una función llamada multArray que admita un array de números (arr) y otro parámetro que sea un número (x) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.

const arr = [1, 2, 3, 4, 5, 6, 7];

const multArray = (array, x) => array.map((array) => array * x);

console.log(multArray(arr, 3));

//Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el producto de todos ellos.

const calcMult = (...numbers) =>
  numbers.reduce((acc, numbers) => acc * numbers, 1);

console.log(calcMult(1, 2, 3, 4, 5));

//Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido intercambiado por el segundo.
//TIP: No modifiques el array de entrada original.

const swapFirstSecond = ([first, second, ...rest]) => [second, first, ...rest];

console.log(swapFirstSecond(arr));

//Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como un carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.
//TIP: No utilices bucles. No accedas al primer carácter con corchetes ([]).

array1 = ["casa", "camion", "cabaña", "coche"];
array2 = ["casa", "camion", "perro", "coche", "carro"];
array3 = ["casa", "camion", "perro", "coche", "carro", "barco"];
array4 = ["casa", "camion", "perro", "coche", "bici"];

const firstEqual = (x, [...array]) => array.every((string) => string[0] === x);

console.log(firstEqual("c", array1));
console.log(firstEqual("c", array2));

//Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.

const longest = (...array) => {
  array.sort((a, b) => b.length - a.length);
  return array[0];
};

console.log(longest(array1, array2, array3, array4));

//Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string.

const searchInStringV1 = (string, char) => {
  const entry = Array.from(string);
  return entry.reduce((acc, aux) => {
    if (aux === char) acc++;
    return acc;
  }, 0);
};

console.log(searchInStringV1("peqweqwe43oooodrro", "o"));

//Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2, encontrando otra alternativa sin usar reduce.

const searchInStringV2 = (string, char) => {
  const entry = Array.from(string);
  const exit = entry.filter((aux) => aux === char);
  return exit.length;
};

console.log(searchInStringV2("peqweqwe43oooodrro", "o"));

//Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas alfabéticamente.

const sortCharacters = (string) => Array.from(string).sort().join("");

console.log(sortCharacters("peqweqwe43oooodrro"));

//Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.

const shout = (...string) =>
  string
    .map((aux) => {
      const char = aux.toUpperCase();
      return char;
    })
    .map((aux1) => "¡" + aux1 + "!")
    .join("");

console.log(shout("delfin", "gato", "perro", "caballo"));

//A. LISTA DE LA COMPRA

const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  {
    category: "Carne y Pescado",
    product: "Pechuga pollo",
    price: 3.75,
    units: 2,
  },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  {
    category: "Carne y Pescado",
    product: "Secreto ibérico",
    price: 5.75,
    units: 2,
  },
];

//A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.

const addIva = (shoppingCart) =>
  shoppingCart.map((shop) => {
    const iva = shop.price * 0.21;
    return { ...shop, iva };
  });

console.log(addIva(shoppingCart));

//B. Ordena la lista de más a menos unidades.

const sortByUnits = (shoppingCart) =>
  shoppingCart.sort((a, b) => b.units - a.units);

console.log(sortByUnits(shoppingCart));

//C. Obtén el subtotal gastado en droguería.

const howMuch = (shoppingCart) =>
  shoppingCart
    .filter((shop) => shop.category === "Droguería")
    .reduce((acc, shop) => acc + shop.price * shop.units, 0);

console.log(howMuch(shoppingCart));

//D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.

const showShoppingCart = (shoppingCart) =>
  shoppingCart
    .sort((a, b) => (a.category > b.category ? 1 : -1))
    .map(
      (shop) => shop.product + " -> Precio Total: " + shop.price * shop.units
    )
    .join("\n");

console.log(showShoppingCart(shoppingCart));
