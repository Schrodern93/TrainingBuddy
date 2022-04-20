function filtrering(valgtFiltrering){
    let liste = [];

    if(valgtFiltrering == "Dag"){

    }

    if(valgtFiltrering == "Person"){
        for(let i = 0; i < model.listOfAvailableTrainings.length; i++){
            if(model.listOfAvailableTrainings[i].createdBy.toLocaleLowerCase().includes(model.inputs.frontpage.filtervalue.toLocaleLowerCase())){
                liste.push(model.listOfAvailableTrainings[i])
            }

        }
        
    }

    if(valgtFiltrering == "Treningssenter"){
        
        for(let i = 0; i < model.listOfAvailableTrainings.length; i++){
            if(model.listOfAvailableTrainings[i].place.toLocaleLowerCase() ==  model.inputs.frontpage.filtervalue.toLocaleLowerCase()){
                liste.push(model.listOfAvailableTrainings[i])
            }

        }
    }
  return liste;
}