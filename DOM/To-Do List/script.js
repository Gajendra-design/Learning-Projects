const toDo = document.querySelector('#toDo');
const inProgress = document.querySelector('#inProgress');
const completed = document.querySelector('#Completed');
const tasks = document.querySelectorAll('.task');
const dropZones = document.querySelectorAll('.dropZone')
let dropElement = null;

tasks.forEach((task)=>{
    task.addEventListener('drag',(e)=>{
        // console.log(`${e.target} is being draged`);
        dropElement = task;
        
    })
})

dropZones.forEach((dropZone)=>{
    dropZone.addEventListener('dragenter',(e)=>{
        // console.log('enter');
        dropZone.classList.add('hover');
    })

    dropZone.addEventListener('dragleave',()=>{
        // console.log('leave');
        dropZone.classList.remove('hover')
    })

    dropZone.addEventListener('dragend',()=>{
        dropZone.classList.remove('hover')
    })

    dropZone.addEventListener('dragover',(e)=>{
        e.preventDefault();
        // dropZone.append(dropElement)
    })

    dropZone.addEventListener('drop',()=>{
        dropZone.append(dropElement)
    })
})

