const newBtn = document.querySelector('#newBtn');
const formContainer = document.querySelector('.formContainer');
const addForm = document.querySelector('#addForm');
const imageURL = document.querySelector('#imageURL');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const occupation = document.querySelector('#occupation')

const updateimageURL = document.querySelector('#updateimageURL');
const updatename = document.querySelector('#updatename');
const updateemail = document.querySelector('#updateemail');
const updateoccupation = document.querySelector('#updateoccupation')

const cardContainer = document.querySelector('.cardContainer');
const editBtn = document.querySelector('#edit');
const deleteBtn = document.querySelector('#delete');
const updateForm = document.querySelector('#updateForm');
const cardId = document.querySelector('#cardId');

const searchBar = document.querySelector('#searchBar');

const cards = [
    {
        "imageURL": "https://plus.unsplash.com/premium_photo-1709311451457-21d7fb4638c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
        "name": "Gajendra Sharma",
        "email": "sharmagajendra167@gmail.com",
        "occupation": "Developer"
    },
    {
        "imageURL": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
        "name": "Ananya Rao",
        "email": "ananya.rao@example.com",
        "occupation": "Developer"
    },
    {
        "imageURL": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
        "name": "Gajendra Sharma",
        "email": "gajendra.sharma2@example.com",
        "occupation": "Designer"
    },
    {
        "imageURL": "https://images.unsplash.com/photo-1781084819510-d401a1e77a7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Amit Patel",
        "email": "amit.patel@example.com",
        "occupation": "Manager"
    },
    {
        "imageURL": "https://plus.unsplash.com/premium_photo-1709311451457-21d7fb4638c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
        "name": "Ananya Rao",
        "email": "ananya.dev@example.com",
        "occupation": "Developer"
    }
];

newBtn.addEventListener('click', () => {
    console.log(formContainer.hidden);
    formContainer.style.display = 'inherit';
    addForm.style.display = 'flex';
    updateForm.style.display = 'none';
    
})

formContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'DIV') {
        formContainer.style.display = 'none';
    }
})

cardGenrater(cards)

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    cards.push({
        imageURL: imageURL.value,
        name: name.value,
        email: email.value,
        occupation: occupation.value
    })

    cardGenrater(cards);

    addForm.reset();
    formContainer.style.display = "none";
})

cardContainer.addEventListener('click', (e) => {
    const clickedCard = e.target.closest('.card');
    const id = clickedCard.querySelector('span').textContent;

    //easy way but we can't maintain the array that way
    // clickedCard.remove();

    if (e.target.id === "delete") {
        //splice also mutate the orignal array
        cards.splice(id, 1);
        cardGenrater(cards);
        return;
    }

    if (e.target.id === "edit") {
        const url = clickedCard.querySelector('div>img').src;
        const naam = clickedCard.querySelector('h2>span').textContent;
        const mail = clickedCard.querySelector('p>span').textContent;
        const occ = clickedCard.querySelector('span>span').textContent
        
        formContainer.style.display = "inherit";
        updateForm.style.display = 'flex';
        addForm.style.display = 'none';


        updateimageURL.value = url;
        updatename.value = naam;
        updateemail.value = mail;
        updateoccupation.value = occ;
        cardId.value = id;

    }

})

updateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const index = cardId.value;
    cards[index].imageURL = updateimageURL.value;
    cards[index].name = updatename.value;
    cards[index].email = updateemail.value;
    cards[index].occupation = updateoccupation.value;
    // console.log(cards);
    formContainer.style.display = 'none';
    cardGenrater(cards);
        

})

searchBar.addEventListener('keyup',(e)=>{
    const input = e.target.value.trim().toLowerCase();
    const result = cards.filter((card)=>{
        return (card.name.toLowerCase().includes(input) || card.email.toLowerCase().includes(input) || card.occupation.toLowerCase().includes(input));
    })

    if(result.length === 0){
        cardContainer.innerHTML = "<span>No Results</span>"
        return;
    }
    
    cardGenrater(result)
    
    
})

function cardGenrater(cards) {
    cardContainer.innerHTML = ""
    cards.forEach((card, index) => {
        cardContainer.innerHTML += `
            <div class="card">
                <span hidden>${index}</span>
                <div class="imgContainer">
                    <img src="${card.imageURL}"
                        alt="Image Here">
                </div>
                <h2>Name: <span>${card.name}</span></h2>
                <p>Email: <span>${card.email}</span></p>
                <span>Occupation: <span>${card.occupation}</span></span>
                <div class="btnContainer">
                    <button id="edit">Edit</button>
                    <button id="delete">Delete</button>
                </div>
            </div>         
        `
    })
}
