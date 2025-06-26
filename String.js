let str = 'String Functions';
console.log("Original String: ", str);
const s = (str.length)
console.log("string length:", s);
const r = str.toUpperCase("")
console.log("string Uppercase:", r);
const n = str.toLowerCase("")
console.log("String lowercase:", n)
const k = str.trim(5)
console.log("string trim:", k)
const splitStr = str.split("u")
console.log("Split string:", splitStr)
const strArr = ["Str", "ing", "Func", "tions"]
const joinString = strArr.join("S")
console.log("join string:", joinString)
const stringIndex = str.indexOf("F")
console.log("String index:", stringIndex)
const replaceString = str.replace("String", "Function")
console.log("After replce String with Function:", replaceString)
const includeString = str.includes("Demo")
console.log("String nOt Present:", includeString)
const includeString1 = str.includes("Str")
console.log("String Present: ", includeString1)