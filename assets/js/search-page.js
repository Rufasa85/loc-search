var searchForm = document.querySelector("#search-form");
var searchTermInput = document.querySelector("#search-term")
var formatSelect = document.querySelector("#format")
var resultsTermSpan = document.querySelector("#results-term")
var resultsFormatSpan = document.querySelector("#results-format")
var resultsDiv = document.querySelector("#results");
console.log('search page');

var queryArr = location.search.split("&");
var searchTerm = queryArr[0].split("=")[1]
var format = queryArr[1].split("=")[1]

console.log(searchTerm,format);

var urlToFetch = `https://www.loc.gov/${format}/?q=${searchTerm}&fo=json`
fetch(urlToFetch).then(function(response){
    return response.json()
}).then(function(data){
    resultsTermSpan.textContent = searchTerm;
    resultsFormatSpan.textContent = format;
    resultsDiv.innerHTML = ""
    for (let i = 0; i < data.results.length; i++) {
        var resultBlock = document.createElement("div");
        resultBlock.setAttribute("class","result-block");

        console.log(data.results[i].title);
         var titleH4 = document.createElement("h4");
         titleH4.textContent = data.results[i].title;
         resultBlock.append(titleH4);

        console.log(data.results[i].description[0]);
        var descP = document.createElement("p");
        descP.textContent = data.results[i].description[0];
        resultBlock.append(descP);
        
        console.log(data.results[i].id);
        var linkAnchor = document.createElement("a");
        var linkButton = document.createElement("button");
        linkButton.textContent ="Read More";
        linkAnchor.setAttribute("href", data.results[i].id);
        linkAnchor.setAttribute("target","_blank");
        linkAnchor.append(linkButton)
        resultBlock.append(linkAnchor);

         resultsDiv.append(resultBlock);

     }
})
