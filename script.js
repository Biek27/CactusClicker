let dummyItems = populateDummyItems();

// Function to filter and display items
function filterFunction() {
    let filter = document.getElementById('search-criteria').value.toUpperCase();
    let ul = document.getElementById('items-list');

    ul.innerHTML = '';

    for (let i = 0; i < dummyItems.length; i++) {
        let itemName = dummyItems[i].name;
        let li = document.createElement('li');

        if (itemName.toUpperCase().indexOf(filter) > -1) {
            li.appendChild(document.createTextNode(itemName));
            ul.appendChild(li);
        }
    }
}

// Event listener for search input
document.getElementById('search-input').addEventListener('keyup', filterFunction);
