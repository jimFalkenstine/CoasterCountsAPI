let coasterID = Math.floor(Math.random() * 115) + 1


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

async function getSingleCoaster() {
    let url = "http://localhost:5000/api/" + coasterID;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderSingleCoaster() {
    let response = await getSingleCoaster();
    let coaster = response.data;
    console.log(coaster);
    let html = '';
    let htmlSegment = `<div class="coaster">
                       <img src=${coaster.imageURL} alt="${coaster.name}">
                       <h2>${coaster.name}</h2>
                       <h3>${coaster.park}</h3>
                       <p><b>Type:</b> ${coaster.type}</p>
                       <p><b>Design:</b> ${coaster.design}</p>
                       <p><b>Make:</b> ${coaster.make}</p>
                       <p><b>Length:</b> ${coaster.length} ft</p>
                       <p><b>Height:</b> ${coaster.height} ft</p>
                       <p><b>Speed:</b> ${coaster.speed} mph</p>
                       <p><b>Inversions:</b> ${coaster.inversions}</p>
                       <p><b>Year:</b> ${coaster.year}</p>
                       <p><b>Status:</b> ${coaster.status}</p>
                       <p><b>Other Names:</b> ${coaster.otherNames}</p>
                       <p><b>Country:</b> ${coaster.country}</p>
                       </div>`;

    html += htmlSegment;

    let container = document.querySelector(".container");
    container.innerHTML = html;
}

renderSingleCoaster();
