// PAGES 2 + 3
// Hero Array
let herosArray = [];
// Creating a construtor to store in Array
let HeroObject = function (pHeroName, pUserReport, pUserPhase, pURL) {
    this.hero = pHeroName;
    this.report = pUserReport;
    this.year = pUserPhase;
    this.URL = pURL;
}
    document.addEventListener("DOMContentLoaded", function (event) {
        document.getElementById("buttonAdd").addEventListener("click", function () {
            herosArray.push(new HeroObject(document.getElementById("hero").value, document.getElementById("damage-report").value, document.getElementById("select-type").value, document.getElementById("footage").value));
            // Uncomment line below for testing purposes
            // console.log(herosArray);
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
        var myul = document.getElementById("myList");
        myul.innerHTML = '';
        herosArray.forEach(function (element) {
            var li = document.createElement('li');
            li.innerHTML =  element.hero + ": { " 
            + "Phase: " + element.year 
            + " Report: " + element.report 
            + " Video link: " + element.URL
            + "}";
            myul.appendChild(li);
            });
        };