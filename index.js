
Array.from(document.getElementsByClassName("panel")).forEach(function(panel){
    // var panel = $(e.target).parent();
    panel.onclick = function(){
    var panelID = panel.id;
    if (panelContent[panelID])
        vex.dialog.alert({ unsafeMessage : panelContent[panelID] });
        document.getEle
}
});

var morPanelContent = `<div class="panel-vex-content">
                           <div>Mor Project (Working Prototype)</div>
                           <h5>Using iBeacons for Interactive Exhibits</h5>
                           <img src="/OldVersions/FirstDraft/Mor.png">
                           <div>During my junior year of high school I had an obsession with the American Museum of Natural history. Not only did I enjoy wandering the halls, I loved the historical aspect of the museum itself. <br><br> When Apple announced their iBeacon APIs at WWDC that year, I saw an opportunity to marry my two passions (tech and AMNH). I envisioned an app that uses BLE radios to determine which exhibit a user is looking at. Their phone could provide relevant interactive content, while the exhibits would appear unchanged. It was the perfect way to modernize the museum while preserving the sanctity of its halls! I made a working prototype of the app and showed it to Barry Joseph, Associate Director of Digital Technology at the museum for feedback. Read his account <a href="https://tinyurl.com/jackmuseum">here</a>.<br><br> This past summer I interned for the company (<a href="https://localprojects.com">Local Projects</a>) that AMNH actually contracted to build such an app!
                           </div>
                       </div>`;

var panelContent = {
    'mor-panel' : morPanelContent
};
