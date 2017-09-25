
Array.from(document.getElementsByClassName("panel")).forEach(function(panel){
    // var panel = $(e.target).parent();
    panel.onclick = function(){
    var panelID = panel.id;
    if (panelContent[panelID]){
        vex.dialog.alert({ unsafeMessage : panelContent[panelID] });
        document.getElementsByClassName("vex-content")[0].style.width = "75vw"
    }
}
});

var morPanelContent = `<div class="panel-vex-content">
                           <div>Mor Project (Working Prototype)</div>
                           <h5>Using iBeacons for Interactive Exhibits</h5>
                           <img src="/OldVersions/FirstDraft/Mor.png" align="right">
                           <div>During my junior year of high school I had an obsession with the American Museum of Natural history. Not only did I enjoy wandering the halls, I loved the historical aspect of the museum itself. <br><br> When Apple announced their iBeacon APIs at WWDC that year, I saw an opportunity to marry my two passions – technology and AMNH. I envisioned an app that uses BLE radios to determine which exhibit a user is looking at. Their phone could provide relevant interactive content, while the exhibits would appear unchanged. It was the perfect way to modernize the museum while preserving the sanctity of its halls! I made a working prototype of the app and showed it to Barry Joseph, Associate Director of Digital Technology at the museum for feedback. Read his account <a href="https://tinyurl.com/jackmuseum">here</a>.<br><br> This past summer I interned for the company (<a href="https://localprojects.com">Local Projects</a>) that AMNH actually contracted to build such an app!
                           </div>
                       </div>`;

var schedulePanelContent = `<div class="panel-vex-content">
                           <div>Darien High School Schedule App</div>
                           <h5>"You're that App Kid right?"</h5>
                           <img src="/appthumb.png" align="right">
                           <div>My high school had an 8-day "rotating" schedule. This means there were 8 distinct schedules, but the order of periods didn't follow a simple cyclical pattern, nor did they consistently fall on the same day of the week. This lead to a lot of headaches for freshmen – and some teachers too! A lot of people were setting pictures of their schedules as their phone's lock screen.
                           <br><br>
                           I didn't want to change my wallpaper from the pretty picture of a lake I took, but I was also going through folded up paper copies of my schedule one forest at a time. One week I whipped up an "app" that was really just a tableview hard-coded with my own schedule.
                           <br><br>
                           Other students saw me using the app and were asking me to make them one. Over the course of a couple months I improved my hacked together solution into a real, functioning, fully featured app. Students could enter their own schedule, view a map of the school, and even turn on notifications that would push their next class to the screen just as a period ended.
                           <br><br>
                           The following year I released V2.0. I was using the Parse Backend to push the correct schedule of the 8-day rotation to user's phones. I could send out notifications for events such as school closings, users could even export and share their schedules with others! The backend also let me monitor usage. During my senior year 900 kids in a school of 1300 were using it daily.
                           <br><br>
                           Unfortunately, Facebook acquired Parse some years ago, and <a href="https://techcrunch.com/2017/01/30/facebooks-parse-developer-platform-is-shutting-down-today/">announced its shutdown</a> while I was in my freshmen year of college. The app has since fallen to the wayside, but now my sister is starting high school and I hope to resurrect it for her later this year.
                           </div>
                       </div>`;

var panelContent = {
    'mor-panel' : morPanelContent,
    'schedule-app-panel' : schedulePanelContent
};
