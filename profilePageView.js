

function profilePageView(){
    let html = "";

    html =`<div class="profilePageContainer">
              <div class="profilePicture"><img src="joakim.jpg"/></div>
              <div class="profileInfo">${profileInfo()}</div>
              <div class="trainingheader">Dine treninger</div>
              <div class="activeTraining">${createActiveTraining()}</div>  
              <div class="trainingheader2">Påmeldt</div>       
              <div class="signedUpTraining">${createListofSignedUpTraining()}</div>
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
    let html = "";
    let Id = model.signedInId;
    // let person = model.users.filter(person => person.id == Id)
    //må fikses for at model og id linkes
    for(training of model.listOfAvailableTrainings){
         if(training.userId == Id){
            console.log(training);
        html += `<div class="userBox"> Dag:${training.date}  Tid:${training.time}
        <div>Treningstype: ${training.trainingtype}  Sted: ${training.place}</div>
        <div> Laget av: ${training.createdBy}</div>
        </div>`
         }
    };
    return html;
}


function createListofSignedUpTraining(){
    let html="";

    let Id = model.signedInId;
    let trainingIds = model.signedUpforTraining[Id-1].trainingId;

    for(let i = 0; i<trainingIds.length;i++){
     let training = model.listOfAvailableTrainings.filter(training => training.linkedId == trainingIds[i])
     html +=`<div class="userBox"> Dag:${training[0].date}  Tid:${training[0].time}
             <div>Treningstype: ${training[0].trainingtype}  Sted: ${training[0].place}</div>Laget av: ${training[0].createdBy} </div>` 
    }
   
    return html;
}