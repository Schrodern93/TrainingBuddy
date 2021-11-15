
function availableTrainingView(){
let html = "";

html =`<div>SORTER ETTER: ${makeSelector()}</div>
${makeListOfAvailableTraining()}
        `


return html;

}

function makeListOfAvailableTraining(){
let html = "";
    for(training of model.listOfAvailableTrainings){
        html += `<div class="userBox">Bruker: ${training.createdBy} Dag:${training.date}  Tid:${training.time}
        Treningstype:${training.trainingtype}  Sted:${training.date}</div>`

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