import siteData from '../data/site.json';

const root = document.querySelector('#site-root');
const imageAssets = {
  banner: {
    png: new URL('../images/banner.png', import.meta.url),
    png2x: new URL('../images/banner@2x.png', import.meta.url),
    webp: new URL('../images/banner.webp', import.meta.url),
    webp2x: new URL('../images/banner@2x.webp', import.meta.url)
  },
  easy: {
    jpg: new URL('../images/easy.jpg', import.meta.url),
    jpg2x: new URL('../images/easy@2x.jpg', import.meta.url),
    webp: new URL('../images/easy.webp', import.meta.url),
    webp2x: new URL('../images/easy@2x.webp', import.meta.url)
  },
  fast: {
    jpg: new URL('../images/fast.jpg', import.meta.url),
    jpg2x: new URL('../images/fast@2x.jpg', import.meta.url),
    webp: new URL('../images/fast.webp', import.meta.url),
    webp2x: new URL('../images/fast@2x.webp', import.meta.url)
  },
  ipad: {
    png: new URL('../images/ipad.png', import.meta.url),
    png2x: new URL('../images/ipad@2x.png', import.meta.url),
    webp: new URL('../images/ipad.webp', import.meta.url),
    webp2x: new URL('../images/ipad@2x.webp', import.meta.url)
  },
  support: {
    jpg: new URL('../images/support.jpg', import.meta.url),
    jpg2x: new URL('../images/support@2x.jpg', import.meta.url),
    webp: new URL('../images/support.webp', import.meta.url),
    webp2x: new URL('../images/support@2x.webp', import.meta.url)
  },
  testimonial: {
    jpg: new URL('../images/testimonial.jpg', import.meta.url)
  },
  wordpress: {
    jpg: new URL('../images/wordpress.jpg', import.meta.url),
    jpg2x: new URL('../images/wordpress@2x.jpg', import.meta.url),
    webp: new URL('../images/wordpress.webp', import.meta.url),
    webp2x: new URL('../images/wordpress@2x.webp', import.meta.url)
  }
};

const getImageAsset = (name, key) => imageAssets[name]?.[key] || '';

const brandLogo = (gradientId) => `
  <svg class="brand__mark" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#${gradientId})"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <defs>
      <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4f46e5" />
        <stop offset="100%" stop-color="#0ea5e9" />
      </linearGradient>
    </defs>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
    <path d="M12 12v3"></path>
    <path d="M9 15h6"></path>
  </svg>
`;

const brandLink = (gradientId) => `
  <a class="brand" aria-label="${siteData.brand.name}" href="#home">
    ${brandLogo(gradientId)}
    <span class="brand__name">${siteData.brand.name}</span>
  </a>
`;

const responsivePicture = ({ name, extension = 'jpg', alt = '', className = '', aos = '' }) => `
  <picture${aos ? ` data-aos="${aos}"` : ''}>
    <source type="image/webp" srcset="${getImageAsset(name, 'webp')} 1x, ${getImageAsset(name, 'webp2x')} 2x" />
    <source type="image/${extension}" srcset="${getImageAsset(name, extension)} 1x, ${getImageAsset(name, `${extension}2x`)} 2x" />
    <img${className ? ` class="${className}"` : ''} src="${getImageAsset(name, extension === 'jpg' ? 'jpg2x' : extension)}" alt="${alt}" />
  </picture>
`;

const renderHeader = () => `
  <header>
    <nav class="nav collapsible" aria-label="Primary navigation">
      <div class="nav__brand">${brandLink('logo-gradient')}</div>
      <button class="nav__toggler" type="button" aria-label="Open navigation" aria-expanded="false">
        <i class="fa-solid fa-bars"></i>
      </button>
      <ul class="list nav__list collapsible__content">
        ${siteData.navigation.map((item) => `<li class="nav__item"><a href="${item.href}">${item.label}</a></li>`).join('')}
        <li class="nav__action">
          <button class="theme-toggle" type="button" aria-label="Toggle theme">
            <i class="fa-solid fa-moon" aria-hidden="true"></i>
          </button>
        </li>
        <li class="nav__action"><a href="${siteData.cta.short.href}" class="nav__cta">${siteData.cta.short.label}</a></li>
      </ul>
    </nav>
  </header>
`;

