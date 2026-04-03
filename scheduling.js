// ============================================================================
// FRAME AGENCY — AGENDAMENTO INTEGRADO v3.0
// PROIBIDA CÓPIA OU REPRODUÇÃO SEM AUTORIZAÇÃO
// ============================================================================

// ===== MICROSOFT CLARITY =====
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","w5q65sroky");

// ===== META VIEWPORT =====
(function(){const m=document.createElement('meta');m.name='viewport';m.content='width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no';document.head.appendChild(m);})();

// ===== FONTES =====
(function(){
  const fonts = [
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap',
    'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600&display=swap'
  ];
  fonts.forEach(href=>{const l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l);});
})();

// ===== CSS =====
const frStyle = document.createElement('style');
frStyle.id = 'fr-sched-style';
frStyle.textContent = `
:root {
  --fr-bronze: #AC865C;
  --fr-bronze-mid: #B38654;
  --fr-bronze-light: #D29F66;
  --fr-bronze-pale: #F4E8DB;
  --fr-cream: #F5F0EA;
  --fr-black: #161616;
  --fr-charcoal: #2C2C2C;
  --fr-gray: #949493;
  --fr-gray-light: #E8E3DC;
  --fr-white: #FFFFFF;
  --fr-error: #C0392B;
  --fr-success: #2E7D5C;
  --fr-shadow: rgba(44,44,44,0.08);
  --fr-radius: 20px;
  --fr-radius-pill: 50px;
  --fr-transition: 0.28s cubic-bezier(0.4,0,0.2,1);
}

*, *::before, *::after { box-sizing: border-box; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; margin: 0; padding: 0; }

html, body {
  height: 100%; min-height: 100%;
  background: var(--fr-cream);
  font-family: 'Poppins', sans-serif;
  color: var(--fr-charcoal);
  scroll-behavior: smooth;
  overscroll-behavior: none;
}

.fr-wrap {
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px 0 60px;
  background: var(--fr-cream);
}

.fr-card {
  width: 92%;
  max-width: 520px;
  background: var(--fr-white);
  border-radius: var(--fr-radius);
  box-shadow: 0 4px 40px var(--fr-shadow), 0 1px 0 rgba(172,134,92,0.12);
  padding: 0;
  position: relative;
  overflow: hidden;
  animation: frSlideUp 0.5s cubic-bezier(0.22,1,0.36,1) both;
}

@keyframes frSlideUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* === PROGRESS === */
.fr-progress-wrap {
  padding: 24px 28px 0;
}
.fr-progress-track {
  width: 100%;
  height: 3px;
  background: var(--fr-gray-light);
  border-radius: 2px;
  overflow: hidden;
}
.fr-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--fr-bronze) 0%, var(--fr-bronze-light) 100%);
  border-radius: 2px;
  transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
  width: 0%;
}
.fr-step-label {
  font-size: 11px;
  font-family: 'Sora', sans-serif;
  color: var(--fr-gray);
  letter-spacing: 0.04em;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fr-step-current {
  color: var(--fr-bronze);
  font-weight: 600;
}

/* === STEP CONTENT === */
.fr-step {
  display: none;
  padding: 24px 28px 32px;
  animation: frFadeIn 0.32s ease both;
}
.fr-step.active { display: block; }

@keyframes frFadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* === TYPOGRAPHY === */
.fr-h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--fr-black);
  margin-bottom: 6px;
  line-height: 1.25;
}
.fr-h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--fr-black);
  margin-bottom: 4px;
}
.fr-sub {
  font-size: 0.875rem;
  color: var(--fr-gray);
  line-height: 1.55;
  margin-bottom: 20px;
}

/* === INPUTS === */
.fr-field {
  margin-bottom: 14px;
  position: relative;
}
.fr-label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--fr-charcoal);
  margin-bottom: 6px;
  letter-spacing: 0.01em;
}
.fr-input {
  width: 100%;
  padding: 13px 16px;
  border: 1.5px solid var(--fr-gray-light);
  border-radius: var(--fr-radius-pill);
  background: var(--fr-white);
  font-family: 'Poppins', sans-serif;
  font-size: 0.938rem;
  color: var(--fr-charcoal);
  outline: none;
  transition: border-color var(--fr-transition), box-shadow var(--fr-transition);
  -webkit-appearance: none;
}
.fr-input::placeholder { color: var(--fr-gray); }
.fr-input:focus {
  border-color: var(--fr-bronze);
  box-shadow: 0 0 0 3px rgba(172,134,92,0.15);
}
.fr-input.error {
  border-color: var(--fr-error);
  box-shadow: 0 0 0 3px rgba(192,57,43,0.1);
}
.fr-select {
  width: 100%;
  padding: 13px 40px 13px 16px;
  border: 1.5px solid var(--fr-gray-light);
  border-radius: var(--fr-radius-pill);
  background: var(--fr-white) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23949493' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat right 16px center;
  font-family: 'Poppins', sans-serif;
  font-size: 0.938rem;
  color: var(--fr-charcoal);
  outline: none;
  cursor: pointer;
  transition: border-color var(--fr-transition), box-shadow var(--fr-transition);
  -webkit-appearance: none;
  appearance: none;
}
.fr-select:focus {
  border-color: var(--fr-bronze);
  box-shadow: 0 0 0 3px rgba(172,134,92,0.15);
}
.fr-err {
  font-size: 0.76rem;
  color: var(--fr-error);
  margin-top: 5px;
  padding-left: 4px;
  display: none;
}
.fr-err.show { display: block; }
.fr-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
@media(max-width:380px){ .fr-row { grid-template-columns: 1fr; gap: 10px; } }

/* === BUTTONS === */
.fr-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 15px 24px;
  border-radius: var(--fr-radius-pill);
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all var(--fr-transition);
  position: relative;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}
.fr-btn-primary {
  background: var(--fr-bronze);
  color: var(--fr-white);
  box-shadow: 0 4px 20px rgba(172,134,92,0.35);
  margin-top: 20px;
}
.fr-btn-primary:hover:not(:disabled) {
  background: var(--fr-bronze-mid);
  box-shadow: 0 6px 24px rgba(172,134,92,0.45);
  transform: translateY(-1px);
}
.fr-btn-primary:active:not(:disabled) { transform: scale(0.98); }
.fr-btn-primary:disabled {
  background: var(--fr-gray-light);
  color: var(--fr-gray);
  box-shadow: none;
  cursor: not-allowed;
}
.fr-btn-gradient {
  background: linear-gradient(110deg, var(--fr-bronze) 0%, var(--fr-bronze-light) 100%);
  color: var(--fr-white);
  box-shadow: 0 4px 20px rgba(172,134,92,0.4);
  margin-top: 20px;
}
.fr-btn-gradient:hover:not(:disabled) {
  box-shadow: 0 6px 28px rgba(172,134,92,0.5);
  transform: translateY(-1px);
}
.fr-btn-ghost {
  background: transparent;
  border: 1.5px solid var(--fr-gray-light);
  color: var(--fr-charcoal);
  margin-top: 10px;
}
.fr-btn-ghost:hover:not(:disabled) {
  border-color: var(--fr-bronze);
  color: var(--fr-bronze);
}
.fr-btn-text {
  background: none;
  border: none;
  color: var(--fr-bronze);
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  margin-top: 12px;
}

/* Spinner inside button */
.fr-btn-spinner {
  width: 18px; height: 18px;
  border: 2px solid rgba(255,255,255,0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: frSpin 0.7s linear infinite;
  display: none;
  flex-shrink: 0;
}
.fr-btn.loading .fr-btn-spinner { display: inline-block; }
.fr-btn.loading .fr-btn-label { opacity: 0.5; }
@keyframes frSpin { to { transform: rotate(360deg); } }

/* === CHECKBOX === */
.fr-check-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 14px;
}
.fr-check-box {
  width: 20px; height: 20px;
  border: 1.5px solid var(--fr-bronze);
  border-radius: 6px;
  background: var(--fr-white);
  flex-shrink: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--fr-transition);
  margin-top: 1px;
  position: relative;
}
.fr-check-box input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  margin: 0;
}
.fr-check-box.checked {
  background: var(--fr-bronze);
}
.fr-check-box svg { display: none; }
.fr-check-box.checked svg { display: block; }
.fr-check-label {
  font-size: 0.82rem;
  color: var(--fr-charcoal);
  line-height: 1.5;
}
.fr-check-label a { color: var(--fr-bronze); text-decoration: underline; }

/* === UPLOAD CIRCLES === */
.fr-upload-area {
  display: flex;
  gap: 20px;
  margin: 4px 0 16px;
  justify-content: center;
}
.fr-upload-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  flex: 1;
  max-width: 140px;
}
.fr-upload-circle {
  width: 96px; height: 96px;
  border-radius: 50%;
  border: 2px dashed var(--fr-gray-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: border-color var(--fr-transition), background var(--fr-transition);
  background: var(--fr-cream);
  position: relative;
  overflow: hidden;
}
.fr-upload-circle:hover {
  border-color: var(--fr-bronze);
  background: var(--fr-bronze-pale);
}
.fr-upload-circle.has-file {
  border-color: var(--fr-bronze);
  border-style: solid;
}
.fr-upload-circle img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;
  border-radius: 50%;
}
.fr-upload-circle.has-file img { display: block; }
.fr-upload-circle input { display: none; }
.fr-upload-label {
  font-size: 0.76rem;
  color: var(--fr-gray);
  text-align: center;
  line-height: 1.4;
}

/* === PROFILE PHOTO === */
.fr-profile-upload {
  width: 100px; height: 100px;
  border-radius: 50%;
  border: 2px dashed var(--fr-gray-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border-color var(--fr-transition), background var(--fr-transition);
  background: var(--fr-cream);
}
.fr-profile-upload:hover { border-color: var(--fr-bronze); }
.fr-profile-upload img {
  position: absolute;
  inset: 0; width: 100%; height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: none;
}
.fr-profile-upload.has-file img { display: block; }
.fr-profile-upload input { display: none; }
.fr-profile-center { text-align: center; margin-bottom: 20px; }
.fr-profile-center-label { font-size: 0.78rem; color: var(--fr-gray); margin-top: 4px; }

/* === DOCUMENT TYPE CARDS === */
.fr-doc-cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
}
.fr-doc-card {
  padding: 14px 18px;
  border: 1.5px solid var(--fr-gray-light);
  border-radius: 14px;
  cursor: pointer;
  transition: all var(--fr-transition);
  display: flex;
  align-items: center;
  gap: 14px;
}
.fr-doc-card:hover { border-color: var(--fr-bronze); background: var(--fr-bronze-pale); }
.fr-doc-card.selected { border-color: var(--fr-bronze); background: var(--fr-bronze-pale); }
.fr-doc-card-icon {
  width: 40px; height: 40px;
  background: var(--fr-white);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fr-bronze);
  flex-shrink: 0;
  box-shadow: 0 2px 8px var(--fr-shadow);
}
.fr-doc-card-info { flex: 1; }
.fr-doc-card-name { font-weight: 600; font-size: 0.9rem; }
.fr-doc-card-hint { font-size: 0.76rem; color: var(--fr-gray); }
.fr-doc-card-check {
  width: 22px; height: 22px;
  border: 1.5px solid var(--fr-gray-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all var(--fr-transition);
}
.fr-doc-card.selected .fr-doc-card-check {
  background: var(--fr-bronze);
  border-color: var(--fr-bronze);
}

/* === CPF BOX === */
.fr-cpf-display {
  text-align: center;
  padding: 14px 20px;
  background: var(--fr-bronze-pale);
  border: 1.5px dashed var(--fr-bronze);
  border-radius: 12px;
  font-family: 'Sora', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--fr-bronze-mid);
  margin: 16px 0;
  letter-spacing: 0.05em;
}

/* === CITY SEARCH (Step 5) === */
.fr-city-search-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 16px 20px;
  background: var(--fr-cream);
  border: 1.5px solid var(--fr-gray-light);
  border-radius: var(--fr-radius-pill);
  cursor: pointer;
  transition: all var(--fr-transition);
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  color: var(--fr-gray);
  text-align: left;
  position: relative;
  overflow: hidden;
}
.fr-city-search-btn.selected { color: var(--fr-charcoal); border-color: var(--fr-bronze); background: var(--fr-white); }
.fr-city-search-btn:hover { border-color: var(--fr-bronze); background: var(--fr-white); }
.fr-city-search-icon { color: var(--fr-bronze); flex-shrink: 0; width: 20px; height: 20px; }

/* City search overlay */
.fr-city-overlay {
  position: fixed;
  inset: 0;
  background: var(--fr-white);
  z-index: 50000;
  display: none;
  flex-direction: column;
  animation: frSlideUp 0.3s cubic-bezier(0.22,1,0.36,1);
}
.fr-city-overlay.show { display: flex; }
.fr-city-overlay-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--fr-gray-light);
  display: flex;
  align-items: center;
  gap: 14px;
  position: sticky;
  top: 0;
  background: var(--fr-white);
  z-index: 1;
}
.fr-city-back-btn {
  width: 36px; height: 36px;
  background: var(--fr-cream);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--fr-charcoal);
  transition: background var(--fr-transition);
}
.fr-city-back-btn:hover { background: var(--fr-gray-light); }
.fr-city-input-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--fr-cream);
  border: 1.5px solid var(--fr-gray-light);
  border-radius: var(--fr-radius-pill);
  padding: 10px 16px;
  transition: border-color var(--fr-transition);
}
.fr-city-input-wrap:focus-within { border-color: var(--fr-bronze); }
.fr-city-input-wrap svg { color: var(--fr-gray); flex-shrink: 0; }
.fr-city-text-input {
  flex: 1;
  border: none;
  background: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 0.938rem;
  color: var(--fr-charcoal);
  outline: none;
}
.fr-city-text-input::placeholder { color: var(--fr-gray); }
.fr-city-clear {
  background: var(--fr-gray-light);
  border: none;
  border-radius: 50%;
  width: 22px; height: 22px;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--fr-gray);
  font-size: 14px;
}
.fr-city-clear.show { display: flex; }
.fr-city-results {
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
}
.fr-city-section-title {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--fr-gray);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.fr-city-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
  cursor: pointer;
  border-bottom: 1px solid var(--fr-gray-light);
  transition: padding-left var(--fr-transition);
}
.fr-city-item:last-child { border-bottom: none; }
.fr-city-item:hover { padding-left: 4px; }
.fr-city-item-icon {
  width: 44px; height: 44px;
  background: var(--fr-cream);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--fr-bronze);
}
.fr-city-item-name { flex: 1; }
.fr-city-item-name strong { font-weight: 600; font-size: 0.925rem; }
.fr-city-item-state {
  font-size: 0.75rem;
  color: var(--fr-gray);
  font-family: 'Sora', sans-serif;
}
.fr-city-no-results {
  text-align: center;
  padding: 40px 20px;
  color: var(--fr-gray);
  font-size: 0.9rem;
}

/* === DATE PICKER (Step 5) === */
.fr-dates-display {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 14px;
}
.fr-date-box {
  padding: 13px 16px;
  border: 1.5px solid var(--fr-gray-light);
  border-radius: 14px;
  cursor: pointer;
  transition: all var(--fr-transition);
  background: var(--fr-cream);
}
.fr-date-box:hover { border-color: var(--fr-bronze); background: var(--fr-white); }
.fr-date-box.filled { border-color: var(--fr-bronze); background: var(--fr-white); }
.fr-date-box-label {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--fr-gray);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 3px;
}
.fr-date-box-value {
  font-family: 'Sora', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--fr-charcoal);
}
.fr-date-box-value.placeholder { color: var(--fr-gray); font-weight: 400; }

/* Calendar overlay */
.fr-cal-overlay {
  position: fixed;
  inset: 0;
  background: var(--fr-white);
  z-index: 50001;
  display: none;
  flex-direction: column;
  animation: frSlideUp 0.3s cubic-bezier(0.22,1,0.36,1);
}
.fr-cal-overlay.show { display: flex; }
.fr-cal-header {
  padding: 18px 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: var(--fr-white);
  z-index: 1;
  border-bottom: 1px solid var(--fr-gray-light);
  padding-bottom: 12px;
}
.fr-cal-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
}
.fr-cal-close {
  width: 36px; height: 36px;
  background: var(--fr-cream);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fr-charcoal);
  font-size: 18px;
  transition: background var(--fr-transition);
}
.fr-cal-close:hover { background: var(--fr-gray-light); }
.fr-cal-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px 16px 0;
}
.fr-cal-weekdays {
  display: grid;
  grid-template-columns: repeat(7,1fr);
  text-align: center;
  padding: 0 4px;
  position: sticky;
  top: 0;
  background: var(--fr-white);
  padding-bottom: 8px;
  margin-bottom: 4px;
}
.fr-cal-wd {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--fr-gray);
  padding: 6px 0;
}
.fr-cal-month-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 12px 4px 10px;
}
.fr-cal-grid {
  display: grid;
  grid-template-columns: repeat(7,1fr);
  gap: 2px;
  padding: 0 4px;
}
.fr-cal-day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  z-index: 1;
}
.fr-cal-day:hover:not(.disabled):not(.empty) {
  background: var(--fr-bronze-pale);
}
.fr-cal-day.disabled { color: var(--fr-gray-light); cursor: not-allowed; }
.fr-cal-day.empty { pointer-events: none; }
.fr-cal-day.check-in, .fr-cal-day.check-out {
  background: var(--fr-bronze) !important;
  color: var(--fr-white) !important;
  font-weight: 700;
  border-radius: 50%;
}
.fr-cal-day.in-range {
  background: var(--fr-bronze-pale);
  border-radius: 0;
  color: var(--fr-charcoal);
}
.fr-cal-day.check-in.in-range-start { border-radius: 50% 0 0 50%; }
.fr-cal-day.check-out.in-range-end { border-radius: 0 50% 50% 0; }
.fr-cal-footer {
  padding: 16px 20px 24px;
  border-top: 1px solid var(--fr-gray-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  bottom: 0;
  background: var(--fr-white);
  gap: 16px;
}
.fr-cal-clear {
  background: none;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--fr-charcoal);
  cursor: pointer;
  text-decoration: underline;
  flex-shrink: 0;
}
.fr-cal-save {
  flex: 1;
  max-width: 200px;
  padding: 13px 20px;
  background: var(--fr-bronze);
  border: none;
  border-radius: var(--fr-radius-pill);
  color: var(--fr-white);
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 0.925rem;
  cursor: pointer;
  transition: all var(--fr-transition);
}
.fr-cal-save:disabled { background: var(--fr-gray-light); color: var(--fr-gray); cursor: not-allowed; }
.fr-cal-save:not(:disabled):hover { background: var(--fr-bronze-mid); }

/* === HOTEL CARDS === */
.fr-hotel-section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  margin: 24px 0 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.fr-hotel-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 8px;
}
.fr-hotel-card {
  border: 1.5px solid var(--fr-gray-light);
  border-radius: 18px;
  overflow: hidden;
  transition: all var(--fr-transition);
  background: var(--fr-white);
  cursor: pointer;
  position: relative;
}
.fr-hotel-card:hover {
  border-color: var(--fr-bronze);
  box-shadow: 0 8px 32px rgba(172,134,92,0.18);
  transform: translateY(-2px);
}
.fr-hotel-card.selected {
  border-color: var(--fr-bronze);
  box-shadow: 0 4px 20px rgba(172,134,92,0.25);
}
.fr-hotel-img-wrap { position: relative; }
.fr-hotel-img {
  width: 100%;
  height: 190px;
  object-fit: cover;
  display: block;
}
.fr-hotel-selo {
  position: absolute;
  top: 12px; left: 12px;
  background: rgba(255,255,255,0.95);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--fr-bronze);
  backdrop-filter: blur(4px);
}
.fr-hotel-selected-badge {
  position: absolute;
  top: 12px; right: 12px;
  background: var(--fr-bronze);
  width: 30px; height: 30px;
  border-radius: 50%;
  display: none;
  align-items: center;
  justify-content: center;
  color: white;
}
.fr-hotel-card.selected .fr-hotel-selected-badge { display: flex; }
.fr-hotel-body { padding: 14px 16px 16px; }
.fr-hotel-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.975rem;
  margin-bottom: 5px;
}
.fr-hotel-desc {
  font-size: 0.8rem;
  color: var(--fr-gray);
  line-height: 1.55;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.fr-hotel-services {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}
.fr-hotel-service-chip {
  background: var(--fr-cream);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.72rem;
  color: var(--fr-charcoal);
  font-weight: 500;
}
.fr-hotel-select-btn {
  width: 100%;
  padding: 12px;
  border-radius: var(--fr-radius-pill);
  border: 1.5px solid var(--fr-bronze);
  background: transparent;
  color: var(--fr-bronze);
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all var(--fr-transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.fr-hotel-select-btn:hover { background: var(--fr-bronze); color: var(--fr-white); }
.fr-hotel-card.selected .fr-hotel-select-btn { background: var(--fr-bronze); color: var(--fr-white); }

/* Custom city */
.fr-custom-city-link {
  text-align: center;
  margin-top: 16px;
  font-size: 0.83rem;
  color: var(--fr-bronze);
  cursor: pointer;
  text-decoration: underline;
}

/* === CHECKOUT === */
.fr-incluso-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--fr-bronze-pale);
  color: var(--fr-bronze);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 18px;
  animation: frPulse 4.5s ease-in-out infinite;
}
@keyframes frPulse {
  0%,100% { box-shadow: 0 0 0 0 rgba(172,134,92,0.3); }
  50% { box-shadow: 0 0 0 6px rgba(172,134,92,0); }
}
.fr-checkout-hotel {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
  padding: 12px;
  background: var(--fr-cream);
  border-radius: 14px;
}
.fr-checkout-hotel-img {
  width: 64px; height: 64px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
}
.fr-checkout-hotel-info { flex: 1; }
.fr-checkout-hotel-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 2px;
}
.fr-checkout-hotel-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Sora', sans-serif;
  font-size: 0.78rem;
  color: var(--fr-gray);
}
.fr-checkout-resumo {
  border: 1px solid var(--fr-gray-light);
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 18px;
}
.fr-resumo-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 16px;
  border-bottom: 1px solid var(--fr-gray-light);
}
.fr-resumo-row:last-child { border-bottom: none; }
.fr-resumo-label { font-size: 0.8rem; color: var(--fr-gray); font-weight: 500; }
.fr-resumo-value { font-size: 0.88rem; font-weight: 600; color: var(--fr-charcoal); }
.fr-edit-link {
  font-size: 0.78rem;
  color: var(--fr-bronze);
  cursor: pointer;
  text-decoration: underline;
  background: none;
  border: none;
  font-family: 'Poppins', sans-serif;
  padding: 0;
}
.fr-section-title-upsell {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  margin: 20px 0 12px;
}
.fr-upsell-card {
  border: 1.5px solid var(--fr-gray-light);
  border-radius: 14px;
  padding: 14px 16px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all var(--fr-transition);
  display: flex;
  align-items: flex-start;
  gap: 12px;
  -webkit-tap-highlight-color: transparent;
}
.fr-upsell-card:hover { border-color: var(--fr-bronze); }
.fr-upsell-card.checked { border-color: var(--fr-bronze); background: var(--fr-bronze-pale); }
.fr-upsell-check {
  width: 22px; height: 22px;
  border: 1.5px solid var(--fr-gray-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
  transition: all var(--fr-transition);
}
.fr-upsell-card.checked .fr-upsell-check { background: var(--fr-bronze); border-color: var(--fr-bronze); }
.fr-upsell-body { flex: 1; }
.fr-upsell-name { font-weight: 600; font-size: 0.9rem; margin-bottom: 4px; }
.fr-upsell-perks {
  list-style: none;
  margin-bottom: 6px;
}
.fr-upsell-perks li {
  font-size: 0.78rem;
  color: var(--fr-gray);
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 1px 0;
}
.fr-upsell-desc { font-size: 0.8rem; color: var(--fr-gray); line-height: 1.45; }
.fr-payment-note {
  font-size: 0.77rem;
  color: var(--fr-gray);
  text-align: center;
  margin-top: 10px;
  line-height: 1.5;
}
.fr-disclaimer {
  font-size: 0.73rem;
  color: var(--fr-gray);
  text-align: center;
  margin-top: 14px;
  line-height: 1.55;
}
.fr-disclaimer a { color: var(--fr-bronze); text-decoration: underline; }

/* === DOCS RECEIVED SCREEN === */
.fr-received-icon {
  width: 72px; height: 72px;
  background: var(--fr-bronze-pale);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px auto 20px;
  color: var(--fr-bronze);
}
.fr-info-list {
  list-style: none;
  margin: 16px 0;
}
.fr-info-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--fr-gray-light);
  font-size: 0.875rem;
}
.fr-info-list li:last-child { border-bottom: none; }
.fr-info-list-icon {
  width: 32px; height: 32px;
  background: var(--fr-bronze-pale);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--fr-bronze);
}

/* === KYC OVERLAY (Frame Authentic) === */
.fr-kyc-overlay {
  position: fixed;
  inset: 0;
  background: rgba(22,22,22,0.85);
  backdrop-filter: blur(8px);
  z-index: 60000;
  display: none;
  align-items: center;
  justify-content: center;
  animation: frFadeIn 0.4s ease;
}
.fr-kyc-overlay.show { display: flex; }
.fr-kyc-box {
  width: 92%;
  max-width: 440px;
  max-height: 92vh;
  overflow-y: auto;
  background: var(--fr-white);
  border-radius: 24px;
  padding: 28px 24px 32px;
  text-align: center;
  position: relative;
  animation: frSlideUp 0.4s cubic-bezier(0.22,1,0.36,1);
}
.fr-kyc-logo {
  width: 120px;
  margin: 0 auto 20px;
  display: block;
}
.fr-kyc-camera-wrap {
  position: relative;
  width: 220px; height: 275px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto 20px;
  background: #000;
  border: 3px solid var(--fr-bronze);
}
.fr-kyc-video {
  width: 100%; height: 100%;
  object-fit: cover;
  transform: scaleX(-1);
  display: block;
}
.fr-kyc-face-guide {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fr-kyc-face-oval {
  width: 140px; height: 180px;
  border: 3px solid rgba(172,134,92,0.9);
  border-radius: 50%;
  position: relative;
}
@keyframes frOvalPulse {
  0%,100% { border-color: rgba(172,134,92,0.9); }
  50% { border-color: rgba(172,134,92,0.4); }
}
.fr-kyc-face-oval.scanning { animation: frOvalPulse 1.5s ease-in-out infinite; }
.fr-kyc-corner-tl, .fr-kyc-corner-tr, .fr-kyc-corner-bl, .fr-kyc-corner-br {
  position: absolute;
  width: 24px; height: 24px;
  border-color: var(--fr-bronze);
  border-style: solid;
}
.fr-kyc-corner-tl { top: 0; left: 0; border-width: 3px 0 0 3px; border-radius: 4px 0 0 0; }
.fr-kyc-corner-tr { top: 0; right: 0; border-width: 3px 3px 0 0; border-radius: 0 4px 0 0; }
.fr-kyc-corner-bl { bottom: 0; left: 0; border-width: 0 0 3px 3px; border-radius: 0 0 0 4px; }
.fr-kyc-corner-br { bottom: 0; right: 0; border-width: 0 3px 3px 0; border-radius: 0 0 4px 0; }
.fr-kyc-scan-line {
  position: absolute;
  left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--fr-bronze-light), transparent);
  animation: frScanLine 2s linear infinite;
  display: none;
}
@keyframes frScanLine {
  0% { top: 10%; opacity: 1; }
  100% { top: 90%; opacity: 0.3; }
}
.fr-kyc-scan-line.active { display: block; }
.fr-kyc-overlay-msg {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.75));
  padding: 20px 12px 12px;
  color: white;
  font-size: 0.82rem;
  font-weight: 500;
}
.fr-kyc-countdown-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.65);
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
}
.fr-kyc-countdown-overlay.show { display: flex; }
.fr-kyc-countdown-num {
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  color: white;
  text-shadow: 0 2px 20px rgba(172,134,92,0.5);
}
.fr-kyc-success-overlay {
  position: absolute;
  inset: 0;
  background: rgba(46,125,92,0.9);
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  color: white;
  gap: 8px;
}
.fr-kyc-success-overlay.show { display: flex; }
.fr-kyc-check-circle {
  width: 60px; height: 60px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fr-success);
  animation: frBounceIn 0.5s cubic-bezier(0.22,1,0.36,1);
}
@keyframes frBounceIn {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.fr-kyc-status-top {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--fr-charcoal);
  margin-top: 12px;
}
.fr-kyc-status-bottom {
  font-size: 0.8rem;
  color: var(--fr-gray);
  margin-bottom: 16px;
}
.fr-kyc-spinner {
  width: 32px; height: 32px;
  border: 3px solid var(--fr-gray-light);
  border-top-color: var(--fr-bronze);
  border-radius: 50%;
  animation: frSpin 0.8s linear infinite;
  margin: 0 auto;
  display: none;
}
.fr-kyc-spinner.show { display: block; }
.fr-kyc-intro-tips {
  list-style: none;
  text-align: left;
  margin: 16px 0;
  background: var(--fr-cream);
  border-radius: 14px;
  padding: 14px 16px;
}
.fr-kyc-intro-tips li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  font-size: 0.86rem;
  border-bottom: 1px solid var(--fr-gray-light);
}
.fr-kyc-intro-tips li:last-child { border-bottom: none; }
.fr-kyc-tip-icon {
  width: 32px; height: 32px;
  background: var(--fr-bronze-pale);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--fr-bronze);
}

/* === PREMIUM OVERLAY === */
.fr-premium-overlay {
  position: fixed;
  inset: 0;
  background: rgba(245,240,234,0.95);
  backdrop-filter: blur(6px);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 40000;
  animation: frFadeIn 0.3s ease;
}
.fr-premium-overlay.show { display: flex; }
.fr-premium-box {
  width: 88%;
  max-width: 360px;
  background: var(--fr-white);
  border-radius: 24px;
  padding: 32px 28px;
  text-align: center;
  box-shadow: 0 16px 60px rgba(44,44,44,0.15);
  animation: frSlideUp 0.4s cubic-bezier(0.22,1,0.36,1);
}
.fr-premium-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--fr-bronze-pale);
  color: var(--fr-bronze);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 14px;
  letter-spacing: 0.04em;
}
.fr-premium-logo { width: 80px; margin: 0 auto 16px; display: block; }

/* === TOASTS === */
.fr-toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(-60px);
  background: var(--fr-charcoal);
  color: var(--fr-white);
  padding: 12px 22px;
  border-radius: var(--fr-radius-pill);
  font-size: 0.85rem;
  font-weight: 500;
  z-index: 99999;
  transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.35s;
  white-space: nowrap;
  max-width: 90vw;
  text-align: center;
  pointer-events: none;
  opacity: 0;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}
.fr-toast.show {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}
.fr-toast.error { background: var(--fr-error); }
.fr-toast.success { background: var(--fr-success); }

/* === WARNING POPUP === */
.fr-warning-popup {
  position: fixed;
  inset: 0;
  background: rgba(22,22,22,0.5);
  backdrop-filter: blur(4px);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 55000;
}
.fr-warning-popup.show { display: flex; }
.fr-warning-box {
  width: 88%;
  max-width: 360px;
  background: var(--fr-white);
  border-radius: 20px;
  padding: 28px 24px;
  text-align: center;
  box-shadow: 0 16px 60px rgba(0,0,0,0.2);
  animation: frSlideUp 0.3s cubic-bezier(0.22,1,0.36,1);
}
.fr-warning-icon {
  width: 52px; height: 52px;
  background: rgba(192,57,43,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 14px;
  color: var(--fr-error);
}

/* === LOADING OVERLAY === */
.fr-loading-overlay {
  position: fixed;
  inset: 0;
  background: rgba(245,240,234,0.9);
  backdrop-filter: blur(8px);
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  z-index: 45000;
}
.fr-loading-overlay.show { display: flex; }
.fr-loading-spinner {
  width: 48px; height: 48px;
  border: 3px solid var(--fr-gray-light);
  border-top-color: var(--fr-bronze);
  border-radius: 50%;
  animation: frSpin 0.85s linear infinite;
}
.fr-loading-msg {
  font-size: 0.9rem;
  color: var(--fr-charcoal);
  font-weight: 500;
}

/* === BLOCKED SCREEN === */
.fr-blocked-screen {
  display: none;
  padding: 40px 28px;
  text-align: center;
}
.fr-blocked-screen.show { display: block; }
.fr-blocked-timer {
  font-family: 'Sora', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--fr-bronze);
  margin: 12px 0;
}

/* === PRIVACY === */
.fr-privacy {
  font-size: 0.75rem;
  color: var(--fr-gray);
  text-align: center;
  margin-top: 16px;
  line-height: 1.6;
}
.fr-privacy a { color: var(--fr-bronze); text-decoration: underline; }

/* === ORIENTATION ALERT === */
.fr-orientation-alert {
  position: fixed;
  inset: 0;
  background: var(--fr-white);
  z-index: 99998;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  padding: 40px;
}

/* === BOTTOM STEP HINT === */
.fr-step-hint {
  font-size: 0.75rem;
  color: var(--fr-gray);
  text-align: center;
  padding: 8px 0 0;
  font-style: italic;
}


/* === BOTTOM SHEET HOTEL/DATE CONFIRM (Step 5) === */
.fr-confirm-sheet {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  background: var(--fr-white);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 16px 20px 32px;
  box-shadow: 0 -4px 24px rgba(44,44,44,0.14);
  transform: translateY(100%);
  transition: transform 0.38s cubic-bezier(0.22,1,0.36,1);
  z-index: 30000;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fr-confirm-sheet.show { transform: translateY(0); }
.fr-confirm-sheet-handle {
  width: 36px; height: 4px;
  background: var(--fr-gray-light);
  border-radius: 2px;
  margin: 0 auto 8px;
}
.fr-confirm-sheet-hotel { font-size: 0.78rem; color: var(--fr-gray); font-family: "Sora", sans-serif; letter-spacing: 0.02em; }
.fr-confirm-sheet-main { font-family: "Montserrat", sans-serif; font-weight: 700; font-size: 0.95rem; color: var(--fr-black); margin-bottom: 2px; }
.fr-confirm-sheet-dates { font-size: 0.82rem; color: var(--fr-bronze); font-weight: 600; }
/* === PHOTO PREVIEW OVERLAY === */
.fr-photo-overlay { position: fixed; inset: 0; background: #000; z-index: 70000; display: none; flex-direction: column; }
.fr-photo-overlay.show { display: flex; }
.fr-photo-overlay-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; background: #000; flex-shrink: 0; }
.fr-photo-overlay-title { font-family: "Montserrat", sans-serif; font-weight: 700; font-size: 1rem; color: #fff; text-align: center; flex: 1; }
.fr-photo-close-btn { background: rgba(255,255,255,0.12); border: none; border-radius: 50%; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #fff; flex-shrink: 0; }
.fr-photo-tips-btn { background: none; border: none; color: #fff; font-family: "Poppins", sans-serif; font-size: 0.875rem; font-weight: 500; cursor: pointer; flex-shrink: 0; padding: 0; }
.fr-photo-stage { flex: 1; display: flex; align-items: center; justify-content: center; background: #000; position: relative; }
.fr-photo-circle-wrap { position: relative; width: 260px; height: 260px; display: flex; align-items: center; justify-content: center; }
.fr-photo-circle-img { width: 244px; height: 244px; border-radius: 50%; object-fit: cover; display: block; position: relative; z-index: 1; }
.fr-photo-circle-svg { position: absolute; inset: 0; width: 260px; height: 260px; }
.fr-photo-circle-track { fill: none; stroke: rgba(255,255,255,0.12); stroke-width: 3; }
.fr-photo-circle-progress { fill: none; stroke: url(#frCircleGrad); stroke-width: 3; stroke-linecap: round; stroke-dasharray: 785; stroke-dashoffset: 785; transform: rotate(-90deg); transform-origin: 50% 50%; transition: stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1); }
.fr-photo-circle-progress.animating { stroke-dashoffset: 0; }
.fr-photo-bottom-sheet { background: rgba(30,28,25,0.97); border-top-left-radius: 20px; border-top-right-radius: 20px; padding: 20px 20px 28px; flex-shrink: 0; }
.fr-photo-verify-title { font-family: "Montserrat", sans-serif; font-weight: 700; font-size: 1rem; color: #fff; margin-bottom: 6px; }
.fr-photo-verify-desc { font-size: 0.82rem; color: rgba(255,255,255,0.65); line-height: 1.55; margin-bottom: 14px; }
.fr-photo-new-link { font-size: 0.82rem; color: rgba(255,255,255,0.8); text-decoration: underline; cursor: pointer; background: none; border: none; font-family: "Poppins", sans-serif; padding: 0; margin-bottom: 16px; display: inline-block; }
.fr-photo-action-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.fr-photo-editar-btn { background: none; border: none; color: rgba(255,255,255,0.8); font-family: "Poppins", sans-serif; font-size: 0.9rem; font-weight: 500; cursor: pointer; padding: 0; }
.fr-photo-usar-btn { flex: 1; max-width: 200px; padding: 14px 20px; background: var(--fr-bronze); border: none; border-radius: var(--fr-radius-pill); color: #fff; font-family: "Poppins", sans-serif; font-weight: 600; font-size: 0.95rem; cursor: pointer; transition: all 0.3s; display: flex; align-items: center; justify-content: center; gap: 6px; position: relative; overflow: hidden; }
.fr-photo-usar-btn:hover { background: var(--fr-bronze-mid); }
.fr-photo-usar-btn.loading { pointer-events: none; }
.fr-dots-loader { display: none; align-items: center; gap: 4px; }
.fr-photo-usar-btn.loading .fr-dots-loader { display: flex; }
.fr-photo-usar-btn.loading .fr-usar-label { display: none; }
.fr-dots-loader span { width: 6px; height: 6px; background: #fff; border-radius: 50%; animation: frDotPulse 1.2s ease-in-out infinite; }
.fr-dots-loader span:nth-child(2) { animation-delay: 0.2s; }
.fr-dots-loader span:nth-child(3) { animation-delay: 0.4s; }
@keyframes frDotPulse { 0%,80%,100% { transform: scale(0.7); opacity: 0.5; } 40% { transform: scale(1); opacity: 1; } }
.fr-photo-tips-sheet { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(28,26,23,0.98); border-top-left-radius: 20px; border-top-right-radius: 20px; padding: 20px 20px 36px; transform: translateY(100%); transition: transform 0.35s cubic-bezier(0.22,1,0.36,1); z-index: 2; }
.fr-photo-tips-sheet.show { transform: translateY(0); }
.fr-photo-tips-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.fr-photo-tips-title { font-family: "Montserrat", sans-serif; font-weight: 700; font-size: 1rem; color: #fff; }
.fr-photo-tips-close { background: rgba(255,255,255,0.12); border: none; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #fff; font-size: 16px; }
.fr-photo-tips-desc { font-size: 0.82rem; color: rgba(255,255,255,0.65); line-height: 1.55; margin-bottom: 14px; }
.fr-photo-tips-list { list-style: disc; padding-left: 18px; color: rgba(255,255,255,0.85); }
.fr-photo-tips-list li { font-size: 0.85rem; line-height: 1.6; margin-bottom: 8px; }
/* === KYC SUCCESS SCREEN === */
.fr-kyc-success-screen { display: none; flex-direction: column; align-items: center; text-align: center; padding: 48px 28px 40px; gap: 0; }
.fr-kyc-success-screen.show { display: flex; }
.fr-kyc-success-anim { width: 80px; height: 80px; background: linear-gradient(135deg, var(--fr-bronze-pale), #fff); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 4px 24px rgba(172,134,92,0.25); animation: frBounceIn 0.6s cubic-bezier(0.22,1,0.36,1); color: var(--fr-bronze); }
.fr-kyc-hotel-tag { display: inline-flex; align-items: center; gap: 6px; background: var(--fr-bronze-pale); color: var(--fr-bronze); padding: 6px 14px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; margin: 14px 0; }
.fr-kyc-email-note { font-size: 0.82rem; color: var(--fr-gray); line-height: 1.65; margin-bottom: 28px; padding: 14px 16px; background: var(--fr-cream); border-radius: 14px; text-align: left; }
.fr-kyc-email-note strong { color: var(--fr-charcoal); }
/* === CONTINUAR DE ONDE PAROU === */
.fr-resume-overlay { position: fixed; inset: 0; background: rgba(22,22,22,0.55); backdrop-filter: blur(6px); z-index: 80000; display: none; align-items: flex-end; justify-content: center; }
.fr-resume-overlay.show { display: flex; }
.fr-resume-sheet { width: 100%; max-width: 520px; background: var(--fr-white); border-top-left-radius: 24px; border-top-right-radius: 24px; padding: 24px 24px 40px; animation: frSlideUp 0.4s cubic-bezier(0.22,1,0.36,1); }
.fr-resume-handle { width: 36px; height: 4px; background: var(--fr-gray-light); border-radius: 2px; margin: 0 auto 20px; }
.fr-resume-icon { width: 52px; height: 52px; background: var(--fr-bronze-pale); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--fr-bronze); margin-bottom: 14px; }
/* === SUPPORT BUTTON === */
.fr-support-btn { position: fixed; bottom: 24px; right: 16px; background: var(--fr-white); border: 1.5px solid var(--fr-gray-light); border-radius: var(--fr-radius-pill); padding: 9px 14px; display: flex; align-items: center; gap: 6px; font-family: "Poppins", sans-serif; font-size: 0.76rem; font-weight: 600; color: var(--fr-charcoal); cursor: pointer; box-shadow: 0 2px 12px rgba(44,44,44,0.12); z-index: 20000; transition: all var(--fr-transition); text-decoration: none; }
.fr-support-btn:hover { border-color: var(--fr-bronze); color: var(--fr-bronze); }
.fr-support-btn svg { color: var(--fr-bronze); }

/* === HELP CENTER === */
.fr-help-overlay { position: fixed; inset: 0; background: rgba(22,22,22,0.55); backdrop-filter: blur(5px); z-index: 90000; display: none; align-items: flex-end; justify-content: center; }
.fr-help-overlay.show { display: flex; }
.fr-help-sheet { width: 100%; max-width: 540px; background: var(--fr-white); border-top-left-radius: 28px; border-top-right-radius: 28px; max-height: 90vh; display: flex; flex-direction: column; transform: translateY(100%); transition: transform 0.42s cubic-bezier(0.22,1,0.36,1); }
.fr-help-overlay.show .fr-help-sheet { transform: translateY(0); }
.fr-help-handle { width: 36px; height: 4px; background: var(--fr-gray-light); border-radius: 2px; margin: 14px auto 0; flex-shrink: 0; }
.fr-help-header { display: flex; align-items: center; justify-content: space-between; padding: 18px 24px 14px; flex-shrink: 0; border-bottom: 1px solid var(--fr-gray-light); }
.fr-help-title { font-family: 'Montserrat', sans-serif; font-size: 1.3rem; font-weight: 700; color: var(--fr-black); line-height: 1.2; }
.fr-help-title-accent { color: var(--fr-bronze); }
.fr-help-close-btn { width: 34px; height: 34px; background: var(--fr-cream); border: none; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--fr-charcoal); flex-shrink: 0; transition: background var(--fr-transition); }
.fr-help-close-btn:hover { background: var(--fr-gray-light); }
.fr-help-body { flex: 1; overflow-y: auto; padding: 20px 24px 32px; }
.fr-help-faq-label { font-size: 0.72rem; font-weight: 700; color: var(--fr-gray); letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 14px; }
.fr-help-faq-list { display: flex; flex-direction: column; gap: 0; margin-bottom: 28px; }
.fr-help-faq-item { border-bottom: 1px solid var(--fr-gray-light); cursor: pointer; }
.fr-help-faq-item:first-child { border-top: 1px solid var(--fr-gray-light); }
.fr-help-faq-q { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 15px 0; font-size: 0.9rem; font-weight: 600; color: var(--fr-charcoal); }
.fr-faq-arrow { flex-shrink: 0; color: var(--fr-bronze); transition: transform 0.28s ease; }
.fr-help-faq-item.open .fr-faq-arrow { transform: rotate(180deg); }
.fr-help-faq-a { font-size: 0.84rem; color: var(--fr-gray); line-height: 1.65; max-height: 0; overflow: hidden; transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1), padding 0.28s ease; padding: 0; }
.fr-help-faq-item.open .fr-help-faq-a { max-height: 300px; padding-bottom: 16px; }
.fr-help-back-btn { display: block; margin-top: 14px; padding: 10px 18px; background: var(--fr-bronze-pale); color: var(--fr-bronze); border: none; border-radius: var(--fr-radius-pill); font-family: 'Poppins', sans-serif; font-size: 0.82rem; font-weight: 600; cursor: pointer; transition: all var(--fr-transition); }
.fr-help-back-btn:hover { background: var(--fr-bronze); color: var(--fr-white); }
.fr-help-contact-section { text-align: center; padding-top: 8px; }
.fr-help-contact-title { font-size: 0.875rem; color: var(--fr-gray); margin-bottom: 12px; }
.fr-help-contact-btn { padding: 13px 32px; background: var(--fr-charcoal); color: var(--fr-white); border: none; border-radius: var(--fr-radius-pill); font-family: 'Poppins', sans-serif; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: all var(--fr-transition); }
.fr-help-contact-btn:hover { background: var(--fr-black); }

/* === CONTACT MINI SHEET === */
.fr-contact-overlay { position: fixed; inset: 0; background: rgba(22,22,22,0.35); backdrop-filter: blur(3px); z-index: 91000; display: none; align-items: flex-end; justify-content: center; }
.fr-contact-overlay.show { display: flex; }
.fr-contact-sheet { width: 100%; max-width: 540px; background: var(--fr-white); border-top-left-radius: 24px; border-top-right-radius: 24px; padding: 0 0 40px; transform: translateY(100%); transition: transform 0.38s cubic-bezier(0.22,1,0.36,1); }
.fr-contact-overlay.show .fr-contact-sheet { transform: translateY(0); }
.fr-contact-title { font-family: 'Montserrat', sans-serif; font-size: 1.05rem; font-weight: 700; color: var(--fr-black); padding: 18px 24px 16px; border-bottom: 1px solid var(--fr-gray-light); }
.fr-contact-options { display: flex; flex-direction: column; padding: 8px 0; }
.fr-contact-option { display: flex; align-items: center; gap: 14px; padding: 16px 24px; text-decoration: none; color: var(--fr-charcoal); transition: background var(--fr-transition); cursor: pointer; }
.fr-contact-option:hover { background: var(--fr-cream); }
.fr-contact-option-recommended { background: var(--fr-bronze-pale); position: relative; }
.fr-contact-option-recommended:hover { background: #f0dfc7; }
.fr-contact-icon { width: 48px; height: 48px; background: var(--fr-cream); border-radius: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--fr-bronze); }
.fr-contact-option-recommended .fr-contact-icon { background: rgba(172,134,92,0.15); }
.fr-contact-info { flex: 1; }
.fr-contact-name { font-size: 0.9rem; font-weight: 600; color: var(--fr-charcoal); display: flex; align-items: center; gap: 8px; }
.fr-contact-desc { font-size: 0.78rem; color: var(--fr-gray); margin-top: 2px; }
.fr-recommended-badge { font-size: 0.68rem; font-weight: 700; background: var(--fr-bronze); color: var(--fr-white); padding: 2px 8px; border-radius: 20px; letter-spacing: 0.02em; }
/* === PREMIUM DARK REDESIGN OVERRIDE === */
#frPremiumOverlay { background: radial-gradient(ellipse at 30% 20%, rgba(172,134,92,0.18) 0%, rgba(22,22,22,0.97) 60%); backdrop-filter: blur(12px); }
.fr-premium-box { background: linear-gradient(160deg, #2a2318 0%, #1a1510 100%); border: 1px solid rgba(172,134,92,0.25); box-shadow: 0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(172,134,92,0.12); position: relative; overflow: hidden; }
.fr-premium-box::before { content: ""; position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(172,134,92,0.12) 0%, transparent 70%); pointer-events: none; }
.fr-premium-badge { background: rgba(172,134,92,0.15); border: 1px solid rgba(172,134,92,0.3); color: var(--fr-bronze-light); }
.fr-premium-box .fr-h2 { color: #fff !important; }
.fr-premium-box p { color: rgba(255,255,255,0.55) !important; }
.fr-premium-box .fr-btn-primary { background: linear-gradient(110deg, var(--fr-bronze) 0%, var(--fr-bronze-light) 100%); }
.fr-premium-box .fr-btn-text { color: rgba(255,255,255,0.4); }
.fr-premium-logo { filter: brightness(1.2); }
/* === CITY CUSTOM OPTION IN OVERLAY === */
.fr-city-custom-option { margin: 16px 0; padding: 14px 16px; border: 1.5px dashed var(--fr-gray-light); border-radius: 14px; cursor: pointer; display: flex; align-items: center; gap: 12px; transition: all var(--fr-transition); }
.fr-city-custom-option:hover { border-color: var(--fr-bronze); background: var(--fr-bronze-pale); }
.fr-city-custom-option-icon { width: 44px; height: 44px; background: var(--fr-cream); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: var(--fr-bronze); flex-shrink: 0; }
.fr-city-custom-option-title { font-weight: 600; font-size: 0.9rem; }
.fr-city-custom-option-sub { font-size: 0.76rem; color: var(--fr-gray); }
/* === CITY TUTORIAL CARD (Step 5) === */
.fr-city-tutorial { margin-top: 16px; margin-bottom: 0; }
.fr-city-tutorial img { width: 100%; border-radius: 14px; display: block; margin-bottom: 12px; object-fit: cover; max-height: 200px; }
.fr-city-tutorial-title { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 0.975rem; margin-bottom: 5px; color: var(--fr-black); }
.fr-city-tutorial-sub { font-size: 0.8rem; color: var(--fr-gray); line-height: 1.55; }
/* === TOQUE PESSOAL (Message Step) === */
.fr-msg-textarea { width: 100%; padding: 14px 16px; border: 1.5px solid var(--fr-gray-light); border-radius: 14px; font-family: 'Poppins', sans-serif; font-size: 0.938rem; color: var(--fr-charcoal); outline: none; resize: none; min-height: 110px; transition: border-color var(--fr-transition), box-shadow var(--fr-transition); line-height: 1.6; background: var(--fr-white); }
.fr-msg-textarea:focus { border-color: var(--fr-bronze); box-shadow: 0 0 0 3px rgba(172,134,92,0.15); }
.fr-msg-textarea::placeholder { color: var(--fr-gray); }
.fr-msg-counter { text-align: right; font-size: 0.76rem; color: var(--fr-gray); margin-top: 5px; transition: color 0.2s; }
.fr-msg-counter.warn { color: var(--fr-error); }
.fr-msg-prefs-title { font-size: 0.85rem; font-weight: 600; color: var(--fr-charcoal); margin: 20px 0 10px; }
.fr-msg-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.fr-msg-chip { padding: 8px 16px; border-radius: 20px; border: 1.5px solid var(--fr-gray-light); background: var(--fr-white); font-family: 'Poppins', sans-serif; font-size: 0.8rem; font-weight: 500; color: var(--fr-charcoal); cursor: pointer; transition: all var(--fr-transition); -webkit-tap-highlight-color: transparent; }
.fr-msg-chip:hover { border-color: var(--fr-bronze); }
.fr-msg-chip.selected { border-color: var(--fr-bronze); background: var(--fr-bronze-pale); color: var(--fr-bronze); font-weight: 600; }
.fr-msg-skip-link { display: block; text-align: center; margin-top: 14px; font-size: 0.85rem; color: var(--fr-gray); cursor: pointer; background: none; border: none; font-family: 'Poppins', sans-serif; text-decoration: underline; width: 100%; padding: 4px 0; }
/* === NO HOTEL CHECKOUT CARD === */
.fr-checkout-no-hotel { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; padding: 12px; background: var(--fr-cream); border-radius: 14px; border: 1.5px dashed var(--fr-gray-light); }
.fr-checkout-no-hotel-icon { width: 64px; height: 64px; border-radius: 10px; background: var(--fr-bronze-pale); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--fr-bronze); }
.fr-checkout-no-hotel-icon svg { width: 32px; height: 32px; }
.fr-checkout-no-hotel-name { font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 0.9rem; margin-bottom: 3px; color: var(--fr-charcoal); }
.fr-checkout-no-hotel-sub { font-size: 0.78rem; color: var(--fr-gray); line-height: 1.45; }
/* === CONFIRM SHEET PLACEHOLDER === */
.fr-confirm-sheet-main.placeholder { color: var(--fr-gray); font-weight: 500; font-size: 0.875rem; }
/* === AGE NOTE === */
.fr-age-note { display: flex; align-items: center; gap: 6px; font-size: 0.76rem; color: var(--fr-gray); margin-top: 6px; line-height: 1.4; }
.fr-age-note svg { flex-shrink: 0; color: var(--fr-bronze); }

/* === FIELD TOOLTIP === */
.fr-field-tooltip {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transform: translateY(-4px);
  transition: max-height 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.28s ease, transform 0.28s ease;
  font-size: 0.77rem;
  color: var(--fr-gray);
  background: var(--fr-cream);
  border-left: 2.5px solid var(--fr-bronze);
  border-radius: 0 8px 8px 0;
  padding: 0 10px;
  margin-top: 6px;
  line-height: 1.5;
}
.fr-field-tooltip.show {
  max-height: 60px;
  opacity: 1;
  transform: translateY(0);
  padding: 7px 10px;
}

/* === AUTOCOMPLETE DROPDOWN (step 1 city) === */
.fr-autocomplete {
  position: absolute;
  top: 100%;
  left: 0; right: 0;
  background: var(--fr-white);
  border: 1.5px solid var(--fr-bronze);
  border-top: none;
  border-radius: 0 0 16px 16px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;
  box-shadow: 0 8px 24px var(--fr-shadow);
  display: none;
}
.fr-autocomplete.show { display: block; }
.fr-autocomplete-item {
  padding: 11px 16px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background var(--fr-transition);
  border-bottom: 1px solid var(--fr-gray-light);
  display: flex;
  align-items: center;
  gap: 10px;
}
.fr-autocomplete-item:last-child { border-bottom: none; }
.fr-autocomplete-item:hover { background: var(--fr-bronze-pale); }
.fr-autocomplete-item strong { color: var(--fr-bronze); }

/* Orientation */
@media(orientation:landscape) and (max-height:500px) {
  .fr-orientation-alert { display: flex !important; }
}
/* === SUBLEVEL PREFS === */
.fr-sublevel {
  animation: frFadeIn 0.28s ease both;
}
.fr-sublevel-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--fr-bronze);
  cursor: pointer;
  margin-bottom: 14px;
  background: none;
  border: none;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  text-decoration: underline;
}
.fr-sublevel-back:hover { color: var(--fr-bronze-mid); }
.fr-sparkle-icon { display: inline-flex; vertical-align: middle; margin-left: 6px; }
`;
document.head.appendChild(frStyle);

