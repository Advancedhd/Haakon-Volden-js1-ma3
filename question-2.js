// Make a call to the following API endpoint:
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating

// Loop through the results and display the following properties in HTML, but only for the first eight results:
// name
// rating
// number of tags (not the tag details, just the amount of tags)
// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// You can use either regular promise or async/await syntax to make the call.

// Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.
const resButton = document.querySelector(".resButton")

async function getDetails() {
    console.log("Getting details...")
    const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
    const resContainer = document.querySelector(".res")
    resContainer.innerHTML = `<img class="loadingGif" src="/img/giphy.gif"></img>`
    try {
        const response = await fetch(url);
        const results = await response.json();    
        resContainer.innerHTML = "" 
        for (var i = 0; i < 8; i++ ) {
            let num = i.toString()
            var rating = results.results[num].rating
            var name = results.results[num].name
            var tags = results.results[num].tags
            tags = tags.length
            resContainer.innerHTML += `
            Name:           ${name}     <br> 
            Rating:         ${rating}   <br> 
            Amount of tags: ${tags}     <br><br>
            `
        }
    } catch (error) {
        throw err
    }
}
resButton.onclick = getDetails