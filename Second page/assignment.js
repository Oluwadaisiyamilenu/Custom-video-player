let paragraph = `THIS IS FULL STACK CLASS. WE HAVE RAN THROUGH HTML 
AND CSS CLASSES. WE ARE CURRENTLY ON VANILLA JAVASCRIPT, AND SO FAR,
 WE HAVE HAD ONLY THREE CLASSES IN JAVASCRIPT. THROUGHOUT THOSE THREE CLASSES,
 WE HAVE GONE THROUGH TOPICS LIKE HOW JAVASCRIPT WORKS, SYNTAX, VARIABLES,
  DATA TYPES AND TYPE COERCION, OPERATORS AND ARITHMETICS, STRING 
  AND NUMBER OPERATIONS/METHODS USING DOT NOTATION AND BRACKET NOTATION,
   AND STRING METHODS.`;

// 1. replace
let replaceResult = paragraph.replace("FULL STACK", "FULL-STACK");
console.log(replaceResult);

// 2. replaceAll
let replaceAllResult = paragraph.replaceAll("JAVASCRIPT", "JS");
console.log(replaceAllResult);

// 3. length
console.log(paragraph.length);

// 4. at
console.log(paragraph.at(0));
console.log(paragraph.at(-1));

// 5. padStart
let padStartResult = paragraph.padStart(paragraph.length + 5, "*");
console.log(padStartResult);

// 6. padEnd
let padEndResult = paragraph.padEnd(paragraph.length + 5, "*");
console.log(padEndResult);

// 7. normalize
let normalizeResult = paragraph.normalize();
console.log(normalizeResult);

// 8. search
let searchResult = paragraph.search("JAVASCRIPT");
console.log(searchResult);

// 9. toUpperCase
let upperResult = paragraph.toUpperCase();
console.log(upperResult);

// 10. toLowerCase
let lowerResult = paragraph.toLowerCase();
console.log(lowerResult);