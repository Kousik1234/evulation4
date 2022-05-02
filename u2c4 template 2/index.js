// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",team);
var teamArr=JSON.parse(localStorage.getItem("schedule")) || [];
function team() {
    event.preventDefault();

    var  teamObj = {
        matchNum: masaiForm.matchNum.value,
        teamA: masaiForm.teamA.value,
        teamB: masaiForm.teamB.value,
        matchdate: masaiForm.date.value,
        venue: masaiForm.venue.value,
    };
    teamArr.push(teamObj);
    console.log(teamArr);

    localStorage.setItem("schedule",JSON.stringify(teamArr));

    window.location.href= "matches.html"
}
