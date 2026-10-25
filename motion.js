(()=>{
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const stage=document.querySelector('.mandala-stage');
if(stage){
 stage.addEventListener('pointermove',e=>{if(reduced.matches||e.pointerType==='touch')return;const r=stage.getBoundingClientRect();stage.style.setProperty('--tilt-x',((e.clientX-r.left)/r.width-.5)*24+'deg');stage.style.setProperty('--tilt-y',-((e.clientY-r.top)/r.height-.5)*20+'deg');});
 stage.addEventListener('pointerleave',()=>{stage.style.removeProperty('--tilt-x');stage.style.removeProperty('--tilt-y');});
}
// Shared navigation and reading progress on standalone pages.
if(!document.querySelector('#archiveGrid')){
 const toggle=document.querySelector('#menuToggle'),nav=document.querySelector('#mobileNav');
 toggle?.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open'));});
 const progress=document.querySelector('#progress');
 addEventListener('scroll',()=>{const total=document.documentElement.scrollHeight-innerHeight;if(progress)progress.style.width=(total?scrollY/total*100:0)+'%';},{passive:true});
 const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
}
})();
