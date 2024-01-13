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
