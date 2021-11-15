
function availableTrainingView(){
let html = "";

html =`<div>SORTER ETTER: ${makeSelector()}</div>
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

function makeSelector(){
let html = "";

html =`<select>
        <option value="Dag">Dag</option>
        <option value="Treningssenter">Treningssenter</option>
        <option value="Person">Person</option>
       </select>`

return html;
}