function formatDate(date){
  const d = new Date(date)
  const day = String(d.getDate()).padStart(2,'0')
  const month = String(d.getMonth()+1).padStart(2,'0')
  const year = d.getFullYear()
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

const idols = [
    {
        id: 1,
        group: [1],
        name: "Isabella",
        image: "temp_portrait.png",
        idoltype: "",
        colour: "Pink",
        socials: [
            {
                type: "instagram",
                link: ""
            },
            {
                type: "twitter",
                link: ""
            }
        ]
    },
    {
        id: 2,
        group: [1],
        name: "Mei",
        image: "temp_portrait.png",
        idoltype: "",
        colour: "Green",
        socials: [
            {
                type: "instagram",
                link: ""
            },
            {
                type: "twitter",
                link: ""
            }
        ]
    },
    {
        id: 3,
        group: [1],
        name: "Misty",
        image: "temp_portrait.png",
        idoltype: "",
        colour: "Blue",
        socials: [
            {
                type: "instagram",
                link: ""
            },
            {
                type: "twitter",
                link: ""
            }
        ]
    },
    {
        id: 4,
        group: [2],
        name: "Xeek",
        image: "temp_portrait.png",
        idoltype: "Custard Pudding",
        colour: "Yellow",
        socials: [
            {
                type: "instagram",
                link: "https://www.instagram.com/snacktimeidols"
            }
        ]
    },
    {
        id: 5,
        group: [2],
        name: "Ada",
        image: "temp_portrait.png",
        idoltype: "Fruit",
        colour: "Red",
        socials: [
            {
                type: "instagram",
                link: ""
            }
        ]
    },
    {
        id: 6,
        group: [2],
        name: "Chiise",
        image: "temp_portrait.png",
        idoltype: "Cheese",
        colour: "Blue",
        socials: [
            {
                type: "instagram",
                link: ""
            }
        ]
    },
    {
        id: 7,
        group: [2],
        name: "Hina",
        image: "temp_portrait.png",
        idoltype: "Soda",
        colour: "Orange",
        socials: [
            {
                type: "instagram",
                link: ""
            }
        ]
    },
    {
        id: 8,
        group: [3],
        name: "Sunny",
        image: "imgs/sunny_pfp.jpg",
        idoltype: "Mahou Gyaru",
        colour: "Pink",
        socials: [
            {
                type: "instagram",
                link: "http://instagram.com/sunnyysaurus"
            },
            {
                type: "tiktok",
                link: "https://www.tiktok.com/@sunnysaurus"
            },
            {
                type: "twitter",
                link: "https://x.com/sunnyysaurus"
            }
        ]
    },
];

const idolgroups = [
  {
    id:1,
    name:"Bloom Idol Project",
    location:"Brisbane/Meanjin",
    logo: "bloomlogo_400x400.jpg",
    genre: "Jpop", 
    description:`
        <p>Hello Blossoms, We are Bloom Idol Project! 

        <br\><br\>We are a Brisbane-based idol trio with our hearts set on captivating audiences and bringing energy and lots of sparkle to every stage we perform on! Inspired by J-pop and idol culture, our mission is to bring the crowd to life and leave you smiling! 

        <br\><br\>Like flowers in a garden, we grow a little more with each performance! Whether it's your first time seeing idols or you're a long-time fan, we're here to brighten your day and bring a little joy to your heart! Join us as we bloom into your favorite idols, one petal at a time!🌸</p>

        <br><i>From Youtube 9/3/26</i>
    `,
    socials: [
        {
            type: "instagram",
            link: "https://www.instagram.com/bloom_idol_project"
        }
    ]
  },
  {
    id:2,
    name:"SnackTime Idols!",
    location:"Brisbane/Meanjin",
    logo: "snacktimelogo.jpg",
    genre: "Jpop", 
    description:`<p>Yum yum! We are Snack Time Idols (スナックタイム) a Kaigai Jpop Idol Trio from Brisbane. We perform singing and dancing with songs from anime, to jpop, to Australian based idol groups. Come along to watch a delicious performance that’s high energy and full of heart from our 3 appetising idols.

        <br\><br\>Our goal is to grow our individual skills while performing energizing shows, perform across Australia and promote improvement, support and fun in our community</p>

        <br><i>From Website 9/3/26</i>`,
    socials: [
        {
            type: "instagram",
            link: "https://www.instagram.com/snacktimeidols"
        }
    ]
  },
  {
    id:3,
    name:"Sunnysaurus",
    location:"Sydney/Gadigal",
    logo: "sunnylogo.png",
    genre: "Jpop, Eurobeat, EDM, Rock",
    description:`<p>
            Passionate about community and inclusivity Sunny has been actively performing and creating live events within the Australian J-idol scene since 2019. Previously a member of MEWS Au they are now the founder and leader of idol group FAEBLE as well as a solo performer. 
            <br\><br\>
            Currently exploring a Mahou Gyaru concept, Sunny performs a variety of original music as well as covers that focus on happiness, confidence, fashion and magic! Their sound most typically covers Eurobeat, EDM and Rock in a j-idol format. Sunny is self produced and enjoys creating music and a variety of content across their various social media channels
        </p>
        <br><i>From Website 9/3/26</i>`,
    socials: [
        {
            type: "instagram",
            link: "http://instagram.com/sunnyysaurus"
        },
        {
            type: "tiktok",
            link: "https://www.tiktok.com/@sunnysaurus"
        },
        {
            type: "twitter",
            link: "https://x.com/sunnyysaurus"
        },
        {
            type: "spotify",
            link: "https://open.spotify.com/artist/0qTVRf71muCDW3EdtFcerY?si=OJaB-ISSQ5Wi4ncDano4rg"
        },
        {
            type: "website",
            link: "https://www.sunnysaurus.net/"
        }
    ]
  }
]

const events = [
    {
        id:1,
        name: "Example Event",
        city: "Brisbane/Meanjin",
        address: "Example Venue address",
        ticketlink: "https://www.w3schools.com/",
        groups: [1, 2],
        date: new Date(2026, 3, 15) // year, month (0-11), day
    },
    {
        id:2,
        name: "Example Event Old",
        city: "Brisbane/Meanjin",
        address: "Example Venue address",
        ticketlink: "",
        groups: [1],
        date: new Date(2025, 3, 15) // year, month (0-11), day
    }
];

const app = document.getElementById("app");

function renderIdolGroupList(){

  let idolGroupHtml = ``;

  idolgroups.forEach(group=>{
    idolGroupHtml += `
      <div class="idolgroup" onclick="renderIdolGroup(${group.id})">
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
        <div class="column left">
        </div>

        <div class="column middle">
            <h1>Idol Groups</h1>
            <div class="group-search-container">
                ${idolGroupHtml}
            </div>
        </div>

        <div class="column right">
        </div>
    </div>
  `;

  app.innerHTML = idolGroupPage;
};

function renderIdolGroup(id){

    const idolgroup = idolgroups.find(group=>group.id===id)

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
}


renderIdolGroupList();



