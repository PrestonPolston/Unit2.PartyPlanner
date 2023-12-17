//   REFERENCES
const API_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/recipes";
const submit = document.getElementById("submit");
const root = document.getElementById("root");
// const output = document.getElementById('output')

// Created div that will show the output once form is submitted
const div = document.createElement("div");
div.style.margin = "5%";
div.style.width = "20%";
div.style.setProperty = "width, 50px, !important";
const partyInfo = [];
// Create event listener
submit.addEventListener("click", addPartyInfo);
// created const variables for value of our information we want from our form
function addPartyInfo(e) {
  e.preventDefault();
  const Names = document.getElementById("name").value;
  const Dates = document.getElementById("date").value;
  const Times = document.getElementById("time").value;
  const Locations = document.getElementById("location").value;
  const Descriptions = document.getElementById("description").value;

  // we will take the .value from the const variables above and put them int a function eventData()

  const eventData = {
    name: Names,
    date: Dates,
    time: Times,
    location: Locations,
    description: Descriptions,
  };

  partyInfo.push(eventData);

  const pName = document.createElement("p");
  pName.innerHTML = `Name: ${eventData.name}`;

  const pDate = document.createElement("p");
  pDate.innerHTML = `Date:${eventData.date}`;

  const pTime = document.createElement("p");
  pTime.innerHTML = `Time: ${eventData.document}`;

  const pLocation = document.createElement("p");
  pLocation.innerHTML = `Location: ${eventData.location}`;

  const pDescription = document.createElement("p");
  pDescription.innerHTML = `Description: ${eventData.description}`;

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  div.appendChild(pName);
  div.appendChild(pDate);
  div.appendChild(pTime);
  div.appendChild(pLocation);
  div.appendChild(pDescription);
  root.appendChild(output);
  root.appendChild(div);
}

submit.addEventListener("click", sendDataToAPI);

function sendDataToAPI(e) {
  e.preventDefault();

  // Prepare the data from the div content (example)
  const outputData = document.getElementById("output").textContent;

  // Use the fetch API to send the output data to your API
  fetch(
    "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/recipes",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: outputData }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      // Handle any additional actions or UI updates based on the API response
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
