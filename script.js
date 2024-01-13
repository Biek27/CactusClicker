const items = [
  { name: 'Item 1', level: 1, rarity: 'common', property: 'A' },
  { name: 'Item 2', level: 2, rarity: 'uncommon', property: 'B 3' },
  { name: 'Item 3', level: 3, rarity: 'rare', property: 'C 2' },
  // Add more items as needed
];

function searchTable() {
 // Obtain the filter string from the user input field
 let filter = document.getElementById('searchInput').value.toUpperCase();
  
 // Obtain the table from the DOM
 let table = document.getElementById('data-table');
  
 // Iterate through each row in the table
 for (let row of table.rows) {
    // Skip the header row (assumed to be the first row)
    if (row.rowIndex === 0) continue;
    
    // Reset the display of each row to "table-row" (default display)
    row.style.display = 'table-row';
    
    // Iterate through each cell in the row
    for (let cell of row.cells) {
      // Check if the cell contains the filter string
      if (cell.textContent.toUpperCase().indexOf(filter) > -1) {
        // If so, hide the row by setting its display to "none"
        row.style.display = 'none';
        break;
      }
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
