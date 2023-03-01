const frutas = ["🍌", "🍓", "🍍", "🍌", "🍉", "🍇"];

const fn = (item) => item === "🍌";

const bananas = frutas.find(fn);

console.log(bananas);