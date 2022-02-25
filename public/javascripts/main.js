// PAGES 2 + 3

// const { json } = require("express/lib/response");

// Hero Array
let herosArray = [];
// Creating a construtor to store in Array
let HeroObject = function (pHeroName, pUserReport, pUserPhase, pURL) {
    this.ID = Math.random().toString(16).slice(5);  // tiny chance could get duplicates!
    this.hero = pHeroName;
    this.report = pUserReport;
    this.year = pUserPhase;
    this.URL = pURL;
}
function HeroIDMaker() {
   return Math.random().toString(16).slice(5);
}
    document.addEventListener("DOMContentLoaded", function (event) {
        document.getElementById("buttonAdd").addEventListener("click", function () {
            herosArray.push(new HeroObject(document.getElementById("hero").value, 
                document.getElementById("damage-report").value, 
                document.getElementById("select-type").value, 
                document.getElementById("footage").value));
            document.getElementById("hero").value = "";
            document.getElementById("damage-report").value = "";
            document.getElementById("select-type").value = "";
            document.getElementById("footage").value = "";
        });
        $(document).on("pagebeforeshow", "#list", function(event) {
            createList();
        });
    });
    function createList() {
         $.get("/accessDB", function(data, status){  // AJAX get
            herosArray = data;  
         });
         console.log(herosArray);
        var myul = document.getElementById("myList");
        myul.innerHTML = '';
        herosArray.forEach(function (element) {
            var li = document.createElement('li');
            li.innerHTML = element.ID 
            + " " + element.hero + ": { " 
            + "Phase: " + element.year 
            + " Report: " + element.report 
            + " Video link: " + element.URL
            + "}";
            myul.appendChild(li);
            });
        };