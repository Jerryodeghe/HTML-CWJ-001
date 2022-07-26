document.getElementById('form').addEventListener('submit', validateInput)


function validateInput(e) {
    e.preventDefault();
    //1. check if username is not empty
    const username = document.getElementById('username').innerHTML

    // //2. check if password is not empty
    const password = document.getElementById('password').innerHTML
}

// const validateInput = () => {}
