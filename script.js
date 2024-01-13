const kategoryTable = document.getElementById('kategoryTable');
const searchInput = document.getElementById('searchInput');

const data = [
    // Your database data goes here. For example:
    // {name: 'Example Name', floor: 1, rarity: 'Rare', attributes: 'Agility: 20'},
];

function populateTable() {
    data.forEach(item => {
        const row = kategoryTable.insertRow();
        const nameCell = row.insertCell(0);
        const floorCell = row.insertCell(1);
        const rarityCell = row.insertCell(2);
        const attributesCell = row.insertCell(3);
 
        nameCell.textContent = item.name;
        floorCell.textContent = item.floor;
        rarityCell.textContent = item.rarity;
        attributesCell.textContent = item.attributes;
    });
}

function filterTable() {
    const filter = searchInput.value.toUpperCase();
    const tableRows = kategoryTable.getElementsByTagName('tr');

    for (let i = 0; i < tableRows.length; i++) {
        const tableRow = tableRows[i];
        const tableRowCells = tableRow.getElementsByTagName('td');

        for (let j = 0; j < tableRowCells.length; j++) {
            const tableRowCell = tableRowCells[j];

            if (tableRowCell) {
                const cellText = tableRowCell.textContent || tableRowCell.innerText;

                if (cellText.toUpperCase().indexOf(filter) > -1) {
                    tableRow.style.display = '';
                    break;
                } else {
                    tableRow.style.display = 'none';
                }
            }
        }
    }
}

populateTable();
