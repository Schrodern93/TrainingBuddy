

function profilePageView(){
    let html = "";

    html =`<div class="profilePageContainer">
              <div class="profilePicture"><img src="joakim.jpg"/></div>
              <div class="profileInfo">${profileInfo()}</div>
              <div class="activeTraining"></div>
              <div class="scroll1">${createActiveTraining()}</div>
              <div class="signedUpTraining"></div>
              <div class="scroll1">${createSignedUpForTraining()}</div>
           </div>
    
            `;
    return html;
}


function profileInfo(){
let html = "";
let user = model.users.find(user => user.id == model.loggedInUser);
let averageRating = user.rating3.reduce((a,b) => a + b, 0) / user.rating3.length;

html += `<div>Navn: ${user.fornavn} ${user.etternavn} </div>
         <div>Email: ${user.email}</div>
         <div>Treningsnivå: ${user.treningsnivå}</div>
         <div>Total Rating:${averageRating}</div>
         <div>Kjønn:${user.kjønn} </div>
 `; 

return html;

}

function createActiveTraining(){
    let html = "Dine treninger";

    for(training of model.listOfAvailableTrainings){
         if(training.linkedId == model.loggedInUser){

        html += `<div class="userBox"> Dag:${training.date}  Tid:${training.time}
        <div>Treningstype: ${training.trainingtype}  Sted: ${training.place}</div></div>`
         }
    };
    return html;
}

function createSignedUpForTraining(){
    let html = "Treninger du er meldt opp til";

    for(training of model.listOfAvailableTrainings){
         if(training.linkedId == model.loggedInUser){

        html += `<div class="userBox"> Dag:${training.date}  Tid:${training.time}
        <div>Treningstype: ${training.trainingtype}  Sted: ${training.place}</div></div>`
         }
    };
    return html;
}