async function getCoasters() {
    let url = "http://localhost:5000/api/";
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderCoasters() {
    let response = await getCoasters();
    let coasters = response.data;
    console.log(coasters);
    let html = '';
    coasters.forEach(coaster => {
        let htmlSegment = `<div class="coaster">
                            <p>${coaster.name}</p>
                            <p>${coaster.park}</p>
                            <br>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

async function getSingleCoaster() {
    let url = "http://localhost:5000/api/1";
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
                       <p>${coaster.name}</p>
                      <p>${coaster.park}</p>
                      <br>
                      </div>`;

    html += htmlSegment;

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

async function searchCoasters() {
    let coasterName = document.getElementById("coasterName").value
    let url = "http://localhost:5000/api/search/?name=" + coasterName;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderSearch() {
    let response = await searchCoasters();
    let coasters = response.data;
    console.log(coasters);
    let html = '';
    coasters.forEach(coaster => {
        let htmlSegment = `<div class="coaster">
                            <p>${coaster.name}</p>
                            <p>${coaster.park}</p>
                            <br>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}