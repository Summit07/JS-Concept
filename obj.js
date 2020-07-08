const obj = {
    a : 1,
    inner : {
        k : "banana"
    }
}

// Object.seal(obj)
// Object.freeze(obj)
// obj.name1 = "sumit";
// let key = "address";
// obj[key] = "John Wick";

let { a, inner } = obj;

let newObj = { new : "prop", inner};
console.log(inner);