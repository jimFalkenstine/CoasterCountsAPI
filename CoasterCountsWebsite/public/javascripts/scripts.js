let coasterID = Math.floor(Math.random() * 54) + 1

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

async function getAllCoasters() {
  let url = "http://localhost:5000/api/";
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
    let html = "";
    let htmlSegment = `<div class="coaster" id="featured-coaster">
                       <img src=${coaster.imageURL} alt="${coaster.name}">
                       <div class="info">
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
                       </div>
                       </div>`;

    html += htmlSegment;

    let contentHeader = document.querySelector(".content-header");
    contentHeader.innerHTML= "Featured Coaster";
    let container = document.querySelector(".container");
    container.innerHTML = html;
}

async function renderKingsIslandCoasters() {
  let response = await getAllCoasters();
  let coasters = response.data;
  let html = "";
  for (let i = 0; i < 18; i ++) {
    let coaster = coasters[i];
    let htmlSegment = `<div class="coaster">
                       <img src=${coaster.imageURL} alt="${coaster.name}">
                       <div class="info">
                       <h2>${coaster.name}</h2>
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
                       </div>
                       </div>`;
    html += htmlSegment;
  }
  let contentHeader = document.querySelector(".content-header");
  contentHeader.innerHTML= "Kings Island Coasters";
  let container = document.querySelector(".container");
  container.innerHTML = html;
}

async function renderCedarPointCoasters() {
  let response = await getAllCoasters();
  let coasters = response.data;
  let html = "";
  for (let i = 18; i < 35; i ++) {
    let coaster = coasters[i];
    let htmlSegment = `<div class="coaster">
                         <img src=${coaster.imageURL} alt="${coaster.name}">
                         <div class="info">
                         <h2>${coaster.name}</h2>
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
                         </div>
                         </div>`;
    html += htmlSegment;
  }
  let contentHeader = document.querySelector(".content-header");
  contentHeader.innerHTML= "Cedar Point Coasters";
  let container = document.querySelector(".container");
  container.innerHTML = html;
}

async function renderKingsDominionCoasters() {
  let response = await getAllCoasters();
  let coasters = response.data;
  let html = "";
  for (let i = 35; i < 44; i ++) {
    let coaster = coasters[i];
    let htmlSegment = `<div class="coaster">
                         <img src=${coaster.imageURL} alt="${coaster.name}">
                         <div class="info">
                         <h2>${coaster.name}</h2>
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
                         </div>
                         </div>`;
    html += htmlSegment;
  }
  let contentHeader = document.querySelector(".content-header");
  contentHeader.innerHTML= "Kings Dominon Coasters";
  let container = document.querySelector(".container");
  container.innerHTML = html;
}

async function renderCarowindsCoasters() {
  let response = await getAllCoasters();
  let coasters = response.data;
  let html = "";
  for (let i = 44; i < 54; i ++) {
    let coaster = coasters[i];
    let htmlSegment = `<div class="coaster">
                         <img src=${coaster.imageURL} alt="${coaster.name}">
                         <div class="info">
                         <h2>${coaster.name}</h2>
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
                         </div>
                         </div>`;
    html += htmlSegment;
  }
  let contentHeader = document.querySelector(".content-header");
  contentHeader.innerHTML= "Carowinds Coasters";
  let container = document.querySelector(".container");
  container.innerHTML = html;
}

async function renderCanadasWonderlandCoasters() {
  let response = await getAllCoasters();
  let coasters = response.data;
  let html = "";
  for (let i = 93; i < 104; i ++) {
    let coaster = coasters[i];
    let htmlSegment = `<div class="coaster">
                         <img src=${coaster.imageURL} alt="${coaster.name}">
                         <div class="info">
                         <h2>${coaster.name}</h2>
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
                         </div>
                         </div>`;
    html += htmlSegment;
  }
  let contentHeader = document.querySelector(".content-header");
  contentHeader.innerHTML= "Canada's Wonderland Coasters";
  let container = document.querySelector(".container");
  container.innerHTML = html;
}

function renderAbout() {
  let html = `<div id=about>
              <h2>About</h2>
              <p>Welcome to the CoasterCounts Web App.  Here you can browse roller coaster stats from Kings Island, Cedar Point, Kings Dominion and Carowinds.</p>
              </div>`;
              
  let contentHeader = document.querySelector(".content-header");
  contentHeader.innerHTML= "";
  let container = document.querySelector(".container");
  container.innerHTML = html;
}

function renderContact() {
  let html = `<div id="contact">
              <h2>Contact</h2>
              <p><strong>Email:</strong> <a href="mailto:jim.falkenstine@gmail.com">jim.falkenstine@gmail.com</a></p>
              </div>`;

  let contentHeader = document.querySelector(".content-header");
  contentHeader.innerHTML= "";
  let container = document.querySelector(".container");
  container.innerHTML = html;
}

renderSingleCoaster();