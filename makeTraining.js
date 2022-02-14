function makeTraining(){

    let html = "";

    html =`<div class="inputsMakeTraining">Start:<input class="makeTrainingInput" type="time"/>
                Slutt:<input class="makeTrainingInput" type="time"/>
                Dato: <input class="makeTrainingInput" oninput="model.inputs.date = this.value" type="date"/>
                Treningstype: <input class="makeTrainingInput" type="text"/> 
           </div>
           
        <button class="makeTrainingButton" onclick="createTrainingObject()">REGISTRER NY TIME</button>
    
            `
    
    
    return html;

}

function createTrainingObject(){
let newTraining ="";
let dateString = model.inputs.date.split("-")
// let dateString = model.inputs.date;
console.log(dateString.toString())
// let newDate = new Date(Date.UTC(dateString));
// console.log(newDate)
//let CreateDateArray = model.inputs.date.split("-")
let CreateDateArray = model.inputs.date.toLocaleDateString('no-NO');
 //let dateString = newDate.toLocaleDateString();
// let dateString = CreateDateArray.reverse();

newTraining ={
    date: CreateDateArray
 }
//  console.log(newTraining.date.toString())
model.listOfAvailableTrainings.push(newTraining);

}