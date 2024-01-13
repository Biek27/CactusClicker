const items = [
  { name: 'Item 1', level: 1, rarity: 'common', property: 'A' },
  { name: 'Item 2', level: 2, rarity: 'uncommon', property: 'B 3' },
  { name: 'Item 3', level: 3, rarity: 'rare', property: 'C 2' },
  // Add more items as needed
];

function searchTable() {
    // Get the search input value
    let searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Get all the rows of the table, except the header row
    let tableRows = document.getElementById('data-table-body').rows;

    // Loop through each item in the items array
    for (let i = 0; i < items.length; i++) {
        // Get the current item
        let item = items[i];

        // Set the default visibility of the row to hidden
        let row = tableRows[i];
        row.style.display = "none";

        // Check if the search input is a substring of any property of the item
        if (item.name.toLowerCase().indexOf(searchInput) !== -1 ||
            item.level.toString().indexOf(searchInput) !== -1 ||
            item.rarity.toLowerCase().indexOf(searchInput) !== -1 ||
            item.property.toLowerCase().indexOf(searchInput) !== -1) {
            // If a match is found, enable the visibility of the row
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
