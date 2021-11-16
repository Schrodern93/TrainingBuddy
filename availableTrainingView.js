
function availableTrainingView(){
let html = "";

html =`<div class="selector">SORTER ETTER: ${makeSelector()}</div>
${makeListOfAvailableTraining()}
        `


return html;

}

function makeListOfAvailableTraining(){
let html = "";
    for(training of model.listOfAvailableTrainings){
        html += `<div class="userBox"> Dag:${training.date}  Tid:${training.time}
        <div>Treningstype: ${training.trainingtype}  Sted: ${training.place}</div> <div class="nameplateUserBox">Laget av: ${training.createdBy}</div></div>`

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