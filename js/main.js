// Main JavaScript for navigation and subtle interactions

const basePath = document.body.dataset.base || "";

const includePartial = async (selector, fileName) => {
  const container = document.querySelector(`[data-include="${selector}"]`);
  if (!container) {
    return;
  }

  try {
    const response = await fetch(`${basePath}partials/${fileName}`);
    if (!response.ok) {
      return;
    }
    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.warn(`Failed to load ${fileName}`, error);
  }
};

const wireNav = () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  document.querySelectorAll("[data-href]").forEach((link) => {
    const href = link.getAttribute("data-href");
    if (href) {
      link.setAttribute("href", `${basePath}${href}`);
    }
  });

  const pageKey = document.body.dataset.page;
  if (pageKey) {
    const activeLink = document.querySelector(`.nav-links a[data-page="${pageKey}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }
};

const initFadeIn = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".fade-in").forEach((element) => {
    observer.observe(element);
  });
};

const initContactForm = () => {
  const form = document.querySelector("#contact-form");
  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();
    const recipient = form.dataset.email || "";

    if (!recipient) {
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name || "your site"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    form.reset();
  });
};

const init = async () => {
  await includePartial("header", "header.html");
  await includePartial("footer", "footer.html");
  wireNav();
  initFadeIn();
  initContactForm();
};

document.addEventListener("DOMContentLoaded", init);
