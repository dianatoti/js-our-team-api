const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// contenitore dove andranno le card
const teamContainer = document.getElementById("team-container");

// chiedo all'api i dati e la gestisco nel then
axios.get("https://boolean-teachers.github.io/mock/api/members/")
  .then(response => {

    // prendo l'array dei membri
    const members = response.data;

    // cicliamo l'array per inserire le card
    members.forEach(member => {

      const card = `
 <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 text-center p-3">
                    <img src="${member.img}" class="card-img" alt="${member.name}">
                    <div class="card-body">
                        <h5 class="name">${member.name}</h5>
                        <p class="role">${member.role}</p>
                        <p class="emaill">${member.email}</p>
                    </div>
                </div>
            </div>
`;
      teamContainer.innerHTML += card;
    });
  })
