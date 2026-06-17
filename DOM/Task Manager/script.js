const createBtn = document.querySelector('#createBtn');
const formContainer = document.querySelector('#formContainer');
const form = document.querySelector('form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const priority = document.querySelector('#priorityOption')
const inProgressTaskContainer = document.querySelector('#inProgress');
const CompletedTaskContainer = document.querySelector('#Completed');
const doneBtn = document.querySelector('#done');
const submitBtn = document.querySelector('#addBtn');
const clearAllBtn = document.querySelector('#clearAll');
const searchInp = document.querySelector('#searchInp');
const totalInProgressTasks = document.querySelector('#totalInProgressTasks');
const totalCompletedTasks = document.querySelector('#totalCompletedTasks');
let updateIndex = null;

let tasks = [
    {
        id: 1,
        title: "Design Landing Page Wireframe",
        description: "Create the initial layout design for the homepage using Tailwind CSS grids, focusing on a clean hero section.",
        priority: "important",
        status: "completed"
    },
    {
        id: 2,
        title: "Setup MongoDB Connection",
        description: "Configure the database connection strings and test the initial connection with the Express backend.",
        priority: "imidiate",
        status: "completed"
    },
    {
        id: 3,
        title: "Fix Navbar Mobile Responsiveness",
        description: "Resolve the alignment issue on mobile screens where the hamburger menu cuts off the user profile link.",
        priority: "delayble",
        status: "completed"
    },
    {
        id: 4,
        title: "Implement JWT Authentication",
        description: "Create the login and signup API endpoints, hash passwords using bcrypt, and generate secure JSON Web Tokens.",
        priority: "imidiate",
        status: "inComplete"
    },
    {
        id: 5,
        title: "Write Form Validation Logic",
        description: "Add client-side checks for the contact form to ensure emails are valid and required fields aren't empty.",
        priority: "important",
        status: "inComplete"
    },
    {
        id: 6,
        title: "Add Custom Favicon to Project",
        description: "Generate a crisp 32x32 icon asset and link it in the main HTML document layout to clear browser console 404 errors.",
        priority: "delayble",
        status: "inComplete"
    }
];

//in the start checking if there is any existing tasks or not
renderInProgressTasks(tasks);
renderCompletedTasks(tasks);

//changing ui if there is 0 tasks to add
if(inProgressTaskContainer.childElementCount ===  0){
    inProgressTaskContainer.innerHTML = `<div class="noTask">0 In Progress Tasks. Be First to creat one...</div>`;
    
}

if(CompletedTaskContainer.childElementCount === 0){
    CompletedTaskContainer.innerHTML = `<div class="noTask">0 Task Completed. Be First to Create and Complete one....</div>`;
}

//devloping search on the basis of title, description and priority
searchInp.addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase();

    const result = tasks.filter(task => (task.title.toLowerCase().includes(searchInput) || task.description.toLowerCase().includes(searchInput) || task.priority.toLowerCase().includes(searchInput)))

    if (result.length === 0) {
        inProgressTaskContainer.innerHTML = `<div class="noResult">No Matching Results....</div>`
        CompletedTaskContainer.innerHTML = `<div class="noResult">No Matching Results....</div>`
    } else {
        renderInProgressTasks(result);
        renderCompletedTasks(result);
    }



})

//clearing both tasks containers
clearAllBtn.addEventListener('click', () => {
    inProgressTaskContainer.innerHTML = `<div class="noTask">0 In Progress Tasks. Be First to creat one...</div>`;
    CompletedTaskContainer.innerHTML = `<div class="noTask">0 Task Completed. Be First to Create and Complete one....</div>`;
    totalCompletedTasks.textContent = '0';
    totalInProgressTasks.textContent = '0';
    tasks = [];
    
})

//form visibilty controle by DOM
createBtn.addEventListener('click', () => {
    submitBtn.textContent = "Create Task";
    submitBtn.style.backgroundColor = "var(--bg-add)"
    formContainer.style.display = "flex"
})

