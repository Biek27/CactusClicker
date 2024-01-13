const items = [
  { name: 'Item 1', level: 1, rarity: 'common', property: 'A' },
  { name: 'Item 2', level: 2, rarity: 'uncommon', property: 'B 3' },
  { name: 'Item 3', level: 3, rarity: 'rare', property: 'C 2' },
  // Add more items as needed
];

// Create a function to filter the items
function filterItems() {
 const nameFilter = document.getElementById('name-filter').value.toLowerCase();
 const levelFilter = parseInt(document.getElementById('level-filter').value, 10);
 const rarityFilter = document.getElementById('rarity-filter').value;
 const propertyFilter = document.getElementById('property-filter').value;

 let filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(nameFilter) &&
    (levelFilter === 0 || item.level === levelFilter) &&
    item.rarity === rarityFilter &&
    item.property === propertyFilter
 );

 // If any filter input is not empty, return the filtered items. Otherwise, return the original items array.
 if (nameFilter || levelFilter || rarityFilter || propertyFilter) {
    return filteredItems;
 } else {
    return items;
 }
}

// Add event listeners to the filter input fields
document.getElementById('name-filter').addEventListener('input', () => {
 renderTable();
});

document.getElementById('level-filter').addEventListener('input', () => {
 renderTable();
});

document.getElementById('rarity-filter').addEventListener('input', () => {
 renderTable();
});

document.getElementById('property-filter').addEventListener('input', () => {
 renderTable();
});

// Call the renderTable function initially to display the table
renderTable();
