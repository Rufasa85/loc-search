var searchForm = document.querySelector("#search-form");
var searchTermInput = document.querySelector("#search-term")
var formatSelect = document.querySelector("#format")

searchForm.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("form submitted!")
    var searchTerm = searchTermInput.value;
    var format = formatSelect.value;
    console.log(format,searchTerm);
})