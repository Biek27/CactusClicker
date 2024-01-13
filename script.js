// Create an array of items
let items = [
  { name: 'Item 1', level: 1, rarity: 'Common', property: 'A' },
  { name: 'Item 2', level: 2, rarity: 'Rare', property: 'B' },
  { name: 'Item 3', level: 3, rarity: 'Epic', property: 'A' },
  // ... add more items here
];


// Create a function to render the table
function renderTable() {
 const tableBody = document.getElementById('items-table').tBodies[0];
 tableBody.innerHTML = '';

 for (const item of items) {
    const row = tableBody.insertRow();
    row.insertCell().textContent = item.name;
    row.insertCell().textContent = item.level;
    row.insertCell().textContent = item.rarity;
    row.insertCell().textContent = item.property;
 }
}

// Create a function to filter the items
function filterItems() {
 const nameFilter = document.getElementById('name-filter').value.toLowerCase();
 const levelFilter = document.getElementById('level-filter').value;
 const rarityFilter = document.getElementById('rarity-filter').value;
 const propertyFilter = document.getElementById('property-filter').value;

 let filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(nameFilter) &&
    item.level == levelFilter &&
    item.rarity == rarityFilter &&
    item.property == propertyFilter
 );

 return filteredItems;
}

// Add event listeners to the filter input fields
document.getElementById('name-filter').addEventListener('input', () => {
 renderTable(filterItems());
});

document.getElementById('level-filter').addEventListener('input', () => {
 renderTable(filterItems());
});

document.getElementById('rarity-filter').addEventListener('input', () => {
 renderTable(filterItems());
});

document.getElementById('property-filter').addEventListener('input', () => {
 renderTable(filterItems());
});

// Call the renderTable function initially to display the table
renderTable();
