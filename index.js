
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
                           <div>My high school had an 8-day "rotating" schedule. This means there were 8 distinct schedules, but the order of periods didn't follow a simple cyclical pattern, nor did they consistently fall on the same day of the week. This lead to a lot of headaches for freshmen – and some teachers too! Many people set pictures of their schedules as their phone's lock screen.
                           <br><br>
                           I didn't want to change my wallpaper from the pretty picture of a lake I took, but was also going through folded up paper copies of my schedule one forest at a time. One week I whipped up an "app" that was really just a tableview hard-coded with my own schedule.
                           <br><br>
                           Other students saw me using the app, and began asking me to make them one. Over the next several months I improved my hacked together solution into a real, functioning, fully-featured app. Students could enter their own schedule, view a map of the school, and even turn on notifications that would push their next class to the screen just as a period ended.
                           <br><br>
                           The following year I released V2.0. I was using the Parse Backend to push the correct schedule of the 8-day rotation to users' phones. I could send out notifications for events such as school closings, users could even export and share their schedules with others! The backend also let me monitor usage. During my senior year, 900 kids in a school of 1300 were using it daily.
                           <br><br>
                           Unfortunately, Facebook acquired Parse some years ago, and <a href="https://techcrunch.com/2017/01/30/facebooks-parse-developer-platform-is-shutting-down-today/">announced its shutdown</a> while I was in my freshmen year of college. The app has since fallen to the wayside, but now my sister is starting high school and I hope to resurrect it for her later this year.
                           </div>
                       </div>`;

var myRoomPanelContent = `<div class="panel-vex-content">
                      <div>My Room</div>
                      <h5>The World's Coolest FFT Visualization</h5>
                      <img src="/tapestryfft.gif" align="right">
                      <div>Using a Raspberry Pi, cheap projector, and OpenFrameworks, I created a C++ program that lights up different components of a 9x8' tapestry on my wall in response to music.
                      <br><br>
                      Adobe Illustrator's Live Trace feature is used to turn an image of the tapestry into an SVG, from which I can select certain components to light up. An OpenFrameworks app runnning on the Raspberry Pi performs FFT on mic input, and maps the amplitude of each frequency band to the intensity with which a given SVG component is projected.
                      <br><br> There are also LED Strips on the wall that draw a more traditional FFT visualization. They're directly controlled via some Arduinos and a separate daemon I wrote for the Pi that communicates with them.
                      <br><br>As a bonus I wrote a <a href="https://github.com/nfarina/homebridge">homebridge</a> plugin for my protocol that lets me control the lights via Siri when music isn't playing.
                      </div>
                  </div>`;

var remoteUIPanelContent = `<div class="panel-vex-content">
                      <div>ofxRemoteUI Web Interface</div>
                      <h5>Extended the ofxRemoteUI OpenFrameworks Addon</h5>
                      <img src="https://raw.githubusercontent.com/jackosx/ofxRemoteUI-Web/master/screenshots/screen-med.png" align="right">
                      <div>OpenFrameworks is a self-described "<a href="http://openframeworks.cc">open source C++ toolkit for creative coding.</a>"
                      Developers have created an ecosystem of open source "ofxAddons" that provide new features or wrap existing libraries, all following consistent conventions.
                      <br><br>
                      Oriol Ferrer Mesià created <a href="https://github.com/armadillu/ofxRemoteUI">ofxRemoteUI</a>, an addon that lets you serve a program's variables (bools, floats, colors, and others)
                      on the local network for live tweaking via a GUI.  Previously, there were only native iOS and macOS clients, which communicated with the host machine via OSC.
                      I created <a href="https://github.com/jackosx/ofxRemoteUI-Web">a web interface</a> for the addon (using dat.GUI for the actual control components) and extended the server to allow WebSocket connections. Now, any device with a browser can be used
                      as a controller for ofxRemoteUI.
                      </div>
                  </div>`;

var panelContent = {
    'mor-panel' : morPanelContent,
    'schedule-app-panel' : schedulePanelContent,
    "my-room-panel" : myRoomPanelContent,
    "remote-ui-panel": remoteUIPanelContent
};
