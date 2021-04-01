  var drdown = document.getElementById("participants");

  window.onresize = () => {
  ResizeTable();
};
var InfoBox = document.getElementById("InfoBox");

var ResizeTable = () => {
  //variables 👇👇👇

  var info = document.getElementById("info");
  var body = document.getElementById("body");
  var selectP = document.getElementById("select_box");

  // variables ⬆️ ⬆️ ⬆️

  //width 👇👇👇
  if (window.innerWidth >= 400 && window.innerWidth <= 900) {
    InfoBox.style.marginLeft = body.offsetWidth / 2 / 2 + "px";
    selectP.style.marginLeft = body.offsetWidth / 2 / 2 + 10 + "px";
  } else if (window.innerWidth >= 900) {
    InfoBox.style.marginLeft = body.offsetWidth / 2 / 2 + "px";
    selectP.style.marginLeft = body.offsetWidth / 2 - 90 + "px";
  } else if (window.innerWidth <= 311) {
    InfoBox.style.marginLeft = body.offsetWidth / 2 / 2 / 2 + "px";
    selectP.style.marginLeft = body.offsetWidth / 2 / 2 / 2 + 10 + "px";
  } else {
    InfoBox.style.marginLeft = body.offsetWidth / 2 / 2 / 2 + 10 + "px";
    selectP.style.marginLeft = body.offsetWidth / 2 / 2 / 2 + 10 + 10 + "px";
  }

  // width ⬆️ ⬆️ ⬆️

  // Height 👇👇👇

  if (window.innerHeight >= 800) {
    info.style.marginTop = "20%";
  }
  // Height ⬆️ ⬆️ ⬆️
};
ResizeTable();
var fetchData = () => {
   var LinkNameparent = document.getElementById("LinkNameparent")
 var SelectedValueDrdown = drdown.options[drdown.selectedIndex].text;
  var ActivityName = document.getElementById("ActivityName");
  var loader = document.getElementById("loader");
  var LinkName= document.getElementById("LinkName")
  ParticipantsNum = document.getElementById("ParticipantsNum");
  var LinkParticipants = document.getElementById("LinkParticipants");
    loader.style.display = "block";
      InfoBox.style.display = "none";
       fetch(
    `https://www.boredapi.com/api/activity?participants=${SelectedValueDrdown}`
  ).then((d) =>
    d.json().then((data) => {
   
      var activity = data.activity;
      var participants = data.participants;
      var Link = data.link;
      ActivityName.innerText = activity;
      LinkParticipants.innerText = Link === "" ? "participants" : "Link";
      if(Link === "") {
        ParticipantsNum.style.display = "table-cell"
      LinkNameparent.style.display="none"
      ParticipantsNum.innerText = participants
    }else{LinkNameparent.style.display = "table-cell"
    ParticipantsNum.style.display="none"
  LinkName.innerText=Link}
    console.log(data)

      setTimeout(() => {
        InfoBox.style.display = "table";
      loader.style.display = "none";

      }, 1000);
    })
  );
};

fetchData();
drdown.addEventListener("change",fetchData)