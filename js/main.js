/**
 * main.js — Servi Luz
 * Interactividad y render de datos a partir de site-config.js / catalog-data.js.
 * Sin dependencias externas.
 */
(function () {
  "use strict";

  const cfg = typeof SITE_CONFIG !== "undefined" ? SITE_CONFIG : window.SITE_CONFIG;
  const products = (typeof CATALOG_PRODUCTS !== "undefined" ? CATALOG_PRODUCTS : window.CATALOG_PRODUCTS) || [];

  /* ---------------- WhatsApp ---------------- */
  function waLink(message) {
    return `https://wa.me/${cfg.contact.whatsapp}?text=${encodeURIComponent(message)}`;
  }

  function wireWhatsAppLinks(root = document) {
    root.querySelectorAll("[data-wa]").forEach((el) => {
      const key = el.getAttribute("data-wa");
      const product = el.getAttribute("data-wa-product");
      let message;
      if (product) {
        message = cfg.whatsappMessages.product(product);
      } else {
        message = cfg.whatsappMessages[key] || cfg.whatsappMessages.general;
      }
      el.setAttribute("href", waLink(message));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  /* ---------------- Header ---------------- */
  function initHeader() {
    const header = document.querySelector(".header");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const toggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const closeBtn = document.querySelector(".mobile-nav-close");
    if (toggle && mobileNav) {
      const open = () => {
        mobileNav.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
      };
      const close = () => {
        mobileNav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      };
      toggle.addEventListener("click", () => {
        mobileNav.classList.contains("is-open") ? close() : open();
      });
      if (closeBtn) closeBtn.addEventListener("click", close);
      mobileNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") close();
      });
    }
  }

  /* ---------------- Scroll reveal ---------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el) => observer.observe(el));
  }

  /* ---------------- Datos de contacto/ubicación ---------------- */
  function fillTextFields(root = document) {
    const map = {
      "[data-field='address-street']": cfg.contact.address.street,
      "[data-field='address-full']": `${cfg.contact.address.street}, ${cfg.contact.address.neighborhood}, ${cfg.contact.address.city}`,
      "[data-field='neighborhood']": cfg.contact.address.neighborhood,
      "[data-field='business-name']": cfg.business.name,
      "[data-field='year']": String(new Date().getFullYear()),
    };
    Object.entries(map).forEach(([selector, value]) => {
      root.querySelectorAll(selector).forEach((el) => {
        el.textContent = value;
      });
    });

    root.querySelectorAll("[data-field='hours']").forEach((el) => {
      if (cfg.hours.confirmed && cfg.hours.schedule.some((s) => s.hours)) {
        el.innerHTML = cfg.hours.schedule
          .filter((s) => s.hours)
          .map((s) => `<div><dt>${s.days}</dt><dd>${s.hours}</dd></div>`)
          .join("");
      } else {
        el.innerHTML = `<div><dd>Consultá horarios por WhatsApp antes de venir.</dd></div>`;
      }
    });

    root.querySelectorAll("[data-field='maps-link']").forEach((el) => {
      el.setAttribute("href", cfg.contact.googleMapsUrl);
    });
  }

  /* ---------------- Categorías (grilla home) ---------------- */
  function renderCategories() {
    const grid = document.getElementById("category-grid");
    if (!grid) return;
    grid.innerHTML = cfg.categories
      .map(
        (c) => `
      <a class="category-card size-${c.size} reveal" href="/catalogo.html?categoria=${c.id}">
        <img class="img-placeholder" src="${c.image}" alt="${c.name}" loading="lazy" width="800" height="600">
        <div class="category-card-body">
          <h3>${c.name}</h3>
          <p>${c.description}</p>
        </div>
      </a>`
      )
      .join("");
    initReveal();
  }

  /* ---------------- Servicios confirmados ---------------- */
  function renderServices() {
    const list = document.getElementById("services-list");
    if (!list) return;
    const confirmed = cfg.services.filter((s) => s.confirmed);
    list.innerHTML = confirmed
      .map(
        (s) => `
      <div class="service-row">
        <h3>${s.name}</h3>
        <p>${s.description}</p>
      </div>`
      )
      .join("");
  }

  /* ---------------- Productos destacados / catálogo ---------------- */
  function renderProductCard(p) {
    const priceHtml = p.price != null ? `<span class="product-price">$${p.price.toLocaleString("es-AR")}</span>` : `<span></span>`;
    const tagHtml = p.tag ? `<span class="product-tag">${p.tag}</span>` : "";
    return `
      <div class="product-card">
        <div class="product-image">
          ${tagHtml}
          <img class="img-placeholder" src="${p.image}" alt="${p.name}" loading="lazy" width="600" height="600">
        </div>
        <span class="product-brand">${p.brand || ""}</span>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-spec">${p.specs && p.specs.uso ? p.specs.uso : ""}</p>
        <div class="product-footer">
          ${priceHtml}
          <a class="product-consult" href="#" data-wa data-wa-product="${p.name}">Consultar →</a>
        </div>
      </div>`;
  }

  function renderFeaturedProducts() {
    const el = document.getElementById("featured-products");
    if (!el) return;
    if (!products.length) {
      el.innerHTML = `
        <div class="empty-state">
          <h3>Estamos cargando el catálogo</h3>
          <p>Todavía no publicamos los productos destacados en la web. Contanos qué necesitás y te confirmamos stock y precio al toque.</p>
          <a class="btn btn-primary" href="#" data-wa>
            <svg class="icon-wa" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.3-.4c.1-.1.1-.3 0-.4-.1-.2-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a2.8 2.8 0 0 0-.9 2.1c0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z"/></svg>
            Consultar por WhatsApp
          </a>
        </div>`;
    } else {
      el.innerHTML = `<div class="product-grid">${products.slice(0, 8).map(renderProductCard).join("")}</div>`;
    }
    wireWhatsAppLinks(el);
  }

  /* ---------------- Catálogo completo (catalogo.html) ---------------- */
  function initCatalogPage() {
    const resultsEl = document.getElementById("catalog-results");
    if (!resultsEl) return;

    const searchInput = document.getElementById("catalog-search");
    const chipsEl = document.getElementById("catalog-filters");
    const params = new URLSearchParams(window.location.search);
    let activeCategory = params.get("categoria") || window.FIXED_CATEGORY || "all";

    if (chipsEl) {
      const chips = [{ id: "all", name: "Todas" }, ...cfg.categories.map((c) => ({ id: c.id, name: c.name }))];
      chipsEl.innerHTML = chips
        .map(
          (c) =>
            `<button type="button" class="filter-chip${c.id === activeCategory ? " is-active" : ""}" data-cat="${c.id}">${c.name}</button>`
        )
        .join("");
      chipsEl.querySelectorAll(".filter-chip").forEach((btn) => {
        btn.addEventListener("click", () => {
          activeCategory = btn.getAttribute("data-cat");
          chipsEl.querySelectorAll(".filter-chip").forEach((b) => b.classList.remove("is-active"));
          btn.classList.add("is-active");
          renderResults();
        });
      });
    }

    if (searchInput && params.get("q")) searchInput.value = params.get("q");

    function renderResults() {
      const query = (searchInput?.value || "").trim().toLowerCase();
      let filtered = products.filter((p) => {
        const matchesCategory = activeCategory === "all" || p.categoryId === activeCategory;
        const haystack = `${p.name} ${p.brand || ""} ${p.code || ""} ${p.categoryId}`.toLowerCase();
        const matchesQuery = !query || haystack.includes(query);
        return matchesCategory && matchesQuery;
      });

      if (!filtered.length) {
        resultsEl.innerHTML = `
          <div class="empty-state">
            <h3>${products.length ? "No encontramos ese producto" : "Todavía no hay productos cargados"}</h3>
            <p>¿No lo encontrás? Consultanos por WhatsApp y te confirmamos stock y precio.</p>
            <a class="btn btn-primary" href="#" data-wa>
              <svg class="icon-wa" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.3-.4c.1-.1.1-.3 0-.4-.1-.2-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a2.8 2.8 0 0 0-.9 2.1c0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z"/></svg>
              Consultar por WhatsApp
            </a>
          </div>`;
      } else {
        resultsEl.innerHTML = `<div class="product-grid">${filtered.map(renderProductCard).join("")}</div>`;
      }
      wireWhatsAppLinks(resultsEl);
    }

    if (searchInput) {
      searchInput.addEventListener("input", () => renderResults());
      searchInput.closest("form")?.addEventListener("submit", (e) => e.preventDefault());
    }

    renderResults();
  }

  /* ---------------- Init ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    fillTextFields();
    renderCategories();
    renderServices();
    renderFeaturedProducts();
    initCatalogPage();
    wireWhatsAppLinks();
    initReveal();
  });
})();
