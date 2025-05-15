function inputCommentTrigger() {
    let field = document.getElementById('reason-miscellaneous')
    let toggleTextbox = document.querySelector('.form-floating')
    if (field.selected === true) {
         toggleTextbox.classList.toggle('collapse');
    } 
}

function validateForm(){
    const input = document.getElementsByTagName('input')
    console.log(input);
    
}