// ===== CONSTANTS =====
const FR_PROHIBITED = ['cu','pau','ppk','papai','daddy','penis','putão','putinha','bctinha','fake','bosta','peitudo','goza','chupa','puta','kids','kid','baby','bebe','cp','porno','estupro','estuprador','buceta','caralho','foder','fode','transar','sexo','bucetinha','roubar','exterminar','cuzinho','chupetinha','viado','baitola','prostituta','do job','pedofilo','bct','nuds','leitada','fetiche','penis','vagina','pepeka','piroca','gozada','pedofilia','violencia','ameaca','drogas','ilegal','merda','porra','otario','idiota','imbecil','retardado','maldito','safado','vadia','piranha','bandido','vagabundo','pênis','safadao','assassino','matar','cocaina','crack','maconha','heroin','lsd','ecstasy','meth','skank','baseado','cheirinho','loló','keta','ketamina','nudes','xvideos','pornhub','xnxx','putaria','safadeza','nóia','noiado','cheiro','pedra','traficante','job','trafico','sequestro','latrocinio','homicidio','suicidio','autolesao','cortar','matar-se','se matar','krl','kct','caralho','pqp','kkk','vadia'];
const FR_CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

// Validates Brazilian CPF including check-digit algorithm
function frValidateCPF(cpf) {
  const raw = cpf.replace(/\D/g,'');
  if(raw.length !== 11) return false;
  // Reject all-same digits (00000000000, 11111111111, etc.)
  if(/^(\d)\1{10}$/.test(raw)) return false;
  // First check digit
  let sum = 0;
  for(let i = 0; i < 9; i++) sum += parseInt(raw[i]) * (10 - i);
  let r = (sum * 10) % 11;
  if(r === 10 || r === 11) r = 0;
  if(r !== parseInt(raw[9])) return false;
  // Second check digit
  sum = 0;
  for(let i = 0; i < 10; i++) sum += parseInt(raw[i]) * (11 - i);
  r = (sum * 10) % 11;
  if(r === 10 || r === 11) r = 0;
  if(r !== parseInt(raw[10])) return false;
  return true;
}

