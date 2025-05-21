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

function generateLink() {
    let https = 'www.intersurgical.de/Retourenantrag';
    let content = document.querySelectorAll('.form-control')
    let element = []
    let dateKey = Date.now()
    for (let i = 0; i < content.length; i++) {
        element.push(content[i].value);
    }
    
    const link = https + '/' + element[1] + '/' + dateKey + '/' + element[0]
    console.log(link);
    
    /*  Link noch ins Backend speichern */
    /* Link noch in Zwischenablage speichern */
}

/* Formularseite:  */