function ads(){
    var date = new Date();
    var settime = document.getElementById("settime");
    settime.innerHTML = date.getHours() + ":" + date.getMinutes();
    var setdate = document.getElementById("setdate");
   setdate.innerHTML = date.getDate() + "-" + parseInt(date.getMonth()+1)+ "-" +date.getFullYear();
}
setInterval(ads,100);
onload = ads();
function getcolor(){
    var getcolor = document.getAnimations("setcolor").value;
    localStorage.setItem("color",getcolor);

    document.getElementById("time").style.background = localStorage.getItem("color");
    document.getElementById("body").style.background = localStorage.getItem("color");

}
function setcolor(){
    document.getElementById("setcolor").value = localStorage.getItem("color");

    document.getElementById("time").style.background = localStorage.getItem("color");
    document.getElementById("body").style.background = localStorage.getItem("color");

}
setInterval(setcolor,100);
