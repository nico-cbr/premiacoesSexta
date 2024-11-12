// Step 1. Wobble
// Step 2. Stop
// Step 3. Open
// Step 4. Animate

let gift = document.querySelector('.gift');
let giftCover = document.querySelector('.gift__cover');
let giftContainer = document.querySelector('.gift__container');
let card = document.querySelector('.card');

let addGiftWobble = () => {
  gift.classList.add('animate__wobble');
  giftCover.classList.add('animate__wobble');
}

let removeGiftWobble = () => {
  gift.classList.remove('animate__wobble');
  giftCover.classList.remove('animate__wobble');
}

let addGiftOpen = () => {
  giftCover.classList.add('animate__open');
  giftContainer.classList.add('animate__open');
}

let addCardZoomIn = () => {
  card.classList.add('animate');
}

gift.onclick = () => {
  // Wobble
  addGiftWobble();
  
  setTimeout(() => {
    
    removeGiftWobble()
    // Open
    addGiftOpen();
    addCardZoomIn();
    
  }, 3000);
}