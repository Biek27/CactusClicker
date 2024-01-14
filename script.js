const items = [
  { name: 'Stählerner Handschuh', level: 1, rarity: 'Selten', property: '+33 Axtschaden, +1.11% Seelen Ertrag' },
  { name: 'Klassische Lederschulterpolster', level: 1, rarity: 'selten', property: '+0.06 Münz Chance, +1.05% Münz Chance' },
  { name: 'Klassische Lederschultern', level: 1, rarity: 'Außergewöhnlich', property: '+1.04% Drop Chance' },
  { name: 'Aurora-Flügelhülle', level: 1, rarity: 'Legendär', property: '+0 Laufgeschwindigkeit, +0 Lebensentzug, +738.86 Schmelz Geschwindigkeit, +50 Schaden' },
  { name: 'Schlichte Lederleggins', level: 1, rarity: 'Außergewöhnlich', property: '+1.05% Verteidigung' },
  { name: 'Traditionelle Lederhandhaube', level: 1, rarity: 'Außergewöhnlich', property: '+10 Schmelzofen Kapazität' },
  { name: 'Unprätentiöse Lederpantalon', level: 1, rarity: 'Außergewöhnlich', property: '+15 Pfeilschaden' },
  { name: 'Eisenhalskeiite', level: 1, rarity: 'Außergewöhnlich', property: '+1.03% Amboss Geschwindigkeit' },
  { name: 'Glanzlicht-Lederhose', level: 1, rarity: 'Episch', property: '+1.03% Vitalität, +10 Amboss Kapazität, +111.74 Boss Schaden' },
  { name: 'Leichte Lederschützer', level: 1, rarity: 'Außergewöhnlich', property: '+6 Verteidigung' },
  { name: 'Makellose Schulterpolster', level: 1, rarity: 'Selten', property: '+4 Kritischschadenlevel, +1.04% Kritischtrefferchance' },
  { name: 'Sternenflug', level: 1, rarity: 'Legendär', property: '+4 Kritischtrefferchancelevel, +0.06 Münz Chance, +1.06% Münz Chance, +0.05% Essenzen Dropchance' },
  { name: 'Azurblitz', level: 1, rarity: 'Legendär', property: '+50 Basisschaden, +0.04 Charakter Erfahrung, +1.11% Lebensentzug, +1.04% Kritischtrefferchance' },
  { name: 'Sternenlicht Beinkleider', level: 1, rarity: 'Legendär', property: '+4 Kritischtrefferchancelevel, +1.04% Kritischtrefferchance, +44 Axtschaden, +0.05 Respawnrate' },
  
  { name: 'Mondschatten-Lederschutz', level: 2, rarity: 'Legendär', property: 'Dummy' },
  { name: 'Donnerkraft-Ledergürtel', level: 2, rarity: 'Legendär', property: 'Dummy' },
  { name: 'Mitternachts Beinschützer', level: 2, rarity: 'Legendär', property: 'Dummy' },
  { name: 'Sternenlicht Brustplatte', level: 2, rarity: 'Legendär', property: 'Dummy' },
  { name: 'Nebenlverhangene Lederschultern', level: 2, rarity: 'Legendär', property: 'Dummy' },
  { name: 'Ätherischer Lederriemen', level: 2, rarity: 'Legendär', property: 'Dummy' },
  { name: 'Präzisionsstahl', level: 2, rarity: 'Außergewöhnlich', property: 'Dummy' },
  { name: 'Armbrust des Jägermanns', level: 2, rarity: 'Außergewöhnlich', property: 'Dummy' },
  { name: 'Geprägt Panzerschultern', level: 2, rarity: 'Außergewöhnlich', property: 'Dummy' },
  { name: 'Harpyienstachel', level: 2, rarity: 'Außergewöhnlich', property: 'Dummy' },
  { name: 'Klassische Lederschultern', level: 2, rarity: 'Außergewöhnlich', property: 'Dummy' },
  { name: 'Königsklinge', level: 2, rarity: 'Selten', property: 'Dummy' },
  
  { name: 'Bauchstecher', level: 3, rarity: 'Außergewöhnlich', property: 'Dummy' },
  { name: 'Imperiale Plattentretter', level: 3, rarity: 'Außergewöhnlich', property: 'Dummy' },
  { name: 'Klare Lederschulterpolster', level: 3, rarity: 'Außergewöhnlich', property: 'Dummy' },
  { name: 'Schlichte Lederschulterhaube', level: 3, rarity: 'Selten', property: 'Dummy' },
  { name: 'Auroras Schritte', level: 3, rarity: 'Legendär', property: 'Dummy' },
  { name: 'Titanumhüllte Lederfinger', level: 3, rarity: 'Legendär', property: 'Dummy' },
  { name: 'Dämmerstahl Panzerhandschuhe', level: 3, rarity: 'Dummy', property: 'Dummy' },
  { name: 'Vampirsäbel', level: 3, rarity: 'Legendär', property: 'Dummy' },
  { name: 'Aurora-Flügelriemen', level: 3, rarity: 'Legendär', property: 'Dummy' },
  
  { name: 'Dummy', level: 4, rarity: 'Dummy', property: 'Dummy' },
  { name: 'Dummy', level: 4, rarity: 'Dummy', property: 'Dummy' },
  { name: 'Dummy', level: 4, rarity: 'Dummy', property: 'Dummy' },
  { name: 'Dummy', level: 4, rarity: 'Dummy', property: 'Dummy' },
  { name: 'Dummy', level: 4, rarity: 'Dummy', property: 'Dummy' },
  { name: 'Dummy', level: 4, rarity: 'Dummy', property: 'Dummy' },
  { name: 'Dummy', level: 4, rarity: 'Dummy', property: 'Dummy' },

  
  // Add more items as needed
];

function searchTable() {
  // Obtain the filter string from the user input field
  let filter = document.getElementById('searchInput1').value.toUpperCase();

  // Obtain the table from the DOM
  let table = document.getElementById('data-table');

  // Iterate through each row in the table
  for (let row of table.rows) {
    // Skip the header row (assumed to be the first row)
    if (row.rowIndex === 0) continue;

    // Set the initial display of each row to "none"
    row.style.display = 'none';

    // Iterate through each cell in the row
    for (let cell of row.cells) {
      // Check if the cell contains the filter string
      if (cell.textContent.toUpperCase().indexOf(filter) > -1) {
        // If so, show the row by setting its display to "table-row"
        row.style.display = 'table-row';

        break;
      }
    }
  }
}


function applyColors() {

  // Remove any Existing Backgroundcolor to avoid unexpected results
  cell.classList.remove('cell-rare', 'cell-epic', 'cell-legendary', 'cell-uncommon', 'cell-common');

  // Add Backgroundcolors dependent of the Cell's Content
        switch (cell.textContent.toLowerCase()) {
         case 'episch':
          cell.classList.add('cell-epic');
          break;
         case 'legendär':
          cell.classList.add('cell-legendary');
          break;
         case 'selten':
          cell.classList.add('cell-rare');
          break;
         case 'außergewöhnlich':
          cell.classList.add('cell-uncommon');
          break;
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
          applyColors();
        });

        // Append the row to the table body
        tbody.appendChild(tr);
    });
}

// Call the function to generate the table using your 'items' array
generateTable(items);
searchTable();
