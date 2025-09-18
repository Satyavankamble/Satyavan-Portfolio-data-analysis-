document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  // Theme toggle
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  }
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Contact form (demo with success animation)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "Sending...";
    setTimeout(() => {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "green";
      form.reset();
      setTimeout(() => { status.textContent = ""; }, 2500);
    }, 1000);
  });

  // Scroll reveal animation
  const faders = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  faders.forEach(fader => observer.observe(fader));

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navMenu.classList.remove("show"));
  });

  // Animate progress bars
  const progressBars = document.querySelectorAll(".progress div");
  const skillsSection = document.getElementById("skills");
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = "0";
          setTimeout(() => { bar.style.width = width; }, 200);
        });
        skillObserver.unobserve(skillsSection);
      }
    });
  }, { threshold: 0.4 });
  skillObserver.observe(skillsSection);
});
