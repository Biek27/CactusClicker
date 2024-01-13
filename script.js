const searchInput = document.getElementById('search-input');
const databaseList = document.getElementById('database-list');

// Sample dataset
const database = [
    { id: 1, name: 'John Doe', title: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', title: 'Product Manager' },
    { id: 3, name: 'Mike Johnson', title: 'Data Analyst' },
    { id: 4, name: 'Sara Brown', title: 'UX Designer' },
    { id: 5, name: 'Tom Williams', title: 'QA Engineer' }
];

// Render the database as a list of items
function renderDatabase() {
    databaseList.innerHTML = '';
    for (const item of database) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.name}</strong> - ${item.title}`;
        databaseList.appendChild(li);
    }
}

// Filter the database based on user input
function filterDatabase() {
    const searchTerm = searchInput.value.toLowerCase();
    if (!searchTerm) {
        renderDatabase();
        return;
    }
    const filteredDatabase = database.filter(item => item.name.toLowerCase().includes(searchTerm) || item.title.toLowerCase().includes(searchTerm));
    renderDatabase(filteredDatabase);
}

// Set up event listeners
searchInput.addEventListener('input', filterDatabase);

// Render the database initially
renderDatabase();
