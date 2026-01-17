const bg = document.querySelector(".parallax-bg");

document.addEventListener("mousemove", e=>{
const x=(e.clientX/window.innerWidth-.5)*6;
const y=(e.clientY/window.innerHeight-.5)*6;
bg.style.transform=`translate(${-5+x}%,${-5+y}%)`;
});
