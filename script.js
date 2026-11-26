const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

const snowIconSvg = '<svg class="snow-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v20M4.93 6l14.14 12M19.07 6L4.93 18M9.5 4.5L12 7l2.5-2.5M9.5 19.5L12 17l2.5 2.5M4.5 9.5L7 12l-2.5 2.5M19.5 9.5L17 12l2.5 2.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none"/></svg>';

const translations = {
  id: {
    pageTitle: 'Abdhi Rezki — Personal Site',
    pageDescription: 'Profil Abdhi Rezki, siswa SMK 6 Tangerang Selatan.',
    navAbout: 'Tentang', navJourney: 'Pengalaman', navContact: 'Kontak', switchLabel: 'EN',
    languageLabel: 'Ganti bahasa ke Inggris', brandLabel: 'Kembali ke atas',
    navigationLabel: 'Navigasi utama', focusLabel: 'Fokus: menggambar, bermain, menonton, belajar',
    sayHello: 'Sapa saya', imageLabel: 'TERUS INGIN TAHU / 01',
    noteTop: `${snowIconSvg} terbuka pada ide`, schoolLabel: 'SMK 6<br />TANGSEL',
    tickerDraw: 'GAMBAR', tickerPlay: 'MAIN', tickerWatch: 'TONTON', tickerLearn: 'BELAJAR',
    heroEyebrow: 'Siswa · Tangerang Selatan',
    heroTitle: 'Belajar hari ini,<br /><em>membuat esok.</em>',
    heroLede: 'Halo, saya Abdhi Rezki, siswa SMK Negeri 6 Tangerang Selatan. Saya senang menggambar, bermain game, dan terus mencoba hal baru.',
    aboutButton: 'Kenalan lebih dekat', journeyButton: 'Lihat pengalaman',
    heroImageAlt: 'Potret Abdhi Rezki',
    heroStamp: 'Bikin<br /><strong>penasaran</strong>', profileIndex: '01 / PROFIL',
    profileTitle: 'Tidak harus<br /><span>langsung jago.</span>',
    profileLead: 'Yang penting mau mulai, mau bertanya, dan mau mengulang sampai jadi lebih baik.',
    profileBody: 'Saya siswa SMK Negeri 6 Tangerang Selatan yang menikmati proses belajar dan mencoba hal-hal baru, satu langkah dalam satu waktu.',
    hobbiesTitle: 'Hobi',
    hobbyArt: 'Menggambar: semi-realistis dan anime; masih belajar gaya realistis.',
    hobbyGames: 'Bermain Roblox, Blood Strike, dan Minecraft.', hobbyMovies: 'Menonton film Marvel.',
    admiredTitle: 'Orang yang dikagumi', admiredBody: 'Simo Häyhä, pahlawan nasional Finlandia.',
    factLearning: 'Terus<br />belajar', factLocation: 'Di<br />Tangsel', factCreator: 'Calon<br />kreator',
    experienceIndex: '02 / PENGALAMAN',
    experienceTitle: 'Proses yang<br /><span>membentuk saya.</span>',
    experienceIntro: 'Pengalaman yang saya jalani sambil terus belajar dan berkembang.',
    experienceCadetTitle: 'Ketarunaan di SMK Negeri 6',
    experienceCadetBody: 'Menjalani pengalaman ketarunaan sebagai bagian dari kehidupan sekolah.',
    experienceArtTitle: 'Mencoba gaya realistis',
    experienceArtBody: 'Pertama kali mencoba menggambar dengan gaya realistis selama satu minggu.',
    motto: 'Konsisten<br /><em>di satu waktu.</em>', mottoCaption: 'motto hidup',
    contactIndex: '03 / KONTAK', contactEyebrow: 'Punya ide atau ingin menyapa?',
    contactTitle: 'Mari buat<br /><em>sesuatu yang baik.</em>',
    footerMade: 'Dibuat dengan rasa ingin tahu <span class="footer-star">❄</span>', backToTop: 'Kembali ke atas ↑'
  },
  en: {
    pageTitle: 'Abdhi Rezki — Personal Site',
    pageDescription: 'The personal profile of Abdhi Rezki, a student at SMK 6 South Tangerang.',
    navAbout: 'About', navJourney: 'Experience', navContact: 'Contact', switchLabel: 'ID',
    languageLabel: 'Switch language to Indonesian', brandLabel: 'Back to top',
    navigationLabel: 'Main navigation', focusLabel: 'Focus: drawing, gaming, films, and learning',
    sayHello: 'Say hello', imageLabel: 'STAY CURIOUS / 01',
    noteTop: `${snowIconSvg} open to ideas`, schoolLabel: 'SMK 6<br />SOUTH TANGERANG',
    tickerDraw: 'DRAW', tickerPlay: 'PLAY', tickerWatch: 'WATCH', tickerLearn: 'LEARN',
    heroEyebrow: 'Student · South Tangerang',
    heroTitle: 'Learning today,<br /><em>shaping tomorrow.</em>',
    heroLede: "Hi, I'm Abdhi Rezki, a student at SMK Negeri 6 South Tangerang. I enjoy drawing, gaming, and trying new things.",
    aboutButton: 'Get to know me', journeyButton: 'See my experience',
    heroImageAlt: 'Portrait of Abdhi Rezki',
    heroStamp: 'Stay<br /><strong>curious</strong>', profileIndex: '01 / ABOUT',
    profileTitle: "You don't have to be<br /><span>great right away.</span>",
    profileLead: 'What matters is starting, asking questions, and practicing until you get better.',
    profileBody: 'I am a student at SMK Negeri 6 South Tangerang who enjoys learning and trying new things, one step at a time.',
    hobbiesTitle: 'Hobbies',
    hobbyArt: 'Drawing: semi-realistic and anime; still learning realistic art.',
    hobbyGames: 'Playing Roblox, Blood Strike, and Minecraft.', hobbyMovies: 'Watching Marvel movies.',
    admiredTitle: 'Someone I admire', admiredBody: 'Simo Häyhä, a Finnish national hero.',
    factLearning: 'Always<br />learning', factLocation: 'Based in<br />Tangsel', factCreator: 'Future<br />creator',
    experienceIndex: '02 / EXPERIENCE',
    experienceTitle: 'Experiences that<br /><span>shape me.</span>',
    experienceIntro: 'Some experiences from my ongoing journey of learning and growing.',
    experienceCadetTitle: 'Cadet training at SMK Negeri 6',
    experienceCadetBody: 'Taking part in cadet training as a part of school life.',
    experienceArtTitle: 'Trying realistic art',
    experienceArtBody: 'My first attempt at drawing in a realistic style, practiced for a week.',
    motto: 'Stay consistent,<br /><em>one moment at a time.</em>', mottoCaption: 'my life motto',
    contactIndex: '03 / CONTACT', contactEyebrow: 'Have an idea or just want to say hello?',
    contactTitle: "Let's make<br /><em>something good.</em>",
    footerMade: 'Made with curiosity <span class="footer-star">❄</span>', backToTop: 'Back to top ↑'
  }
};

