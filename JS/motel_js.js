const navbar=document.getElementById("navbar");

const burgeraffich=document.getElementById("burger");
const burgermasq=document.getElementById("burger");

burgeraffich.addEventListener("click",()=>{
    navbar.classList.toggle('visible');
});

burgermasq.addEventListener("click",()=>{
    navbar.classList.toggle('masquer');
});


/******************************************************* */

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupérer les données du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const message = document.getElementById('message').value;

    // Créer le message à envoyer
    const text = `Bonjour, je m'appelle ${name}. Mon email est ${email} et mon numero est le ${telephone}. Mon message est le suivant: ${message}`;
    const phoneNumber = "237679120578"; // Numéro WhatsApp sans le '+'

    // Créer l'URL WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    // Rediriger vers WhatsApp
    window.open(url, '_blank');
});

/******************************************************* */

