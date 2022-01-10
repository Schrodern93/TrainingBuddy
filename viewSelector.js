function viewSelector(selectedPage){
   model.pageSelected = selectedPage;
   
    let html = "";

    if(model.pageSelected == "availableTraining"){
         html = availableTrainingView();
            model.footerNumber = 0
        }
    if(model.pageSelected == "makeTraining")
    { html = makeTraining();
        model.footerNumber = 1
    }
    if(model.pageSelected == "profilePage"){
        html = profilePageView();
        model.footerNumber = 1
    }
    return html;
}
function createMainContent(selectedPage){
    let html = "";
    
    html = `${viewSelector(selectedPage)}`;
    
    return html;
    }

    mainView("availableTraining")
function mainView(selectedPage){
let html ="";

    html =`   <div class="gridcontainer">
                <div class="header">
                    <div class="headerText">TRAINING BUDDY</div>
                </div>
                <div class="maincontent">${createMainContent(selectedPage)}</div>
                
                <div class="menu">
                    <div class="menuContainer">
                        <div class="menuline"></div>
                        <div class="menuline"></div>
                        <div class="menuline"></div>      
                    </div>
                    <div class="menuButton1"></div>
                </div>
                ${footerSelector(model.footerNumber)}
            </div>`;

    document.getElementById("app").innerHTML = html;
};

function footerSelector(number){
return model.footer[number];
}