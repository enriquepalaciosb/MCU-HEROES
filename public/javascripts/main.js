// PAGES 2 + 3
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
            
            //     $.ajax({
            //         url : "/AddReport",
            //         type: "POST",
            //         data: JSON.stringify(newReport),
            //         contentType: "application/json; charset=utf-8",
            //          success: function (result) {
            //             console.log(result);
            //         }
            //     });
                
            // document.location.href = "index.html#list";

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
        // $.get("/getAllReports", function(data, status){  // AJAX get
        //     movieArray = data;  
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