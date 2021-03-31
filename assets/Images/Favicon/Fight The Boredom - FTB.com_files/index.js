var InfoBox = document.getElementById("InfoBox");
var body = document.getElementById("body");
var selectP = document.getElementById("select_box")
window.onresize = () => {
  ResizeTable();
};
var ResizeTable = () => {
  if (window.innerWidth >= 400 && window.innerWidth <=900 ) {
    InfoBox.style.marginLeft = body.offsetWidth / 2 / 2 + "px";
    selectP.style.marginLeft = body.offsetWidth / 2 / 2 +10+ "px";
  } else if(window.innerWidth >=900){  
      InfoBox.style.marginLeft = body.offsetWidth /2/2 + "px";
  selectP.style.marginLeft = body.offsetWidth/2 -90+ "px";

  }else if (window.innerWidth <= 311) {
    InfoBox.style.marginLeft = body.offsetWidth / 2 / 2 / 2 + "px";
    selectP.style.marginLeft = body.offsetWidth / 2 / 2 / 2 +10 + "px";
  }else{InfoBox.style.marginLeft= body.offsetWidth/2/2/2+10+"px"
  selectP.style.marginLeft = body.offsetWidth /2/2/2+10+10+"px"
}
};
ResizeTable();
