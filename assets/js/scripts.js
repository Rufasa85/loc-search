var searchForm = document.querySelector("#search-form");
var searchTermInput = document.querySelector("#search-term")
var formatSelect = document.querySelector("#format")

searchForm.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("form submitted!")
    var searchTerm = searchTermInput.value;
    var format = formatSelect.value;
    console.log(format,searchTerm);
    var urlToFetch = `https://www.loc.gov/${format}/?q=${searchTerm}&fo=json`
   fetch(urlToFetch).then(function(response){
       return response.json()
   }).then(function(data){
       for (let i = 0; i < data.results.length; i++) {
           
           console.log(data.results[i].id);
           console.log(data.results[i].title);
           console.log(data.results[i].description[0]);
        }
   })
})