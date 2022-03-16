function QandAPageView(){
    let html = "";

    html =`<div class="QandAPageContainer">
              <div class="qandaTittel">Q and A</div>
            ${ showQandA()}
           </div>
    
            `;
    return html;
}

function showQandA(){
let html = "";
let qandALength = [1,2,3,4,5,6]; // må byttes ut slik at det er q and a
for(let i = 0; i < qandALength.length;i++){

    html += `<div class="qandaBox">
    lots of questions
    
    </div>`

}
return html;


}