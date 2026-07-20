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

  // --- Header réactif au défilement ---------------------------------------
  const header = document.querySelector(".header");
  if (header) {
    const onScroll = () =>
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // --- Bouton retour en haut ------------------------------------------------
  const topBtn = document.createElement("button");
  topBtn.className = "scroll-top";
  topBtn.setAttribute("aria-label", "Revenir en haut de page");
  topBtn.innerHTML =
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(topBtn);
  topBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
  window.addEventListener(
    "scroll",
    () => topBtn.classList.toggle("is-visible", window.scrollY > 600),
    { passive: true }
  );

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

  // --- Simulateur d'épargne --------------------------------------------------
  const simSection = document.querySelector("#simulateur");
  if (simSection) {
    const inputs = {
      initial: document.querySelector("#sim-initial"),
      monthly: document.querySelector("#sim-monthly"),
      years: document.querySelector("#sim-years"),
      rate: document.querySelector("#sim-rate"),
    };
    const outputs = {
      initial: document.querySelector("#sim-initial-out"),
      monthly: document.querySelector("#sim-monthly-out"),
      years: document.querySelector("#sim-years-out"),
      rate: document.querySelector("#sim-rate-out"),
    };
    const chart = document.querySelector("#sim-chart");
    const investedEl = document.querySelector("#sim-invested");
    const gainsEl = document.querySelector("#sim-gains");
    const totalEl = document.querySelector("#sim-total");

    const euros = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    });

    // Valeur acquise année par année, capitalisation mensuelle.
    const projection = (initial, monthly, years, annualRate) => {
      const r = annualRate / 100 / 12;
      const points = [];
      let value = initial;
      let invested = initial;
      for (let y = 1; y <= years; y++) {
        for (let m = 0; m < 12; m++) {
          value = value * (1 + r) + monthly;
          invested += monthly;
        }
        points.push({ year: y, value, invested });
      }
      return points;
    };

    const render = () => {
      const initial = Number(inputs.initial.value);
      const monthly = Number(inputs.monthly.value);
      const years = Number(inputs.years.value);
      const rate = Number(inputs.rate.value);

      outputs.initial.textContent = euros.format(initial);
      outputs.monthly.textContent = euros.format(monthly);
      outputs.years.textContent = `${years} an${years > 1 ? "s" : ""}`;
      outputs.rate.textContent = `${String(rate).replace(".", ",")} %`;

      const points = projection(initial, monthly, years, rate);
      const last = points[points.length - 1];
      investedEl.textContent = euros.format(last.invested);
      gainsEl.textContent = euros.format(Math.max(0, last.value - last.invested));
      totalEl.textContent = euros.format(last.value);

      const max = last.value || 1;
      chart.innerHTML = "";
      points.forEach((p) => {
        const bar = document.createElement("div");
        bar.className = "sim__bar";
        bar.style.height = `${Math.max(2, (p.value / max) * 100)}%`;
        const fill = document.createElement("i");
        fill.style.height = `${Math.min(100, (p.invested / p.value) * 100)}%`;
        bar.appendChild(fill);
        bar.title = `Année ${p.year} : ${euros.format(p.value)}`;
        chart.appendChild(bar);
      });
    };

    Object.values(inputs).forEach((input) =>
      input.addEventListener("input", render)
    );
    render();
  }

  // --- Année courante dans le pied de page ---------------------------------
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
});
