
function availableTrainingView(){
let html = "";

if(model.filteredValue == "Person"){
    html =`<div class="selector">SORTER ETTER: ${makeSelector()} <input class="inputNameFilter" type="text"/></div>
    ${makeListOfAvailableTraining()}`;
}
else if(model.filteredValue == "Dag"){
    html =`<div class="selector">SORTER ETTER: ${makeSelector()} <input class="inputNameFilter" onchange="model.inputs.date = this.value" type="date"/></div>
    ${makeListOfAvailableTraining()}`;
}
else{
html =`<div class="selector">SORTER ETTER: ${makeSelector()}</div>
${makeListOfAvailableTraining()}
`
}



return html;

}

function makeListOfAvailableTraining(){
let html = "";
let printedList=[]; 
   
    for(training of model.listOfAvailableTrainings){
        // if(training.date == model.)

        html += `<div class="userBox"> Dag:${training.date}  Tid:${training.time}
        <div>Treningstype: ${training.trainingtype}  Sted: ${training.place}</div> <div class="nameplateUserBox">Laget av: ${training.createdBy}</div></div>`

    }


return html;

}

function makeSelector(){
let html = "";

html =`<select class="selectfrontpage" onchange="filterTraining(this.value)">
        <option ${model.selectedValueInFilter == "Dag" ? "selected":""} value="Dag">Dag</option>
        <option ${model.selectedValueInFilter == "Treningssenter" ? "selected":""} value="Treningssenter">Treningssenter</option>
        <option ${model.selectedValueInFilter == "Person" ? "selected":""} value="Person">Person</option>
       </select>`;


return html;
}

function filterTraining(filteredValue){
model.selectedValueInFilter = filteredValue;   
model.filteredValue = filteredValue;
mainView("availableTraining")
}