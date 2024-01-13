const kategoryTable = document.getElementById('kategoryTable');
const searchInput = document.getElementById('searchInput');

const data = [
    {name: 'Example Name', floor: 1, rarity: 'Legendar<', attributes: 'Agility: 20'},
    {name: 'Blitzzorn', floor: 1, rarity: 'Rare', attributes: 'Agility: 20'},
];

const newData = [
  {name: 'New Name', floor: 1, rarity: 'Rare', attributes: 'Agility: 20'},
  {name: 'Another New Name', floor: 2, rarity: 'Epic', attributes: 'Strength: 30'}
];

data.push(...newData);
saveFilters();
applyFilters();

const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterId = button.id;
    toggleFilter(filterId);
  });
});

const unlockFilterButtons = document.querySelectorAll('.unlock-filter-button');

unlockFilterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterId = button.id.replace('unlock-', '');
    delete filters[filterId];
    saveFilters();
  });
});

const filters = {};

function toggleFilter(filterId) {
  if (filters[filterId]) {
    delete filters[filterId];
  } else {
    filters[filterId] = true;
  }

  applyFilters();
}

function applyFilters() {
  const filteredData = data.filter(item => {
    return Object.keys(filters).every(filterId => {
      if (filterId === 'filter-name') {
        return item.name.toLowerCase().includes(filters[filterId].toLowerCase());
      } else if (filterId === 'filter-floor') {
        return item.floor === filters[filterId];
      } else if (filterId === 'filter-rarity') {
        return item.rarity === filters[filterId];
      } else if (filterId === 'filter-attributes') {
        return item.attributes.includes(filters[filterId]);
      }
    });
  });

  displayData(filteredData);
}

function saveFilters() {
  localStorage.setItem('filters', JSON.stringify(filters));
}

function loadFilters() {
  const savedFilters = localStorage.getItem('filters');
  if (savedFilters) {
    filters = JSON.parse(savedFilters);
  }

  applyFilters();
}

loadFilters();

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
