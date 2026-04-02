const tourData = {
    hyderabad: [
        {
            name: "Charminar",
            desc: "Historic monument built in 1591",
            time: "Oct - Mar"
        },
        {
            name: "Golconda Fort",
            desc: "Famous for sound acoustics",
            time: "Nov - Feb"
        }
    ],
    delhi: [
        {
            name: "Red Fort",
            desc: "UNESCO World Heritage Site",
            time: "Oct - Mar"
        },
        {
            name: "India Gate",
            desc: "War memorial",
            time: "Nov - Feb"
        }
    ],
    mumbai: [
        {
            name: "Gateway of India",
            desc: "Sea-facing monument",
            time: "Nov - Feb"
        },
        {
            name: "Marine Drive",
            desc: "Queen's Necklace",
            time: "Evening"
        }
    ]
};

// Show places
function showPlaces() {
    const city = document.getElementById("cityInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "";

    if (tourData[city]) {
        tourData[city].forEach(place => {
            resultDiv.innerHTML += `
                <h3>${place.name}</h3>
                <p>${place.desc}</p>
                <p><b>Best Time:</b> ${place.time}</p>
                <hr>
            `;
        });
    } else {
        resultDiv.innerHTML = "<p>City not found!</p>";
    }
}

// Chatbot
function sendMessage() {
    const input = document.getElementById("userInput").value.toLowerCase();
    const chatArea = document.getElementById("chatArea");

    chatArea.innerHTML += `<p><b>You:</b> ${input}</p>`;

    let response = "Sorry, I didn't understand.";

    if (input.includes("hi") || input.includes("hello")) {
        response = "Hello! Ask me about tourist places.";
    } 
    else if (input.includes("hyderabad")) {
        response = "Famous places: Charminar, Golconda Fort.";
    } 
    else if (input.includes("delhi")) {
        response = "Famous places: Red Fort, India Gate.";
    } 
    else if (input.includes("mumbai")) {
        response = "Famous places: Gateway of India, Marine Drive.";
    }

    chatArea.innerHTML += `<p><b>Bot:</b> ${response}</p>`;
    document.getElementById("userInput").value = "";
}