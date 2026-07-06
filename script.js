const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const inquiryForm = document.querySelector("#inquiry-form");
const motionField = document.querySelector(".motion-field");
const productGrid = document.querySelector("#product-grid");
const dealGrid = document.querySelector("#deal-grid");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const whatsappNumber = "917033000532";

const sofaProducts = [
  { image: "assets/provided/sofa-18.jpg", name: "Teal Quilted Sectional", code: "SOFA-001" },
  { image: "assets/provided/sofa-01.jpg", name: "Taupe Lounge Set", code: "SOFA-002" },
  { image: "assets/provided/sofa-02.jpg", name: "Ivory Comfort Set", code: "SOFA-003" },
  { image: "assets/provided/sofa-03.jpg", name: "Olive Family Sectional", code: "SOFA-004" },
  { image: "assets/provided/sofa-04.jpg", name: "Charcoal Corner Sofa", code: "SOFA-005" },
  { image: "assets/provided/sofa-05.jpg", name: "Sage Rounded Lounge", code: "SOFA-006" },
  { image: "assets/provided/sofa-06.jpg", name: "Navy Custom Sectional", code: "SOFA-007" },
  { image: "assets/provided/sofa-07.jpg", name: "Rust Velvet Set", code: "SOFA-008" },
  { image: "assets/provided/sofa-08.jpg", name: "Soft Pink Sectional", code: "SOFA-009" },
  { image: "assets/provided/sofa-09.jpg", name: "Silver Grey Sectional", code: "SOFA-010" },
  { image: "assets/provided/sofa-10.jpg", name: "Olive Comfort Lounge", code: "SOFA-011" },
  { image: "assets/provided/sofa-11.jpg", name: "Premium Cream Set", code: "SOFA-012" },
  { image: "assets/provided/sofa-12.jpg", name: "Brown Quilted Sectional", code: "SOFA-013" },
  { image: "assets/provided/sofa-13.jpg", name: "Ivory Rounded Sectional", code: "SOFA-014" },
  { image: "assets/provided/sofa-14.jpg", name: "Olive Textured Sofa", code: "SOFA-015" },
  { image: "assets/provided/sofa-15.jpg", name: "Blue-Grey Sectional", code: "SOFA-016" },
  { image: "assets/provided/sofa-16.jpg", name: "Taupe Curved Lounge", code: "SOFA-017" },
  { image: "assets/provided/sofa-17.jpg", name: "Charcoal Wood-Accent Set", code: "SOFA-018" },
  { image: "assets/provided/sofa-19.jpg", name: "Ivory Ribbed Sectional", code: "SOFA-019" },
  { image: "assets/provided/sofa-20.jpg", name: "Beige Gold-Trim Set", code: "SOFA-020" },
];

const dealCategories = [
  { name: "Beds", image: "assets/categories/category-bed.jpg" },
  { name: "Bed Mattresses", image: "assets/categories/category-mattress.jpg" },
  { name: "Sofa Sets", image: "assets/provided/sofa-18.jpg" },
  { name: "Customized Sofas", image: "assets/provided/sofa-08.jpg" },
  { name: "Home Furniture", image: "assets/categories/category-home-furniture.jpg" },
  { name: "And many more", image: "assets/categories/category-more.jpg" },
];

const makeWhatsappUrl = (message) => (
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
);

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navLinks.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

if (productGrid) {
  productGrid.innerHTML = sofaProducts.map((product) => {
    const message = `Hi, I am interested in this sofa. Product Code: ${product.code}`;
    return `
      <article class="product-card motion-card reveal">
        <img src="${product.image}" alt="${product.name}">
        <div class="product-card-body">
          <span class="product-code">${product.code}</span>
          <h3>${product.name}</h3>
          <a class="btn primary full" href="${makeWhatsappUrl(message)}" target="_blank" rel="noreferrer">Enquiry</a>
        </div>
      </article>
    `;
  }).join("");
}

if (dealGrid) {
  dealGrid.innerHTML = dealCategories.map((category) => {
    const message = `Hi, I am interested in ${category.name}. Please share more details.`;
    return `
      <article class="deal-card motion-card reveal">
        <img src="${category.image}" alt="${category.name}">
        <div class="deal-card-body">
          <h3>${category.name}</h3>
          <a class="btn secondary full" href="${makeWhatsappUrl(message)}" target="_blank" rel="noreferrer">Enquiry</a>
        </div>
      </article>
    `;
  }).join("");
}

inquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(inquiryForm);
  const name = data.get("name") || "Customer";
  const sofa = data.get("sofa") || "custom sofa";
  const message = data.get("message") || "Please help me with options.";

  const text = [
    `Hi Sofa Scape, I am ${name}.`,
    `I am interested in: ${sofa}.`,
    `Details: ${message}`,
  ].join("\n");

  window.open(makeWhatsappUrl(text), "_blank", "noopener");
});

if (motionField && !reduceMotion) {
  const colors = [
    "rgba(6, 79, 88, 0.18)",
    "rgba(14, 116, 128, 0.15)",
    "rgba(183, 131, 62, 0.2)",
    "rgba(140, 77, 84, 0.14)",
  ];
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const particleCount = 1000;
  const particles = [];

  motionField.dataset.animations = String(particleCount);
  motionField.appendChild(canvas);

  const resizeCanvas = () => {
    const scale = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.floor(window.innerWidth * scale);
    canvas.height = Math.floor(window.innerHeight * scale);
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    context.setTransform(scale, 0, 0, scale, 0, 0);
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  for (let index = 0; index < particleCount; index += 1) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      length: 8 + Math.random() * 38,
      speed: 0.12 + Math.random() * 0.42,
      drift: -0.18 + Math.random() * 0.36,
      angle: Math.random() * Math.PI,
      spin: -0.004 + Math.random() * 0.008,
      alpha: 0.05 + Math.random() * 0.22,
      color: colors[index % colors.length],
    });
  }

  const drawParticle = (particle) => {
    context.save();
    context.globalAlpha = particle.alpha;
    context.translate(particle.x, particle.y);
    context.rotate(particle.angle);
    context.strokeStyle = particle.color;
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(-particle.length / 2, 0);
    context.lineTo(particle.length / 2, 0);
    context.moveTo(-particle.length / 6, -4);
    context.lineTo(-particle.length / 6, 4);
    context.moveTo(particle.length / 6, -4);
    context.lineTo(particle.length / 6, 4);
    context.stroke();
    context.restore();
  };

  const animate = () => {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((particle) => {
      particle.y -= particle.speed;
      particle.x += particle.drift;
      particle.angle += particle.spin;

      if (particle.y < -30) {
        particle.y = window.innerHeight + 30;
        particle.x = Math.random() * window.innerWidth;
      }

      if (particle.x < -50) particle.x = window.innerWidth + 50;
      if (particle.x > window.innerWidth + 50) particle.x = -50;
      drawParticle(particle);
    });
    requestAnimationFrame(animate);
  };

  animate();
}

const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length && !reduceMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

document.querySelectorAll(".motion-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (reduceMotion) return;
    const bounds = card.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 6;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -6;
    card.style.transform = `translateY(-6px) rotateX(${y}deg) rotateY(${x}deg)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});
