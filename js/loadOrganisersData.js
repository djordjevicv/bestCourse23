const url = window.location.pathname;
const fileName = url.substring(url.lastIndexOf('/') + 1);
console.log(fileName)

cardTitles = document.querySelectorAll(".card-title");
cardSubtitles = document.querySelectorAll(".card-subtitle");
emailIcons = document.querySelectorAll(".organiserContact a:first-of-type");
linkedInIcons = document.querySelectorAll(".organiserContact a:last-of-type");

class Organiser {
    name;
    position;
    email;
    linkedIn;

    constructor(name, position, email, linkedIn) {
        this.name = name;
        this.position = position;
        this.email = email;
        this.linkedIn = linkedIn;
    }
}

const organisers = [];
if (fileName === "Organisers.html") {
    organisers.push(new Organiser("Milica Đorđević", "Participants Responsible",
        "mailto:milica.djordjevic@bestnis.rs",
        "https://www.linkedin.com/in/milica-djordjevic-327468256/"
    ));
    organisers.push(new Organiser("Maja Stanimirović", "Main Organiser",
        "mailto:maja.stanimirovic@bestnis.rs",
        "https://www.linkedin.com/in/maja-stanimirovi%C4%87-337601237/"
    ));
    organisers.push(new Organiser("Vojin Đorđević", "IT & Logistics Responsible",
        "mailto:vojin.djordjevic@bestnis.rs",
        "https://www.linkedin.com/in/djordjevicv/"
    ));
    organisers.push(new Organiser("Aleksandar Jovanović", "Academia Responsible",
        "mailto:aleksandar.jovanovic@bestnis.rs",
        "https://www.linkedin.com/in/4aleksandar-jovanovic"
    ));
    organisers.push(new Organiser("Petra Novaković", "Corporate relations Responsible",
        "mailto:petra.novakovic@bestnis.rs",
        "https://www.linkedin.com/in/petra-novakovi%C4%87-aaab13270"
    ));
    organisers.push(new Organiser("Jelena Stojanović", "Media Responsible",
        "mailto:jelena.stojanovic@bestnis.rs",
        "https://www.linkedin.com/in/jelena-stojanovi%C4%87/"
    ));
    organisers.push(new Organiser("Đorđe Veličković", "Socials Responsible",
        "mailto:djordje.velickovic@bestnis.rs",
        "https://www.linkedin.com/in/đorđe-veličković-b1762a276"
    ));
    organisers.push(new Organiser("Nikola Stefanović", "Logistics Responsible",
        "mailto:nikola.stefanovic@bestnis.rs",
        "https://www.linkedin.com/in/nikola-stefanovic-3a9956227/"
    ));
    organisers.push(new Organiser("Luka Petrović", "Design Responsible",
        "mailto:luka.petrovic@bestnis.rs",
        "https://www.linkedin.com/in/lukapetrovic2000/"
    ));
}
else {
    organisers.push(new Organiser("Milica Đorđević", "Odgovorna za učesnike",
        "mailto:milica.djordjevic@bestnis.rs",
        "https://www.linkedin.com/in/milica-djordjevic-327468256/"
    ));
    organisers.push(new Organiser("Maja Stanimirović", "Glavni organizator",
        "mailto:maja.stanimirovic@bestnis.rs",
        "https://www.linkedin.com/in/maja-stanimirovi%C4%87-337601237/"
    ));
    organisers.push(new Organiser("Vojin Đorđević", "Odgovoran za informacione tehnologije i logistiku",
        "mailto:vojin.djordjevic@bestnis.rs",
        "https://www.linkedin.com/in/djordjevicv/"
    ));
    
    organisers.push(new Organiser("Aleksandar Jovanović", "Odgovoran za akademske aktivnosti",
        "mailto:aleksandar.jovanovic@bestnis.rs",
        "https://www.linkedin.com/in/4aleksandar-jovanovic"
    ));
    organisers.push(new Organiser("Petra Novaković", "Odgovorna za odnose sa kompanijama",
        "mailto:petra.novakovic@bestnis.rs",
        "https://www.linkedin.com/in/petra-novakovi%C4%87-aaab13270"
    ));
    organisers.push(new Organiser("Jelena Stojanović", "Odgovorna za društvene medije",
        "mailto:jelena.stojanovic@bestnis.rs",
        "https://www.linkedin.com/in/jelena-stojanovi%C4%87/"
    ));
    organisers.push(new Organiser("Đorđe Veličković", "Odgovoran za društvene aktivnosti",
        "mailto:djordje.velickovic@bestnis.rs",
        "https://www.linkedin.com/in/đorđe-veličković-b1762a276"
    ));
    organisers.push(new Organiser("Nikola Stefanović", "Odgovoran za logistiku",
        "mailto:nikola.stefanovic@bestnis.rs",
        "https://www.linkedin.com/in/nikola-stefanovic-3a9956227/"
    ));
    organisers.push(new Organiser("Luka Petrović", "Odgovoran za dizajn",
        "mailto:luka.petrovic@bestnis.rs",
        "https://www.linkedin.com/in/lukapetrovic2000/"
    ));
}

function populateCards() {
    for (let i = 0; i < 9; i++) {
        cardTitles[i].textContent = organisers[i].name;
        cardSubtitles[i].textContent = organisers[i].position;
        emailIcons[i].setAttribute("href", `${organisers[i].email}`);
        linkedInIcons[i].setAttribute("href", `${organisers[i].linkedIn}`);
        //console.table(organisers[i])
    }
}

populateCards();