const languageToggle = document.querySelector('#languageToggle');
const pageDescription = document.querySelector('meta[name="description"]');

function setLanguage(language) {
  const content = translations[language];
  document.documentElement.lang = language;
  document.title = content.pageTitle;
  pageDescription.content = content.pageDescription;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.innerHTML = content[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.alt = content[element.dataset.i18nAlt];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', content[element.dataset.i18nAria]);
  });

  languageToggle.setAttribute('aria-label', content.languageLabel);
  languageToggle.title = content.languageLabel;
  localStorage.setItem('site-language', language);
}

const savedLanguage = localStorage.getItem('site-language');
setLanguage(savedLanguage === 'en' ? 'en' : 'id');
languageToggle.addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'id' ? 'en' : 'id');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

// 3D Interactive Portrait Tilt with Idle Float
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const heroStage = document.querySelector('#heroStage');
const tiltCard = document.querySelector('#tiltCard');

if (heroStage && tiltCard && !prefersReducedMotion) {
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let isHovering = false;

  heroStage.addEventListener('pointermove', (event) => {
    const rect = heroStage.getBoundingClientRect();
    const normX = (event.clientX - rect.left) / rect.width - 0.5;
    const normY = (event.clientY - rect.top) / rect.height - 0.5;
    targetY = normX * 16;
    targetX = -normY * 14;
    isHovering = true;

    tiltCard.style.setProperty('--glare-x', `${(normX + 0.5) * 100}%`);
    tiltCard.style.setProperty('--glare-y', `${(normY + 0.5) * 100}%`);
  });

  heroStage.addEventListener('pointerleave', () => {
    isHovering = false;
  });

  function animateTilt(time) {
    if (!isHovering) {
      targetX = Math.sin(time * 0.0011) * 3.2;
      targetY = Math.cos(time * 0.00085) * 4.2;
    }
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    tiltCard.style.transform = `rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg)`;
    requestAnimationFrame(animateTilt);
  }

  requestAnimationFrame(animateTilt);
}

// Delicate Atmospheric Snowfall
const snowCanvas = document.querySelector('#snowCanvas');
if (snowCanvas && !prefersReducedMotion) {
  const ctx = snowCanvas.getContext('2d');
  let width = 0;
  let height = 0;
  const flakeCount = 46;
  const flakes = [];

  function resizeSnow() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    snowCanvas.width = width * dpr;
    snowCanvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createFlake(startRandomY = false) {
    const depth = Math.random();
    return {
      x: Math.random() * width,
      y: startRandomY ? Math.random() * height : -12,
      radius: 1.2 + depth * 2.4,
      speedY: 0.35 + depth * 0.75,
      drift: (Math.random() - 0.5) * 0.35,
      phase: Math.random() * Math.PI * 2,
      alpha: 0.25 + depth * 0.45,
      isCrystal: depth > 0.76
    };
  }

  resizeSnow();
  for (let i = 0; i < flakeCount; i += 1) {
    flakes.push(createFlake(true));
  }
  window.addEventListener('resize', resizeSnow);

  function drawCrystal(x, y, r, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeStyle = `rgba(142, 202, 255, ${alpha})`;
    ctx.lineWidth = 1;
    for (let i = 0; i < 3; i += 1) {
      ctx.rotate(Math.PI / 3);
      ctx.beginPath();
      ctx.moveTo(-r, 0);
      ctx.lineTo(r, 0);
      ctx.stroke();
    }
    ctx.restore();
  }

  function renderSnow(time) {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < flakes.length; i += 1) {
      const f = flakes[i];
      f.y += f.speedY;
      f.x += f.drift + Math.sin(time * 0.0007 + f.phase) * 0.28;

      if (f.y > height + 14) {
        flakes[i] = createFlake(false);
        continue;
      }
      if (f.x > width + 12) f.x = -12;
      if (f.x < -12) f.x = width + 12;

      if (f.isCrystal) {
        drawCrystal(f.x, f.y, f.radius * 1.65, f.alpha);
      } else {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(142, 202, 255, ${f.alpha})`;
        ctx.fill();
      }
    }
    requestAnimationFrame(renderSnow);
  }

  requestAnimationFrame(renderSnow);
}
