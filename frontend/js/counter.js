
window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
});

const functionApiUrl = "https://getresumecounterfuncapp.azurewebsites.net/api/GetResumeCounter?code=T0gkBTrYe5OA5SY7pc01fiI/2uB3QzL8HQIQr4OlA4IlUwYP1Cw7jA==";
const localFunctionAPI = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response =>{
        return response.json()
    }).then(response => {
        console.log("Webiste called Function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}