const FR_CITIES_BR = [
  {n:'São Paulo',s:'SP'},{n:'Rio de Janeiro',s:'RJ'},{n:'Brasília',s:'DF'},{n:'Salvador',s:'BA'},
  {n:'Fortaleza',s:'CE'},{n:'Belo Horizonte',s:'MG'},{n:'Manaus',s:'AM'},{n:'Curitiba',s:'PR'},
  {n:'Recife',s:'PE'},{n:'Porto Alegre',s:'RS'},{n:'Belém',s:'PA'},{n:'Goiânia',s:'GO'},
  {n:'Guarulhos',s:'SP'},{n:'Campinas',s:'SP'},{n:'São Luís',s:'MA'},{n:'São Gonçalo',s:'RJ'},
  {n:'Maceió',s:'AL'},{n:'Duque de Caxias',s:'RJ'},{n:'Natal',s:'RN'},{n:'Teresina',s:'PI'},
  {n:'Campo Grande',s:'MS'},{n:'Nova Iguaçu',s:'RJ'},{n:'São Bernardo do Campo',s:'SP'},
  {n:'João Pessoa',s:'PB'},{n:'Santo André',s:'SP'},{n:'Osasco',s:'SP'},{n:'Jaboatão dos Guararapes',s:'PE'},
  {n:'São José dos Campos',s:'SP'},{n:'Ribeirão Preto',s:'SP'},{n:'Uberlândia',s:'MG'},
  {n:'Contagem',s:'MG'},{n:'Sorocaba',s:'SP'},{n:'Aracaju',s:'SE'},{n:'Feira de Santana',s:'BA'},
  {n:'Cuiabá',s:'MT'},{n:'Joinville',s:'SC'},{n:'Aparecida de Goiânia',s:'GO'},{n:'Florianópolis',s:'SC'},
  {n:'Porto Velho',s:'RO'},{n:'Mogi das Cruzes',s:'SP'},{n:'São Vicente',s:'SP'},{n:'Juiz de Fora',s:'MG'},
  {n:'Niterói',s:'RJ'},{n:'Belford Roxo',s:'RJ'},{n:'Caxias do Sul',s:'RS'},{n:'Macapá',s:'AP'},
  {n:'Boa Vista',s:'RR'},{n:'Palmas',s:'TO'},{n:'Rio Branco',s:'AC'},{n:'Vitória',s:'ES'},
  {n:'Serra',s:'ES'},{n:'Vila Velha',s:'ES'},{n:'Santos',s:'SP'},{n:'Mauá',s:'SP'},
  {n:'Carapicuíba',s:'SP'},{n:'Diadema',s:'SP'},{n:'Betim',s:'MG'},{n:'Jundiaí',s:'SP'},
  {n:'Piracicaba',s:'SP'},{n:'Bauru',s:'SP'},{n:'Franca',s:'SP'},{n:'Pelotas',s:'RS'},
  {n:'Canoas',s:'RS'},{n:'São José do Rio Preto',s:'SP'},{n:'Montes Claros',s:'MG'},
  {n:'Londrina',s:'PR'},{n:'Maringá',s:'PR'},{n:'Ponta Grossa',s:'PR'},{n:'Cascavel',s:'PR'},
  {n:'Foz do Iguaçu',s:'PR'},{n:'São Carlos',s:'SP'},{n:'Araraquara',s:'SP'},{n:'Limeira',s:'SP'},
  {n:'Marília',s:'SP'},{n:'Presidente Prudente',s:'SP'},{n:'Taubaté',s:'SP'},{n:'Itaquaquecetuba',s:'SP'},
  {n:'Cotia',s:'SP'},{n:'Suzano',s:'SP'},{n:'Taboão da Serra',s:'SP'},{n:'Guarujá',s:'SP'},
  {n:'Praia Grande',s:'SP'},{n:'Barueri',s:'SP'},{n:'Indaiatuba',s:'SP'},{n:'Itu',s:'SP'},
  {n:'Americana',s:'SP'},{n:'Santa Bárbara d\'Oeste',s:'SP'},{n:'Hortolândia',s:'SP'},
  {n:'Cajamar',s:'SP'},{n:'Francisco Morato',s:'SP'},{n:'Itapecerica da Serra',s:'SP'},
  {n:'Jacareí',s:'SP'},{n:'Pindamonhangaba',s:'SP'},{n:'Volta Redonda',s:'RJ'},{n:'Petrópolis',s:'RJ'},
  {n:'Angra dos Reis',s:'RJ'},{n:'Magé',s:'RJ'},{n:'Itaboraí',s:'RJ'},{n:'Maricá',s:'RJ'},
  {n:'Teresópolis',s:'RJ'},{n:'Nova Friburgo',s:'RJ'},{n:'Cachoeiro de Itapemirim',s:'ES'},
  {n:'Linhares',s:'ES'},{n:'Colatina',s:'ES'},{n:'Vitória da Conquista',s:'BA'},
  {n:'Camaçari',s:'BA'},{n:'Ilhéus',s:'BA'},{n:'Lauro de Freitas',s:'BA'},{n:'Itabuna',s:'BA'},
  {n:'Divinópolis',s:'MG'},{n:'Uberaba',s:'MG'},{n:'Ipatinga',s:'MG'},{n:'Sete Lagoas',s:'MG'},
  {n:'Governador Valadares',s:'MG'},{n:'Poços de Caldas',s:'MG'},{n:'Patos de Minas',s:'MG'},
  {n:'Blumenau',s:'SC'},{n:'Criciúma',s:'SC'},{n:'Chapecó',s:'SC'},{n:'Itajaí',s:'SC'},
  {n:'São José',s:'SC'},{n:'Lages',s:'SC'},{n:'Novo Hamburgo',s:'RS'},{n:'Santa Maria',s:'RS'},
  {n:'Pelotas',s:'RS'},{n:'Gravataí',s:'RS'},{n:'Viamão',s:'RS'},{n:'Alvorada',s:'RS'},
  {n:'Aparecida de Goiânia',s:'GO'},{n:'Anápolis',s:'GO'},{n:'Rio Verde',s:'GO'},
  {n:'Dourados',s:'MS'},{n:'Rondonópolis',s:'MT'},{n:'Várzea Grande',s:'MT'},
  {n:'Santarém',s:'PA'},{n:'Ananindeua',s:'PA'},{n:'Marabá',s:'PA'},{n:'Imperatriz',s:'MA'},
  {n:'Caucaia',s:'CE'},{n:'Maracanaú',s:'CE'},{n:'Juazeiro do Norte',s:'CE'},{n:'Sobral',s:'CE'},
  {n:'Caruaru',s:'PE'},{n:'Petrolina',s:'PE'},{n:'Olinda',s:'PE'},{n:'Campina Grande',s:'PB'},
  {n:'Mossoró',s:'RN'},{n:'Parnamirim',s:'RN'},{n:'Petrolina',s:'PE'},{n:'Juazeiro',s:'BA'},
  {n:'Parauapebas',s:'PA'},{n:'Carajás',s:'PA'},{n:'Porto Seguro',s:'BA'},{n:'Barreiras',s:'BA'},
];

