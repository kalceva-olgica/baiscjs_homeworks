/*
There is a JSON with products. Make a call and get the following data from it:
All beauty products, ordered by price descending            XXXXXXX
All the products that have stock more than 50               XXXXXXX
All products that have a lifetime warranty and rating of 5  XXXXXXX
The average rating of all products in category "furniture"  XXXXXXX
The name of the highest rated beauty product                XXXXXXX
Find the product with the highest price                     XXXXXXX
Calculate the average rating from the reviews of products with id 22" XXXXXXXX
Return the title and description of all products that have discounted percentage above 10 XXXXXXX
 */

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const products = data.products.filter((product) => product.stock > 50);
    console.log(products);

    const lifetimeRatingProducts = data.products.filter(
      (product) =>
        product.warrantyInformation === "Lifetime warranty" ||
        product.rating === 5
      // ovde koga staviv &&(and) ne mi vrati nisto bidejki nema i lifetime warranty i rating 5 , zatoa staviv ||(ili) za da mi vrati barem nesto
    );
    console.log(lifetimeRatingProducts);

    const furniture = data.products.filter(
      (product) => product.category === "furniture"
    );
    const totalRating = furniture.reduce(
      (acc, product) => acc + product.rating,
      0
    );
    const averageRating =
      furniture.length > 0 ? totalRating / furniture.length : 0;
    console.log(averageRating);

    const beautyProducts = data.products.filter(
      (product) => product.category === "beauty"
    );

    const highestRatedBeautyProduct = beautyProducts.reduce((best, product) =>
      product.rating > best.rating ? product : best
    );

    console.log(highestRatedBeautyProduct);

    const highestPricedProduct = data.products.reduce(
      (mostExpensive, product) =>
        product.price > mostExpensive.price ? product : mostExpensive,
      data.products[0]
    );

    console.log(highestPricedProduct);

    const specificProduct = data.products.find((product) => product.id === 22);

    if (
      specificProduct &&
      specificProduct.reviews &&
      specificProduct.reviews.length > 0
    ) {
      const totalRating = specificProduct.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      const averageRating = totalRating / specificProduct.reviews.length;

      console.log(`Average Rating for Product ID 22:`, averageRating);
    } else {
      console.log("No reviews found for Product ID 22.");
    }

    const discountedProducts = data.products
      .filter((product) => product.discountPercentage > 10)
      .map((product) => ({
        title: product.title,
        description: product.description,
      }));
    console.log(discountedProducts);

    const allBeautyProducts = data.products
      .filter((product) => product.category === "beauty")
      .sort((a, b) => b.price - a.price);

    console.log(allBeautyProducts);
  })

  .catch((error) => console.error("Error fatching data:", error));
