
function availableTrainingView(){
let html = "";

html =`
${makeListOfAvailableTraining()}
        `


return html;

}

function makeListOfAvailableTraining(){
let html = "";
    for(user of model.users){
        html += `<div class="userBox">Bruker: ${user.fornavn} </div>`

    }


return html;

}