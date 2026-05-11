const tasks = JSON.parse(localStorage.getItem('tasks')) || []

const todobtn = document.getElementById('todoBtn')
const modal = document.getElementById('modal')
const modalclose = document.getElementById('modal-close')
const taskname = document.getElementById('taskname')
const priority = document.getElementById('task-priority')


tasks.forEach(task => {
    const newtask = document.createElement('div')
    
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    
    const taskText = document.createElement('span')
    taskText.textContent = task
    
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            newtask.remove()
        }
    })
    
    newtask.appendChild(checkbox)
    newtask.appendChild(taskText)
    document.getElementById('task-list').appendChild(newtask)
})

todobtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})

modalclose.addEventListener('click', () => {
    modal.style.display = 'none'
    
    const newtask = document.createElement('div')
    newtask.classList.add(`priority-${priority.value}`)
    
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    
    const taskText = document.createElement('span')
    taskText.textContent = taskname.value
    
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            newtask.remove()
        }
    })
    
    newtask.appendChild(checkbox)
    newtask.appendChild(taskText)
    document.getElementById('task-list').appendChild(newtask)
    
    tasks.push(taskname.value)
    taskname.value = ''
    localStorage.setItem('tasks', JSON.stringify(tasks))
})