//Event delegation - handeling form visibility
formContainer.addEventListener('click', (e) => {
    if (e.target.id === 'formContainer') {
        formContainer.style.display = 'none';
    }
})

// handeling form submission
form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (!updateIndex) {
        tasks.push({
            id: Date.now(),
            title: title.value,
            description: description.value,
            priority: priority.value,
            status: 'inComplete'
        })
    } else {

        const index = tasks.findIndex(task => task.id === updateIndex);
        tasks[index].title = title.value;
        tasks[index].description = description.value;
        tasks[index].priority = priority.value;

        renderInProgressTasks(tasks);

        updateIndex = null;
    }

    renderInProgressTasks(tasks);

    formContainer.style.display = "none";

    form.reset();
})




// reder function for in progress tasks
function renderInProgressTasks(tasks) {

    inProgressTaskContainer.innerHTML = "";
    let count = 0;
    tasks.forEach((task) => {
        if (task.status === "inComplete") {
            count++;
            inProgressTaskContainer.innerHTML += `
            <div class="task" id = ${task.id}>
                    <div class="taskHeader">
                        <h3>${task.title}</h3>
                        <span id="priority" class="${task.priority}">${task.priority}</span>
                    </div>
                    <div class="taskBody">
                        <p>${task.description}</p>
                    </div>
                    <div class="taskFooter">
                        <button id="done" class="done" onclick="taskDone('${task.id}')">Done</button>
                        <div class="editdel">
                            <button id="edit" class="edit" onclick="updateTask('${task.id}')">Edit</button>
                            <button id="del" class="del" onclick="deleteTask('${task.id}')">Delete</button>
                        </div>
                    </div>
                </div>
        `
        }
    })

    totalInProgressTasks.textContent = count;
        if(count === 0){
            inProgressTaskContainer.innerHTML = `<div class="noTask">0 In Progress Tasks. Be First to creat one...</div>`;
        }

}

// render funciton for completedtasks
function renderCompletedTasks(tasks) {

    CompletedTaskContainer.innerHTML = "";

    let count = 0;
    tasks.forEach((task) => {

        if (task.status === "completed") {
            count++;
            CompletedTaskContainer.innerHTML += `
                <div class="task">
                        <div class="taskHeader">
                            <h3>${task.title}</h3>
                            <span id="priority" class="${task.priority}">${task.priority}</span>
                        </div>
                        <div class="taskBody">
                            <p>${task.description}</p>
                        </div>

                        <div class="taskFooter">
                            <div class="completed">Completed</div>
                            <button id="del" class="del" onclick="deleteTask('${task.id}')">Delete</button>
                        </div>
                    </div>
            `
        }
    })
    totalCompletedTasks.textContent = count;

    if(count === 0){
        CompletedTaskContainer.innerHTML = `<div class="noTask">0 Task Completed. Be First to Create and Complete one....</div>`;
    }

}

// inline fucntion
function deleteTask(id) {
    const index = tasks.findIndex(task => Number(id) === task.id);
    const deletedElement = tasks.splice(index, 1);


    if (deletedElement[0].status === "inComplete") {
        renderInProgressTasks(tasks);
    } else {
        renderCompletedTasks(tasks);
    }

}

// inline fucntion
function updateTask(id) {
    updateIndex = Number(id);
    submitBtn.textContent = "Update Task";
    submitBtn.style.backgroundColor = "var(--bg-update)"

    const index = tasks.findIndex(task => Number(id) === task.id);
    title.value = tasks[index].title;
    description.value = tasks[index].description;
    priority.value = tasks[index].priority

    formContainer.style.display = "flex"

}

// inline fucntion
function taskDone(id) {
    const index = tasks.findIndex(task => Number(id) === task.id);
    tasks[index].status = 'completed';
    renderInProgressTasks(tasks);
    renderCompletedTasks(tasks);
}