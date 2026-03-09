import {idols} from './idols.js';
import {idolgroups} from './idolgroups.js';
import {events} from './events.js';

console.log("test code runs");
console.log(idols);

function formatDate(date){
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2,'0');
  const month = String(d.getMonth()+1).padStart(2,'0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`
}

function makeSocials(type, link, size){
    let socialHtml = ``;

    switch(type) {
        case "instagram":
            socialHtml += `<a href="${link}" target="_blank"><i class="${size} fa-brands fa-instagram"></i></a>`;
            break;
        case "tiktok":
            socialHtml += `<a href="${link}" target="_blank"><i class="${size} fa-brands fa-tiktok"></i></a>`;
            break;
        case "twitter":
            socialHtml += `<a href="${link}" target="_blank"><i class="${size} fa-brands fa-x-twitter"></i></a>`;
            break;
        case "spotify":
            socialHtml += `<a href="${link}" target="_blank"><i class="${size} fa-brands fa-spotify"></i></a>`;
            break;
        case "website":
            socialHtml += `<a href="${link}" target="_blank"><i class="${size} fa-solid fa-globe"></i></a>`;
            break;
        default:
    }

    return socialHtml
}

const app = document.getElementById("app");

console.log("Before renderIdolGroup defined");
function renderIdolGroup(idtext){
    $("#groupsearch").addClass('hidden');
    $("#search").val('');
    let id = Number(idtext);
    console.log("ID");
    console.log(id);
    console.log("Idol groups from ID");
    const idolgroup = idolgroups.find(group=>group.id=id);
    console.log(idolgroup);
  
    console.log("Id old from ID");
    const idolmembers = idols.filter(idols=>idols.group.includes(id));

    const upcomingEvents = events.filter(events=>events.groups.includes(id));

    let membershtml = ``;

    idolmembers.forEach(function(idol){

        let idolSocialsHtml = ``;
        idol.socials.forEach(function(social){
            idolSocialsHtml += makeSocials(social.type, social.link, 'medium-social');
        });

        membershtml += `<div class="idol-member">
                <img class="circle-img" src="${idol.image}" alt="${idol.name}">
                <h3>${idol.name}</h3>
                <p>Colour: ${idol.colour}</p>
                <div class="individual-member-socials">
                    ${idolSocialsHtml}
                </div>
            </div>`;
    });

    let eventshtml = ``;

    upcomingEvents.forEach(function(event){
        const today = new Date()
        today.setHours(0,0,0,0)

        const eventDate = event.date
        eventDate.setHours(0,0,0,0)

        if(today <= event.date){
            let eventDatePhrased = formatDate(eventDate);

            eventshtml += `<div class="upcoming-event">
                    <h3>${event.name} <a href="${event.ticketlink}" target="_blank"><i class="fa-solid fa-ticket"></i></a></h3>
                    <p>${eventDatePhrased}</p>
                    <p>${event.city}</p>
                    <p>${event.address}</p>
                </div>`;
        }
    });

    let groupSocialsHtml = ``;

    idolgroup.socials.forEach(function(social){
        groupSocialsHtml += makeSocials(social.type, social.link, 'large-social');
    });

    app.innerHTML = `
        <div class="container">
            <div class="column left">
                <img class="idol-logo" src="${idolgroup.logo}" alt="idol logo">
                <h2>${idolgroup.name}</h2>
                    <p>Location: ${idolgroup.location}</p>
                    <p>Genre: ${idolgroup.genre}</p>
                <h2>About</h2>
                <p>${idolgroup.description}</p>
            </div>

            <div class="column middle">
                <h2>Members</h2>
                <div class="idol-group-members">
                    ${membershtml}
                </div>

                <div class="event">
                    <h2>Upcoming Events</h2>
                    ${eventshtml}
                </div>

            </div>

            <div class="column right">
                <h2>Socials</h2>
                <p>
                    ${groupSocialsHtml}
                </p>
            </div>
        </div>
    `
};

console.log("After renderIdolGroup defined");

function renderIdolGroupList(list = []){
  $("#groupsearch").removeClass('hidden');
  let idolGroupHtml = ``;

  list.forEach(group=>{
    idolGroupHtml += `
      <div class="idolgroup" id="${group.id}">
        <img class="idol-logo-search" src="${group.logo}" alt="idol logo">
        <div class="idolgroup-info">
            <strong>${group.name}</strong>
            <div>${group.location}</div>
        </div>
      </div>
    `
  });

  let idolGroupPage = `
    <div class="container">
        <div class="column searchpage">
            <div class="group-search-container">
                ${idolGroupHtml}
            </div>
        </div>
    </div>
  `;

  app.innerHTML = idolGroupPage;

  $(".idolgroup").on("click", function() {
    const id = $(this).attr("id");
    renderIdolGroup(id);
  });


};

$("#search").on("input", function(){

  const query = this.value.toLowerCase()

  const filtered = idolgroups.filter(idolgroup =>
    idolgroup.name.toLowerCase().includes(query)
  )

  renderIdolGroupList(filtered);
});

renderIdolGroupList(idolgroups);

$('#group-search-button').on("click", function(){
  renderIdolGroupList(idolgroups);
});
























