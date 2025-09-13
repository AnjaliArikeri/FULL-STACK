//console.log("=== Hour 1: JSON Basics ===");
//let student={
    //myName : "Asha",
   // age:20,
 //   marks:[85,20.45]
    
//};
//let jsonString=JSON.stringify(student);
//console.log("JSON String:",jsonString);
//let parsedObj=JSON.parse(jsonString);
//console.log("Parsed Object:",parsedObj);

//console.log("--- Books Details---")
//let Books=
    
    //{title:"Jungle Book",
   // Author:"Mickey",
   // price:200};

//let jsonString1=JSON.stringify(Books);
//console.log("Book Details:",jsonString1);
//let parsedObj1=JSON.parse(jsonString1);
//console.log("Parsed Object:",parsedObj1);



//fetch sample JSON from API
//fetch("https://jsonplaceholder.typicode.com/posts/") 
//.then(response=>response.json())
//.then(data=>console.log("Fetched Data",data))
//.catch(error=>console.error("Error:",error));

//fetch all users and show in console+page
//fetch("https://jsonplaceholder.typicode.com/users")
//.then(res=> res.json())
//.then(users => {
   // let output="<h3>User List</h3><ol>";
    //users.forEach(user => {
     //   output += `<li>${user.name} - ${user.email}</li>`;

   // });
   // output+= "</ol>";
   // document.body.innerHTML+=output;
//});

//weather info fetcher project
//console.log("=== Weather Forecast-===")
//Predefined city -> coordinates
const cityCoords = {
    "banglore": { lat: 12.97, lon: 77.59 },
    "delhi": { lat: 28.61, lon: 77.20 },
    "london": { lat: 51.51, lon: -0.13 },
    "new york": { lat: 40.71, lon: -74.01 },
    "mumbai": { lat: 19.07, lon: 72.87 },
};

$("#fetchBtn").click(function () {
    let city = $("#cityInput").val().toLowerCase();  // Use .val() here!

    if (!cityCoords[city]) {
        $("#weather").html("City not in list");
        return;
    }

    let coords = cityCoords[city];
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        success: function (data) {
            if (data.current_weather) {
                $("#weather").html(`
                    <h3>Weather in ${city}</h3>
                    <p> Temp: ${data.current_weather.temperature} celsius</p>
                    <p>Wind: ${data.current_weather.windspeed} km/h</p>
                    <p>Time: ${data.current_weather.time}</p>
                `);
            } else {
                $("#weather").html("No data available.");
            }
        },
        error: function (error) {
            console.error(error);
            $("#weather").html("Error not available");
        }
    });
});