const FR_HOTELS = {
  'São Paulo, SP': [
    {name:'Rosewood São Paulo',desc:'Eleito o melhor hotel da América do Sul. Localizado na histórica Cidade Matarazzo em Bela Vista, oasis urbano com Torre Mata Atlântica projetada por Jean Nouvel, piscina infinita no rooftop e seis opções gastronômicas premiadas.',profileImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/1b/47/10/premier-two-queens.jpg',largeImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/1b/46/fd/matarazzo-suite-room.jpg',selo:'Parceiro oficial da Frame',services:['SPA','Concierge','Bar / Lounge','Academia','Piscina Infinita']},
    {name:'Hotel Fasano São Paulo',desc:'Projeto assinado por Isay Weinfeld e Márcio Kogan, com restaurante renomado, hospitalidade familiar e serviço de alto padrão, símbolo de elegância e tradição na capital paulista.',profileImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/71/6a/bd/hotel-fasano-sao-paulo.jpg',largeImg:'https://www.fasano.com.br/wp-content/uploads/2023/06/4.Suite-Deluxe.jpg',selo:'Parceiro oficial da Frame',services:['Frigobar','Traslado','Academia','Piscina','Restaurante Gero']},
    {name:'Emiliano São Paulo',desc:'Localizado no coração dos Jardins (Rua Oscar Freire), o Emiliano oferece acomodações amplas com serviço discreto, spa e gastronomia sofisticada em ambiente intimista.',profileImg:'https://ak-d.tripcdn.com/images/220p0z000000mp0s969E3_W_1280_853_R5.webp',largeImg:'https://ak-d.tripcdn.com/images/0220e12000l10zyo585F8_W_1280_853_R5.webp',selo:'Parceiro oficial da Frame',services:['Wi-Fi','Serviço de Quarto','Café da Manhã','Hidromassagem','Frigobar']},
    {name:'Hotel Unique',desc:'Marcos arquitetônicos assinados por Ruy Ohtake; conhecido pelo design singular em forma de navio, restaurante-rooftop com vista privilegiada e experiência voltada à gastronomia e eventos.',profileImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/dd/ba/f7/presidencial-oasis-suite.jpg',largeImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/16/be/96/oasis-suite.jpg',selo:'Parceiro oficial da Frame',services:['TV a Cabo','Estacionamento','Academia','Piscina','Rooftop']}
  ],
  'Rio de Janeiro, RJ': [
    {name:'Copacabana Palace',desc:'Hotel cinco estrelas tradicional em Copacabana, reconhecido mundialmente pelo serviço de excelência e vista deslumbrante para o mar. Um ícone da hospitalidade brasileira.',profileImg:'https://img.belmond.com/photos/cop/cop-ext05.jpg',largeImg:'https://img.belmond.com/photos/cop/cop-acc-suite-penthouse-ocean-view06.jpg',selo:'Parceiro oficial da Frame',services:['Wi-Fi','Manobrista','Café da Manhã','Isolamento Acústico','Piscina']},
    {name:'Hotel Fasano Rio de Janeiro',desc:'Localizado em Ipanema, combina design contemporâneo, gastronomia de alto nível e vista privilegiada para o mar, com o DNA de hospitalidade da família Fasano.',profileImg:'https://fasano.com.br/wp-content/uploads/2023/10/Piscina_Fasano-Rio_danielpinheiro%C2%A9-3.jpg',largeImg:'https://fasano.com.br/wp-content/uploads/2023/10/Quarto-DLX_HFRJ_credBruno-Fioravanti-2.jpg',selo:'Parceiro oficial da Frame',services:['Sacada','Café da Manhã','Academia','Piscina','Bar']},
    {name:'Emiliano Rio',desc:'Hotel boutique à beira-mar, com ambiente intimista, serviço personalizado e localização privilegiada em Ipanema, oferecendo o melhor que o Rio tem a oferecer.',profileImg:'https://emiliano.com.br/wp-content/uploads/2016/10/emiliano.com.br-004-fernandoguerra-1.jpg',largeImg:'https://emiliano.com.br/wp-content/uploads/2016/10/emiliano.com.br-oceanjuniorsuite-rio-scaled.jpeg',selo:'Parceiro oficial da Frame',services:['Camas King','Isolamento Acústico','Bar / Lounge','Academia','Piscina']}
  ],
  'Porto Alegre, RS': [
    {name:'Hilton Porto Alegre',desc:'Hotel internacional de luxo com quartos premium, localização central e estrutura completa para lazer e negócios de alto nível na capital gaúcha.',profileImg:'https://lh3.googleusercontent.com/p/AF1QipN4OwrWTPUxdo4nN0_acnvXMHMz8uclzOGT1mg6',largeImg:'https://lh3.googleusercontent.com/p/AF1QipNqN8FUS3a78YDVHsSujWDBxLUYkLVLf_-Vl9Rv',selo:'Parceiro oficial da Frame',services:['Wi-Fi','Estacionamento','Café da Manhã','Academia','Piscina']},
    {name:'ArtHotel Transamerica Collection',desc:'Apartamento de luxo remodelado na Bela Vista, com design moderno, serviços premium e proximidade com as melhores áreas gastronômicas de Porto Alegre.',profileImg:'https://arthotelportoalegre.com.br/wp-content/uploads/2025/07/DSC00235-Editar-1024x1536.jpg',largeImg:'https://arthotelportoalegre.com.br/wp-content/uploads/2024/08/Suite-Business-3.jpeg',selo:'Parceiro oficial da Frame',services:['Wi-Fi','Estacionamento','Café da Manhã','Academia','Piscina']},
    {name:'Manhattan Porto Alegre By Mercure',desc:'Localizado no bairro Moinhos de Vento, oferece apartamentos modernos com acesso à internet de alta velocidade e localização estratégica próxima ao centro da cidade.',profileImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/a8/22/ae/fachada.jpg',largeImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/79/1b/a1/guest-room.jpg',selo:'Parceiro oficial da Frame',services:['Wi-Fi','Estacionamento','Micro-ondas','Business Center','Piscina']}
  ],
  'Brasília, DF': [
    {name:'Royal Tulip Brasília Alvorada',desc:'Ícone de luxo à beira do Lago Paranoá, com suítes espaçosas, piscina infinita panorâmica, spa completo e restaurante gourmet. Eleito entre os mais premiados da capital.',profileImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/5d/51/70/novo-projeto.jpg',largeImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/df/f0/55/guest-room.jpg',selo:'Parceiro oficial da Frame',services:['Manobrista','Café da Manhã','Blackout','Academia','Piscina']},
    {name:'Windsor Plaza Brasília',desc:'Hotel cinco estrelas no coração do Setor Hoteleiro Sul, próximo à Esplanada dos Ministérios, com quartos modernos, rooftop bar e serviço impecável para negócios e lazer de elite.',profileImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/95/36/50/superior-executivo-double.jpg',largeImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/95/36/4a/standard-double.jpg',selo:'Parceiro oficial da Frame',services:['Cafeteira','Estacionamento','Café da Manhã Gratuito','Academia','Piscina']},
    {name:'Meliá Brasil 21',desc:'Estabelecimento de luxo no centro político de Brasília com design contemporâneo, centro de convenções, piscina aquecida e gastronomia internacional de alto nível.',profileImg:'https://dam.melia.com/melia/file/ZXmPvTTLgydAaodqAJXx.jpg',largeImg:'https://dam.melia.com/melia/file/2vPZqC5krmoqbsEkEpyA.jpg',selo:'Parceiro oficial da Frame',services:['Frigobar','Estacionamento','Café da Manhã','Blackout','Purificador de Ar']}
  ],
  'Curitiba, PR': [
    {name:'Nomaa Hotel',desc:'Localizado no bairro Batel, voltado ao design, arte e hospedagem de alto nível. Ideal para quem procura elegância contemporânea e atmosfera criativa na capital paranaense.',profileImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/03/d9/cb/caption.jpg',largeImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/20/36/63/nomaa-hotel.jpg',selo:'Parceiro oficial da Frame',services:['Isolamento Acústico','Estacionamento','Sacada','Academia','SPA']},
    {name:'Qoya Hotel Curitiba',desc:'Hotel de luxo com design moderno, spa, suítes amplas e localização premium. Excelente opção para estadia de alto padrão na capital paranaense.',profileImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c3/12/95/lobby.jpg',largeImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c3/12/9a/guest-room-bath.jpg',selo:'Parceiro oficial da Frame',services:['Cafeteira','Estacionamento','Café da Manhã','Academia','Piscina']},
    {name:'Radisson Hotel Curitiba Batel',desc:'Situado no bairro Batel, combina padrão internacional, localização central e estrutura completa — uma das referências de hospedagem de luxo em Curitiba.',profileImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/7b/9f/22/radisson-hotel-curitiba.jpg',largeImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/ca/05/d6/business-class.jpg',selo:'Parceiro oficial da Frame',services:['Wi-Fi','Estacionamento','Café da Manhã','TV Premium','Piscina']}
  ],
  'Florianópolis, SC': [
    {name:'Fuso Concept Hotel',desc:'Instalado no Morro do Forte, com localização privilegiada entre a Praia do Forte e Jurerê Internacional. Combina modernidade e praticidade arquitetural com a natureza exuberante.',profileImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c9/3c/a2/fuso-concept-hotel.jpg',largeImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/db/c0/9a/caption.jpg',selo:'Parceiro oficial da Frame',services:['Café da Manhã','Isolamento Acústico','Cafeteira','Traslado','Piscina']},
    {name:'Awasi Santa Catarina',desc:'Propriedade cinco estrelas em Governador Celso Ramos, próxima a Florianópolis, com foco em exclusividade, paisagem natural deslumbrante e conforto elevado.',profileImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/3f/2c/34/bangalo-especial-esmeralda.jpg',largeImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/2a/9b/43/villa-tingua.jpg',selo:'Parceiro oficial da Frame',services:['Wi-Fi Gratuito','Lareira','Café da Manhã','Frigobar','Piscina']},
    {name:'LK Design Hotel',desc:'Localizado no ponto mais nobre da Avenida Beira-Mar Norte, com apartamentos modernos e confortáveis que combinam design contemporâneo e vistas privilegiadas.',profileImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/6a/8e/96/wk-design-hotel.jpg',largeImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/6a/8e/7b/wk-design-hotel.jpg',selo:'Parceiro oficial da Frame',services:['Wi-Fi','Estacionamento','Café da Manhã','Academia','Piscina']}
  ],
  'Belo Horizonte, MG': [
    {name:'Hotel Fasano Belo Horizonte',desc:'Localizado no bairro Lourdes, um dos mais nobres de BH, com suítes de 27 m² a 110 m², gastronomia de alto nível (restaurante Gero, bar Baretto), spa e piscina na cobertura.',profileImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/71/3b/b4/hotel-fasano-belo-horizonte.jpg',largeImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/71/3c/41/hotel-fasano-belo-horizonte.jpg',selo:'Parceiro oficial da Frame',services:['Wi-Fi','Estacionamento','Café da Manhã','Academia','Piscina']},
    {name:'Ouro Minas Palace Hotel',desc:'Tradicional hotel de 5 estrelas em BH, com estrutura robusta, suítes amplas, localização estratégica e referência de hospedagem de prestígio na capital mineira.',profileImg:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/286562442.jpg?k=b2e8243548372c8749fc0edd3202b2112529c4d49005d63537501887da430d37&o=',largeImg:'https://media.omnibees.com/Images/3092/RoomTypes/640x426/1486450.jpeg/',selo:'Parceiro oficial da Frame',services:['Wi-Fi','Estacionamento','Café da Manhã','Academia','Piscina']},
    {name:'eSuites Virgínia Luxemburgo',desc:'Hotel boutique de luxo bem avaliado em BH, no bairro Luxemburgo, com ambiente intimista e padrão elevado — perfeito para quem prefere algo mais reservado e exclusivo.',profileImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/c0/49/26/ramada-encore-virginia.jpg',largeImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/62/83/62/caption.jpg',selo:'Parceiro oficial da Frame',services:['Wi-Fi','Estacionamento','Café da Manhã','Academia','Piscina']}
  ],
  'Salvador, BA': [
    {name:'Fera Palace Hotel',desc:'Hotel histórico de luxo em Salvador, localizado na Praça da Sé, com decoração imponente, serviço de excelência e localização privilegiada no coração do Pelourinho.',profileImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/99/9f/d1/foto-fachada-fera-palace.jpg',largeImg:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/99/9f/d0/quarto-standard-twin.jpg',selo:'Parceiro oficial da Frame',services:['Wi-Fi','Café da Manhã','Restaurante','Academia','Piscina']}
  ]
};

const FR_HOTEL_CITIES = Object.keys(FR_HOTELS);

// ===== SVG ICONS =====
const ICONS = {
  back: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>`,
  location: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6z"/><circle cx="12" cy="8" r="2.5"/></svg>`,
  search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,
  calendar: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  checkBig: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  doc: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  idCard: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M12 12h4M12 16h4M8 12v4M8 8h8"/></svg>`,
  passport: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="1" width="16" height="22" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21h10"/><path d="M9 17h6"/></svg>`,
  camera: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  shield: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  light: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
  face: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  upload: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>`,
  star: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  hotel: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  warning: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><triangle points="10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  info: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  person: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  bed: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16M2 8h20v12H2"/><path d="M22 8V4H10v4"/><path d="M2 12h20"/></svg>`,
  close: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  plus: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  lock: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  checkCircle: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
};

// ===== STATE =====
let frState = {
  step: 1,
  totalSteps: 8,
  userData: {},
  hotel: null,
  hotelCity: null,
  noHotel: false,
  checkIn: null,
  checkOut: null,
  upsell1: false,
  upsell2: false,
  docFrontFile: null,
  docBackFile: null,
  docType: null,
  warningCount: 0,
  blockUntil: null,
  calMode: 'checkin',
  savedAt: null,
  completedAt: null,
  sensitiveDataCleared: false,
  personalMessage: null,
  preferences: [],
  makePrefs: [],
  currentSubLevel: null,
};

// Load persisted state with TTL
let frHasValidSavedState = false;
try {
  const s = localStorage.getItem('fr_sched_state');
  if(s) {
    const p = JSON.parse(s);
    const now = Date.now();
    const ttl = p.completedAt ? 7*24*60*60*1000 : 24*60*60*1000;
    if(p.savedAt && (now - p.savedAt) < ttl && p.step > 1) {
      frState = {...frState,...p};
      frHasValidSavedState = true;
    } else if(p.savedAt && (now - p.savedAt) >= ttl) {
      localStorage.removeItem('fr_sched_state');
    }
  }
} catch(e){}

const frSaveState = () => {
  try {
    frState.savedAt = Date.now();
    // Mask sensitive data before storing
    const safe = {...frState, userData: {...(frState.userData||{})}};
    if(safe.userData.cpf) {
      const c = safe.userData.cpf;
      safe.userData.cpf = c.slice(0,7) + '***-**';
    }
    if(safe.userData.nome) {
      const parts = safe.userData.nome.split(' ');
      safe.userData._nomeHash = parts.length > 0 ? parts[0]+' '+parts[parts.length-1].slice(0,1)+'.' : '';
    }
    localStorage.setItem('fr_sched_state', JSON.stringify(safe));
    // Store full userData separately in sessionStorage (cleared on tab close)
    sessionStorage.setItem('fr_sched_full', JSON.stringify({nome: frState.userData.nome, cpf: frState.userData.cpf}));
  } catch(e){}
};
const frLoadSensitive = () => {
  try {
    const s = sessionStorage.getItem('fr_sched_full');
    if(s) { const d = JSON.parse(s); frState.userData.nome = d.nome; frState.userData.cpf = d.cpf; }
  } catch(e){}
};

// ===== HTML INJECTION =====
document.body.innerHTML = `
<div class="fr-wrap">
  <div class="fr-card" id="frCard">
    <div class="fr-progress-wrap">
      <div class="fr-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" id="frProgressBar"><div class="fr-progress-fill" id="frProgress"></div></div>
      <div class="fr-step-label">
        <span class="fr-step-current" id="frStepCurrent">Etapa 1</span>
        <span id="frStepTotal">de 8</span>
      </div>
    </div>

    <!-- STEP 1: Identidade -->
    <div class="fr-step active" id="frStep1">
      <div class="fr-h1">Confirme sua identidade</div>
      <p class="fr-sub">Preencha com seus dados conforme constam nos documentos oficiais. Isso é necessário para garantir a segurança de todos.</p>
      <div class="fr-field">
        <label class="fr-label" for="frNome">Nome completo</label>
        <input class="fr-input" type="text" id="frNome" placeholder="Ex: João da Silva Oliveira" autocomplete="name">
        <div class="fr-field-tooltip" id="frNomeTip">Digite seu nome completo exatamente como está nos seus documentos.</div>
        <div class="fr-err" id="frNomeErr"></div>
      </div>
      <div class="fr-field">
        <label class="fr-label" for="frCpf">CPF</label>
        <input class="fr-input" type="text" id="frCpf" placeholder="000.000.000-00" inputmode="numeric" autocomplete="off" maxlength="14">
        <div class="fr-field-tooltip" id="frCpfTip">Dados corretos garantem a não reprovação do agendamento.</div>
        <div class="fr-err" id="frCpfErr"></div>
      </div>
      <div class="fr-field">
        <label class="fr-label" for="frRua">Rua / Avenida</label>
        <input class="fr-input" type="text" id="frRua" placeholder="Ex: Rua das Flores" autocomplete="street-address">
        <div class="fr-err" id="frRuaErr"></div>
      </div>
      <div class="fr-row">
        <div class="fr-field">
          <label class="fr-label" for="frBairro">Bairro</label>
          <input class="fr-input" type="text" id="frBairro" placeholder="Ex: Centro">
          <div class="fr-err" id="frBairroErr"></div>
        </div>
        <div class="fr-field">
          <label class="fr-label" for="frNumero">Número</label>
          <input class="fr-input" type="text" id="frNumero" placeholder="143" inputmode="numeric">
          <div class="fr-err" id="frNumeroErr"></div>
        </div>
      </div>
      <div class="fr-row">
        <div class="fr-field" style="position:relative;">
          <label class="fr-label" for="frCidade">Cidade</label>
          <input class="fr-input" type="text" id="frCidade" placeholder="Sua cidade" autocomplete="off">
          <div class="fr-autocomplete" id="frCidadeAuto"></div>
          <div class="fr-err" id="frCidadeErr"></div>
        </div>
        <div class="fr-field">
          <label class="fr-label" for="frEstado">Estado</label>
          <select class="fr-select" id="frEstado">
            <option value="" disabled selected>UF</option>
            <option value="AC">AC</option><option value="AL">AL</option><option value="AM">AM</option>
            <option value="AP">AP</option><option value="BA">BA</option><option value="CE">CE</option>
            <option value="DF">DF</option><option value="ES">ES</option><option value="GO">GO</option>
            <option value="MA">MA</option><option value="MG">MG</option><option value="MS">MS</option>
            <option value="MT">MT</option><option value="PA">PA</option><option value="PB">PB</option>
            <option value="PE">PE</option><option value="PI">PI</option><option value="PR">PR</option>
            <option value="RJ">RJ</option><option value="RN">RN</option><option value="RO">RO</option>
            <option value="RR">RR</option><option value="RS">RS</option><option value="SC">SC</option>
            <option value="SE">SE</option><option value="SP">SP</option><option value="TO">TO</option>
          </select>
          <div class="fr-err" id="frEstadoErr"></div>
        </div>
      </div>
      <button class="fr-btn fr-btn-primary" id="frStep1Btn" disabled>
        <span class="fr-btn-label">Prosseguir</span>
        <div class="fr-btn-spinner"></div>
      </button>
      <p class="fr-privacy">Seus dados estão protegidos de acordo com nossa <a href="https://frameag.com/privacy" target="_blank">Política de Privacidade</a>.</p>
    </div>

    <!-- STEP 2: Perfil -->
    <div class="fr-step" id="frStep2">
      <div class="fr-h1">Personalize seu perfil</div>
      <p class="fr-sub">Adicione uma foto e configure como suas informações serão exibidas.</p>
      <div class="fr-profile-center">
        <div class="fr-profile-upload" id="frProfileLabel" onclick="frTriggerPhotoInput()" style="cursor:pointer;">
          <input type="file" id="frProfilePic" accept="image/jpeg,image/png,image/webp" style="display:none;">
          <img id="frProfilePreview" src="" alt="Foto de perfil">
          ${ICONS.person}
        </div>
        <div class="fr-profile-center-label">Toque para adicionar (opcional)</div>
      </div>
      <div class="fr-field">
        <label class="fr-label" for="frDisplayName">Nome de exibição</label>
        <input class="fr-input" type="text" id="frDisplayName" placeholder="Como prefere ser chamado?">
        <div class="fr-field-tooltip" id="frDisplayNameTip">Se preferir, nessa etapa você pode optar por não utilizar/exibir seu nome real para a modelo.</div>
        <div class="fr-err" id="frDisplayNameErr"></div>
      </div>
      <div class="fr-field">
        <label class="fr-label" for="frShowAge">Exibir sua idade para a modelo?</label>
        <select class="fr-select" id="frShowAge">
          <option value="" disabled selected>Selecione</option>
          <option value="yes">Sim, exibir minha idade</option>
          <option value="no">Não exibir minha idade</option>
        </select>
        <div class="fr-age-note"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Info"><circle cx="12" cy="12" r="10"/><path d="M12 7h.01"/><path d="M10 11h2v5"/><path d="M10 16h4"/></svg> Nota: A idade será exibida conforme seus documentos enviados.</div>
      </div>
      <div class="fr-check-row">
        <div class="fr-check-box checked" id="frTermsBox">
          <input type="checkbox" id="frTerms" checked>
          ${ICONS.check}
        </div>
        <label class="fr-check-label" for="frTerms">
          Li e concordo com os <a href="https://frameag.com/termos" target="_blank">Termos de Uso</a> e autorizo o tratamento de dados pessoais pela Frame Tecnologia LTDA.
        </label>
      </div>
      <button class="fr-btn fr-btn-primary" id="frStep2Btn" disabled>
        <span class="fr-btn-label">Prosseguir</span>
        <div class="fr-btn-spinner"></div>
      </button>
    </div>

    <!-- STEP 3: Documento -->
    <div class="fr-step" id="frStep3">
      <div class="fr-h1">Tipo de documento</div>
      <p class="fr-sub" style="text-align:left;">Selecione o documento que você enviará na próxima etapa para verificação.</p>
      <div class="fr-doc-cards">
        <div class="fr-doc-card" data-doc="CNH" onclick="frSelectDoc('CNH')">
          <div class="fr-doc-card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 640 640" fill="currentColor"><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 128C512 92.7 483.3 64 448 64L192 64zM288 416L352 416C396.2 416 432 451.8 432 496C432 504.8 424.8 512 416 512L224 512C215.2 512 208 504.8 208 496C208 451.8 243.8 416 288 416zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM280 128L360 128C373.3 128 384 138.7 384 152C384 165.3 373.3 176 360 176L280 176C266.7 176 256 165.3 256 152C256 138.7 266.7 128 280 128z"/></svg></div>
          <div class="fr-doc-card-info">
            <div class="fr-doc-card-name">CNH</div>
            <div class="fr-doc-card-hint">Carteira Nacional de Habilitação</div>
          </div>
          <div class="fr-doc-card-check">${ICONS.check}</div>
        </div>
        <div class="fr-doc-card" data-doc="RG" onclick="frSelectDoc('RG')">
          <div class="fr-doc-card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 640 640" fill="currentColor"><path d="M32 160C32 124.7 60.7 96 96 96L544 96C579.3 96 608 124.7 608 160L32 160zM32 208L608 208L608 480C608 515.3 579.3 544 544 544L96 544C60.7 544 32 515.3 32 480L32 208zM279.3 480C299.5 480 314.6 460.6 301.7 445C287 427.3 264.8 416 240 416L176 416C151.2 416 129 427.3 114.3 445C101.4 460.6 116.5 480 136.7 480L279.2 480zM208 376C238.9 376 264 350.9 264 320C264 289.1 238.9 264 208 264C177.1 264 152 289.1 152 320C152 350.9 177.1 376 208 376zM392 272C378.7 272 368 282.7 368 296C368 309.3 378.7 320 392 320L504 320C517.3 320 528 309.3 528 296C528 282.7 517.3 272 504 272L392 272zM392 368C378.7 368 368 378.7 368 392C368 405.3 378.7 416 392 416L504 416C517.3 416 528 405.3 528 392C528 378.7 517.3 368 504 368L392 368z"/></svg></div>
          <div class="fr-doc-card-info">
            <div class="fr-doc-card-name">RG</div>
            <div class="fr-doc-card-hint">Registro Geral de Identidade</div>
          </div>
          <div class="fr-doc-card-check">${ICONS.check}</div>
        </div>
        <div class="fr-doc-card" data-doc="Passaporte" onclick="frSelectDoc('Passaporte')">
          <div class="fr-doc-card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 640 640" fill="currentColor"><path d="M128 128C128 92.7 156.7 64 192 64L448 64C483.3 64 512 92.7 512 128L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM224 472C224 485.3 234.7 496 248 496L392 496C405.3 496 416 485.3 416 472C416 458.7 405.3 448 392 448L248 448C234.7 448 224 458.7 224 472zM406.6 272C401.8 298.4 385.1 320.7 362.4 333.2C369.1 316.2 373.6 295.2 375 272L406.6 272zM233.5 272L265.1 272C266.5 295.1 271.1 316.2 277.7 333.2C255 320.7 238.3 298.4 233.5 272zM309.9 327C303.7 313.6 298.8 294.5 297.2 272L343 272C341.4 294.5 336.5 313.6 330.3 327C325.8 336.6 322.1 340.8 320.1 342.5C318.1 340.8 314.4 336.7 309.9 327zM309.9 185C314.4 175.4 318.1 171.2 320.1 169.5C322.1 171.2 325.8 175.3 330.3 185C336.5 198.4 341.4 217.5 343 240L297.2 240C298.8 217.5 303.7 198.4 309.9 185zM406.6 240L375 240C373.6 216.9 369 195.8 362.4 178.8C385.1 191.3 401.8 213.6 406.6 240zM265 240L233.4 240C238.2 213.6 254.9 191.3 277.6 178.8C270.9 195.8 266.4 216.8 265 240zM448 256C448 185.3 390.7 128 320 128C249.3 128 192 185.3 192 256C192 326.7 249.3 384 320 384C390.7 384 448 326.7 448 256z"/></svg></div>
          <div class="fr-doc-card-info">
            <div class="fr-doc-card-name">Passaporte</div>
            <div class="fr-doc-card-hint">Documento internacional de identificação</div>
          </div>
          <div class="fr-doc-card-check">${ICONS.check}</div>
        </div>
      </div>
      <p style="font-size:0.76rem;color:var(--fr-gray);text-align:center;margin-top:14px;line-height:1.5;display:flex;align-items:center;justify-content:center;gap:6px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Utilizamos criptografia de ponta a ponta. Seus documentos são deletados automaticamente após aprovação.</p>
      <button class="fr-btn fr-btn-primary" id="frStep3Btn" disabled>
        <span class="fr-btn-label">Prosseguir</span>
        <div class="fr-btn-spinner"></div>
      </button>
    </div>

    <!-- STEP 4: Upload docs -->
    <div class="fr-step" id="frStep4">
      <div class="fr-h1">Envie seus documentos</div>
      <p class="fr-sub">Os documentos devem estar relacionados ao CPF abaixo. Fotos nítidas e com boa iluminação facilitam a aprovação.</p>
      <div class="fr-cpf-display" id="frCpfDisplay">—</div>
      <p style="text-align:center;font-size:0.82rem;color:var(--fr-gray);margin-bottom:16px;" id="frDocTypeDisplay"></p>
      <div class="fr-upload-area">
        <label class="fr-upload-item" for="frDocFront">
          <div class="fr-upload-circle" id="frDocFrontCircle">
            <input type="file" id="frDocFront" accept="image/jpeg,image/png,image/webp">
            <img id="frDocFrontPreview" src="" alt="">
            ${ICONS.upload}
          </div>
          <span class="fr-upload-label">Frente do documento</span>
        </label>
        <label class="fr-upload-item" for="frDocBack">
          <div class="fr-upload-circle" id="frDocBackCircle">
            <input type="file" id="frDocBack" accept="image/jpeg,image/png,image/webp">
            <img id="frDocBackPreview" src="" alt="">
            ${ICONS.upload}
          </div>
          <span class="fr-upload-label">Verso do documento</span>
        </label>
      </div>
      <div class="fr-err" id="frDocErr" style="text-align:center;"></div>
      <button class="fr-btn fr-btn-primary" id="frStep4Btn" disabled>
        <span class="fr-btn-label">Prosseguir</span>
        <div class="fr-btn-spinner"></div>
      </button>
      <p class="fr-step-hint">Envie imagens nítidas do documento em um local bem iluminado.</p>
    </div>

    <!-- STEP 5: Hospedagem -->
    <div class="fr-step" id="frStep5">
      <div class="fr-h1">Onde será sua estadia?</div>
      <p class="fr-sub">Selecione a cidade, datas e um hotel parceiro para sua experiência.</p>

      <div class="fr-field">
        <label class="fr-label">Cidade</label>
        <button class="fr-city-search-btn" id="frCityBtn" type="button">
          <span class="fr-city-search-icon">${ICONS.location}</span>
          <span id="frCityBtnText">Buscar cidade...</span>
        </button>
      </div>

      <div id="frCityTutorial" class="fr-city-tutorial">
        <img src="https://framerusercontent.com/images/2gf6VpQUBf4Sat53XHBbYht7Y.webp" alt="Sua experiência na Frame Agency">
        <div class="fr-city-tutorial-title">Sua experiência na Frame Agency</div>
        <div class="fr-city-tutorial-sub">Clique em "Buscar cidade" e selecione a cidade onde deseja realizar seu encontro. Depois, você conhecerá nossos hotéis parceiros.</div>
      </div>

      <div id="frDatesSection" style="display:none;">
        <label class="fr-label" style="margin-bottom:8px;display:block;">Data da experiência</label>
        <div class="fr-dates-display">
          <div class="fr-date-box" id="frCheckInBox" onclick="frOpenCalendar('checkin')">
            <div class="fr-date-box-label">Check-in</div>
            <div class="fr-date-box-value placeholder" id="frCheckInVal">Adicionar data</div>
          </div>
          <div class="fr-date-box" id="frCheckOutBox" onclick="frOpenCalendar('checkout')">
            <div class="fr-date-box-label">Check-out</div>
            <div class="fr-date-box-value placeholder" id="frCheckOutVal">Adicionar data</div>
          </div>
        </div>
      </div>

      <div id="frHotelSection" style="display:none;">
        <div class="fr-hotel-section-title">${ICONS.hotel} <span>Hotéis parceiros em <span id="frHotelCityLabel"></span></span></div>
        <div class="fr-hotel-list" id="frHotelList"></div>
        <p class="fr-custom-city-link" onclick="frShowCustomCity()">Minha cidade não está na lista</p>
      </div>

      <div style="height:100px;"></div>
    </div>

    <!-- STEP 6: Checkout -->
    <div class="fr-step" id="frStep6">
      <div class="fr-h1">Sua Experiência</div>
      <div class="fr-incluso-badge"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 2l.19.94a4 4 0 0 0 2.57 2.974L8 6l-.24.086A4 4 0 0 0 5.19 9.06L5 10l-.19-.94a4 4 0 0 0-2.57-2.974L2 6l.24-.086A4 4 0 0 0 4.81 2.94L5 2z"/><path d="M8 16l.23 1.276a2 2 0 0 0 1.219 1.501L10 19l-.551.223a2 2 0 0 0-1.22 1.5L8 22l-.23-1.276a2 2 0 0 0-1.219-1.501L6 19l.551-.223a2 2 0 0 0 1.22-1.5L8 16z"/><path d="M16 3l.556 2.654a8 8 0 0 0 5.213 5.92L23 12l-1.231.426a8 8 0 0 0-5.213 5.92L16 21l-.556-2.654a8 8 0 0 0-5.213-5.92L9 12l1.231-.426a8 8 0 0 0 5.213-5.92L16 3z"/></svg> TUDO INCLUSO</div>

      <div class="fr-checkout-hotel" id="frCheckoutHotelCard">
        <img class="fr-checkout-hotel-img" id="frCheckoutHotelImg" src="" alt="">
        <div class="fr-checkout-hotel-info">
          <div class="fr-checkout-hotel-name" id="frCheckoutHotelName"></div>
          <div class="fr-checkout-hotel-rating">
            <span style="color:var(--fr-bronze)">${ICONS.star}</span>
            5,0 &nbsp;·&nbsp; Parceiro Oficial Frame
          </div>
        </div>
      </div>

      <div class="fr-checkout-no-hotel" id="frCheckoutNoHotelCard" style="display:none;">
        <div class="fr-checkout-no-hotel-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><path d="M64 128C64 92.7 92.7 64 128 64L384 64C419.3 64 448 92.7 448 128L448 249.3C401.1 268.3 368 314.3 368 368L368 392.4C348.4 410 336 435.5 336 463.9L336 559.9C336 565.4 336.5 570.8 337.3 576L128 576C92.7 576 64 547.3 64 512L64 128zM208 448L208 528L288 528L288 463.9C288 450.2 289.9 436.9 293.5 424.3C287.8 419.1 280.3 416 272 416L240 416C222.3 416 208 430.3 208 448zM339 288.3C338 288.1 337 288 336 288L304 288C295.2 288 288 295.2 288 304L288 336C288 344.8 295.2 352 304 352L320.7 352C322.8 329.2 329.1 307.7 339 288.3zM176 160C167.2 160 160 167.2 160 176L160 208C160 216.8 167.2 224 176 224L208 224C216.8 224 224 216.8 224 208L224 176C224 167.2 216.8 160 208 160L176 160zM288 176L288 208C288 216.8 295.2 224 304 224L336 224C344.8 224 352 216.8 352 208L352 176C352 167.2 344.8 160 336 160L304 160C295.2 160 288 167.2 288 176zM176 288C167.2 288 160 295.2 160 304L160 336C160 344.8 167.2 352 176 352L208 352C216.8 352 224 344.8 224 336L224 304C224 295.2 216.8 288 208 288L176 288zM528 368.1C528 350.4 513.7 336.1 496 336.1C478.3 336.1 464 350.4 464 368.1L464 416L528 416L528 368.1zM384 464C384 443.1 397.4 425.3 416 418.7L416 368.1C416 323.9 451.8 288.1 496 288.1C540.2 288.1 576 323.9 576 368.1L576 418.7C594.6 425.3 608 443.1 608 464L608 560C608 586.5 586.5 608 560 608L432 608C405.5 608 384 586.5 384 560L384 464z"/></svg>
        </div>
        <div>
          <div class="fr-checkout-no-hotel-name">Hospedagem a confirmar</div>
          <div class="fr-checkout-no-hotel-sub">Entre em contato com o time para alinhar detalhes</div>
        </div>
      </div>

      <div class="fr-checkout-resumo">
        <div class="fr-resumo-row">
          <div>
            <div class="fr-resumo-label">Datas</div>
            <div class="fr-resumo-value" id="frResumoDates">—</div>
          </div>
          <button class="fr-edit-link" onclick="frShowStep(5)">Alterar</button>
        </div>
        <div class="fr-resumo-row">
          <div>
            <div class="fr-resumo-label">Hóspedes</div>
            <div class="fr-resumo-value">2 hóspedes</div>
          </div>
        </div>
        <div class="fr-resumo-row" id="frResumoNomeRow">
          <div>
            <div class="fr-resumo-label">Reserva para</div>
            <div class="fr-resumo-value" id="frResumoNome">—</div>
          </div>
        </div>
      </div>

      <div class="fr-section-title-upsell">Inclua e aproveite</div>

      <div class="fr-upsell-card" id="frUpsell1Card" onclick="frToggleUpsell(1)">
        <div class="fr-upsell-check" id="frUpsell1Check"></div>
        <div class="fr-upsell-body">
          <div class="fr-upsell-name">Estadia completa no hotel</div>
          <ul class="fr-upsell-perks">
            <li><span style="color:var(--fr-bronze)">${ICONS.check}</span> Check-in antecipado</li>
            <li><span style="color:var(--fr-bronze)">${ICONS.check}</span> Late check-out</li>
            <li><span style="color:var(--fr-bronze)">${ICONS.check}</span> Café da manhã incluso</li>
            <li><span style="color:var(--fr-bronze)">${ICONS.check}</span> Upgrade de suíte</li>
          </ul>
          <div class="fr-upsell-desc">Receba 1 diária integral no hotel parceiro após o término da experiência.</div>
        </div>
      </div>

      <div class="fr-upsell-card" id="frUpsell2Card" onclick="frToggleUpsell(2)">
        <div class="fr-upsell-check" id="frUpsell2Check"></div>
        <div class="fr-upsell-body">
          <div class="fr-upsell-name">Kit de experiências exclusivas</div>
          <div class="fr-upsell-desc">Garanta que a suíte esteja equipada com itens cuidadosamente selecionados para tornar sua experiência ainda mais especial e memorável.</div>
        </div>
      </div>

      <button class="fr-btn fr-btn-gradient" id="frConfirmBtn" onclick="frProceedCheckout()">
        <span class="fr-btn-label" id="frConfirmBtnLabel">Continuar agora</span>
        <div class="fr-btn-spinner"></div>
      </button>
      <p class="fr-payment-note" id="frPaymentNote" style="display:none;">
        ${ICONS.lock}&nbsp; O pagamento dos adicionais é realizado presencialmente na chegada ao hotel ou via chat com o time.
      </p>
      <p class="fr-disclaimer">
        Ao prosseguir, você declara ter lido e concordado com os <a href="https://frameag.com/termos" target="_blank">Termos</a>, e as Políticas de <a href="https://frameag.com/privacy" target="_blank">Privacidade</a> e <a href="https://frameag.com/refund-policy" target="_blank">Reembolso</a> da Frame Tecnologia LTDA.
      </p>
    </div>

    <!-- STEP MSG: Toque pessoal (optional, unnumbered) -->
    <div class="fr-step" id="frStepMessage">
      <div class="fr-h1">Toque pessoal <span class="fr-sparkle-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style="width:26px;height:26px;"><defs><linearGradient id="frSpkGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#AC865C"/><stop offset="100%" stop-color="#D29F66"/></linearGradient></defs><path fill="url(#frSpkGrad)" d="M320 64C337.7 64 352 78.3 352 96L352 304C352 312.8 359.2 320 368 320C376.8 320 384 312.8 384 304L384 128C384 110.3 398.3 96 416 96C433.7 96 448 110.3 448 128L448 304C448 312.8 455.2 320 464 320C472.8 320 480 312.8 480 304L480 192C480 174.3 494.3 160 512 160C529.7 160 544 174.3 544 192L544 370.2C524.8 375.6 509.3 390.6 503.6 410.5L497.1 433.2L474.4 439.7C449.2 446.9 431.9 469.9 431.9 496.1C431.9 518.2 444.3 538.1 463.3 548C435.8 565.8 403.1 576.1 367.9 576.1L348.7 576.1C289.1 576.1 231.8 553.2 188.7 512.1L76.4 405C60.4 389.8 59.8 364.4 75 348.4C90.2 332.4 115.6 331.8 131.6 347L192.1 404.6C192.1 403.1 192 401.5 192 400L192 128C192 110.3 206.3 96 224 96C241.7 96 256 110.3 256 128L256 304C256 312.8 263.2 320 272 320C280.8 320 288 312.8 288 304L288 96C288 78.3 302.3 64 320 64zM312.7 390.6C311.6 386.7 308 384 304 384C300 384 296.4 386.7 295.3 390.6L288 416L262.6 423.3C258.7 424.4 256 428 256 432C256 436 258.7 439.6 262.6 440.7L288 448L295.3 473.4C296.4 477.3 300 480 304 480C308 480 311.6 477.3 312.7 473.4L320 448L345.4 440.7C349.3 439.6 352 436 352 432C352 428 349.3 424.4 345.4 423.3L320 416L312.7 390.6zM104 184L152.3 197.8C156.9 199.1 160 203.3 160 208C160 212.7 156.9 216.9 152.3 218.2L104 232L90.2 280.3C88.9 284.9 84.7 288 80 288C75.3 288 71.1 284.9 69.8 280.3L56 232L7.7 218.2C3.1 216.9 0 212.7 0 208C0 203.3 3.1 199.1 7.7 197.8L56 184L69.8 135.7C71.1 131.1 75.3 128 80 128C84.7 128 88.9 131.1 90.2 135.7L104 184zM584 472L632.3 485.8C636.9 487.1 640 491.3 640 496C640 500.7 636.9 504.9 632.3 506.2L584 520L570.2 568.3C568.9 572.9 564.7 576 560 576C555.3 576 551.1 572.9 549.8 568.3L536 520L487.7 506.2C483.1 504.9 480 500.7 480 496C480 491.3 483.1 487.1 487.7 485.8L536 472L549.8 423.7C551.1 419.1 555.3 416 560 416C564.7 416 568.9 419.1 570.2 423.7L584 472z"/></svg></span></div>
      <p class="fr-sub">Etapa opcional | Envie uma mensagem e suas preferências diretamente para a modelo antes do encontro.</p>

      <div class="fr-field">
        <label class="fr-label" for="frMsgTextarea">Sua mensagem</label>
        <textarea class="fr-msg-textarea" id="frMsgTextarea" maxlength="200" placeholder="Exemplo: Oi linda! Mal posso esperar para te conhecer…" oninput="frMsgCounter(this)"></textarea>
        <div class="fr-msg-counter" id="frMsgCounter">200 caracteres restantes</div>
      </div>

      <!-- Main preferences section -->
      <div id="frMainPrefsTitle" class="fr-msg-prefs-title">Minhas preferências <span style="font-size:0.76rem;font-weight:400;color:var(--fr-gray);">(opcional)</span></div>
      <div class="fr-msg-chips" id="frMsgChips">
        <button class="fr-msg-chip" onclick="frToggleMsgChip(this)">Roupa casual</button>
        <button class="fr-msg-chip" onclick="frToggleMsgChip(this)">Surpresa</button>
        <button class="fr-msg-chip" onclick="frToggleMsgChip(this)">Look executivo</button>
        <button class="fr-msg-chip" onclick="frToggleMsgChip(this)">Vestido longo</button>
        <button class="fr-msg-chip fr-chip-special" data-sublevel="lingerie" onclick="frOpenSubLevel('lingerie', this)">Lingerie fina</button>
        <button class="fr-msg-chip fr-chip-special" data-sublevel="sensual" onclick="frOpenSubLevel('sensual', this)">Sensual discreto</button>
      </div>

      <!-- Sublevel: Lingerie color -->
      <div class="fr-sublevel" id="frSubLevelLingerie" style="display:none;">
        <div class="fr-sublevel-back" onclick="frCloseSubLevel()">← Voltar às preferências</div>
        <div class="fr-msg-prefs-title">Qual cor de lingerie você prefere? <span style="font-size:0.76rem;font-weight:400;color:var(--fr-gray);">(opcional)</span></div>
        <div class="fr-msg-chips" id="frLingerieChips">
          <button class="fr-msg-chip" onclick="frToggleMsgChip(this)">Preta</button>
          <button class="fr-msg-chip" onclick="frToggleMsgChip(this)">Vermelha</button>
          <button class="fr-msg-chip" onclick="frToggleMsgChip(this)">Rosa</button>
          <button class="fr-msg-chip" onclick="frToggleMsgChip(this)">Branca</button>
          <button class="fr-msg-chip" onclick="frToggleMsgChip(this)">Azul</button>
          <button class="fr-msg-chip" onclick="frToggleMsgChip(this)">Cores claras</button>
        </div>
      </div>

      <!-- Sublevel: Sensual discreto -->
      <div class="fr-sublevel" id="frSubLevelSensual" style="display:none;">
        <div class="fr-sublevel-back" onclick="frCloseSubLevel()">← Voltar às preferências</div>
        <div class="fr-msg-prefs-title">Qual o seu nível de 'sensual discreto'? <span style="font-size:0.76rem;font-weight:400;color:var(--fr-gray);">(opcional)</span></div>
        <div class="fr-msg-chips" id="frSensualChips">
          <button class="fr-msg-chip" onclick="frToggleMsgChip(this)">Toque leve de transparência</button>
          <button class="fr-msg-chip" onclick="frToggleMsgChip(this)">Decote sutil</button>
          <button class="fr-msg-chip" onclick="frToggleMsgChip(this)">Fendas</button>
          <button class="fr-msg-chip" onclick="frToggleMsgChip(this)">Lingerie por baixo</button>
        </div>
      </div>

      <!-- Make preferences (always visible) -->
      <div class="fr-msg-prefs-title" style="margin-top:20px;">Preferências de maquiagem <span style="font-size:0.76rem;font-weight:400;color:var(--fr-gray);">(opcional)</span></div>
      <div class="fr-msg-chips" id="frMakeChips">
        <button class="fr-msg-chip" onclick="frToggleMakeChip(this)">Sem maquiagem</button>
        <button class="fr-msg-chip" onclick="frToggleMakeChip(this)">Maquiagem leve</button>
        <button class="fr-msg-chip" onclick="frToggleMakeChip(this)">Produção completa</button>
      </div>

      <button class="fr-btn fr-btn-primary" style="margin-top:28px;" onclick="frSendMessage()">
        <span class="fr-btn-label">Enviar mensagem</span>
        <div class="fr-btn-spinner"></div>
      </button>
      <button class="fr-msg-skip-link" onclick="frSkipMessage()">Pular esta etapa</button>
    </div>

    <!-- STEP 7: Documentos recebidos -->
    <div class="fr-step" id="frStep7">
      <div class="fr-received-icon">${ICONS.checkCircle}</div>
      <div class="fr-h1" style="text-align:center;">Documentos recebidos</div>
      <p class="fr-sub" style="text-align:center;">Seus documentos foram recebidos com sucesso e estão passando por análise automática segura.</p>
      <ul class="fr-info-list">
        <li>
          <div class="fr-info-list-icon">${ICONS.shield}</div>
          <div>Na próxima etapa, você realizará uma <strong>verificação facial</strong> com o Frame Authentic para confirmar sua identidade de forma segura.</div>
        </li>
        <li>
          <div class="fr-info-list-icon">${ICONS.light}</div>
          <div>Escolha um ambiente bem iluminado e com câmera limpa para melhores resultados.</div>
        </li>
        <li>
          <div class="fr-info-list-icon">${ICONS.face}</div>
          <div>O processo é rápido e leva aproximadamente <strong>15 segundos</strong>.</div>
        </li>
      </ul>
      <button class="fr-btn fr-btn-primary" id="frStep7Btn" onclick="frStartKYC()">
        <span class="fr-btn-label">Iniciar verificação facial</span>
        <div class="fr-btn-spinner"></div>
      </button>
    </div>

    <!-- STEP 8: KYC (Frame Authentic) -->
    <div class="fr-step" id="frStep8">
      <img class="fr-kyc-logo" src="https://framerusercontent.com/images/pZ3VoR0IVMlUfgFWhXRDczmt7Q.png" alt="Frame Authentic">
      <div class="fr-h2" style="text-align:center;margin-bottom:4px;">Frame Authentic</div>
      <p class="fr-sub" style="text-align:center;">Tecnologia de verificação biométrica da Frame.</p>
      <ul class="fr-kyc-intro-tips">
        <li>
          <div class="fr-kyc-tip-icon">${ICONS.light}</div>
          Escolha um ambiente bem iluminado, de preferência com luz natural.
        </li>
        <li>
          <div class="fr-kyc-tip-icon">${ICONS.camera}</div>
          Limpe a lente da câmera e posicione o rosto no centro da tela.
        </li>
        <li>
          <div class="fr-kyc-tip-icon">${ICONS.shield}</div>
          Certifique-se de ser o titular dos dados preenchidos.
        </li>
      </ul>
      <button class="fr-btn fr-btn-primary" id="frKycStartBtn" onclick="frInitCamera()">
        <span class="fr-btn-label">${ICONS.camera} Iniciar verificação</span>
        <div class="fr-btn-spinner"></div>
      </button>
    </div>
    <!-- STEP 9: KYC Success -->
    <div class="fr-kyc-success-screen" id="frKycSuccessScreen">
      <div class="fr-kyc-success-anim">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      </div>
      <div class="fr-h1" style="margin-bottom:6px;">Identidade confirmada!</div>
      <p class="fr-sub" style="margin-bottom:0;">Sua verificação foi concluída com sucesso.</p>
      <div class="fr-kyc-hotel-tag" id="frKycHotelTag">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <span id="frKycHotelTagName">Hotel selecionado</span>
      </div>
      <div class="fr-kyc-email-note">
        <strong>O que acontece agora?</strong><br>
        Sua reserva está sendo confirmada. Você receberá o voucher e todos os detalhes por e-mail assim que a análise de dados for concluída.
      </div>
      <button class="fr-btn fr-btn-gradient" onclick="window.location.href='https://www.frameag.com/kyc/success'" style="max-width:320px;margin:0 auto;">
        <span class="fr-btn-label">Finalizar envio de dados</span>
        <div class="fr-btn-spinner"></div>
      </button>
    </div>

  </div>
</div>

<!-- City search overlay -->
<div class="fr-city-overlay" id="frCityOverlay">
  <div class="fr-city-overlay-header">
    <button class="fr-city-back-btn" onclick="frCloseCityOverlay()">${ICONS.back}</button>
    <div class="fr-city-input-wrap">
      ${ICONS.search}
      <input class="fr-city-text-input" id="frCitySearch" placeholder="Buscar cidade..." autocomplete="off">
      <button class="fr-city-clear" id="frCitySearchClear" onclick="frClearCitySearch()">${ICONS.close}</button>
    </div>
  </div>
  <div class="fr-city-results" id="frCityResults"></div>
</div>

<!-- Calendar overlay -->
<div class="fr-cal-overlay" id="frCalOverlay">
  <div class="fr-cal-header">
    <div>
      <div class="fr-cal-title" id="frCalTitle">Quando?</div>
      <div style="font-size:0.76rem;color:var(--fr-gray);margin-top:2px;" id="frCalSubtitle">Selecione a data de sua hospedagem com a modelo</div>
    </div>
    <button class="fr-cal-close" onclick="frCloseCalendar()">${ICONS.close}</button>
  </div>
  <div class="fr-cal-weekdays">
    <div class="fr-cal-wd">D</div><div class="fr-cal-wd">S</div><div class="fr-cal-wd">T</div>
    <div class="fr-cal-wd">Q</div><div class="fr-cal-wd">Q</div><div class="fr-cal-wd">S</div>
    <div class="fr-cal-wd">S</div>
  </div>
  <div class="fr-cal-body" id="frCalBody"></div>
  <div class="fr-cal-footer">
    <button class="fr-cal-clear" onclick="frClearDates()">Limpar</button>
    <button class="fr-cal-save" id="frCalSave" onclick="frSaveDates()" disabled>Salvar</button>
  </div>
</div>

<!-- KYC overlay -->
<div class="fr-kyc-overlay" id="frKycOverlay">
  <div class="fr-kyc-box">
    <div class="fr-h2" style="margin-bottom:4px;background:linear-gradient(90deg,var(--fr-bronze),var(--fr-bronze-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Frame Authentic</div>
    <div class="fr-kyc-camera-wrap">
      <video class="fr-kyc-video" id="frKycVideo" autoplay playsinline muted></video>
      <div class="fr-kyc-face-guide">
        <div class="fr-kyc-face-oval" id="frKycOval">
          <div class="fr-kyc-corner-tl"></div>
          <div class="fr-kyc-corner-tr"></div>
          <div class="fr-kyc-corner-bl"></div>
          <div class="fr-kyc-corner-br"></div>
        </div>
      </div>
      <div class="fr-kyc-scan-line" id="frKycScanLine"></div>
      <div class="fr-kyc-overlay-msg" id="frKycMsg">Centralize seu rosto no oval</div>
      <div class="fr-kyc-countdown-overlay" id="frKycCountdown">
        <div class="fr-kyc-countdown-num" id="frKycCountNum">3</div>
      </div>
      <div class="fr-kyc-success-overlay" id="frKycSuccessOverlay">
        <div class="fr-kyc-check-circle">${ICONS.checkBig}</div>
        <div style="font-weight:700;font-size:1rem;">Verificado!</div>
      </div>
    </div>
    <div class="fr-kyc-status-top" id="frKycStatusTop" aria-live="polite">Iniciando câmera...</div>
    <div class="fr-kyc-status-bottom" id="frKycStatusBottom" aria-live="polite">Aguarde um momento</div>
    <div class="fr-kyc-spinner" id="frKycSpinner"></div>
  </div>
</div>

<!-- Premium overlay -->
<div class="fr-premium-overlay" id="frPremiumOverlay">
  <div class="fr-premium-box">
    <img class="fr-premium-logo" src="https://framerusercontent.com/images/yVa3ycC9y0QeJOv3SFDDzBO1WYE.png" alt="Frame">
    <div class="fr-premium-badge"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.636 16C2.91 16 2 14 2 12s.91-4 3.636-4c3.637 0 9.091 8 12.728 8C21.09 16 22 14 22 12s-.91-4-3.636-4c-3.637 0-9.091 8-12.728 8z"/></svg> Membro Premium</div>
    <div class="fr-h2" style="margin-bottom:8px;">Identificamos sua assinatura Premium.</div>
    <p style="font-size:0.875rem;color:var(--fr-gray);margin-bottom:20px;">Por ser um usuário Premium, você conta com hospedagem inclusa no seu agendamento, livre de custos adicionais.</p>
    <button class="fr-btn fr-btn-primary" onclick="frAcceptPremium()">
      <span class="fr-btn-label">Seguir com a oferta</span>
    </button>
    <button class="fr-btn-text" onclick="frDeclinePremium()">Rejeitar oferta</button>
  </div>
</div>


<!-- Photo preview overlay -->
<div class="fr-photo-overlay" id="frPhotoOverlay">
  <div class="fr-photo-overlay-header">
    <button class="fr-photo-close-btn" onclick="frClosePhotoOverlay()"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
    <div class="fr-photo-overlay-title">Veja como vai ficar</div>
    <div style="width:34px;flex-shrink:0;"></div>
  </div>
  <div class="fr-photo-stage">
    <div class="fr-photo-circle-wrap">
      <svg class="fr-photo-circle-svg" viewBox="0 0 260 260">
        <defs>
          <linearGradient id="frCircleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#AC865C"/>
            <stop offset="100%" style="stop-color:#D29F66"/>
          </linearGradient>
        </defs>
        <circle class="fr-photo-circle-track" cx="130" cy="130" r="125"/>
        <circle class="fr-photo-circle-progress" id="frCircleProgress" cx="130" cy="130" r="125"/>
      </svg>
      <img class="fr-photo-circle-img" id="frPhotoPreviewBig" src="" alt="">
    </div>
    <div class="fr-photo-tips-sheet" id="frPhotoTipsSheet">
      <div class="fr-photo-tips-header">
        <div class="fr-photo-tips-title">Dicas de fotografia</div>
        <button class="fr-photo-tips-close" onclick="frTogglePhotoTips()">×</button>
      </div>
      <div class="fr-photo-tips-desc">Usamos estes critérios para garantir a qualidade da sua foto de perfil.</div>
      <ul class="fr-photo-tips-list">
        <li>Seu rosto deve estar bem iluminado, nítido e preencher o enquadramento.</li>
        <li>Olhe diretamente para a câmera e seja a única pessoa na foto.</li>
        <li>Use uma foto sua — não de animais ou paisagens.</li>
        <li>Evite óculos escuros, filtros excessivos ou fotos em grupo.</li>
      </ul>
    </div>
  </div>
  <div class="fr-photo-bottom-sheet">
    <div class="fr-photo-verify-title">Verifique sua foto</div>
    <div class="fr-photo-verify-desc">Essa imagem será exibida apenas para a modelo reconhecer você no hotel e é opcional.</div>
    <button class="fr-photo-new-link" onclick="frRetakePhoto()">Escolher uma nova imagem</button>
    <div class="fr-photo-action-row">
      <button class="fr-photo-editar-btn" onclick="frRetakePhoto()">Escolher outra</button>
      <button class="fr-photo-usar-btn" id="frUsarFotoBtn" onclick="frUsarEstaFoto()">
        <span class="fr-usar-label">Usar esta foto</span>
        <div class="fr-dots-loader"><span></span><span></span><span></span></div>
      </button>
    </div>
  </div>
</div>

<!-- Confirm bottom sheet (step 5) -->
<div class="fr-confirm-sheet" id="frConfirmSheet">
  <div class="fr-confirm-sheet-handle"></div>
  <div class="fr-confirm-sheet-hotel" id="frSheetHotelLabel">Hotel selecionado</div>
  <div class="fr-confirm-sheet-main placeholder" id="frSheetHotelName">Selecione seu hotel</div>
  <div class="fr-confirm-sheet-dates" id="frSheetDates">Selecione as datas</div>
  <button class="fr-btn fr-btn-primary" id="frSheetConfirmBtn" onclick="frStep5Next()" disabled style="margin-top:6px;">
    <span class="fr-btn-label">Confirmar reserva</span>
    <div class="fr-btn-spinner"></div>
  </button>
</div>

<!-- Continuar de onde parou -->
<div class="fr-resume-overlay" id="frResumeOverlay">
  <div class="fr-resume-sheet">
    <div class="fr-resume-handle"></div>
    <div class="fr-resume-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg></div>
    <div class="fr-h2" style="margin-bottom:6px;">Continuar de onde parou</div>
    <p style="font-size:0.875rem;color:var(--fr-gray);margin-bottom:20px;">Encontramos um agendamento em andamento. Deseja continuar de onde parou?</p>
    <div style="display:flex;gap:10px;">
      <button class="fr-btn fr-btn-ghost" onclick="frResumeDecline()" style="margin-top:0;flex:1;">Começar do início</button>
      <button class="fr-btn fr-btn-primary" onclick="frResumeContinue()" style="margin-top:0;flex:1;"><span class="fr-btn-label">Continuar</span></button>
    </div>
  </div>
</div>

<!-- Support button -->
<button class="fr-support-btn" id="frSupportBtn" onclick="frOpenHelp()">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  Suporte
</button>

<!-- Loading overlay -->
<div class="fr-loading-overlay" id="frLoadingOverlay">
  <div class="fr-loading-spinner"></div>
  <div class="fr-loading-msg" id="frLoadingMsg">Processando...</div>
</div>

<!-- Warning popup -->
<div class="fr-warning-popup" id="frWarningPopup">
  <div class="fr-warning-box">
    <div class="fr-warning-icon">${ICONS.info}</div>
    <div class="fr-h2" style="margin-bottom:8px;" id="frWarningTitle">Atenção</div>
    <p style="font-size:0.875rem;color:var(--fr-gray);margin-bottom:20px;" id="frWarningMsg"></p>
    <button class="fr-btn fr-btn-primary" onclick="frCloseWarning()">
      <span class="fr-btn-label">Entendido</span>
    </button>
    <button class="fr-btn fr-btn-ghost" id="frContinueNoHotelBtn" style="display:none;margin-top:10px;" onclick="frContinueWithoutHotel()">
      <span class="fr-btn-label">Continuar sem hospedagem</span>
    </button>
  </div>
</div>

<!-- Toast -->
<div class="fr-toast" id="frToast"></div>

<!-- Help Center Bottom Sheet -->
<div class="fr-help-overlay" id="frHelpOverlay" onclick="frCloseHelp(event)">
  <div class="fr-help-sheet" id="frHelpSheet">
    <div class="fr-help-handle"></div>
    <div class="fr-help-header">
      <div>
        <div class="fr-help-title">Como podemos <span class="fr-help-title-accent">te ajudar?</span></div>
      </div>
      <button class="fr-help-close-btn" onclick="frCloseHelp(null, true)">${ICONS.close}</button>
    </div>

    <div class="fr-help-body" id="frHelpBody">
      <div class="fr-help-faq-label">Dúvidas frequentes</div>

      <div class="fr-help-faq-list">
        <div class="fr-help-faq-item" onclick="frToggleFaq(this)">
          <div class="fr-help-faq-q">
            <span>Por que preciso informar meu CPF?</span>
            <svg class="fr-faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="fr-help-faq-a">O CPF é necessário para confirmar sua identidade e garantir que você é maior de idade. Fique tranquilo, seus dados são protegidos com criptografia de ponta a ponta e excluídos após a aprovação.
            <button class="fr-help-back-btn" onclick="frCloseHelp(null, true)">Voltar para verificação</button>
          </div>
        </div>
        <div class="fr-help-faq-item" onclick="frToggleFaq(this)">
          <div class="fr-help-faq-q">
            <span>Meus dados estão seguros?</span>
            <svg class="fr-faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="fr-help-faq-a">Sim. Todos os dados são tratados conforme a Lei Geral da Proteção de Dados e nossa Política de Privacidade. Os seus documentos enviados nas etapas são deletados automaticamente após a aprovação.
            <button class="fr-help-back-btn" onclick="frCloseHelp(null, true)">Voltar para verificação</button>
          </div>
        </div>
        <div class="fr-help-faq-item" onclick="frToggleFaq(this)">
          <div class="fr-help-faq-q">
            <span>Por que preciso enviar foto do documento?</span>
            <svg class="fr-faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="fr-help-faq-a">A verificação de documentos é parte do processo KYC (Know Your Customer), exigido pela nova Lei ECA Digital para garantir a segurança e maioridade de quem contrata experiências na Frame Agency.
            <button class="fr-help-back-btn" onclick="frCloseHelp(null, true)">Voltar para verificação</button>
          </div>
        </div>
        <div class="fr-help-faq-item" onclick="frToggleFaq(this)">
          <div class="fr-help-faq-q">
            <span>O que é a verificação facial Frame Authentic?</span>
            <svg class="fr-faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="fr-help-faq-a">É nossa tecnologia biométrica que confirma que você é o titular dos dados fornecidos. O processo leva menos de 15 segundos e utiliza a câmera do seu dispositivo.
            <button class="fr-help-back-btn" onclick="frCloseHelp(null, true)">Voltar para verificação</button>
          </div>
        </div>
        <div class="fr-help-faq-item" onclick="frToggleFaq(this)">
          <div class="fr-help-faq-q">
            <span>Posso usar um nome de exibição diferente do meu nome real?</span>
            <svg class="fr-faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="fr-help-faq-a">Sim! Na etapa de personalização do seu perfil, você pode escolher o nome de exibição que preferir. Esse será o nome visto pela modelo, seu nome real é usado apenas para verificação interna.
            <button class="fr-help-back-btn" onclick="frCloseHelp(null, true)">Voltar para verificação</button>
          </div>
        </div>
        <div class="fr-help-faq-item" onclick="frToggleFaq(this)">
          <div class="fr-help-faq-q">
            <span>Meu agendamento foi reprovado. O que faço?</span>
            <svg class="fr-faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
          </div>
          <div class="fr-help-faq-a">Sabemos que uma reprovação é angustiante, por isso é importante seguir as etapas com atenção enviando dados corretos e documentos legíveis. Se uma recusa ocorreu, revise as informações enviadas no e-mail de reprovação e em caso de dúvida, entre em contato com nosso suporte.
            <button class="fr-help-back-btn" onclick="frCloseHelp(null, true)">Voltar para verificação</button>
          </div>
        </div>
      </div>

      <div class="fr-help-contact-section">
        <div class="fr-help-contact-title">Ainda com dúvidas?</div>
        <button class="fr-help-contact-btn" onclick="frOpenContact()">Entrar em contato</button>
      </div>
    </div>
  </div>
</div>

<!-- Contact mini bottom sheet -->
<div class="fr-contact-overlay" id="frContactOverlay" onclick="frCloseContact(event)">
  <div class="fr-contact-sheet" id="frContactSheet">
    <div class="fr-help-handle"></div>
    <div class="fr-contact-title">Como prefere falar conosco?</div>
    <div class="fr-contact-options">
      <a class="fr-contact-option" href="mailto:contato@frameag.com?subject=D%C3%BAvidas%20no%20processo%20de%20KYC%20do%20agendamento&body=Ol%C3%A1!%20Estou%20realizando%20o%20procedimento%20de%20KYC%20da%20plataforma%20e%20estou%20com%20d%C3%BAvidas%2Fproblemas.%20Podem%20me%20auxiliar%3F%0A%0AMeu%20nome%20%C3%A9%3A%20%0AMeu%20telefone%3A%20%0APreciso%20de%20ajuda%20com%3A%20" target="_blank">
        <div class="fr-contact-icon"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z"/><path d="M2 8l7.501 6.001a4 4 0 0 0 4.998 0L22 8"/></svg></div>
        <div class="fr-contact-info">
          <div class="fr-contact-name">E-mail</div>
          <div class="fr-contact-desc">contato@frameag.com</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>
      </a>
      <a class="fr-contact-option fr-contact-option-recommended" href="https://t.me/suporteframebot?start=kyc-agendamento-duvidascentral" target="_blank">
        <div class="fr-contact-icon"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><g clip-path="url(#clip0_331_272)"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM12.43 8.859c-1.167.485-3.5 1.49-6.998 3.014-.568.226-.866.447-.893.663-.046.366.412.51 1.034.705.085.027.173.054.263.084.613.199 1.437.432 1.865.441.389.008.823-.152 1.302-.48 3.268-2.207 4.955-3.322 5.061-3.346.075-.017.179-.039.249.024.07.062.063.18.056.212-.046.193-1.84 1.862-2.77 2.726-.29.269-.495.46-.537.504-.094.097-.19.19-.282.279-.57.548-.996.96.024 1.632.49.323.882.59 1.273.856.427.291.853.581 1.405.943.14.092.274.187.405.28.497.355.944.673 1.496.623.32-.03.652-.331.82-1.23.397-2.126 1.179-6.73 1.36-8.628a2.111 2.111 0 0 0-.02-.472.506.506 0 0 0-.172-.325c-.143-.117-.365-.142-.465-.14-.451.008-1.143.249-4.476 1.635z"/></g><defs><clipPath id="clip0_331_272"><rect width="24" height="24"/></clipPath></defs></svg></div>
        <div class="fr-contact-info">
          <div class="fr-contact-name">Telegram 24h <span class="fr-recommended-badge">Recomendado</span></div>
          <div class="fr-contact-desc">Resposta em até 5 minutos</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>
      </a>
      <a class="fr-contact-option" href="https://frameag.com/contato" target="_blank">
        <div class="fr-contact-icon"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 19c3.771 0 5.657 0 6.828-1.172C22 16.657 22 14.771 22 11c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172 2 5.343 2 7.229 2 11c0 3.771 0 5.657 1.172 6.828.653.654 1.528.943 2.828 1.07"/><path d="M12 11v.01"/><path d="M8 11v.01"/><path d="M16 11v.01"/><path d="M14 19c-1.236 0-2.598.5-3.841 1.145-1.998 1.037-2.997 1.556-3.489 1.225-.492-.33-.399-1.355-.212-3.404L6.5 17.5"/></svg></div>
        <div class="fr-contact-info">
          <div class="fr-contact-name">Chat</div>
          <div class="fr-contact-desc">frameag.com/contato</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>
      </a>
    </div>
  </div>
</div>

<!-- Orientation alert -->
<div class="fr-orientation-alert">
  <div style="font-size:48px;">📱</div>
  <div class="fr-h2">Gire o dispositivo</div>
  <p class="fr-sub">Por favor, use o dispositivo na vertical para a melhor experiência.</p>
</div>
`;

// ===== UTILITIES =====
let toastTimeout;
function frShowToast(msg, type='', duration=3000) {
  const t = document.getElementById('frToast');
  t.textContent = msg;
  t.className = `fr-toast${type?' '+type:''}`;
  requestAnimationFrame(() => { t.classList.add('show'); });
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { t.classList.remove('show'); }, duration);
}

function frShowWarning(title, msg) {
  document.getElementById('frWarningTitle').textContent = title;
  document.getElementById('frWarningMsg').textContent = msg;
  document.getElementById('frWarningPopup').classList.add('show');
}
// frCloseWarning is defined later with no-hotel reset logic

function frShowErr(id, msg) {
  const el = document.getElementById(id+'Err');
  if(!el) return;
  el.textContent = msg;
  el.classList.add('show');
  const inp = document.getElementById(id);
  if(inp) inp.classList.add('error');
}
function frClearErr(id) {
  const el = document.getElementById(id+'Err');
  if(el) { el.classList.remove('show'); el.textContent=''; }
  const inp = document.getElementById(id);
  if(inp) inp.classList.remove('error');
}

function frShowLoading(messages, callback, delay=3000) {
  const ov = document.getElementById('frLoadingOverlay');
  const msg = document.getElementById('frLoadingMsg');
  ov.classList.add('show');
  let i = 0;
  msg.textContent = messages[0];
  const iv = setInterval(() => { i=(i+1)%messages.length; msg.textContent=messages[i]; }, 900);
  setTimeout(() => {
    clearInterval(iv);
    ov.classList.remove('show');
    if(callback) callback();
  }, delay);
}

function frSetBtnLoading(btnId, loading) {
  const btn = document.getElementById(btnId);
  if(!btn) return;
  if(loading) btn.classList.add('loading');
  else btn.classList.remove('loading');
  btn.disabled = loading;
}

function frEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function frCheckProhibited(val) {
  const v = val.toLowerCase().trim();
  const hit = FR_PROHIBITED.find(w => v.includes(w));
  if(hit) {
    try { console.warn('[FR-SECURITY] Prohibited attempt:', hit, new Date().toISOString()); } catch(e){}
  }
  return !!hit;
}

function frFormatDate(d) {
  if(!d) return '';
  const dt = new Date(d+'T12:00:00');
  return dt.toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'});
}

// ===== STEP NAVIGATION =====
function frShowStep(n) {
  document.querySelectorAll('.fr-step').forEach(s => s.classList.remove('active'));
  const s = document.getElementById('frStep'+n);
  if(s) { s.classList.add('active'); }
  frState.step = n;
  frSaveState();
  frUpdateProgress();
  window.scrollTo(0,0);
  document.getElementById('frCard').scrollTop = 0;

  if(n===4) { frPopulateStep4(); }
  if(n===6) { frPopulateCheckout(); }

  if(typeof clarity === 'function') clarity('event', 'step_completed', {step: n});
}

function frUpdateProgress() {
  const pct = (frState.step / frState.totalSteps) * 100;
  document.getElementById('frProgress').style.width = pct+'%';
  const bar = document.getElementById('frProgressBar');
  if(bar) bar.setAttribute('aria-valuenow', Math.round(pct));
  document.getElementById('frStepCurrent').textContent = 'Etapa '+frState.step;
  document.getElementById('frStepTotal').textContent = 'de '+frState.totalSteps;
}

// ===== STEP 1: VALIDATIONS =====
function frValidateStep1() {
  let valid = true;
  const nome = document.getElementById('frNome').value.trim();
  const cpf = document.getElementById('frCpf').value.trim();
  const rua = document.getElementById('frRua').value.trim();
  const bairro = document.getElementById('frBairro').value.trim();
  const numero = document.getElementById('frNumero').value.trim();
  const cidade = document.getElementById('frCidade').value.trim();
  const estado = document.getElementById('frEstado').value;

  // Nome: min 2 palavras
  if(nome.split(/\s+/).filter(w=>w.length>0).length < 2) {
    frShowErr('frNome','Informe seu nome e sobrenome, por favor.');
    valid = false;
  } else if(frCheckProhibited(nome)) {
    frShowErr('frNome','Esse nome contém palavras não permitidas.');
    valid = false;
  } else {
    frClearErr('frNome');
  }

  if(!FR_CPF_REGEX.test(cpf) || !frValidateCPF(cpf)) {
    frShowErr('frCpf','CPF inválido. Verifique e tente novamente.');
    valid = false;
  } else {
    frClearErr('frCpf');
  }

  if(rua.length < 3) { frShowErr('frRua','Informe a rua.'); valid=false; } else frClearErr('frRua');
  if(bairro.length < 2) { frShowErr('frBairro','Informe seu bairro.'); valid=false; } else frClearErr('frBairro');
  if(!numero.trim()) { frShowErr('frNumero','Informe o número.'); valid=false; } else frClearErr('frNumero');
  if(cidade.length < 2) { frShowErr('frCidade','Informe sua cidade.'); valid=false; } else frClearErr('frCidade');
  if(!estado) { frShowErr('frEstado','Selecione seu estado.'); valid=false; } else frClearErr('frEstado');

  return valid;
}

function frStep1Next() {
  if(!frValidateStep1()) return;
  frState.userData.nome = document.getElementById('frNome').value.trim();
  frState.userData.cpf = document.getElementById('frCpf').value.trim();
  frState.userData.rua = document.getElementById('frRua').value.trim();
  frState.userData.bairro = document.getElementById('frBairro').value.trim();
  frState.userData.numero = document.getElementById('frNumero').value.trim();
  frState.userData.cidade = document.getElementById('frCidade').value.trim();
  frState.userData.estado = document.getElementById('frEstado').value;
  frSaveState();

  frSetBtnLoading('frStep1Btn', true);
  setTimeout(() => {
    frSetBtnLoading('frStep1Btn', false);
    document.getElementById('frPremiumOverlay').classList.add('show');
  }, 800);
}

function frAcceptPremium() {
  document.getElementById('frPremiumOverlay').classList.remove('show');
  frShowStep(2);
}
function frDeclinePremium() {
  document.getElementById('frPremiumOverlay').classList.remove('show');
  frShowStep(2);
}

// CPF mask
function frCpfMask(e) {
  let v = e.target.value.replace(/\D/g,'');
  if(v.length>11) v=v.slice(0,11);
  v = v.replace(/(\d{3})(\d)/,'$1.$2');
  v = v.replace(/(\d{3})\.(\d{3})(\d)/,'$1.$2.$3');
  v = v.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/,'$1.$2.$3-$4');
  e.target.value = v;
}

