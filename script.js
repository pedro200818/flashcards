const cards = document.querySelectorAll('.cartao');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});
