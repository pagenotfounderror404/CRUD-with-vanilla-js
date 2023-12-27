const ul = document.getElementsByClassName('list-group')[0]
const additem = () => {
  if (ul.children[0].tagName == 'H3') {
    ul.children[0].remove()
  }
  const chapter = document.getElementsByTagName('input')[0].value
  const li = document.createElement('li')
  li.className = 'list-group-item d-flex justify-content-between'
  li.innerHTML = `<h3 class='flex-grow-1'>${chapter}</h3>
  <button class="btn btn-secondary btn-warning btn-edit mx-3" style='border-radius: 4px;'
      type='button'>Edit</button>
  <button class="btn btn-secondary btn-danger btn-delete" style='border-radius: 4px;' type='button'
      id='remove_item' onclick='removeitem(this)'>Remove</button>`
  ul.appendChild(li)
  document.getElementsByTagName('input')[0].value = ''
}

const removeitem = (el) => {
  li = el.parentElement
  ul.removeChild(li)
  if (ul.children.length <= 0) {
    const newMsg = document.createElement('h3')
    newMsg.textContent = 'Nothing is there. Please add a chapter'
    newMsg.className = 'd-flex justify-content-center'
    ul.appendChild(newMsg)
  }
}

const edititem = (el) => {
  const currchapter = el.previousElementSibling
  let currinput = document.createElement('input')
  currinput.type = 'text'
  currinput.value = currchapter.innerHTML
  currinput.className = 'form-control'
  if (el.textContent == 'Edit') {
    el.textContent = 'Done'
    el.parentElement.replaceChild(currinput, currchapter)
  } else {
    el.textContent = 'Edit'
    updatedchapter = document.createElement('h3')
    updatedchapter.className = 'flex-grow-1'
    updatedchapter.textContent = `${currchapter.value}`
    el.parentElement.replaceChild(updatedchapter, el.previousElementSibling)
  }
}

document.getElementById('add_item').addEventListener('click', additem)
