/*
There is a JSON with recipes. Make a call and get the following data from it:
All Desserts
Get the names of recipes with more than 30 reviews          DONe
All recipes that use Cinnamon as an ingredient              DONE
Recipes that are served as both Lunch and Dinner            Donee
The ingredients needed for "Mango Salsa Chicken" dish       DONE
Calculate the average number of calories for all American cusine recipes  DONE?
The average cooking time of all pasta recipes       DONE
Find the recipe with the lowest number of reviews   DONE

*/

fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((data) => {
    const recipes = data.recipes.filter((recipe) => recipe.reviewCount > 30);
    console.log(recipes);

    const recipesWithCinnamon = data.recipes.filter((recipe) =>
      recipe.ingredients.includes("Cinnamon")
    );
    console.log(recipesWithCinnamon);

    const lunchAndDinner = data.recipes.filter(
      (recipe) =>
        recipe.mealType.includes("Lunch") && recipe.mealType.includes("Dinner")
    );
    console.log(lunchAndDinner);

    const mangoSalsaChicken = data.recipes.filter(
      (recipe) => recipe.name === "Mango Salsa Chicken"
    );
    console.log(mangoSalsaChicken);

    const justIng = mangoSalsaChicken.map((recipe) => recipe.ingredients);
    console.log(justIng);

    const averageAmerican = data.recipes.filter(
      (recipe) => recipe.cuisine === "American"
    );
    console.log(averageAmerican); // iskreno ima samo eden American cuisine ne znam sto bi presmetala vo average calories zatoa samo ova go vrakjam bidejki e edno

    const pastaRecipes = data.recipes.filter((recipe) =>
      recipe.name.includes("Pasta")
    );
    const totalCookingTime = pastaRecipes.reduce(
      (acc, recipe) => acc + recipe.cookTimeMinutes,
      0
    );

    const averageCookingPasta = totalCookingTime / pastaRecipes.length;

    console.log(averageCookingPasta);

    const recipeWithFewestReviews = data.recipes.reduce((minRecipe, recipe) => {
      return recipe.reviewCount < minRecipe.reviewCount ? recipe : minRecipe;
    });

    console.log(recipeWithFewestReviews);

    const dessertRecipes = data.recipes.filter((recipe) =>
      recipe.mealType.includes("Dessert")
    );

    console.log("All Dessert Recipes:", dessertRecipes);
  });
