

// Code 1

// Function to check if a person can buy beer based on their age and available money
function canBuyBeer(age, money) {
  // We are checking if the age is 21 or older and the money is at least 20
  if (age >= 21 && money >= 20) {
    // Return true if the conditions are met, indicating the person can buy beer
    return true;
  }
  // If the conditions are not met, return false, indicating the person cannot buy beer
  return false;
}

// Code 2

function should_show_image(itemIndex, article, showAllImages) {
  // We are checking if the itemIndex is 0, 1, or 2
  // If it is, check if the article has a valid imageUrl
  // Return true if imageUrl exists, otherwise false
  return [0, 1, 2].includes(itemIndex)
    ? !!article.imageUrl
    :
    // If the itemIndex is not 0, 1, or 2
    // We are checking if showAllImages is true
    // If it is, check if the article has a valid imageUrl
    // Return true if imageUrl exists, otherwise false
    showAllImages
      ? !!article.imageUrl
      :
      // If showAllImages is false and itemIndex is not 0, 1, or 2
      // Return false
      false;
}



// Code 3

function getArea(shape, width, height, radius) {
  // We are checking the shape parameter to determine the calculation to perform
  if(shape === 'circle'){
    //We are calculating the area of a circle using the formula: π * radius^2
    return Math.PI * radius * radius;
  } else if(shape === 'square') {
    // We are calculating the area of a square using the formula: side * side
    return width * width;
  } else if(shape === 'rectangle') {
    // We are calculating the area of a rectangle using the formula: length * width
    return width * height;
  }
  
  // If none of the specified shapes is provided, throw an error
  throw new Error("Shape not managed");
}

// Code 4

// Function to retrieve the symbol for a given chemical name
function getSymbol(name) {
  // Retrieve the symbol from the chemicalSymbols object using the provided name
  const symbol = chemicalSymbols[name];

  // If a symbol is found for the given name, return it
  if (symbol) {
    return symbol;
  }

  // If no symbol is found, log an error message indicating the symbol was not found for the given name
  console.log(`getSymbol:: symbol not found for ${name}`);

  // Return null to indicate that no symbol was found
  return null;
}

// Code 5

function getDisplayImage(article, watermark) {
  let image
  if(article.image && article.displayImage) {
    if(watermark){
      image = applyWatermark(article.image, watermark)
    } else {
      image = article.image
    }
  } else {
    image = null
  }

  return image
}
