console.log("JOSHOPY cart.js is running!");

(() => {

    // Store the products that have been added to the cart
    const cartItems = new Map();

    // Get the cart badge and cart contents container
    const cartCount = document.querySelector("#cart-count");
    const cartContainer = document.querySelector("#cart-items");

    // Get all product cards
    const productCards = document.querySelectorAll(".grid-container");

    // Update the number displayed on the cart badge
    function updateCartCount() {

        if (cartCount) {
            cartCount.textContent = cartItems.size;
        }

    }

    // Display products inside the cart sidebar
    function displayCartItems() {

        if (!cartContainer) return;

        cartContainer.innerHTML = "";

        cartItems.forEach(function(product) {

            const item = document.createElement("div");
            item.classList.add("cart-item");

            const name = document.createElement("p");
            name.textContent = product.name;

            const quantity = document.createElement("p");
            quantity.textContent = "Quantity: " + product.quantity;

            item.append(name, quantity);

            cartContainer.appendChild(item);

        });

    }

    // Update the badge and sidebar whenever the cart changes
    function refreshCart() {

        updateCartCount();
        displayCartItems();

        // Notify other parts of the website that the cart changed
        document.dispatchEvent(
            new CustomEvent("joshopy:cart-updated", {
                detail: {
                    products: Array.from(cartItems.values())
                }
            })
        );

    }

    // Work with each product card
    productCards.forEach(function(card) {

        const productName = card.querySelector(".grid-details p");
        const quantitySelect = card.querySelector(".quantity");
        const quantityControls = card.querySelector(".quantity-controls");
        const addButton = card.querySelector(".add-cart-button");
        const updateButton = card.querySelector(".update-cart-button");
        const deleteButton = card.querySelector(".delete-cart-button");

        // Check that the required elements exist
        if (
            !productName ||
            !quantitySelect ||
            !quantityControls ||
            !addButton ||
            !updateButton ||
            !deleteButton
        ) {
            return;
        }

        const name = productName.textContent.trim();

        // Initially, the Update and Delete buttons stay hidden
        card.querySelector(".cart-actions").hidden = true;

        // ADD TO CART
        addButton.addEventListener("click", function() {

            const selectedQuantity = Number(quantitySelect.value);

            // Save the product and its selected quantity
            cartItems.set(name, {
                name: name,
                quantity: selectedQuantity
            });

            // Hide the quantity controls and Add to Cart button
            quantityControls.hidden = true;
            addButton.hidden = true;

            // Show Update and Delete
            card.querySelector(".cart-actions").hidden = false;

            // Start in normal, non-editing mode
            card.dataset.editing = "false";

            refreshCart();

        });

        // UPDATE BUTTON
        updateButton.addEventListener("click", function() {

            const isEditing = card.dataset.editing === "true";

            // First click: allow the customer to change the quantity
            if (!isEditing) {

                quantityControls.hidden = false;
                deleteButton.hidden = true;

                card.dataset.editing = "true";

            }

            // Second click: save the new quantity
            else {

                const selectedQuantity = Number(quantitySelect.value);

                cartItems.set(name, {
                    name: name,
                    quantity: selectedQuantity
                });

                quantityControls.hidden = true;
                deleteButton.hidden = false;

                card.dataset.editing = "false";

                refreshCart();

            }

        });

        // DELETE BUTTON
        deleteButton.addEventListener("click", function() {

            // Remove this product from the cart
            cartItems.delete(name);

            // Restore the original product controls
            quantityControls.hidden = false;
            addButton.hidden = false;

            // Hide Update and Delete
            card.querySelector(".cart-actions").hidden = true;

            card.dataset.editing = "false";

            deleteButton.hidden = false;

            refreshCart();

        });

    });

    // Set the initial cart badge
    refreshCart();

})();