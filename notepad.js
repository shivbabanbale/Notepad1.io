
document.addEventListener('DOMContentLoaded', function () {
  
  displayNotes();
  var saveButton = document.getElementById('put');

  saveButton.addEventListener('click', function () {
      var title = document.getElementById('i1').value;
      var description = document.getElementById('i2').value;

      if (title.trim() !== '' && description.trim() !== '') {
          var note = {
              title: title,
              description: description
          };

          var existingNotes = JSON.parse(localStorage.getItem('notes')) || [];

          existingNotes.push(note);

          localStorage.setItem('notes', JSON.stringify(existingNotes));

          displayNotes();
      } else {
          alert('Please provide both title and description for the note.');
      }
  });

});




// *******************************************//////************************************ */
let c = function (e) {
   e.preventDefault()
  localStorage.removeItem("notes")
  displayNotes();

}
kiki.addEventListener("click", c)


function deleteNoteAndDisplay(index) {
  var existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
  existingNotes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(existingNotes));
  displayNotes();
}

function displayNotes() {
  var notes = JSON.parse(localStorage.getItem('notes')) || [];
  var notesContainer = document.getElementById('additem');
  notesContainer.innerHTML = '';

  notes.forEach(function (note, index) {
      var noteBox = document.createElement('div');
      noteBox.classList.add('note');

      var noteTitle = document.createElement('div');
      noteTitle.classList.add('note-title');
      noteTitle.textContent = note.title;
      noteBox.appendChild(noteTitle);

      var noteDescriptionHeading = document.createElement('div');
      noteDescriptionHeading.classList.add('note-description-heading');
      noteDescriptionHeading.textContent = 'Description';
      noteBox.appendChild(noteDescriptionHeading);

      var noteDescription = document.createElement('div');
      noteDescription.classList.add('note-description');
      noteDescription.textContent = note.description;
      noteBox.appendChild(noteDescription);

      var deleteButton = document.createElement('div');
      deleteButton.classList.add('delete-button');
      deleteButton.innerHTML = '&times;';
      deleteButton.addEventListener('click', function () {
          deleteNoteAndDisplay(index);
      });
      noteBox.appendChild(deleteButton);

      notesContainer.appendChild(noteBox);
  });
}

