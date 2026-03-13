import {idols} from './idols.js';
import {idolgroups} from './idolgroups.js';
import {events} from './events.js';

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
        case "youtube":
            socialHtml += `<a href="${link}" target="_blank"><i class="${size} fa-brands fa-youtube"></i></a>`;
            break;
        case "twitter":
            socialHtml += `<a href="${link}" target="_blank"><i class="${size} fa-brands fa-x-twitter"></i></a>`;
            break;
        case "spotify":
            socialHtml += `<a href="${link}" target="_blank"><i class="${size} fa-brands fa-spotify"></i></a>`;
            break;
        case "patreon":
            socialHtml += `<a href="${link}" target="_blank"><i class="${size} fa-brands fa-patreon"></i></a>`;
            break;
        case "website":
            socialHtml += `<a href="${link}" target="_blank"><i class="${size} fa-solid fa-globe"></i></a>`;
            break;
        case "twitch":
            socialHtml += `<a href="${link}" target="_blank"><i class="${size} fa-brands fa-twitch"></i></a>`;
            break;
        default:
    }

    return socialHtml
}

function getPenlight(colour){
    let penlight = '';

    switch(colour) {
        case "monochrome":
            penlight = 'white';
            break;
        default:
            penlight = colour;
    }

    let htmlMemberColorCss = `style="background-color: ${penlight}"`;

    return htmlMemberColorCss
}

const app = document.getElementById("app");

function renderIdolGroup(idtext){
    $("#groupsearch").addClass('hidden');
    $("#search").val('');
    let id = Number(idtext);

    const idolgroup = idolgroups.find(group=>group.id===id);

    const idolmembers = idols.filter(idols=>idols.group.includes(id));

    const upcomingEvents = events.filter(events=>events.groups.includes(id));

    let membershtml = ``;

    idolmembers.forEach(function(idol){

        let idolSocialsHtml = ``;
        idol.socials.forEach(function(social){
            idolSocialsHtml += makeSocials(social.type, social.link, 'medium-social');
        });

        let backgroundColorPic = getPenlight(idol.colour);
        
        membershtml += `<div class="idol-member">
                <img class="circle-img" src="imgs/temp_pfp.png" alt="${idol.name}" ${backgroundColorPic}>
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

            let eventLink = ``;

            if(event.ticketlink != ''){
                eventLink += `<p><a href="${event.ticketlink}" target="_blank"> <i class="fa-solid fa-ticket"></i></a></p>`;
            }
          
            eventshtml += `<div class="upcoming-event">
                    <div class="event-link" id="${event.id}"><h3>${event.name}</h3></div>
                    <p><i class="fa-solid fa-calendar"></i>${eventDatePhrased}</p>
                    <p><i class="fa-solid fa-city"></i> ${event.city}</p>
                    <p><i class="fa-solid fa-location-dot"></i> ${event.address}</p>
                    ${eventLink}
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
                    <p><i class="fa-solid fa-city"></i> ${idolgroup.location}</p>
                    <p><i class="fa-solid fa-music"></i> ${idolgroup.genre}</p>
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
    `;

    $(".event-link").on("click", function() {
        const id = $(this).attr("id");
        renderEvent(id);
    });
};

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

function renderEvent(idtext){
    $("#groupsearch").addClass('hidden');
    $("#search").val('');
    let id = Number(idtext);

    const event = events.find(event=>event.id===id);
    console.log(event);
    const idolgroupsinevent = idolgroups.filter(group=>event.groups.includes(group.id));
    
    console.log(idolgroupsinevent);

    let idolGroupshtml = ``;

    idolgroupsinevent.forEach(function(idolgroup){

        let idolGroupSocialsHtml = ``;
        idolgroup.socials.forEach(function(social){
            idolGroupSocialsHtml += makeSocials(social.type, social.link, 'medium-social');
        });

        idolGroupshtml += `<div class="idol-member">
                <div class="idol-group-link" id="${idolgroup.id}">
                <img class="circle-img" src="${idolgroup.logo}" alt="${idolgroup.name}">
                <h3>${idolgroup.name}</h3>
                </div>
                <div class="individual-member-socials">
                    ${idolGroupSocialsHtml}
                </div>
            </div>`;
    });

    const eventDate = event.date;
    eventDate.setHours(0,0,0,0);
    let eventDatePhrased = formatDate(eventDate);

    app.innerHTML = `
        <div class="container">
            <div class="column left">
                <img class="idol-logo" src="${event.img}" alt="Event Poster">
                <h2>${event.name}</h2>
                    <p><i class="fa-solid fa-calendar"></i> ${eventDatePhrased}</p>
                    <p><i class="fa-solid fa-city"></i> ${event.city}</p>
                    <p><i class="fa-solid fa-location-dot"></i> ${event.address}</p>
            </div>

            <div class="column middle">
                <h2>Groups</h2>
                <div class="idol-group-members">
                    ${idolGroupshtml}
                </div>

            </div>

            <div class="column right">
                <h2>About</h2>
                <p>${event.description}</p>

                <p><a href="${event.ticketlink}" target="_blank"> <i class="fa-solid fa-ticket large-social"></i></a></p>
            </div>
        </div>
    `;

    $(".idol-group-link").on("click", function() {
        const id = $(this).attr("id");
        renderIdolGroup(id);
    });
}


function renderEventList(list = []){
    $("#groupsearch").addClass('hidden');
    let eventListHtml = ``;

    const today = new Date()
    today.setHours(0,0,0,0)

    list.forEach(event=>{

    const eventDate = event.date
    eventDate.setHours(0,0,0,0)

    if(today <= event.date){
        let eventDatePhrased = formatDate(eventDate);
        eventListHtml += `
            <div class="event-short" id="${event.id}">
                <img class="event-img-search" src="${event.img}" alt="Event Poster">
                <div class="event-info">
                    <strong class="event-info-name">${event.name}</strong>
                    <div><i class="fa-solid fa-city"></i> ${event.city}</div>
                    <div><i class="fa-solid fa-calendar"></i> ${eventDatePhrased}</div>
                </div>
            </div>
        `
    }
    
    });

    let eventSearchPage = `
    <div class="container">
        <div class="column searchpage">
            <div class="event-search-container">
                ${eventListHtml}
            </div>
        </div>
    </div>
    `;

    app.innerHTML = eventSearchPage;

    $(".event-short").on("click", function() {
        const id = $(this).attr("id");
        renderEvent(id);
    });


};

$('#event-search-button').on("click", function(){
  renderEventList(events);
});
