const renderHero = () => `
  <section id="home" class="block block--dark hero">
    <div class="container hero__grid">
      <header class="block__header hero__content">
        <span class="eyebrow">${siteData.hero.eyebrow}</span>
        <h1 data-aos="zoom-in-up" class="block__heading">${siteData.hero.heading}</h1>
        <p class="hero__tagline">${siteData.hero.tagline}</p>
        <div class="hero__actions" data-aos="fade-up" data-aos-delay="150">
          <a href="${siteData.cta.primary.href}" class="btn btn--accent">${siteData.cta.primary.label}</a>
          <a href="${siteData.cta.secondary.href}" class="btn btn--outline">${siteData.cta.secondary.label}</a>
        </div>
        <div class="hero__stats" aria-label="Service highlights">
          ${siteData.hero.stats.map((stat) => `<span><strong>${stat.value}</strong> ${stat.label}</span>`).join('')}
        </div>
      </header>
      <div class="hero__visual" data-aos="zoom-in">
        <div class="hero__status"><span class="hero__status-dot"></span>${siteData.hero.status}</div>
        ${responsivePicture({ ...siteData.hero.image, className: 'hero__image' })}
      </div>
    </div>
  </section>
`;

const renderProcess = () => `
  <section id="${siteData.process.id}" data-aos="zoom-in-up" class="block section-shell section-process">
    <header class="block__header">
      <h2>${siteData.process.heading}</h2>
      <p>${siteData.process.body}</p>
    </header>
    <div class="code-animated-video">
      ${siteData.process.steps.map((step, index) => `
        ${index ? '<div class="cav-line"><div class="cav-particle' + (index === 2 ? ' delay-2' : '') + '"></div></div>' : ''}
        <div class="cav-node cav-bounce ${step.delay}">
          <div class="cav-icon-box ${step.tone}">
            <i class="fa-solid ${step.icon} fa-3x icon--primary" aria-hidden="true"></i>
            ${step.gear ? '<i class="fa-solid fa-gear cav-gear" aria-hidden="true"></i>' : ''}
          </div>
          <span class="cav-text">${step.label}</span>
        </div>
      `).join('')}
    </div>
  </section>
`;

const renderPricing = () => `
  <section id="${siteData.pricing.id}" data-aos="fade-up" class="block section-shell block-plans">
    <header class="block__header">
      <h2>${siteData.pricing.heading}</h2>
      <p>${siteData.pricing.body}</p>
    </header>
    <div class="grid grid--1x3 pricing-grid">
      ${siteData.pricing.plans.map((plan, index) => `
        <div class="plan${plan.popular ? ' plan--popular' : ''}" data-aos="fade-up" data-aos-delay="${[100, 220, 320][index] || 100}">
          <div class="card ${plan.popular ? 'card--primary' : 'card--secondary'}">
            <header class="card__header">
              <h3 class="plan__name">${plan.name}</h3>
              <span class="plan__price">${plan.price}</span>
              <span class="plan__billing-cycle">${plan.cycle}</span>
              <span class="badge ${plan.popular ? 'badge--primary' : 'badge--secondary'} badge--small">${plan.badge}</span>
              <span class="plan__description">${plan.description}</span>
            </header>
            <div class="card__body">
              <ul class="list list--tick">
                ${plan.features.map((feature) => `<li class="list__item">${feature}</li>`).join('')}
              </ul>
              <a href="${siteData.cta.primary.href}" class="btn btn--outline btn--block">Get Started</a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </section>
`;

const renderFeatures = () => `
  <section class="block section-shell section-features">
    <header class="block__header">
      <h2>${siteData.features.heading}</h2>
      <p>${siteData.features.body}</p>
    </header>
    ${siteData.features.items.map((feature) => `
      <article class="grid grid--1x2 feature">
        <div class="feature__content" data-aos="${feature.contentAos}">
          <span class="icon-container">
            <i class="fa-solid ${feature.icon} fa-3x icon--primary" aria-hidden="true"></i>
          </span>
          <h3 class="feature__heading">${feature.heading}</h3>
          <p>${feature.body}</p>
          <a href="${siteData.cta.primary.href}" class="link-arrow">Get Started</a>
        </div>
        ${responsivePicture({ name: feature.image, alt: '', className: 'feature__image', aos: feature.imageAos || '' })}
      </article>
    `).join('')}
  </section>
