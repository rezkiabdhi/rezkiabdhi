const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

const translations = {
  id: {
    pageTitle: 'Abdhi Rezki — Personal Site',
    pageDescription: 'Profil Abdhi Rezki, siswa SMK Negeri 6 Tangerang Selatan.',
    navAbout: 'Tentang',
    navEducation: 'Pendidikan',
    navJourney: 'Pengalaman',
    navContact: 'Kontak',
    switchLabel: 'EN',
    languageLabel: 'Ganti bahasa ke Inggris',
    brandLabel: 'Kembali ke atas',
    navigationLabel: 'Navigasi utama',
    focusLabel: 'Fokus: menggambar, bermain, menonton, belajar',
    sayHello: 'Sapa saya',
    pillBadge: 'SMKN 6',
    pillText: 'Tangerang Selatan · Lihat perjalanan sekolah',
    heroTitle: 'Belajar hari ini,<br /><em>membuat esok.</em>',
    heroLede: 'Halo, saya Abdhi Rezki, siswa SMK Negeri 6 Tangerang Selatan. Saya senang menggambar, bermain game, dan terus mencoba hal baru.',
    aboutButton: 'Kenalan lebih dekat',
    educationButton: 'Riwayat pendidikan',
    cardEyebrow: 'PORTOFOLIO · 01',
    cardBadge: 'TERUS BELAJAR',
    heroImageAlt: 'Potret Abdhi Rezki',
    cardRole: 'Siswa · SMK Negeri 6 Kota Tangerang Selatan',
    tagArt: 'Menggambar',
    tagGames: 'Bermain Game',
    tagMovies: 'Film Marvel',
    hlFocusLabel: 'Gaya Gambar',
    hlFocusValue: 'Semi-realistis &amp; anime',
    hlAdmireLabel: 'Inspirasi',
    tickerDraw: 'GAMBAR',
    tickerPlay: 'MAIN',
    tickerWatch: 'TONTON',
    tickerLearn: 'BELAJAR',
    profileIndex: '01 / PROFIL',
    profileTitle: 'Tidak harus<br /><span>langsung jago.</span>',
    profileLead: 'Yang penting mau mulai, mau bertanya, dan mau mengulang sampai jadi lebih baik.',
    profileBody: 'Saya siswa SMK Negeri 6 Tangerang Selatan yang menikmati proses belajar dan mencoba hal-hal baru, satu langkah dalam satu waktu.',
    hobbiesTitle: 'Hobi',
    hobbyArt: 'Menggambar: semi-realistis dan anime; masih belajar gaya realistis.',
    hobbyGames: 'Bermain Roblox, Blood Strike, dan Minecraft.',
    hobbyMovies: 'Menonton film Marvel.',
    admiredTitle: 'Orang yang dikagumi',
    admiredBody: 'Simo Häyhä, pahlawan nasional Finlandia.',
    factLearning: 'Terus<br />belajar',
    factLocation: 'Di<br />Tangsel',
    factCreator: 'Calon<br />kreator',
    educationIndex: '02 / PENDIDIKAN',
    educationTitle: 'Jejak<br /><span>pendidikan.</span>',
    educationIntro: 'Perjalanan sekolah dari timur hingga Tangerang Selatan yang membentuk langkah saya hingga hari ini.',
    eduLevelSD: 'Sekolah Dasar',
    eduLevelSMP: 'Sekolah Menengah Pertama',
    eduLevelSMK: 'Sekolah Menengah Kejuruan · Sekarang',
    experienceIndex: '03 / PENGALAMAN',
    experienceTitle: 'Proses yang<br /><span>membentuk saya.</span>',
    experienceIntro: 'Pengalaman yang saya jalani sambil terus belajar dan berkembang.',
    experienceCadetTitle: 'Ketarunaan di SMK Negeri 6',
    experienceCadetBody: 'Menjalani pengalaman ketarunaan sebagai bagian dari kehidupan sekolah.',
    experienceArtTitle: 'Mencoba gaya realistis',
    experienceArtBody: 'Pertama kali mencoba menggambar dengan gaya realistis selama satu minggu.',
    motto: 'Konsisten<br /><em>di satu waktu.</em>',
    mottoCaption: 'motto hidup',
    contactIndex: '04 / KONTAK',
    contactEyebrow: 'Punya ide atau ingin menyapa?',
    contactTitle: 'Mari buat<br /><em>sesuatu yang baik.</em>',
    footerMade: 'Dibuat dengan rasa ingin tahu <span class="footer-star">❄</span>',
    backToTop: 'Kembali ke atas ↑'
  },
  en: {
    pageTitle: 'Abdhi Rezki — Personal Site',
    pageDescription: 'The personal profile of Abdhi Rezki, a student at SMK Negeri 6 South Tangerang.',
    navAbout: 'About',
    navEducation: 'Education',
    navJourney: 'Experience',
    navContact: 'Contact',
    switchLabel: 'ID',
    languageLabel: 'Switch language to Indonesian',
    brandLabel: 'Back to top',
    navigationLabel: 'Main navigation',
    focusLabel: 'Focus: drawing, gaming, films, and learning',
    sayHello: 'Say hello',
    pillBadge: 'SMKN 6',
    pillText: 'South Tangerang · View school timeline',
    heroTitle: 'Learning today,<br /><em>shaping tomorrow.</em>',
    heroLede: "Hi, I'm Abdhi Rezki, a student at SMK Negeri 6 South Tangerang. I enjoy drawing, gaming, and trying new things.",
    aboutButton: 'Get to know me',
    educationButton: 'Education timeline',
    cardEyebrow: 'PORTFOLIO · 01',
    cardBadge: 'STAY CURIOUS',
    heroImageAlt: 'Portrait of Abdhi Rezki',
    cardRole: 'Student · SMK Negeri 6 South Tangerang',
    tagArt: 'Drawing',
    tagGames: 'Gaming',
    tagMovies: 'Marvel Films',
    hlFocusLabel: 'Art Style',
    hlFocusValue: 'Semi-realistic &amp; anime',
    hlAdmireLabel: 'Inspiration',
    tickerDraw: 'DRAW',
    tickerPlay: 'PLAY',
    tickerWatch: 'WATCH',
    tickerLearn: 'LEARN',
    profileIndex: '01 / ABOUT',
    profileTitle: "You don't have to be<br /><span>great right away.</span>",
    profileLead: 'What matters is starting, asking questions, and practicing until you get better.',
    profileBody: 'I am a student at SMK Negeri 6 South Tangerang who enjoys learning and trying new things, one step at a time.',
    hobbiesTitle: 'Hobbies',
    hobbyArt: 'Drawing: semi-realistic and anime; still learning realistic art.',
    hobbyGames: 'Playing Roblox, Blood Strike, and Minecraft.',
    hobbyMovies: 'Watching Marvel movies.',
    admiredTitle: 'Someone I admire',
    admiredBody: 'Simo Häyhä, a Finnish national hero.',
    factLearning: 'Always<br />learning',
    factLocation: 'Based in<br />Tangsel',
    factCreator: 'Future<br />creator',
    educationIndex: '02 / EDUCATION',
    educationTitle: 'Education<br /><span>timeline.</span>',
    educationIntro: 'My school journey across Indonesia leading up to South Tangerang today.',
    eduLevelSD: 'Elementary School',
    eduLevelSMP: 'Junior High School',
    eduLevelSMK: 'Vocational High School · Present',
    experienceIndex: '03 / EXPERIENCE',
    experienceTitle: 'Experiences that<br /><span>shape me.</span>',
    experienceIntro: 'Some experiences from my ongoing journey of learning and growing.',
    experienceCadetTitle: 'Cadet training at SMK Negeri 6',
    experienceCadetBody: 'Taking part in cadet training as a part of school life.',
    experienceArtTitle: 'Trying realistic art',
    experienceArtBody: 'My first attempt at drawing in a realistic style, practiced for a week.',
    motto: 'Stay consistent,<br /><em>one moment at a time.</em>',
    mottoCaption: 'my life motto',
    contactIndex: '04 / CONTACT',
    contactEyebrow: 'Have an idea or just want to say hello?',
    contactTitle: "Let's make<br /><em>something good.</em>",
    footerMade: 'Made with curiosity <span class="footer-star">❄</span>',
    backToTop: 'Back to top ↑'
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

// 3D Interactive Portfolio Card Tilt with Subtle Idle Float
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
    targetY = normX * 10;
    targetX = -normY * 9;
    isHovering = true;

    tiltCard.style.setProperty('--glare-x', `${(normX + 0.5) * 100}%`);
    tiltCard.style.setProperty('--glare-y', `${(normY + 0.5) * 100}%`);
  });

  heroStage.addEventListener('pointerleave', () => {
    isHovering = false;
  });

  function animateTilt(time) {
    if (!isHovering) {
      targetX = Math.sin(time * 0.001) * 1.8;
      targetY = Math.cos(time * 0.0008) * 2.2;
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
