// write js code here corresponding to matches.html

var match_data =JSON.parse( localStorage.getItem("schedule"));


var match_data_arr = JSON.parse(localStorage.getItem("favourites")) || [ ];

match_data.forEach(function(elem){

var tr = document.createElement("tr");

var td1 = document.createElement("td");
td1.innerText = elem.match_number;


var td2 = document.createElement("td")
td2.textContent = elem.team_A;

var td3 = document.createElement("td");
td3.textContent = elem.team_B;

var td4 = document.createElement("td");
td4.innerText = elem.match_date;

var td5 = document.createElement("td");
td5.textContent =elem.match_venue;

var td6 = document.createElement("td");
td6.innerText = "Add To Favourites";
td6.style.color = "green";
td6.style.cursor = "pointer"
td6.addEventListener("click", function (){
    addtofav (elem)
})

tr.append(td1,td2,td3,td4,td5,td6)

document.querySelector("tbody").append(tr);
});

function addtofav (elem) {
    console.log(elem);
    match_data_arr.push(elem);
    localStorage.setItem("favourites",JSON.stringify(match_data));
  }