// City autocomplete (step 1)
const frNormalize = s => s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
let frAutoTimer;
function frInitCityAutocomplete() {
  const inp = document.getElementById('frCidade');
  const drop = document.getElementById('frCidadeAuto');
  inp.addEventListener('input', () => {
    clearTimeout(frAutoTimer);
    frAutoTimer = setTimeout(() => {
      const q = frNormalize(inp.value.trim());
      if(q.length < 2) { drop.classList.remove('show'); return; }
      const matches = FR_CITIES_BR.filter(c => frNormalize(c.n).startsWith(q) || frNormalize(c.n).includes(q)).slice(0,8);
      if(!matches.length) { drop.classList.remove('show'); return; }
      drop.innerHTML = matches.map(c => `
        <div class="fr-autocomplete-item" onclick="frSelectCity1('${frEscape(c.n)}','${c.s}')">
          <span style="color:var(--fr-bronze);flex-shrink:0;">${ICONS.location}</span>
          <span>${c.n}, <strong>${c.s}</strong></span>
        </div>
      `).join('');
      drop.classList.add('show');
    }, 180);
  });
  inp.addEventListener('blur', () => setTimeout(()=>drop.classList.remove('show'),200));
}

function frSelectCity1(name, state) {
  document.getElementById('frCidade').value = name;
  document.getElementById('frEstado').value = state;
  document.getElementById('frCidadeAuto').classList.remove('show');
  frCheckStep1Complete();
}

