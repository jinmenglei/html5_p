var add=setInterval("getTime()", 1000 * 30);
function getTime() {
    var date=new Date().toLocaleString('chinese',{hour12:false})
    var id1 = document.getElementById("time")
    id1.innerHTML=date.slice(-8,-3)
}

