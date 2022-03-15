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
    document.addEventListener("DOMContentLoaded", function (event) {
        document.getElementById("buttonAdd").addEventListener("click", function () {
            let newHero = new HeroObject(document.getElementById("hero").value, 
                document.getElementById("damage-report").value, 
                document.getElementById("select-type").value, 
                document.getElementById("footage").value);
            herosArray.push(newHero);
            
            $.ajax({
                url : "/addToDB",
                type: "POST",
                data: JSON.stringify(newHero),
                contentType: "application/json; charset=utf-8",
                success: function (result) {
                    alert(result);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) { 
                    alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                }    
            });
            document.getElementById("hero").value = "";
            document.getElementById("damage-report").value = "";
            document.getElementById("select-type").value = "";
            document.getElementById("footage").value = "";
        });
        $(document).on("pagebeforeshow", "#list", function(event) {
            createList();
        });

        document.getElementById("delete").addEventListener("click", function () {
            let localParm = localStorage.getItem('parm');  // get the unique key back from the dictionairy
            deleteHero(localParm);
            createList();  // recreate li list after removing one
            document.location.href = "index.html#list";  // go back to movie list 
        });

        $(document).on("pagebeforeshow", "#details", function(event) {
            let HeroID = localStorage.getItem('parm');
            document.getElementById("HeroID").innerHTML = HeroID;
        });

        function deleteHero(which) {
            console.log(which);
            let arrayPointer = GetArrayPointer(which);
            herosArray.splice(arrayPointer, 1);  // remove 1 element at index 
        }

        function GetArrayPointer(localID) {
            for (let i = 0; i < herosArray.length; i++) {
                if (localID == herosArray[i].ID) {
                    return i;
                }
            }
        }
    });


    function createList() {
         $.get("/accessDB", function(data, status){  // AJAX get
            herosArray = data;  

            var myul = document.getElementById("myList");
            myul.innerHTML = '';
            herosArray.forEach(function (element) {
                var li = document.createElement('li');
                li.innerHTML = element.hero
                
                var p = document.createElement('li');
                p.innerHTML = "User ID: " + element.ID + " |  Phase: " + element.year + " |  Report: " + element.report + " |  Video Evidence: " + '<a href=http://' + element.URL + '>' + element.URL + '</a>'; 

                console.log(p);

                li.classList.add('oneMovie');
                myul.appendChild(li);
                
                p.classList.add('twoMovie');
                myul.appendChild(p);

                li.setAttribute("data-parm", element.ID, element.hero, element.year, element.report, element.URL);
                myul.appendChild(li);
                });

            var liList = document.getElementsByClassName("oneMovie");
            console.log(liList);

            let newHeroArray = Array.from(liList);

            newHeroArray.forEach(function (element,i) {     // element is a temp name for each object in array, i is a counter
                element.addEventListener('click', function () {     // add an event method for each li

                    var link = this.innerHTML.toUpperCase().replace(/\s+/g, '');
                    document.location.href = "index.html#" + link +"";
                });
            });


            li.setAttribute("data-parm", element.ID, element.hero, element.year, element.report, element.URL);

            myul.appendChild(li);
        });
}