function frCheckStep1Complete() {
  const nome = document.getElementById('frNome').value.trim();
  const cpf = document.getElementById('frCpf').value.trim();
  const rua = document.getElementById('frRua').value.trim();
  const bairro = document.getElementById('frBairro').value.trim();
  const numero = document.getElementById('frNumero').value.trim();
  const cidade = document.getElementById('frCidade').value.trim();
  const estado = document.getElementById('frEstado').value;
  const ok = nome&&cpf&&rua&&bairro&&numero&&cidade&&estado;
  document.getElementById('frStep1Btn').disabled = !ok;
}

// ===== STEP 2: PERFIL =====
function frSelectDoc(type) {
  frState.docType = type;
  document.querySelectorAll('.fr-doc-card').forEach(c => c.classList.remove('selected'));
  const card = document.querySelector(`.fr-doc-card[data-doc="${type}"]`);
  if(card) card.classList.add('selected');
  document.getElementById('frStep3Btn').disabled = false;
}

function frCheckStep2Complete() {
  const dn = document.getElementById('frDisplayName').value.trim();
  const age = document.getElementById('frShowAge').value;
  const terms = document.getElementById('frTerms').checked;
  document.getElementById('frStep2Btn').disabled = !(dn && age && terms);
}

function frStep2Next() {
  const dn = document.getElementById('frDisplayName').value.trim();
  if(frCheckProhibited(dn)) {
    frShowErr('frDisplayName','Esse nome de exibição contém palavras não permitidas.');
    frState.warningCount++;
    if(frState.warningCount>=3) {
      frShowWarning('Aviso de uso inadequado','Foram detectadas palavras inadequadas repetidamente. Continuar desta forma poderá resultar no bloqueio temporário de sua conta e cancelamento do agendamento.');
    }
    return;
  }
  frClearErr('frDisplayName');
  frState.userData.displayName = dn;
  frState.userData.showAge = document.getElementById('frShowAge').value;
  frSaveState();
  frShowStep(3);
}

