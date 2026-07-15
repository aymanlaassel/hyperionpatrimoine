// Hyperion Patrimoine — interactions communes

document.addEventListener("DOMContentLoaded", () => {
  // --- Navigation mobile -------------------------------------------------
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });

    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
      })
    );
  }

  // --- Lien actif dans la navigation -------------------------------------
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === page) a.classList.add("is-active");
  });

  // --- Révélation au défilement -------------------------------------------
  const revealables = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealables.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealables.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add("is-visible"));
  }

  // --- Compteurs animés (chiffres clés) -----------------------------------
  const counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || "";
          const duration = 1400;
          const start = performance.now();

          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => io.observe(el));
  }

  // --- Formulaire de contact ----------------------------------------------
  // Sans backend (site statique), le formulaire ouvre le client mail du
  // visiteur avec un message pré-rempli. Pour un envoi serveur, brancher
  // Formspree / Resend et remplacer ce gestionnaire.
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const status = form.querySelector(".form__status");

      if (!data.get("consent")) {
        status.textContent = "Merci de cocher la case de consentement.";
        return;
      }

      const sujet = encodeURIComponent(
        `Demande de rendez-vous — ${data.get("objet") || "Bilan patrimonial"}`
      );
      const corps = encodeURIComponent(
        [
          `Nom : ${data.get("nom")}`,
          `Email : ${data.get("email")}`,
          `Téléphone : ${data.get("telephone") || "—"}`,
          `Objet : ${data.get("objet")}`,
          "",
          data.get("message"),
        ].join("\n")
      );

      window.location.href = `mailto:contact@hyperionpatrimoine.fr?subject=${sujet}&body=${corps}`;
      status.textContent =
        "Votre client mail va s'ouvrir. Vous pouvez aussi nous appeler directement.";
    });
  }

  // --- Année courante dans le pied de page ---------------------------------
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
});
