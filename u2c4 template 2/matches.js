// write js code here corresponding to matches.html
var matchArr=JSON.parse(localStorage.getItem("schedule"));
var favouritesArr = JSON.parse(localStorage.getItem("favourites")) || [];
displayData(matchArr);

function venuefilter (){
    var select=document.getElementById("filterVenue").value;
    var filterlist=matchArr.filter(function(elem){
        return elem.venue==select;
    });
    displayData(filterlist);
    console.log(filterlist)
}

function displayData(data){
     document.querySelector("tbody").innerHTML="";
     data.forEach(function (elem)  {
         var tr = document.createElement("tr");
         
         var td1 = document.createElement("td");
         td1.innerText=elem.matchNum;

         var td2 = document.createElement("td");
         td2.innerText=elem. teamA;

         var td3 = document.createElement("td");
         td3.innerText=elem.teamB;

         var td4 = document.createElement("td");
         td4.innerText=elem. matchdate;

         var td5 = document.createElement("td");
         td5.innerText=elem. venue;

         var td6 = document.createElement("td");
         td6.innerText="Add as Favourites";
         td6.style.color="blue";
         td6.style.cursor = "pointer";
         td6.addEventListener("click", function(){
             favouritesFun(elem);
         });

         tr.append(td1,td2,td3,td4,td5,td6);

         document.querySelector("tbody").append(tr);
     });
     function favouritesFun(elem){
        favouritesArr.push(elem);
        console.log(favouritesArr)
        localStorage.setItem("favourites", JSON.stringify(favouritesArr))   
    }
}
