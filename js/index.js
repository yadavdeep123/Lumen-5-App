let contentMarket = [
    "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Hydrogen%20Economy.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/siemens-content.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Responsible%20Investment.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Workplace%20Evolution.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/The%20Pandemic.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Supply%20Chain%20Resilience.mp4"
]
let communication = [
    "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Coral%20Reef%20Protection.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Zespri%20Selects%20SAP.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Textile%20Recycling.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Navigating%20the%20Seas.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Outstanding%20Researchers.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Fighting%20COVID-19.mp4",
]

let promo = [
    "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Global%20Leader%20(1).mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Remote%20Auditing.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Turbocompressor.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Innovation%20Awards.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Dormakaba%20(1).mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/V%20Plate.mp4",
]

let people = [
    "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Women%20in%20Tech.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Volunteers%20Week.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Create%20Your%20Future.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/siemens-culture.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Voice%20of%20Sulzer.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Fundraising%20Challenge.mp4",
]

let local1 = [
    "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Colliers%20(1).mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/siemens-local.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Agility.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Siemens%20Energy.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/DNV%20GL.mp4",
    "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Colliers%20(2).mp4",
]



let shells = document.querySelectorAll('.shell');


let buttons = document.querySelectorAll('.middle-nav button');

function loadVideos(category) {
    let videos;
    switch (category) {
        case 'contentMarketing':
            videos = contentMarket;
            break;
        case 'communications':
            videos = communication;
            break;
        case 'promotional':
            videos = promo;
            break;
        case 'peopleCulture':
            videos = people;
            break;
        case 'localization':
            videos = local1;
            break;
        default:
            videos = contentMarket;
    }

    shells.forEach((shell, index) => {
        let video = document.createElement('video');
        video.className = 'video';
        video.src = videos[index];
        video.controls = true;
        shell.innerHTML = ''; 
        shell.appendChild(video);
    });
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        let category = button.textContent.toLowerCase().replace(' ', '');
        loadVideos(category);
    });
});


loadVideos('contentMarketing');


// button color >>>>>>>

function changeStyle(color) {
          
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

   
    buttons[color].classList.add('active');
}

buttons.forEach(function(btn, color) {
    btn.addEventListener('click', function() {
        changeStyle(color);
    });
});