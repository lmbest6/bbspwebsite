
  const hamburger = document.getElementById("nav-hamburger");
  const navLinks = document.getElementById("nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
      });
    });
  }

  function selectAmt(el) { document.querySelectorAll(".amt-btn").forEach(b => b.classList.remove("selected")); el.classList.add("selected"); }
  function setFreq(el) { document.querySelectorAll(".freq-btn").forEach(b => b.classList.remove("active")); el.classList.add("active"); }
  window.addEventListener("scroll", () => { document.getElementById("main-nav").style.background = window.scrollY > 60 ? "rgba(14,14,14,0.98)" : "rgba(16,16,16,0.96)"; });
  const obs = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = "1"; e.target.style.transform = "translateY(0)"; } }); }, { threshold: 0.07 });
  document.querySelectorAll(".mission-panel, .prog-card, .house-card, .ptype-card, .tier-card").forEach(el => { el.style.opacity = "0"; el.style.transform = "translateY(24px)"; el.style.transition = "opacity 0.55s ease, transform 0.55s ease"; obs.observe(el); });
