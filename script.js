const items = [
  { name: 'Item 1', level: 1, rarity: 'Common', property: 'A' },
  { name: 'Item 2', level: 2, rarity: 'Rare', property: 'B' },
  { name: 'Item 3', level: 3, rarity: 'Epic', property: 'A' },
  // ... add more items here
];

// Reference the HTML elements
const nameFilter = document.getElementById('name-filter');
const levelFilter = document.getElementById('level-filter');
const rarityFilter = document.getElementById('rarity-filter');
const propertyFilter = document.getElementById('property-filter');
const itemsTableBody = document.getElementById('items-table').getElementsByTagName('tbody')[0];

// Populate the table with items
function populateTable(items) {
  itemsTableBody.innerHTML = '';
  items.forEach(item => {
    const row = itemsTableBody.insertRow();
    row.insertCell().textContent = item.name;
    row.insertCell().textContent = item.level;
    row.insertCell().textContent = item.rarity;
    row.insertCell().textContent = item.property;
  });
}

// Apply filters and populate the table
function applyFilters() {
  const filteredItems = items.filter(item => {
    const nameMatch = !nameFilter.value || item.name.toLowerCase().includes(nameFilter.value.toLowerCase());
    const levelMatch = !levelFilter.value || item.level === parseInt(levelFilter.value);
    const rarityMatch = !rarityFilter.value || item.rarity === rarityFilter.value;
    const propertyMatch = !propertyFilter.value || item.property === propertyFilter.value;
    return nameMatch && levelMatch && rarityMatch && propertyMatch;
  });
  populateTable(filteredItems);
}

// Event listeners for filter inputs
nameFilter.addEventListener('input', applyFilters);
levelFilter.addEventListener('input', applyFilters);
rarityFilter.addEventListener('change', applyFilters);
propertyFilter.addEventListener('change', applyFilters);

// Initialize the table with all items
populateTable(items);
