const projects = JSON.parse(localStorage.getItem('projects')) || []

const projectbtn = document.getElementById('projectBtn')
const projectname = document.getElementById('projectname')
const projectclose = document.getElementById('project-modal-close')
const projectmodal = document.getElementById('project-modal')
const priority = document.getElementById('project-priority')


projects.forEach(project => {
    const newproject = document.createElement('div')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    const projectText = document.createElement('span')
    projectText.textContent = project

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            newproject.remove()
        }
    })

    newproject.appendChild(checkbox)
    newproject.appendChild(projectText)
    document.getElementById('project-list').appendChild(newproject)
})

projectbtn.addEventListener('click', () => {
    projectmodal.style.display = 'flex'
})

projectclose.addEventListener('click', () => {
    projectmodal.style.display = 'none'
    
    const newproject = document.createElement('div')
    newproject.classList.add(`priority-${priority.value}`)

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    const projectText = document.createElement('span')
    projectText.textContent = projectname.value

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            newproject.remove()
        }
    })

    newproject.appendChild(checkbox)
    newproject.appendChild(projectText)
    document.getElementById('project-list').appendChild(newproject)

    projects.push(projectname.value)
    projectname.value = ''
    localStorage.setItem('projects', JSON.stringify(projects))
})