//constant elements

const initSaveBtn = document.getElementById('init-save-btn')
const card = document.querySelector('.card')
const note = document.getElementById('note')
const container = document.querySelector('.container')

//functions

function firstSave () {
    const newNote = note.value
    if (newNote) {
        container.insertAdjacentHTML('beforeend', `
            <div class="new-card">
            <div class="buttons">
                <div class="left">
                    <button><img src="./edit.png" alt="edit" id="edit-btn"></button>
                    <button><img src="./save.png" alt="save" id="add-save-btn"></button>
                </div>
                <div class="right"><button><img src="./delete.png" alt="delete" id="del-btn"></button></div>
            </div>
            <div class="note-area">
               <textarea name="note" id="note" rows="8" readonly class="note">${newNote}</textarea>
            </div>
            </div>
        `)
        note.value = ''

        //deleting the note
        const delBtn = document.getElementById('del-btn')
        const newCard = document.querySelector('.new-card')
        delBtn.addEventListener('click', () => {
            newCard.remove()
        })
        
        //editing the note
        const editBtn = document.getElementById('edit-btn')
        const Note = document.querySelector('.note')
        editBtn.addEventListener('click', () => {
            Note.removeAttribute('readonly')
        }) 

        //resaving the note
        const addSaveBtn = document.getElementById('add-save-btn')
        addSaveBtn.addEventListener('click', () => {
            Note.setAttribute('readonly', 'readonly')
        }) 
    }
}

function save () {

}

//let's get it to work

initSaveBtn.addEventListener('click', (e) => {
    e.preventDefault
    firstSave()
})