`;

const renderShowcase = () => `
  <section class="block block--dark section-showcase">
    <header class="block__header">
      <h2>${siteData.showcase.heading}</h2>
      <p>${siteData.showcase.body}</p>
    </header>
    <div class="container grid grid--1x2">
      <picture data-aos="fade-right" class="block-showcase__image">
        <source type="image/webp" srcset="${getImageAsset(siteData.showcase.image.name, 'webp')} 1x, ${getImageAsset(siteData.showcase.image.name, 'webp2x')} 2x" />
        <source type="image/png" srcset="${getImageAsset(siteData.showcase.image.name, 'png')} 1x, ${getImageAsset(siteData.showcase.image.name, 'png2x')} 2x" />
        <img src="${getImageAsset(siteData.showcase.image.name, 'png')}" alt="${siteData.showcase.image.alt}" />
      </picture>
      <ul class="list" data-aos="fade-up">
        ${siteData.showcase.items.map((item) => `
          <li>
            <div class="media">
              <div class="media__image"><i class="fa-solid ${item.icon} fa-2x icon--primary"></i></div>
              <div class="media__body">
                <h3 class="media__title">${item.heading}</h3>
                <p>${item.body}</p>
              </div>
            </div>
          </li>
        `).join('')}
      </ul>
    </div>
  </section>
`;

const renderTestimonial = () => `
  <section class="block section-shell section-testimonial" data-aos="zoom-in">
    <header class="block__header">
      <h2>${siteData.testimonial.heading}</h2>
      <p>${siteData.testimonial.body}</p>
    </header>
    <div class="container">
      <div class="card testimonial">
        <div class="grid grid--1x2">
          <div class="testimonial__image">
            <img src="${getImageAsset(siteData.testimonial.image, 'jpg')}" alt="${siteData.testimonial.imageAlt}" />
            <span class="icon-container icon-container--accent">
              <i class="fa-solid fa-quote-left fa-sm icon--white"></i>
            </span>
          </div>
          <blockquote class="quote">
            <p class="quote__text">${siteData.testimonial.quote}</p>
            <footer>
              <div class="media">
                <div class="media__image"><i class="fa-solid fa-minus fa-2x quote__line"></i></div>
                <div class="media__body">
                  <h3 class="media__title quote__author">${siteData.testimonial.author}</h3>
                  <p class="quote__organization">${siteData.testimonial.organization}</p>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
`;

const renderField = (field) => {
  if (field.type === 'textarea') {
    return `
      <label class="field">
        <span>${field.label}</span>
        <textarea class="input" placeholder="${field.placeholder}" rows="${field.rows || 5}"${field.required ? ' required' : ''}></textarea>
      </label>
    `;
  }

  return `
    <label class="field">
      <span>${field.label}</span>
      <input type="${field.type}" class="input" placeholder="${field.placeholder}"${field.required ? ' required' : ''} />
    </label>
  `;
};

const renderContact = () => {
  const [nameField, emailField, detailsField] = siteData.contact.form.fields;

  return `
    <section id="${siteData.contact.id}" class="block section-shell section-contact">
      <header class="block__header">
        <h2>${siteData.contact.heading}</h2>
        <p>${siteData.contact.body}</p>
      </header>
      <div class="contact-panel">
        <aside class="contact-panel__content">
          <span class="eyebrow">${siteData.contact.eyebrow}</span>
          <h3>${siteData.contact.panelHeading}</h3>
          <p>${siteData.contact.panelBody}</p>
          <ul class="contact-points list">
            ${siteData.contact.points.map((point) => `<li><i class="fa-solid fa-check" aria-hidden="true"></i> ${point}</li>`).join('')}
          </ul>
        </aside>
        <div class="card contact-card">
          <form class="contact-form" action="${siteData.contact.form.action}" method="${siteData.contact.form.method}">
            <div class="contact-form__row">
              ${renderField(nameField)}
              ${renderField(emailField)}
            </div>
            ${renderField(detailsField)}
            <button type="submit" class="btn btn--primary btn--block">${siteData.contact.form.button}</button>
          </form>
        </div>
      </div>
    </section>
  `;
};

const renderFooter = () => `
  <footer class="block block--dark footer">
    <div class="container grid footer__sections">
      <div class="footer__brand">
        <div class="footer__logo">${brandLink('footer-logo-gradient')}</div>
        <p class="footer__summary">${siteData.brand.summary}</p>
        <div class="footer__social" aria-label="Social links">
          ${siteData.footer.social.map((item) => `<a href="${item.href}" aria-label="${item.label}"><i class="fa-brands ${item.icon}" aria-hidden="true"></i></a>`).join('')}
        </div>
      </div>
      ${siteData.footer.columns.map((column) => `
        <section class="collapsible${column.expanded ? ' collapsible--expanded' : ''} footer__section">
          <div class="collapsible__header">
            <h2 class="collapsible__heading footer__heading">${column.heading}</h2>
            <i class="fa-solid fa-chevron-down collapsible__chevron"></i>
          </div>
          <div class="collapsible__content">
            <ul class="list">
              ${column.links.map((link) => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
            </ul>
          </div>
        </section>
      `).join('')}
    </div>
    <div class="container footer__bottom">
      <p class="footer__copyright">${siteData.footer.copyright}</p>
      <a href="#home">${siteData.footer.backToTop}</a>
    </div>
  </footer>
