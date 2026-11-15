console.log("JOSHOPY search is running!");

// 1. Get both search inputs
const searchInputs = document.querySelectorAll(
    "#search"
);

// 2. Get both search buttons
const searchButtons = document.querySelectorAll(
    ".desktop-search-button, .mobile-search-button"
);

// 3. Get product cards
const searchProductCards = document.querySelectorAll(".grid-container");

// 4. Create the no-results message
const noResults = document.createElement("p");

noResults.textContent = "No products found!";
noResults.classList.add("no-results");
noResults.style.display = "none";

const productGrid = document.querySelector(".grid-items");

if (productGrid) {
    productGrid.after(noResults);
}

// 5. Create the search function
function searchProducts(searchValue) {

    const searchText = searchValue.toLowerCase().trim();

    let productsFound = 0;

    searchProductCards.forEach(function(card) {

        const productName = card.querySelector(".grid-details p");

        if (!productName) return;

        const name = productName.textContent.toLowerCase();

        if (name.includes(searchText)) {

            card.style.display = "flex";
            productsFound++;

        } else {

            card.style.display = "none";

        }
    });

    if (productsFound === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }
}

// 6. Listen for typing
searchInputs.forEach(function(input) {

    input.addEventListener("input", function() {

        searchProducts(input.value);

        // Keep mobile and desktop search boxes synchronized
        searchInputs.forEach(function(otherInput) {

            otherInput.value = input.value;

        });

    });

});

// 7. Listen for search button clicks
searchButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const searchInput = button.closest(".search, .mobile-search")
            .querySelector("input");

        searchProducts(searchInput.value);

    });

});