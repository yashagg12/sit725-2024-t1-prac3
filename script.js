// Define cardList array with card content
const cardList = [
  { title: 'Card 1', image: 'images/card1.jpg', link: '#', description: 'Description for Card 1' },
  { title: 'Card 2', image: 'images/card2.jpg', link: '#', description: 'Description for Card 2' }
];

// Function to dynamically add cards to the page
function addCards() {
  const cardSection = document.getElementById('cardSection');
  cardList.forEach(card => {
    const cardHTML = `
      <div class="card">
        <img src="${card.image}" alt="${card.title}">
        <div class="card-info">
          <h3>${card.title}</h3>
          <p>${card.description}</p>
          <a href="${card.link}">Read More</a>
        </div>
      </div>
    `;
    cardSection.innerHTML += cardHTML;
  });
}
// Get the close button element
const closeButton = document.querySelector('.close');

// Add click event listener to close the form
closeButton.addEventListener('click', function() {
  document.getElementById('modalForm').style.display = 'none'; // Hide the form
});


// Add event listener to show form button
document.getElementById('showFormBtn').addEventListener('click', function() {
  document.getElementById('modalForm').style.display = 'block'; // Show the form
});

// Add event listener to submit form
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log('Submitted Form Data:', Object.fromEntries(formData.entries()));
});
