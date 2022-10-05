const random = (min, max) => {
  const rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
};
const btn = document.querySelector('.btn');
console.log(btn);
btn.addEventListener('mouseenter', () => {
  btn.style.left = `${random(0, 90)}%`;
  btn.style.top = `${random(0, 90)}%`;
});
btn.addEventListener('click', () => {
  alert('congrats! You hit the button! What are you doing with your life? :D');
});
