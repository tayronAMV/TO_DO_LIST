const openButton = document.querySelector('.open-button');
const form = document.getElementById('form');
const dialog = document.getElementById('dialog');
const container = document.querySelector('.container');
const clr_btn = document.getElementById('clr');

clr_btn.addEventListener('click', () => {
    container.innerHTML = ''; // Clear all tasks
});

openButton.addEventListener('click', () => {
    dialog.showModal();
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const taskInput = document.getElementById('task');
    const taskText = taskInput.value;
    
    if (taskText) {
        addTask(taskText);
        taskInput.value = ''; // Clear the input field
        dialog.close();  
    }

});

function addTask(taskText) {
    const card = document.createElement('div');
    card.className = 'task-card';

    const button = document.createElement('button');
    button.className = 'task-button';
    button.style.background = '#fff'; // Initial white background
    button.style.border = '1px solid #000'; // Black border

    let flag = 0;  // Declare the flag outside the event listener
    
    button.addEventListener('click', () => {
        if (!flag) {
            button.style.background = '#000'; // Change to black background
            flag = 1;
        } else {
            button.style.background = '#fff'; // Change back to white background
            flag = 0;
        }
    });


    const set = document.createElement('button');
    set.className = 'img';
    set.style.backgroundImage = "url('img/dot.svg')";
    set.style.backgroundPosition = "center"; // Center the image
    set.style.backgroundSize = "contain"; // Contain the image within the button
    set.style.backgroundRepeat = "no-repeat"; // Prevent repeating
    set.style.border = '1px solid #000'; // Black border
    const text_dialog = document.getElementById('task-dialog');
    set.addEventListener('click', () => {
        text_dialog.showModal();
    });
    
    

    const text = document.createElement('p');
    text.textContent = taskText;
    
    card.append(set);
    card.appendChild(text);
    card.appendChild(button);

    
    container.appendChild(card);
}

