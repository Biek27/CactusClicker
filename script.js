const items = [
  { name: 'Item 1', level: 1, rarity: 'common', property: 'A' },
  { name: 'Item 2', level: 2, rarity: 'uncommon', property: 'B 3' },
  { name: 'Item 3', level: 3, rarity: 'rare', property: 'C 2' },
  // Add more items as needed
];

  function searchTable() {
    
  const searchInput1 = document.getElementById("searchInput1");
  const searchInput2 = document.getElementById("searchInput2");

  // Add event listeners to input elements
  searchInput1.addEventListener("input", function () {
    filterTable(searchInput1.value, searchInput2.value);
  });

  searchInput2.addEventListener("input", function () {
    filterTable(searchInput1.value, searchInput2.value);
  });


    // Loop through each item in the items array
    for (let i = 0; i < items.length; i++) {
        // Get the current item
        let item = items[i];

        // Set the default visibility of the row to hidden
        let row = tableRows[i];
        row.style.display = "none";

        // Check if the search input values are substrings of any property of the item
        if ((searchInput1 === "" || item.rarity.toLowerCase().indexOf(searchInput1) !== -1) &&
            (searchInput2 === "" || item.property.toLowerCase().indexOf(searchInput2) !== -1)) {
            // If both matches are found, enable the visibility of the row
            row.style.display = "";
        }
    }
}

function generateTable(items) {
    let tbody = document.getElementById("data-table").getElementsByTagName("tbody")[0];
    let tr, td;

    // Empty the table body
    tbody.innerHTML = "";

    // Iterate through each item in the array
    items.forEach(item => {
        // Create a new row
        tr = document.createElement("tr");

        // Create and append cells for each item property
        Object.values(item).forEach(value => {
            td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });

        // Append the row to the table body
        tbody.appendChild(tr);
    });
}

// Call the function to generate the table using your 'items' array
generateTable(items);
window.onload = searchTable;
