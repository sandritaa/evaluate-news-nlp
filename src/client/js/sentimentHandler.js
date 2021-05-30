// Function to update the UI with the sentiment data coming from the server
function updateUI(sentimentData) {

    // Get the HTML elements to populate
    let polarityHTML = document.getElementById('polarity');
    let agreementHTML = document.getElementById("agreement");
    let subjectivityHTML = document.getElementById("subjectivity");
    let confidenceHTML = document.getElementById("confidence");
    let ironyHTML = document.getElementById("irony");

    // Create the tevarious text nodes and append them to the relevant child
    let polarityText = document.createTextNode(sentimentData.score_tag);
    let agreementText = document.createTextNode(sentimentData.agreement);
    let subjectivityText = document.createTextNode(sentimentData.subjectivity);
    let confidenceText = document.createTextNode(sentimentData.confidence);
    let ironyText = document.createTextNode(sentimentData.irony);

    // Append all the text as children to their parent element
    polarityHTML.appendChild(polarityText);
    agreementHTML.appendChild(agreementText);
    subjectivityHTML.appendChild(subjectivityText);
    confidenceHTML.appendChild(confidenceText);
    ironyHTML.appendChild(ironyText);
}

// Function to post request to server

async function postToServer(url) {

    // Create object
    let projectData = {
        articleURL: url
    }

    // Send the url to the server so that it can call the API
    console.log('Sending a post to server')
    const sentimentJSON = await fetch('http://localhost:3000/postRoute', {
        method: "POST",
        credentials: 'same-origin',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(projectData)
    });

    const sentiment = await sentimentJSON.json();
    console.log('Received response from server')
    return sentiment
}

// Check if string is a url
function isURL(str) {
    let regex = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    let urlCheck;
    if (regex == null) {
        urlCheck = 0;
    } else {
        urlCheck = 1;
    };
    return urlCheck;
}


// This is where the code actually runs
function handleSubmit(event) {
    event.preventDefault()

    // Get the url that the user has inputted
    let url = document.getElementById("url").value;
    let urlCheck = isURL(url);
    // Post to server
    if (urlCheck) {
        postToServer(url).then(updateUI)
    } else {
        alert("Please input a correct url")
    }

}

// Since our entry point is index.js in the client folder, we now export our function
export { handleSubmit }
export { isURL }
export { postToServer }
export { updateUI }
