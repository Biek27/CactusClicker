const items = [
  { name: 'Item 1', level: 1, rarity: 'common', property: 'A' },
  { name: 'Item 2', level: 2, rarity: 'uncommon', property: 'B 3' },
  { name: 'Item 3', level: 3, rarity: 'rare', property: 'C 2' },
  // Add more items as needed
];

 function filterTable(input1, input2) {
  const table = document.getElementById("data-table");
  const rows = table.rows;

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].cells;
    let match = false;

    for (let j = 0; j < cells.length; j++) {
      if (cells[j].innerText.toLowerCase().includes(input1.toLowerCase()) || cells[j].innerText.toLowerCase().includes(input2.toLowerCase())) {
        match = true;
        break;
      }
    }

    rows[i].style.display = match ? "" : "none";
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
