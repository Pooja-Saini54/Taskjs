
const fruit = [
    { Name: "Apple", count: 7 },
    { Name: "Banana", count: 4 },
    { Name: "Orange", count: 4 },
    { Name: "Mango", count: 2 },
     {Name:"Apple",count:1}]
console.log("Simple Array :", fruit)

function addFruits(FruitAdd) {
    const fruitFound = fruit.find(item => item.Name === FruitAdd.Name);
    if (fruitFound) {
        fruitFound.count += 1
    }
    else {
        fruit.push(FruitAdd)
    }
}
addFruits({ Name: "Cherry", count: 1 })
addFruits({ Name: "Watermelon", count: 1 })
console.log("Before Updation", fruit)
addFruits({ Name: "Apple", count: 1 })
addFruits({ Name: "Papya", count: 1 })
addFruits({ Name: "Banana", count: 1 })
console.log("After Updation", fruit)