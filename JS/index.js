var InfoBox =document.getElementById("InfoBox");
var body = document.getElementById("body")

window.onresize=()=>{ResizeTable()}
var ResizeTable = ()=>{InfoBox.style.marginLeft= body.offsetWidth/2/2+"px"}
ResizeTable()