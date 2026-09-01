const toDo = document.querySelector('#toDo');
const inProgress = document.querySelector('#inProgress');
const completed = document.querySelector('#Completed');
const tasks = document.querySelectorAll('.task');
// const dropZones = document.querySelectorAll('.dropZone')
let dropElement = null;

tasks.forEach((task)=>{
    task.addEventListener('drag',(e)=>{
        // console.log(`${e.target} is being draged`);
        dropElement = task;
        
    })
})

dragEffect(toDo);
dragEffect(inProgress);
dragEffect(completed);

function dragEffect(dropZone){

    dropZone.addEventListener('dragstart',(e)=>{
        console.log('start',dropZone);
        // dropZone.classList.toggle('hover');
    })

    dropZone.addEventListener('dragenter',()=>{
        console.log('enter',dropZone);
        
    })

    dropZone.addEventListener('dragleave',()=>{
        console.log('leave',dropZone);
        
    })

    dropZone.addEventListener('dragend',(e)=>{
        console.log('end',dropZone);

    })

    return;

}

