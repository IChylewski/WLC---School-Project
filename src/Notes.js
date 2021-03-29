const notesSelector = document.getElementById('notes-container');
const notesDisplay = document.getElementById('notes-space');
const notesInputSelector = document.getElementById('notes-input');
const editButton = document.getElementById('editButton');
const saveButton = document.getElementById('saveButton');

notesDisplay.innerHTML = localStorage.getItem('notes');


editButton.addEventListener('click', function() {
    notesSelector.style.display = 'none';
    notesInputSelector.style.display = 'flex';
    notesInputSelector.value = localStorage.getItem('notes');
    editButton.style.display = 'none';
    saveButton.style.display = 'inline-flex';
})

saveButton.addEventListener('click', function() {
    localStorage.setItem('notes', notesInputSelector.value);
    notesDisplay.innerHTML = localStorage.getItem('notes');
    notesSelector.style.display = 'flex';
    notesInputSelector.style.display = 'none';
    editButton.style.display = 'inline-flex';
    saveButton.style.display = 'none';

})