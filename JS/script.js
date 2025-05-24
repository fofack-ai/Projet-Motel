
const chambre = [
  { img: "../images/1743840927162.jpg", note: 4 },
  { img: "../images/1743840927192.jpg", note: 5 },
  { img: "../images/1743840927244.jpg", note: 3 },
  { img: "../images/1743840927274.jpg", note: 5 },
  { img: "../images/1743840927215.jpg", note: 5 },
  
  { img: "../images/cham (2).jpg", note: 5 },
  { img: "../images/cham (3).jpg", note: 5 },
  { img: "../images/cham (4).jpg", note: 5 },
  { img: "../images/cham (5).jpg", note: 5 },
  { img: "../images/cham (6).jpg", note: 5 },
];

const autresCategories = {
  bain: [
    {img: "../images/1743840927129.jpg", note: 4 },
    {img: "../images/1743840927304.jpg", note: 5 },
    {img: "../images/1743840927106.jpg", note: 4 },
    {img: "../images/1743840927085.jpg", note: 4 },
    {img: "../images/1743840927051.jpg", note: 4 },
    {img: "../images/bain (1).jpg", note: 5 },
    {img: "../images/bain (2).jpg", note: 4 },
    {img: "../images/bain (3).jpg", note: 5 },
    {img: "../images/bain (4).jpg", note: 4 },
    {img: "../images/bain (5).jpg", note: 5 },
    {img: "../images/bain (6).jpg", note: 5 },
    {img: "../images/bain (7).jpg", note: 3 },
    {img: "../images/bain (8).jpg", note: 5 }
  ],
  bar : [
    { img: "../images/bar (1).jpg", note: 5 },
    { img: "../images/bar (2).jpg", note: 5 },
    { img: "../images/bar (3).jpg", note: 5 },
    { img: "../images/bar.jpg", note: 5 }
  ]
};

function generateStars(note) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= note ? "★" : "☆";
  }
  return stars;
}

  function showCategory(cat) {
  const content = document.getElementById("content");
  const title = document.getElementById("category-title");

  // title.textContent = cat.toUpperCase();
  content.innerHTML = "";

  let items = [];
  if (cat === "chambre") items = chambre;
  else items = autresCategories[cat] || [];

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <img src="${item.img}">
      <div class="stars">${generateStars(item.note)}</div>
      <a href="https://wa.me/+237691439909?text=Bonjour, je suis interessé"><button class="commander"><i class="fab fa-whatsapp "></i> Reserver</button></a>
    `;
    content.appendChild(div);
  });
}

showCategory('chambre');