`;

const renderWhatsapp = () => `
  <a href="${siteData.whatsapp.href}" target="_blank" rel="noreferrer" aria-label="${siteData.whatsapp.label}" class="whatsapp-float">
    <svg width="35" height="35" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  </a>
`;

const updateMeta = () => {
  document.title = siteData.meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', siteData.meta.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', siteData.meta.ogTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', siteData.meta.ogDescription);
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', siteData.meta.ogImage);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', siteData.meta.ogUrl);
};

const setNavExpanded = (nav, isExpanded) => {
  nav.classList.toggle('collapsible--expanded', isExpanded);
  const toggler = nav.querySelector('.nav__toggler');
  const icon = toggler?.querySelector('i');

  toggler?.setAttribute('aria-expanded', String(isExpanded));
  toggler?.setAttribute('aria-label', isExpanded ? 'Close navigation' : 'Open navigation');
  icon?.classList.toggle('fa-bars', !isExpanded);
  icon?.classList.toggle('fa-xmark', isExpanded);
};

const initCollapsibles = () => {
  document.querySelectorAll('.collapsible').forEach((item) => {
    item.addEventListener('click', function (e) {
      const toggler = e.target.closest('.nav__toggler');
      const header = e.target.closest('.collapsible__header');

      if (!toggler && !header) return;

      const isExpanded = !this.classList.contains('collapsible--expanded');

      if (this.classList.contains('nav')) {
        setNavExpanded(this, isExpanded);
        return;
      }

      this.classList.toggle('collapsible--expanded', isExpanded);
    });
  });

  document.querySelectorAll('.nav__list a').forEach((link) => {
    link.addEventListener('click', () => {
      const nav = link.closest('.nav');
      if (nav) setNavExpanded(nav, false);
    });
  });
};

const initThemeToggle = () => {
  const themeToggleBtn = document.querySelector('.theme-toggle');
  const themeIcon = themeToggleBtn?.querySelector('i');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme && themeIcon) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
  }

  themeToggleBtn?.addEventListener('click', function (e) {
    e.preventDefault();
    const theme = document.documentElement.getAttribute('data-theme');

    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      themeIcon?.classList.replace('fa-sun', 'fa-moon');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeIcon?.classList.replace('fa-moon', 'fa-sun');
    }
  });
};

const renderSite = () => {
  updateMeta();
  root.innerHTML = [
    renderHeader(),
    renderHero(),
    renderProcess(),
    renderPricing(),
    renderFeatures(),
    renderShowcase(),
    renderTestimonial(),
    renderContact(),
    renderFooter(),
    renderWhatsapp()
  ].join('');

  initCollapsibles();
  initThemeToggle();
  window.AOS?.refreshHard();
};

renderSite();
