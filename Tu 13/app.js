
async function getHistoryData()
{
    let response = await fetch("https://coronavirus-map.p.rapidapi.com/v1/spots/year?region=ethiopia", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-map.p.rapidapi.com",
            "x-rapidapi-key": "64bca0886bmsha7377930000aed5p1a6aecjsn8fa7b68dbbfb"
        }
    });
    let data = await response.json();
    return data
  
}
document.addEventListener('DOMContentLoaded',ol)
function ol()
{
    getHistoryData().then(data=>{
        drawLineGraph(data.data);
    })
  
}
function drawLineGraph(data)
{
    let total =[];
    let year = []
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            year.push(key)
            total.push( data[key].total_cases);
            
            
        }
    } 
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: year,
          datasets: [{ 
              data: total,
              label: "Ethiopia",
              borderColor: "#ff0000",
              fill: false
            }, 
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Infection Graph on Ethiopia'
          }
        }
      });
}