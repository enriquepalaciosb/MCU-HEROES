// PAGE 2 JS
// Hero Array
let herosArray = [];
// Creating a construtor to store in Array
let HeroObject = function (pHeroName, pUserReport, pUserPhase, pURL) {
    this.title = pHeroName;
    this.report = pUserReport;
    this.year = pUserPhase;
    this.URL = pURL;
}
    document.addEventListener("DOMContentLoaded", function (event) {
        document.getElementById("buttonAdd").addEventListener("click", function () {
            herosArray.push(new HeroObject(document.getElementById("hero").value, document.getElementById("damage-report").value, document.getElementById("select-type").value, document.getElementById("footage").value));
            // Uncomment line below for testing purposes
            console.log(herosArray);
            document.getElementById("hero").value = "";
            document.getElementById("damage-report").value = "";
            document.getElementById("select-type").value = "";
            document.getElementById("footage").value = "";
        });
    });

// PAGE 3 JS