// Profile photo
function frSetupProfilePhoto() {
  const inp = document.getElementById('frProfilePic');
  inp.addEventListener('change', e => {
    const f = e.target.files[0];
    if(!f) return;
    const url = URL.createObjectURL(f);
    frShowPhotoPreview(url);
    // Reset so re-selecting same file still fires
    e.target.value = '';
  });
}
function frTriggerPhotoInput() {
  document.getElementById('frProfilePic').click();
}
function frShowPhotoPreview(url) {
  document.getElementById('frPhotoPreviewBig').src = url;
  document.getElementById('frCircleProgress').classList.remove('animating');
  // Always hide tips sheet on fresh open — only shows on explicit "Dicas" click
  document.getElementById('frPhotoTipsSheet').classList.remove('show');
  document.getElementById('frPhotoOverlay').classList.add('show');
  document.getElementById('frUsarFotoBtn').classList.remove('loading');
}
function frClosePhotoOverlay() {
  document.getElementById('frPhotoOverlay').classList.remove('show');
  document.getElementById('frPhotoTipsSheet').classList.remove('show');
}
function frTogglePhotoTips() {
  document.getElementById('frPhotoTipsSheet').classList.toggle('show');
}
function frRetakePhoto() {
  document.getElementById('frClosePhotoOverlay');
  document.getElementById('frPhotoOverlay').classList.remove('show');
  setTimeout(() => document.getElementById('frProfilePic').click(), 200);
}
function frUsarEstaFoto() {
  const btn = document.getElementById('frUsarFotoBtn');
  btn.classList.add('loading');
  const prog = document.getElementById('frCircleProgress');
  // Start circle animation
  requestAnimationFrame(() => prog.classList.add('animating'));
  setTimeout(() => {
    // Apply photo to step 2 circle
    const src = document.getElementById('frPhotoPreviewBig').src;
    const label = document.getElementById('frProfileLabel');
    const preview = document.getElementById('frProfilePreview');
    preview.src = src;
    label.classList.add('has-file');
    // Slide down overlay
    document.getElementById('frPhotoOverlay').classList.remove('show');
    document.getElementById('frPhotoTipsSheet').classList.remove('show');
    btn.classList.remove('loading');
    frShowToast('Foto adicionada!', 'success');
  }, 1800);
}

// ===== STEP 3: DOC TYPE =====
// handled by frSelectDoc

// ===== STEP 4: UPLOAD =====
function frPopulateStep4() {
  document.getElementById('frCpfDisplay').textContent = frState.userData.cpf || '—';
  document.getElementById('frDocTypeDisplay').textContent = frState.docType ? `Documento: ${frState.docType}` : '';
  // Always reset upload inputs so they are never stuck disabled on restart
  const frontInp = document.getElementById('frDocFront');
  const backInp = document.getElementById('frDocBack');
  frontInp.disabled = false;
  backInp.disabled = false;
  // If both already uploaded in this session, re-disable to prevent duplicate
  if(frState.docFrontFile && frState.docBackFile) {
    frontInp.disabled = true;
    backInp.disabled = true;
  }
}

function frSetupDocUpload() {
  const frontInp = document.getElementById('frDocFront');
  const backInp = document.getElementById('frDocBack');

  frontInp.addEventListener('change', e => {
    const f = e.target.files[0];
    if(!f) return;
    frState.docFrontFile = { name: f.name, size: f.size };
    const circle = document.getElementById('frDocFrontCircle');
    const preview = document.getElementById('frDocFrontPreview');
    preview.src = URL.createObjectURL(f);
    circle.classList.add('has-file');
    frSaveState();
    frCheckStep4Complete();
  });

  backInp.addEventListener('change', e => {
    const f = e.target.files[0];
    if(!f) return;
    // Validate not same as front
    if(frState.docFrontFile && f.name === frState.docFrontFile.name && f.size === frState.docFrontFile.size) {
      frShowErr('frDoc','Parece que você enviou o mesmo arquivo. As imagens da frente e do verso devem ser diferentes.');
      e.target.value = '';
      return;
    }
    frClearErr('frDoc');
    frState.docBackFile = { name: f.name, size: f.size };
    const circle = document.getElementById('frDocBackCircle');
    const preview = document.getElementById('frDocBackPreview');
    preview.src = URL.createObjectURL(f);
    circle.classList.add('has-file');
    frSaveState();
    frCheckStep4Complete();
  });
}

function frCheckStep4Complete() {
  const ok = frState.docFrontFile && frState.docBackFile;
  document.getElementById('frStep4Btn').disabled = !ok;
}

function frStep4Next() {
  if(!frState.docFrontFile || !frState.docBackFile) return;
  frSetBtnLoading('frStep4Btn', true);
  frShowLoading(['Verificando documentos...','Analisando dados...','Quase pronto!'], () => {
    frSetBtnLoading('frStep4Btn', false);
    frShowStep(5);
  }, 2800);
}

// ===== STEP 5: HOSPEDAGEM =====

// City overlay
function frOpenCityOverlay() {
  document.getElementById('frCityOverlay').classList.add('show');
  document.getElementById('frCitySearch').value = '';
  document.getElementById('frCitySearchClear').classList.remove('show');
  frRenderCityPopular();
  setTimeout(() => document.getElementById('frCitySearch').focus(), 200);
}

function frCloseCityOverlay() {
  document.getElementById('frCityOverlay').classList.remove('show');
}

function frClearCitySearch() {
  document.getElementById('frCitySearch').value = '';
  document.getElementById('frCitySearchClear').classList.remove('show');
  frRenderCityPopular();
  document.getElementById('frCitySearch').focus();
}

const FR_CUSTOM_CITY_HTML = `
  <div class="fr-city-custom-option" onclick="frShowCustomCity();frCloseCityOverlay();">
    <div class="fr-city-custom-option-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
    <div class="fr-city-custom-option-text">
      <div class="fr-city-custom-option-title">Minha cidade não está na lista</div>
      <div class="fr-city-custom-option-sub">Entre em contato com o time da Frame Agency após concluir para verificar disponibilidade</div>
    </div>
  </div>
`;
function frRenderCityPopular() {
  const results = document.getElementById('frCityResults');
  const popular = ['São Paulo, SP','Rio de Janeiro, RJ','Brasília, DF','Belo Horizonte, MG','Curitiba, PR','Porto Alegre, RS','Florianópolis, SC','Salvador, BA'];
  results.innerHTML = `
    <div class="fr-city-section-title">Cidades disponíveis</div>
    ${popular.map(c => {
      const parts = c.split(', ');
      return `<div class="fr-city-item" onclick="frSelectHotelCity('${frEscape(c)}')">
        <div class="fr-city-item-icon">${ICONS.location}</div>
        <div class="fr-city-item-name">
          <strong>${parts[0]}</strong>
          <div class="fr-city-item-state">${parts[1]}</div>
        </div>
      </div>`;
    }).join('')}
    ${FR_CUSTOM_CITY_HTML}
  `;
}

function frFilterHotelCities(q) {
  const results = document.getElementById('frCityResults');
  const lower = q.toLowerCase();
  const matches = FR_HOTEL_CITIES.filter(c => c.toLowerCase().includes(lower));
  if(!matches.length) {
    results.innerHTML = `
      <div class="fr-city-no-results">
        <div style="display:flex;align-items:center;justify-content:center;margin-bottom:12px;color:var(--fr-gray);">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" style="width:40px;height:40px;opacity:0.55;"><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L308 576C297.5 561.4 289 545.3 282.9 528L208 528L208 448C208 430.3 222.3 416 240 416L272 416C274 416 276 416.2 277.9 416.5C283.9 392.9 294.2 371.1 308 352L304 352C295.2 352 288 344.8 288 336L288 304C288 295.2 295.2 288 304 288L336 288C344.8 288 352 295.2 352 304L352 308C379.5 288.2 412.3 275.6 448 272.6L448 128C448 92.7 419.3 64 384 64L128 64zM160 176C160 167.2 167.2 160 176 160L208 160C216.8 160 224 167.2 224 176L224 208C224 216.8 216.8 224 208 224L176 224C167.2 224 160 216.8 160 208L160 176zM304 160L336 160C344.8 160 352 167.2 352 176L352 208C352 216.8 344.8 224 336 224L304 224C295.2 224 288 216.8 288 208L288 176C288 167.2 295.2 160 304 160zM160 304C160 295.2 167.2 288 176 288L208 288C216.8 288 224 295.2 224 304L224 336C224 344.8 216.8 352 208 352L176 352C167.2 352 160 344.8 160 336L160 304zM464 608C543.5 608 608 543.5 608 464C608 384.5 543.5 320 464 320C384.5 320 320 384.5 320 464C320 543.5 384.5 608 464 608zM486.6 464L523.3 500.7C529.5 506.9 529.5 517.1 523.3 523.3C517.1 529.5 506.9 529.5 500.7 523.3L464 486.6L427.3 523.3C421.1 529.5 410.9 529.5 404.7 523.3C398.5 517.1 398.5 506.9 404.7 500.7L441.4 464L404.7 427.3C398.5 421.1 398.5 410.9 404.7 404.7C410.9 398.5 421.1 398.5 427.3 404.7L464 441.4L500.7 404.7C506.9 398.5 517.1 398.5 523.3 404.7C529.5 410.9 529.5 421.1 523.3 427.3L486.6 464z"/></svg>
        </div>
        <div style="font-weight:600;margin-bottom:6px;">Nenhuma cidade encontrada</div>
        <div style="font-size:0.82rem;">Tente outra busca ou clique em "Minha cidade não está na lista" abaixo.</div>
      </div>
      ${FR_CUSTOM_CITY_HTML}`;
    return;
  }
  results.innerHTML = `
    <div class="fr-city-section-title">Resultados para "${q}"</div>
    ${matches.map(c => {
      const parts = c.split(', ');
      return `<div class="fr-city-item" onclick="frSelectHotelCity('${frEscape(c)}')">
        <div class="fr-city-item-icon">${ICONS.location}</div>
        <div class="fr-city-item-name">
          <strong>${parts[0]}</strong>
          <div class="fr-city-item-state">${parts[1]}</div>
        </div>
      </div>`;
    }).join('')}
    ${FR_CUSTOM_CITY_HTML}
  `;
}

function frSelectHotelCity(city) {
  frState.hotelCity = city;
  frState.hotel = null;
  frState.noHotel = false;
  frSaveState();
  frCloseCityOverlay();
  const btn = document.getElementById('frCityBtn');
  btn.classList.add('selected');
  document.getElementById('frCityBtnText').textContent = city;
  // Hide tutorial
  const tutorial = document.getElementById('frCityTutorial');
  if(tutorial) tutorial.style.display = 'none';
  // Show dates section
  document.getElementById('frDatesSection').style.display = 'block';
  // Show hotels section
  document.getElementById('frHotelSection').style.display = 'block';
  document.getElementById('frHotelCityLabel').textContent = city;
  frRenderHotels(city);
  frUpdateConfirmSheet();
  frCheckStep5Complete();
}

function frRenderHotels(city) {
  const list = document.getElementById('frHotelList');
  const hotels = FR_HOTELS[city] || [];
  if(!hotels.length) {
    list.innerHTML = `<div style="text-align:center;padding:32px;color:var(--fr-gray);font-size:0.875rem;">Nenhum hotel parceiro cadastrado nesta cidade ainda.</div>`;
    return;
  }
  list.innerHTML = hotels.map((h, i) => `
    <div class="fr-hotel-card ${frState.hotel && frState.hotel.name===h.name ? 'selected' : ''}" id="frHotelCard${i}" onclick="frSelectHotel(${i})">
      <div class="fr-hotel-img-wrap">
        <img class="fr-hotel-img" src="${h.largeImg}" alt="${frEscape(h.name)}" loading="lazy" onerror="this.src='${h.profileImg}'">
        <div class="fr-hotel-selo">${frEscape(h.selo)}</div>
        <div class="fr-hotel-selected-badge">${ICONS.check}</div>
      </div>
      <div class="fr-hotel-body">
        <div class="fr-hotel-name">${frEscape(h.name)}</div>
        <div class="fr-hotel-desc">${frEscape(h.desc)}</div>
        <div class="fr-hotel-services">
          ${h.services.slice(0,4).map(s=>`<div class="fr-hotel-service-chip">${frEscape(s)}</div>`).join('')}
        </div>
        <button class="fr-hotel-select-btn" id="frHotelBtn${i}">
          ${frState.hotel && frState.hotel.name===h.name ? `${ICONS.check} Selecionado` : `Selecionar`}
        </button>
      </div>
    </div>
  `).join('');
}

function frSelectHotel(idx) {
  const hotel = FR_HOTELS[frState.hotelCity][idx];
  if(!hotel) return;
  frState.hotel = hotel;
  frSaveState();
  frRenderHotels(frState.hotelCity);
  frUpdateConfirmSheet();
  frCheckStep5Complete();
  frShowToast('Hotel selecionado!', 'success');
}
function frUpdateConfirmSheet() {
  const sheet = document.getElementById('frConfirmSheet');
  const btn = document.getElementById('frSheetConfirmBtn');
  const hotelLabel = document.getElementById('frSheetHotelLabel');
  const hotelName = document.getElementById('frSheetHotelName');
  const datesEl = document.getElementById('frSheetDates');
  if(frState.hotel || frState.checkIn || frState.hotelCity) {
    sheet.classList.add('show');
    hotelLabel.textContent = frState.hotelCity || 'Hotel selecionado';
    if(frState.hotel) {
      hotelName.textContent = frState.hotel.name;
      hotelName.classList.remove('placeholder');
    } else {
      hotelName.textContent = 'Selecione seu hotel';
      hotelName.classList.add('placeholder');
    }
    if(frState.checkIn && frState.checkOut) {
      datesEl.textContent = frFormatDate(frState.checkIn) + ' → ' + frFormatDate(frState.checkOut);
    } else if(frState.checkIn) {
      datesEl.textContent = 'Check-in: ' + frFormatDate(frState.checkIn);
    } else {
      datesEl.textContent = 'Selecione as datas';
    }
    const ok = frState.hotelCity && frState.hotel && frState.checkIn && frState.checkOut;
    btn.disabled = !ok;
  }
}

// Calendar
let frCalViewDate = new Date();

function frOpenCalendar(mode) {
  frState.calMode = mode;
  frCalViewDate = new Date();
  document.getElementById('frCalTitle').textContent = mode==='checkin' ? 'Check-in | Quando?' : 'Check-out | Quando?';
  document.getElementById('frCalOverlay').classList.add('show');
  frRenderCalendar();
}

function frCloseCalendar() {
  document.getElementById('frCalOverlay').classList.remove('show');
}

function frClearDates() {
  frState.checkIn = null;
  frState.checkOut = null;
  frSaveState();
  frUpdateDateBoxes();
  frRenderCalendar();
  document.getElementById('frCalSave').disabled = true;
}

function frSaveDates() {
  frCloseCalendar();
  frUpdateDateBoxes();
  frCheckStep5Complete();
}

function frUpdateDateBoxes() {
  frUpdateConfirmSheet();
  const ci = document.getElementById('frCheckInVal');
  const co = document.getElementById('frCheckOutVal');
  const cib = document.getElementById('frCheckInBox');
  const cob = document.getElementById('frCheckOutBox');
  if(frState.checkIn) {
    ci.textContent = frFormatDate(frState.checkIn);
    ci.classList.remove('placeholder');
    cib.classList.add('filled');
  } else {
    ci.textContent = 'Adicionar data';
    ci.classList.add('placeholder');
    cib.classList.remove('filled');
  }
  if(frState.checkOut) {
    co.textContent = frFormatDate(frState.checkOut);
    co.classList.remove('placeholder');
    cob.classList.add('filled');
  } else {
    co.textContent = 'Adicionar data';
    co.classList.add('placeholder');
    cob.classList.remove('filled');
  }
}

