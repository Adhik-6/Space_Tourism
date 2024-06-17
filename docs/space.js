const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.querySelectorAll('.closeBtn');

hamburgerBtn.addEventListener('click', () =>{
    sidebar.classList.remove('hidden');
    sidebar.classList.add('block');
})

closeBtn.forEach((item) => {
    item.addEventListener('click', () =>{
        sidebar.classList.remove('block');
        sidebar.classList.add('hidden');
    })
})

let destinationData;

(async () => {
    try{
        const response = await fetch('./data.json');
        const data = await response.json();
        destinationData = data;
        if (currentPage === 'destination'){fetchDestination();}
        else if (currentPage === 'crew'){fetchCrew();}
        else if (currentPage === 'technology'){fetchTechnology();}
    } 
    catch(error) {console.error(error);}
})();

function fetchDestination(){
    const planetBtnX = document.querySelectorAll('.planetBtn');
    const planetBtn = Array.from(planetBtnX);
    const planetName = document.getElementById('planetName');
    const planetImg = document.getElementById('planetImg');
    const planetDesc = document.getElementById('planetDesc');
    const planetDist = document.getElementById('planetDist');
    const travel = document.getElementById('travel');

    function planet(id){
        planetImg.src = `${destinationData.destinations[id].images.webp}`;
        planetName.textContent = planetImg.alt = `${destinationData.destinations[id].name}`;
        planetDist.textContent = `${destinationData.destinations[id].distance}`;
        planetDesc.textContent = `${destinationData.destinations[id].description}`;
        travel.textContent = `${destinationData.destinations[id].travel}`;
        planetBtn.forEach((item) => {
            if (item.classList.contains('bd-active-state','bd-active-state-alt')){
                item.classList.remove('bd-active-state','bd-active-state-alt');
                item.classList.add('bd-hover-state','bd-hover-state-alt');
            }
        })
        planetBtn[id].classList.add('bd-active-state','bd-active-state-alt');
        planetBtn[id].classList.remove('bd-hover-state','bd-active-hover-alt');
    }

    planetBtn[0].addEventListener('click', () => { planet(0)});
    planetBtn[1].addEventListener('click', () => { planet(1)});
    planetBtn[2].addEventListener('click', () => { planet(2)});
    planetBtn[3].addEventListener('click', () => { planet(3)});
}

function fetchCrew(){
    const pageBtnX = document.querySelectorAll('.pagination button');
    const pageBtn = Array.from(pageBtnX);
    const memberName = document.getElementById('memberName');
    const memberImg = document.getElementById('memberImg');
    const memberRole = document.getElementById('memberRole');
    const memberBio = document.getElementById('memberBio');
    function crewMembers(id){
        memberName.textContent = memberImg.alt = `${destinationData.crew[id].name}`;
        memberImg.src = `${destinationData.crew[id].images.webp}`;
        memberRole.textContent = `${destinationData.crew[id].role}`;
        memberBio.textContent = `${destinationData.crew[id].bio}`;
        pageBtn.forEach((item) => {
            if (item.classList.contains('pagination-active')){
                item.classList.remove('pagination-active');
            }
        })
        pageBtn[id].classList.add('pagination-active');
    }

    pageBtn[0].addEventListener('click', () => { crewMembers(0)});
    pageBtn[1].addEventListener('click', () => { crewMembers(1)});
    pageBtn[2].addEventListener('click', () => { crewMembers(2)});
    pageBtn[3].addEventListener('click', () => { crewMembers(3)});
}

function fetchTechnology(){
    const launchBtnX = document.querySelectorAll('.launchbtn button');
    const launchBtn = Array.from(launchBtnX);
    const launchName = document.getElementById('launchName');
    const launchDesc = document.getElementById('launchDesc');
    const launchImgLandscape = document.getElementById('launchImgLandscape');
    const launchImgPortrait = document.getElementById('launchImgPortrait');

    function technology(id){
        launchName.textContent = `${destinationData.technology[id].name}`;
        launchDesc.textContent = `${destinationData.technology[id].description}`;
        launchImgLandscape.src = `${destinationData.technology[id].images.landscape}`;
        launchImgPortrait.src = `${destinationData.technology[id].images.portrait}`;
        launchImgLandscape.alt = `${destinationData.technology[id].name}`;
        launchImgPortrait.alt = `${destinationData.technology[id].name}`;

        launchBtn.forEach((item) => {
            if (item.classList.contains('launchbtn-active')){
                item.classList.remove('launchbtn-active');
            }
        })
        launchBtn[id].classList.add('launchbtn-active');
    }

    launchBtn[0].addEventListener('click', () => { technology(0)});
    launchBtn[1].addEventListener('click', () => { technology(1)});
    launchBtn[2].addEventListener('click', () => { technology(2)});
}
