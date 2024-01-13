const items = [
  { name: 'Item 1', level: 1, rarity: 'common', property: 'A' },
  { name: 'Item 2', level: 2, rarity: 'uncommon', property: 'B 3' },
  { name: 'Item 3', level: 3, rarity: 'rare', property: 'C 2' },
  // Add more items as needed
];

function searchTable() {
    let input, filter, table, tr, td, i, j, visible;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("data-table");
    tr = table.getElementsByTagName("tr");

    // Iterate through each row in the table
    for (i = 0; i < tr.length; i++) {
        visible = true;

        // Iterate through each cell in the row
        for (j = 0; j < tr[i].cells.length; j++) {
            td = tr[i].cells[j];

            // If the cell content contains the filter string, make the row visible
            if (td) {
                if (td.className === 'name' && td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    visible = true;
                } else if (td.className !== 'name' && td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    visible = false;
                }
            }
        }

        // Update the visibility of the row
        if (visible) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
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
