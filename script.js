// ============================================
//  PORTFOLIO — RVCE CSE  |  script.js
// ============================================


// ── LOADER — runs immediately, no dependencies ──
const loader = document.getElementById('loader');

function dismissLoader() {
  if (!loader) return;
  loader.style.opacity = '0';
  loader.style.visibility = 'hidden';
  document.body.style.overflow = '';
}

// Force dismiss after 2.5s no matter what
setTimeout(dismissLoader, 2500);

// Also dismiss when page loads normally
window.addEventListener('load', function() {
  setTimeout(dismissLoader, 1000);
});


// ── SCROLL PROGRESS BAR ──
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', function() {
  var max = document.body.scrollHeight - window.innerHeight;
  progressBar.style.width = (window.scrollY / max * 100) + '%';
}, { passive: true });


// ── NAVBAR ──
var navbar = document.getElementById('navbar');
var navItems = document.querySelectorAll('.nav-links a');
var sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  var current = '';
  sections.forEach(function(s) {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navItems.forEach(function(a) {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });


// ── HAMBURGER ──
var hamburger = document.getElementById('hamburger');
var navLinks = document.querySelector('.nav-links');
var spans = hamburger.querySelectorAll('span');

hamburger.addEventListener('click', function() {
  var open = navLinks.classList.toggle('open');
  spans[0].style.transform = open ? 'translateY(7px) rotate(45deg)' : '';
  spans[1].style.opacity   = open ? '0' : '';
  spans[2].style.transform = open ? 'translateY(-7px) rotate(-45deg)' : '';
});

navLinks.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('open');
    spans.forEach(function(s) { s.style.transform = ''; s.style.opacity = ''; });
  });
});


// ── SCROLL REVEAL ──
var revealEls = document.querySelectorAll('.reveal');
var revealObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(function(el) { revealObs.observe(el); });


// ── WORD SWAP ──
var words = document.querySelectorAll('#word-swap .word');
var wordIndex = 0;

function startWordSwap() {
  if (!words.length) return;
  setInterval(function() {
    words[wordIndex].classList.remove('active');
    wordIndex = (wordIndex + 1) % words.length;
    words[wordIndex].classList.add('active');
  }, 2500);
}

startWordSwap();


// ── HERO PARALLAX ──
var hero = document.getElementById('hero');
var blob1 = hero.querySelector('.blob-1');
var blob2 = hero.querySelector('.blob-2');

hero.addEventListener('mousemove', function(e) {
  var rect = hero.getBoundingClientRect();
  var dx = (e.clientX - rect.left) / rect.width - 0.5;
  var dy = (e.clientY - rect.top) / rect.height - 0.5;
  blob1.style.transform = 'translate(' + (dx * 40) + 'px, ' + (dy * 40) + 'px)';
  blob2.style.transform = 'translate(' + (dx * -25) + 'px, ' + (dy * -25) + 'px)';
}, { passive: true });

hero.addEventListener('mouseleave', function() {
  blob1.style.transform = '';
  blob2.style.transform = '';
});


// ── PROJECT CARD 3D TILT ──
document.querySelectorAll('.project-card').forEach(function(card) {
  card.addEventListener('mousemove', function(e) {
    var rect = card.getBoundingClientRect();
    var dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    var dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    card.style.transform = 'translateY(-8px) rotateX(' + (-dy * 5) + 'deg) rotateY(' + (dx * 5) + 'deg)';
    card.style.transformStyle = 'preserve-3d';
  });
  card.addEventListener('mouseleave', function() { card.style.transform = ''; });
});


// ── MAGNETIC BUTTONS ──
document.querySelectorAll('.btn-primary, .btn-ghost').forEach(function(btn) {
  btn.addEventListener('mousemove', function(e) {
    var rect = btn.getBoundingClientRect();
    var dx = (e.clientX - rect.left - rect.width / 2) * 0.25;
    var dy = (e.clientY - rect.top - rect.height / 2) * 0.25;
    btn.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
  });
  btn.addEventListener('mouseleave', function() { btn.style.transform = ''; });
});


console.log('%c KKP Portfolio ', 'background:#1a73e8;color:#fff;font-size:14px;font-weight:bold;padding:4px 12px;border-radius:4px;');