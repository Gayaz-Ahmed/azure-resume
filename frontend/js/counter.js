
window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
});


const functionAPI = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionAPI).then(response =>{
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


/*
window.addEventListener('DOMContentLoaded', (event) => {
    getCounter();
});

const azureFunctionApi = "https://cloudresumeazure.azurewebsites.net/api/resumecounter";

const getCounter = async () => {
    try {
        const response = await fetch(azureFunctionApi);

        const data = await response.json();

        const element = document.getElementById('visitor-num');

        element.textContent = `${data.counter} times`;
              
    } catch (error) {
        console.log(error);
    } 
} 
*/