
//WeakMap
//1. Tylko obiekty (i funkcje) mogą być kluczem
//2. Brak możliwości iterowania
//3. Wartość zostaje usunięta w chwili usunięcia klucza
//4. Wykorzystanie: Zmienne prywatne oraz przechowywanie informacji w obiektach DOM

let weak = new WeakMap();
let objKey={aa:"123"}
weak.set(objKey, "aaaaValue")
console.log(weak.get(objKey)) //aaaaValue