function frRenderCalendar() {
  const body = document.getElementById('frCalBody');
  const today = new Date();
  today.setHours(0,0,0,0);
  let html = '';
  for(let m = 0; m < 6; m++) {
    const dt = new Date(frCalViewDate.getFullYear(), frCalViewDate.getMonth()+m, 1);
    const year = dt.getFullYear();
    const month = dt.getMonth();
    const monthName = dt.toLocaleDateString('pt-BR',{month:'long',year:'numeric'});
    const firstDay = new Date(year,month,1).getDay();
    const daysInMonth = new Date(year,month+1,0).getDate();
    html += `<div class="fr-cal-month-title">${monthName}</div><div class="fr-cal-grid">`;
    // empty cells
    for(let d=0;d<firstDay;d++) html += `<div class="fr-cal-day empty"></div>`;
    for(let d=1;d<=daysInMonth;d++) {
      const date = new Date(year,month,d);
      date.setHours(0,0,0,0);
      const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
      const isPast = date < today;
      const isCheckIn = frState.checkIn === dateStr;
      const isCheckOut = frState.checkOut === dateStr;
      const ci = frState.checkIn ? new Date(frState.checkIn+'T12:00:00') : null;
      const co = frState.checkOut ? new Date(frState.checkOut+'T12:00:00') : null;
      let inRange = ci && co && date > ci && date < co;
      let cls = 'fr-cal-day';
      // Max 2 days limit: disable dates beyond checkin+2
      const maxOutDate = ci ? new Date(frState.checkIn + 'T12:00:00') : null;
      if(maxOutDate) maxOutDate.setDate(maxOutDate.getDate() + 2);
      const beyondMax = frState.calMode === 'checkout' && ci && maxOutDate && date > maxOutDate;
      const isDisabled = isPast || beyondMax;
      if(isDisabled) cls += ' disabled';
      if(isCheckIn) cls += ' check-in';
      if(isCheckOut) cls += ' check-out';
      if(inRange) cls += ' in-range';
      html += `<div class="${cls}" ${!isDisabled?`onclick="frSelectCalDay('${dateStr}')"`:''}>${d}</div>`;
    }
    html += '</div>';
  }
  body.innerHTML = html;
  // Update save button
  document.getElementById('frCalSave').disabled = !(frState.checkIn && frState.checkOut);
}

function frAddDays(dateStr, days) {
  const d = new Date(dateStr + 'T12:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0,10);
}
function frSelectCalDay(dateStr) {
  if(frState.calMode === 'checkin') {
    frState.checkIn = dateStr;
    // Auto-set checkout to next day
    frState.checkOut = frAddDays(dateStr, 1);
    frState.calMode = 'checkout';
    document.getElementById('frCalTitle').textContent = 'Check-out | Quando?';
    document.getElementById('frCalSubtitle').textContent = 'Seu check-out foi preenchido de forma automática. Você pode ajustar para até 2 dias.';
  } else {
    if(!frState.checkIn || dateStr <= frState.checkIn) {
      frShowToast('Check-out só pode ser realizado após o check-in.', 'error');
      return;
    }
    // Max 2 days
    const maxOut = frAddDays(frState.checkIn, 2);
    if(dateStr > maxOut) {
      frShowToast('Sua estadia deve ter no máximo 2 dias.', 'error');
      return;
    }
    frState.checkOut = dateStr;
  }
  frSaveState();
  frRenderCalendar();
  document.getElementById('frCalSave').disabled = !(frState.checkIn && frState.checkOut);
}

function frShowCustomCity() {
  frShowWarning(
    'Cidade não disponível',
    'Parece que sua cidade ainda não possui hotéis parceiros cadastrados. Entre em contato com o time da Frame Agency para alinhar os detalhes da sua hospedagem.'
  );
  const btn = document.getElementById('frContinueNoHotelBtn');
  if(btn) btn.style.display = '';
}

function frContinueWithoutHotel() {
  frState.noHotel = true;
  frState.hotel = null;
  frSaveState();
  frCloseWarning();
  frCloseCityOverlay();
  // Hide tutorial, show dates section so user can still select dates (optional)
  const tutorial = document.getElementById('frCityTutorial');
  if(tutorial) tutorial.style.display = 'none';
  const btn = document.getElementById('frCityBtn');
  btn.classList.add('selected');
  document.getElementById('frCityBtnText').textContent = 'Cidade personalizada';
  // Show confirm sheet with no-hotel state and go to checkout directly
  document.getElementById('frConfirmSheet').classList.remove('show');
  frSetBtnLoading('frSheetConfirmBtn', false);
  frShowLoading(['Preparando sua experiência...','Quase lá!'], () => {
    frShowStep(6);
  }, 1600);
}

function frCloseWarning() {
  document.getElementById('frWarningPopup').classList.remove('show');
  // Reset the no-hotel button visibility for next warning calls
  const btn = document.getElementById('frContinueNoHotelBtn');
  if(btn) btn.style.display = 'none';
}

function frCheckStep5Complete() {
  const ok = frState.hotelCity && frState.hotel && frState.checkIn && frState.checkOut;
  const btn = document.getElementById('frSheetConfirmBtn');
  if(btn) btn.disabled = !ok;
}

function frStep5Next() {
  if(!frState.hotel || !frState.checkIn || !frState.checkOut) {
    frShowToast('Para continuar, selecione a cidade, datas e um hotel parceiro.', 'error');
    return;
  }
  frSetBtnLoading('frSheetConfirmBtn', true);
  setTimeout(() => {
    frSetBtnLoading('frSheetConfirmBtn', false);
    document.getElementById('frConfirmSheet').classList.remove('show');
    frShowStep(6);
  }, 700);
}

// ===== STEP 6: CHECKOUT =====
function frPopulateCheckout() {
  const hotel = frState.hotel;
  const hotelCard = document.getElementById('frCheckoutHotelCard');
  const noHotelCard = document.getElementById('frCheckoutNoHotelCard');

  if(frState.noHotel) {
    hotelCard.style.display = 'none';
    noHotelCard.style.display = 'flex';
  } else if(hotel) {
    hotelCard.style.display = 'flex';
    noHotelCard.style.display = 'none';
    document.getElementById('frCheckoutHotelImg').src = hotel.largeImg || hotel.profileImg;
    document.getElementById('frCheckoutHotelName').textContent = hotel.name;
  } else {
    // fallback: hide both
    hotelCard.style.display = 'none';
    noHotelCard.style.display = 'none';
  }

  // Dates
  const ci = frState.checkIn ? frFormatDate(frState.checkIn) : '—';
  const co = frState.checkOut ? frFormatDate(frState.checkOut) : '—';
  document.getElementById('frResumoDates').textContent = ci + ' — ' + co;
  // Name: use full name from step 1 (load from sessionStorage if masked)
  frLoadSensitive();
  const fullName = frState.userData.nome || frState.userData._nomeHash || 'Hóspede';
  document.getElementById('frResumoNome').textContent = fullName;
  // Reset upsells
  frState.upsell1 = false;
  frState.upsell2 = false;
  frSaveState();
  frUpdateUpsellUI();
}

function frToggleUpsell(n) {
  if(n===1) { frState.upsell1 = !frState.upsell1; }
  if(n===2) { frState.upsell2 = !frState.upsell2; }
  frSaveState();
  frUpdateUpsellUI();
}

function frUpdateUpsellUI() {
  const c1 = document.getElementById('frUpsell1Card');
  const c2 = document.getElementById('frUpsell2Card');
  const chk1 = document.getElementById('frUpsell1Check');
  const chk2 = document.getElementById('frUpsell2Check');
  if(frState.upsell1) {
    c1.classList.add('checked');
    chk1.innerHTML = ICONS.check;
    chk1.style.background = 'var(--fr-bronze)';
    chk1.style.color = 'white';
  } else {
    c1.classList.remove('checked');
    chk1.innerHTML = '';
    chk1.style.background = '';
    chk1.style.color = '';
  }
  if(frState.upsell2) {
    c2.classList.add('checked');
    chk2.innerHTML = ICONS.check;
    chk2.style.background = 'var(--fr-bronze)';
    chk2.style.color = 'white';
  } else {
    c2.classList.remove('checked');
    chk2.innerHTML = '';
    chk2.style.background = '';
    chk2.style.color = '';
  }
  const hasUpsell = frState.upsell1 || frState.upsell2;
  const label = document.getElementById('frConfirmBtnLabel');
  const note = document.getElementById('frPaymentNote');
  if(hasUpsell) {
    label.textContent = 'Finalizar com adicionais';
    note.style.display = 'flex';
    note.style.alignItems = 'center';
    note.style.gap = '6px';
  } else {
    label.textContent = 'Continuar agora';
    note.style.display = 'none';
  }
}

function frProceedCheckout() {
  frSetBtnLoading('frConfirmBtn', true);
  setTimeout(() => {
    frSetBtnLoading('frConfirmBtn', false);
    frShowMessageStep();
  }, 500);
}

// ===== STEP 7: DOCS RECEIVED =====
// Button handled inline onclick="frStartKYC()"

// ===== TOQUE PESSOAL (Message Step) =====
function frShowMessageStep() {
  document.querySelectorAll('.fr-step').forEach(s => s.classList.remove('active'));
  const s = document.getElementById('frStepMessage');
  if(s) s.classList.add('active');
  window.scrollTo(0,0);
  // Keep current progress from step 6 (don't increment)
}

function frMsgCounter(el) {
  const remaining = 200 - el.value.length;
  const counter = document.getElementById('frMsgCounter');
  counter.textContent = remaining + ' caracteres restantes';
  if(remaining <= 30) counter.classList.add('warn');
  else counter.classList.remove('warn');
}

function frSendMessage() {
  const msg = document.getElementById('frMsgTextarea').value.trim();

  // Collect selected preference chips (handle sublevel)
  let chips = [];
  const subLevel = frState.currentSubLevel;
  if(subLevel) {
    chips.push(subLevel === 'lingerie' ? 'Lingerie fina' : 'Sensual discreto');
    const subId = subLevel === 'lingerie' ? 'frLingerieChips' : 'frSensualChips';
    Array.from(document.querySelectorAll('#'+subId+' .fr-msg-chip.selected')).forEach(c => chips.push(c.textContent.trim()));
  } else {
    chips = Array.from(document.querySelectorAll('#frMsgChips .fr-msg-chip.selected')).map(c => c.textContent.trim());
  }

  // Collect make chips
  const makeChips = Array.from(document.querySelectorAll('#frMakeChips .fr-msg-chip.selected')).map(c => c.textContent.trim());

  frState.personalMessage = msg;
  frState.preferences = chips;
  frState.makePrefs = makeChips;
  frSaveState();

  const hasSomething = msg || chips.length > 0 || makeChips.length > 0;

  if(typeof clarity === 'function') clarity('event', 'step_toque_pessoal_enviado');

  frShowLoading(
    ['Confirmando reserva...','Preparando sua experiência...','Enviando sua mensagem a modelo...','Quase lá!'],
    () => {
      if(hasSomething) frShowToast('Mensagem enviada! ✓', 'success');
      frShowStep(7);
    },
    3200
  );
}

function frSkipMessage() {
  frShowLoading(
    ['Confirmando reserva...','Preparando sua experiência...','Quase lá!'],
    () => { frShowStep(7); },
    2500
  );
}

function frToggleMsgChip(el) {
  el.classList.toggle('selected');
}

function frToggleMakeChip(el) {
  const wasSelected = el.classList.contains('selected');
  document.querySelectorAll('#frMakeChips .fr-msg-chip').forEach(c => c.classList.remove('selected'));
  if(!wasSelected) el.classList.add('selected');
}

function frOpenSubLevel(type, btn) {
  // Mark chip as selected
  btn.classList.add('selected');
  frState.currentSubLevel = type;
  // Hide main chips & title
  document.getElementById('frMsgChips').style.display = 'none';
  const mainTitle = document.getElementById('frMainPrefsTitle');
  if(mainTitle) mainTitle.style.display = 'none';
  // Show sublevel
  const subId = type === 'lingerie' ? 'frSubLevelLingerie' : 'frSubLevelSensual';
  document.getElementById(subId).style.display = 'block';
}

function frCloseSubLevel() {
  const type = frState.currentSubLevel;
  if(!type) return;
  // Clear sublevel chip selections
  const subId = type === 'lingerie' ? 'frLingerieChips' : 'frSensualChips';
  document.querySelectorAll('#'+subId+' .fr-msg-chip').forEach(c => c.classList.remove('selected'));
  // Hide sublevel
  const sublevelId = type === 'lingerie' ? 'frSubLevelLingerie' : 'frSubLevelSensual';
  document.getElementById(sublevelId).style.display = 'none';
  // Deselect the special chip
  const specialBtn = document.querySelector('.fr-chip-special[data-sublevel="'+type+'"]');
  if(specialBtn) specialBtn.classList.remove('selected');
  // Show main chips & title
  document.getElementById('frMsgChips').style.display = '';
  const mainTitle = document.getElementById('frMainPrefsTitle');
  if(mainTitle) mainTitle.style.display = '';
  frState.currentSubLevel = null;
}

function frStartKYC() {
  frShowStep(8);
}

// ===== STEP 8 / KYC OVERLAY =====
let frKycStream = null;

function frInitCamera() {
  frSetBtnLoading('frKycStartBtn', true);
  document.getElementById('frKycOverlay').classList.add('show');
  document.getElementById('frKycStatusTop').textContent = 'Iniciando câmera...';
  document.getElementById('frKycStatusBottom').textContent = 'Aguarde um momento';
  document.getElementById('frKycSpinner').classList.add('show');

  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: 640, height: 480 } })
    .then(stream => {
      frKycStream = stream;
      const vid = document.getElementById('frKycVideo');
      vid.srcObject = stream;
      vid.play().then(() => {
        frSetBtnLoading('frKycStartBtn', false);
        frKycRunSequence();
      }).catch(() => frKycRunSequence());
    })
    .catch(err => {
      console.warn('Camera error:', err);
      frSetBtnLoading('frKycStartBtn', false);
      // Run sequence without camera (UI-only)
      frKycRunSequence();
    });
}

function frKycRunSequence() {
  const oval = document.getElementById('frKycOval');
  const scanLine = document.getElementById('frKycScanLine');
  const countdownOv = document.getElementById('frKycCountdown');
  const countNum = document.getElementById('frKycCountNum');
  const successOv = document.getElementById('frKycSuccessOverlay');
  const spinner = document.getElementById('frKycSpinner');
  const statusTop = document.getElementById('frKycStatusTop');
  const statusBot = document.getElementById('frKycStatusBottom');
  const msg = document.getElementById('frKycMsg');

  spinner.classList.remove('show');

  // Phase 1: Ready
  statusTop.textContent = 'Câmera ativa';
  statusBot.textContent = 'Posicione seu rosto no oval';
  msg.textContent = 'Centralize seu rosto no oval';

  // Phase 2: Countdown
  setTimeout(() => {
    countdownOv.classList.add('show');
    let c = 3;
    countNum.textContent = c;
    const iv = setInterval(() => {
      c--;
      if(c > 0) { countNum.textContent = c; }
      else {
        clearInterval(iv);
        countdownOv.classList.remove('show');
        // Phase 3: Scanning
        oval.classList.add('scanning');
        scanLine.classList.add('active');
        statusTop.textContent = 'Processando dados biométricos...';
        statusBot.textContent = 'Aguarde, analisando...';
        msg.textContent = 'Mantenha-se imóvel';
        spinner.classList.add('show');

        setTimeout(() => {
          statusTop.textContent = 'Confirmando identidade...';
          statusBot.textContent = 'Aguarde...';
          msg.textContent = 'Verificando padrões faciais';

          setTimeout(() => {
            statusTop.textContent = 'Validando qualidade...';
            statusBot.textContent = 'Última etapa...';

            setTimeout(() => {
              // SUCCESS!
              spinner.classList.remove('show');
              oval.classList.remove('scanning');
              scanLine.classList.remove('active');
              successOv.classList.add('show');
              statusTop.textContent = 'Verificação concluída!';
              statusBot.textContent = 'Identidade confirmada com sucesso.';
              msg.textContent = '✓ Verificado';

              // Stop camera
              if(frKycStream) {
                frKycStream.getTracks().forEach(t => t.stop());
                frKycStream = null;
              }
              // Show success screen after short delay
              setTimeout(() => {
                frShowKycSuccessScreen();
              }, 1200);
            }, 2500);
          }, 2500);
        }, 2800);
      }
    }, 1000);
  }, 1500);
}

function frShowKycSuccessScreen() {
  // Hide KYC overlay
  document.getElementById('frKycOverlay').classList.remove('show');
  // Show success screen inside card
  document.querySelectorAll('.fr-step').forEach(s => s.classList.remove('active'));
  const ss = document.getElementById('frKycSuccessScreen');
  ss.classList.add('show');
  // Update hotel tag
  const hotelName = frState.hotel ? frState.hotel.name : 'hotel selecionado';
  document.getElementById('frKycHotelTagName').textContent = hotelName;
  // Mark completed and clear sensitive data from localStorage
  frState.completedAt = Date.now();
  frState.sensitiveDataCleared = true;
  frSaveState();
  try {
    sessionStorage.removeItem('fr_sched_full');
    // Keep only non-sensitive state
  } catch(e){}
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
  frUpdateProgress();

  // Tooltips — smooth animated show/hide on focus/blur
  [
    { inputId: 'frNome', tipId: 'frNomeTip' },
    { inputId: 'frCpf', tipId: 'frCpfTip' },
    { inputId: 'frDisplayName', tipId: 'frDisplayNameTip' }
  ].forEach(({ inputId, tipId }) => {
    const inp = document.getElementById(inputId);
    const tip = document.getElementById(tipId);
    if(!inp || !tip) return;
    inp.addEventListener('focus', () => tip.classList.add('show'));
    inp.addEventListener('blur', () => tip.classList.remove('show'));
  });

  // CPF mask
  document.getElementById('frCpf').addEventListener('input', frCpfMask);

  // Step 1 complete check
  ['frNome','frRua','frBairro','frNumero','frCidade'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => { frCheckStep1Complete(); frSaveState(); });
  });
  document.getElementById('frEstado').addEventListener('change', frCheckStep1Complete);
  document.getElementById('frStep1Btn').addEventListener('click', frStep1Next);

  // City autocomplete step 1
  frInitCityAutocomplete();

  // Step 2
  document.getElementById('frDisplayName').addEventListener('input', frCheckStep2Complete);
  document.getElementById('frShowAge').addEventListener('change', frCheckStep2Complete);
  document.getElementById('frTerms').addEventListener('change', e => {
    const box = document.getElementById('frTermsBox');
    if(e.target.checked) box.classList.add('checked');
    else box.classList.remove('checked');
    frCheckStep2Complete();
  });
  // Allow clicking the visual checkbox box
  document.getElementById('frTermsBox').addEventListener('click', () => {
    const inp = document.getElementById('frTerms');
    inp.checked = !inp.checked;
    inp.dispatchEvent(new Event('change'));
  });
  document.getElementById('frStep2Btn').addEventListener('click', frStep2Next);
  frSetupProfilePhoto();

  // Step 3
  document.getElementById('frStep3Btn').addEventListener('click', () => {
    if(!frState.docType) { frShowToast('Para seguirmos, selecione um tipo de documento.','error'); return; }
    frSetBtnLoading('frStep3Btn',true);
    setTimeout(()=>{ frSetBtnLoading('frStep3Btn',false); frShowStep(4); },500);
  });

  // Step 4
  frSetupDocUpload();
  document.getElementById('frStep4Btn').addEventListener('click', frStep4Next);

  // Step 5
  document.getElementById('frCityBtn').addEventListener('click', frOpenCityOverlay);
  document.getElementById('frCitySearch').addEventListener('input', e => {
    const q = e.target.value.trim();
    const clear = document.getElementById('frCitySearchClear');
    if(q.length > 0) {
      clear.classList.add('show');
      frFilterHotelCities(q);
    } else {
      clear.classList.remove('show');
      frRenderCityPopular();
    }
  });
  document.getElementById('frStep5Btn').addEventListener('click', frStep5Next);

  // Keyboard close overlays
  document.addEventListener('keydown', e => {
    if(e.key==='Escape') {
      frCloseCityOverlay();
      frCloseCalendar();
      frCloseWarning();
    }
  });

  // Security
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('dblclick', e => e.preventDefault());
  document.addEventListener('dragstart', e => e.preventDefault());

  // Pre-check terms
  const termsInp = document.getElementById('frTerms');
  if(termsInp && !termsInp.checked) {
    termsInp.checked = true;
    document.getElementById('frTermsBox').classList.add('checked');
    frCheckStep2Complete();
  }

  // Show resume popup if valid saved state
  if(frHasValidSavedState && frState.step > 1) {
    setTimeout(() => {
      document.getElementById('frResumeOverlay').classList.add('show');
    }, 600);
  }

  frShowStep(1);
});

function frResumeContinue() {
  document.getElementById('frResumeOverlay').classList.remove('show');
  frLoadSensitive();
  frShowStep(frState.step || 1);
}
function frResumeDecline() {
  localStorage.removeItem('fr_sched_state');
  sessionStorage.removeItem('fr_sched_full');
  frState = { step:1, totalSteps:8, userData:{}, hotel:null, hotelCity:null, noHotel:false, checkIn:null, checkOut:null, upsell1:false, upsell2:false, docFrontFile:null, docBackFile:null, docType:null, warningCount:0, blockUntil:null, calMode:'checkin', savedAt:null, completedAt:null, sensitiveDataCleared:false, personalMessage:null, preferences:[], makePrefs:[], currentSubLevel:null };
  document.getElementById('frResumeOverlay').classList.remove('show');
  frShowStep(1);
}

// ===== HELP CENTER =====
function frOpenHelp() {
  const ov = document.getElementById('frHelpOverlay');
  ov.style.display = 'flex';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ov.classList.add('show');
    });
  });
}

function frCloseHelp(e, force) {
  if(force || !e || e.target === document.getElementById('frHelpOverlay')) {
    const ov = document.getElementById('frHelpOverlay');
    ov.classList.remove('show');
    setTimeout(() => { if(!ov.classList.contains('show')) ov.style.display = 'none'; }, 440);
    document.getElementById('frContactOverlay').classList.remove('show');
  }
}

function frToggleFaq(item) {
  const isOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.fr-help-faq-item.open').forEach(i => i.classList.remove('open'));
  if(!isOpen) item.classList.add('open');
}

function frOpenContact() {
  document.getElementById('frContactOverlay').classList.add('show');
}

function frCloseContact(e) {
  if(!e || e.target === document.getElementById('frContactOverlay')) {
    document.getElementById('frContactOverlay').classList.remove('show');
  }
}