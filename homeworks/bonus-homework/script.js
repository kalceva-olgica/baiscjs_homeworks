const recipeName = prompt("What is the name of your recipe?");

const numIngredients = parseInt(
  prompt("How many ingredients are needed for your recipe?") // parsteInt bidejki prompt ni vrakja string
);

const ingredients = [];
for (let i = 0; i < numIngredients; i++) {
  const ingredient = prompt(`Enter ingredient ${i + 1}:`);
  ingredients.push(ingredient); // dodavame ingradient na ingradients
}

const recipeContainer = document.getElementById("recipeContainer");
const heading = document.createElement("h1"); // dinamicki kreirame h1
heading.textContent = recipeName;
recipeContainer.appendChild(heading);

const list = document.createElement("ul");
for (let i = 0; i < ingredients.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = ingredients[i];
  list.appendChild(listItem);
}
recipeContainer.appendChild(list);
