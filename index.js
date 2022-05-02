// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", myform)

function myform (){
    event.preventDefault()

    var match_data_arr = JSON.parse(localStorage.getItem("schedule")) || []

    var match_data = 
    {
        match_number: document.querySelector("#matchNum").value,
        team_A : document.querySelector("#teamA").value,
        team_B : document.querySelector("#teamB").value,
        match_date :document.querySelector("#date").value,
        match_venue : document.querySelector("#venue").value,
    }

   match_data_arr.push(match_data)
   console.log(match_data_arr)

   localStorage.setItem("schedule",JSON.stringify(match_data_arr))
}
