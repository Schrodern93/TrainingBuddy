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
    if(model.pageSelected == "QandAPage"){
        html = QandAPageView();
        model.footerNumber = 1
    }
    if(model.pageSelected == "settingsPage"){
        html = settingsPageView();
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
                ${footerSelector(model.footerNumber)}
                <div class="menu" ontouchstart="">
                    <div id="menuContainer"  onclick="inFocus()">
                        <div id="menuline1" class="menuline1">&#x1f464</div>
                        <div id="menuline2" class="menuline2">?</div>
                        <div id="menuline3" class="menuline3">&#x2699</div>   
                    </div> 
                    <div id="defocus" onclick="inFocus()"><div class="cross">&#10006</div></div>
                </div>
               
            </div>`;

    document.getElementById("app").innerHTML = html;
};

function footerSelector(number){
return model.footer[number];
}

let isActive = true; 
        
        function inFocus(){
            let current = document.getElementById("defocus");
            activateMenuButtons()
            if (isActive==true){
                current.style.zIndex = 10;
                current.style.color = "white";
                current.style.transitionDelay = 0;
                current.style.transitionDuration = 0.2;
                isActive = false;
            }
            else{
                current.style.zIndex = -1;
                current.style.color = "transparent";
                current.style.transitionDelay = 0;
                current.style.transitionDuration = 0.2;
                isActive = true;
            }
        }
        function activateMenuButtons(){
            let personButton = document.getElementById("menuline1");
            let QandAButton = document.getElementById("menuline2");
            let SettingsButton = document.getElementById("menuline3");
            if(isActive == true){
                personButton.style.zIndex = 11;
                QandAButton.style.zIndex = 11;
                SettingsButton.style.zIndex = 11;
                personButton.onclick = function(){mainView("profilePage")};
                QandAButton.onclick = function(){mainView("QandAPage")};
                SettingsButton.onclick = function(){mainView("settingsPage")};
            
             }
             else{
                // personButton.style.zIndex = 11;
                // QandAButton.style.zIndex = 11;
                // SettingsButton.style.zIndex = 11;
                personButton.onclick = "";
                QandAButton.onclick = "";
                SettingsButton.onclick =""; 
             }
         }