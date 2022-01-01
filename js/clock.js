let myName = prompt("Adınızı giriniz");
let idName = document.querySelector("#myName");
let clockTitle = document.querySelector("#myClock");

var saat;

function showTime() {
    var suan = new Date();
    var dsaat = suan.getHours();
    var ddak = suan.getMinutes();
    var sny = suan.getSeconds();
    var saaat = dsaat + ':' + ((ddak<10) ? '0' : '') + ddak + ':' + ((sny<10) ? '0' : '') + sny ;
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    clockTitle.innerHTML = saaat + " " + gunler[suan.getDate()];
    setTimeout("showTime()", 1000);
}



if(myName != null) {
    idName.innerHTML = `${myName}`;
    showTime();
} else {
    alert("Lütfen bir isim giriniz");
}