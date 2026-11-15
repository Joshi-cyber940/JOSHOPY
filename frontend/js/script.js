console.log("JOSHOPY Javascript is connected!")

//select all product cards on the page
const productCards = document.querySelectorAll(".grid-container");

//Go through each product card
productCards.forEach(function(productCard){

  //find the quantity selector inside this product card
  const quantitySelector = productCard.querySelector(".quantity");

  //find the buttons inside the product card
  const buttons = productCard.querySelectorAll(".click-button");

  //the first button is the minus button
  const minusButton = buttons[0];

  //the second button is the plus button
  const plusButton = buttons[1];

  //make the minus button work
  minusButton.addEventListener("click", function() {

    //get the current quantity
    let quantity = Number(quantitySelector.value);

    //decrease the quantity but don't go below 1
    if(quantity > 1){
      quantitySelector.value = quantity - 1;
    }
  });

  //make the plus button work
  plusButton.addEventListener("click", function() {

    //get the current quantity
    let quantity = Number(quantitySelector.value);

    //increase the quantity but don't go above 1
    if(quantity < 11){
      quantitySelector.value = quantity + 1;
    }
  });
});
  