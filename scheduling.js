// ============================================================================
// FRAME AGENCY — AGENDAMENTO INTEGRADO v3.0
// PROIBIDA CÓPIA OU REPRODUÇÃO SEM AUTORIZAÇÃO
// ============================================================================

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
  animation: frPulse 7s ease-in-out infinite;
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
/* === AGE NOTE === */
.fr-age-note { display: flex; align-items: center; gap: 6px; font-size: 0.76rem; color: var(--fr-gray); margin-top: 6px; line-height: 1.4; }
.fr-age-note svg { flex-shrink: 0; color: var(--fr-bronze); }

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
`;
document.head.appendChild(frStyle);

// ===== CONSTANTS =====
const FR_PROHIBITED = ['cu','pau','ppk','goza','chupa','puta','kids','kid','baby','bebe','cp','porno','estupro','estuprador','buceta','caralho','foder','fode','transar','sexo','bucetinha','roubar','exterminar','cuzinho','chupetinha','viado','baitola','prostituta','pedofilo','bct','nuds','leitada','fetiche','penis','vagina','pepeka','piroca','gozada','pedofilia','violencia','ameaca','drogas','ilegal','merda','porra','otario','idiota','imbecil','retardado','maldito','safado','vadia','piranha','vagabundo','assassino','matar','cocaina','crack','maconha','heroin','lsd','ecstasy','meth','skank','baseado','cheirinho','loló','keta','ketamina','nudes','xvideos','pornhub','xnxx','putaria','safadeza','nóia','noiado','cheiro','pedra','traficante','trafico','sequestro','latrocinio','homicidio','suicidio','autolesao','cortar','matar-se','se matar','krl','kct','kkk','kkkk',
// Variações e adições
'putinha','putão','bundão','bunda','trevoso','tarado','pervertido','degenerado','lixo humano','lixo','escória','canalha','corno','cornudo','chifrudo','piranha','vaca','galinha','rapariga','meretriz','hetaira','fudeu','fuder','fodase','fudendo','fodido','tomei no','dar o cu','boquete','sexo oral','orgasmo','gozo','ejacular','ejaculação','masturbação','masturbar','punheta','siririca','sacanagem','transa','trepada','transar','fornicar','fornicar','estuprar','abusador','molestador','tarado','pervertido','menor','criança nua','foto de menor','menor de idade','child','loli','lolita','shota',
// Drogas variações
'cocaína','crack','maconha','cannabis','haxixe','skunk','haxix','lança perfume','loló','cheirinho','cola','thinner','inalante','anfetamina','anfetaminas','rebite','ritalina','vyvanse','adderall','xtc','mdma','molly','speedy','speed','meth','metanfetamina','crystal','cristal','pó','cheirar','snifar','injetar','fumar pedra','fumando pedra',
// Violência
'matar','mate','morte','morrer','morra','morra você','te mato','vou te matar','ameaça de morte','ameaça','ameaçar','extorsão','chantagear','chantagem','tortura','torturar','estuprar','violentar','agredir','bater','espancar','socar',
// Armas
'arma','revolver','pistola','fuzil','espingarda','metralhadora','bomba','explosivo','granada','faca','navalha','facão'];
const FR_CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

// CPF algorithm validation (not just format)
function frValidateCpfAlgorithm(cpf) {
  const clean = cpf.replace(/[^\d]/g,'');
  if(clean.length !== 11) return false;
  // All same digits are invalid (000.000.000-00, 111.111.111-11, etc.)
  if(/^(\d)\1+$/.test(clean)) return false;
  // Validate first check digit
  let sum = 0;
  for(let i = 0; i < 9; i++) sum += parseInt(clean[i]) * (10 - i);
  let rem = (sum * 10) % 11;
  if(rem === 10 || rem === 11) rem = 0;
  if(rem !== parseInt(clean[9])) return false;
  // Validate second check digit
  sum = 0;
  for(let i = 0; i < 10; i++) sum += parseInt(clean[i]) * (11 - i);
  rem = (sum * 10) % 11;
  if(rem === 10 || rem === 11) rem = 0;
  if(rem !== parseInt(clean[10])) return false;
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
    {name:'Hilton Porto Alegre',desc:'Hotel internacional de luxo com quartos premium, localização central e estrutura completa para lazer e negócios de alto nível na capital gaúcha.',profileImg:'https://www.hilton.com/im/en/POAOBHH/19162817/-dnd6666.jpg',largeImg:'https://www.hilton.com/im/en/POAOBHH/16481189/she-pbxsi-exec-guaiba-02.jpg',selo:'Parceiro oficial da Frame',services:['Wi-Fi','Estacionamento','Café da Manhã','Academia','Piscina']},
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
        <input class="fr-input" type="text" id="frNome" placeholder="Ex: João da Silva Oliveira" autocomplete="name" aria-required="true">
        <div class="fr-err" id="frNomeErr"></div>
      </div>
      <div class="fr-field">
        <label class="fr-label" for="frCpf">CPF</label>
        <input class="fr-input" type="text" id="frCpf" placeholder="000.000.000-00" inputmode="numeric" autocomplete="off" maxlength="14" aria-required="true">
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
          <img id="frProfilePreview" src="" alt="Foto">
          ${ICONS.person}
        </div>
        <div class="fr-profile-center-label">Toque para adicionar (opcional)</div>
      </div>
      <div class="fr-field">
        <label class="fr-label" for="frDisplayName">Nome de exibição</label>
        <input class="fr-input" type="text" id="frDisplayName" placeholder="Como prefere ser chamado(a)">
        <div class="fr-err" id="frDisplayNameErr"></div>
      </div>
      <div class="fr-field">
        <label class="fr-label" for="frShowAge">Exibir sua idade para a modelo?</label>
        <select class="fr-select" id="frShowAge">
          <option value="" disabled selected>Selecione</option>
          <option value="yes">Sim, exibir minha idade</option>
          <option value="no">Não exibir minha idade</option>
        </select>
        <div class="fr-age-note"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Nota: A idade será exibida conforme seus documentos.</div>
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
      <p class="fr-sub">Selecione o documento que você irá enviar na próxima etapa para verificação.</p>
      <div class="fr-doc-cards">
        <div class="fr-doc-card" data-doc="CNH" onclick="frSelectDoc('CNH')">
          <div class="fr-doc-card-icon">${ICONS.idCard}</div>
          <div class="fr-doc-card-info">
            <div class="fr-doc-card-name">CNH</div>
            <div class="fr-doc-card-hint">Carteira Nacional de Habilitação</div>
          </div>
          <div class="fr-doc-card-check">${ICONS.check}</div>
        </div>
        <div class="fr-doc-card" data-doc="RG" onclick="frSelectDoc('RG')">
          <div class="fr-doc-card-icon">${ICONS.doc}</div>
          <div class="fr-doc-card-info">
            <div class="fr-doc-card-name">RG</div>
            <div class="fr-doc-card-hint">Registro Geral de Identidade</div>
          </div>
          <div class="fr-doc-card-check">${ICONS.check}</div>
        </div>
        <div class="fr-doc-card" data-doc="Passaporte" onclick="frSelectDoc('Passaporte')">
          <div class="fr-doc-card-icon">${ICONS.passport}</div>
          <div class="fr-doc-card-info">
            <div class="fr-doc-card-name">Passaporte</div>
            <div class="fr-doc-card-hint">Documento internacional de identificação</div>
          </div>
          <div class="fr-doc-card-check">${ICONS.check}</div>
        </div>
      </div>
      <p style="font-size:0.76rem;color:var(--fr-gray);text-align:center;margin-top:14px;line-height:1.5;display:flex;align-items:center;justify-content:center;gap:5px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Criptografia de ponta a ponta. Seus documentos são deletados automaticamente após aprovação.</p>
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
      <p class="fr-step-hint">Envie imagens nítidas do documento em local bem iluminado.</p>
    </div>

    <!-- STEP 5: Hospedagem -->
    <div class="fr-step" id="frStep5">
      <div class="fr-h1">Onde será sua estadia?</div>
      <p class="fr-sub">Selecione a cidade, as datas e o hotel parceiro para sua experiência.</p>

      <div class="fr-field">
        <label class="fr-label">Cidade</label>
        <button class="fr-city-search-btn" id="frCityBtn" type="button">
          <span class="fr-city-search-icon">${ICONS.location}</span>
          <span id="frCityBtnText">Buscar cidade...</span>
        </button>
      </div>

      <div id="frDatesSection" style="display:none;">
        <label class="fr-label" style="margin-bottom:8px;display:block;">Data da experiência</label>
        <div class="fr-dates-display">
          <div class="fr-date-box" id="frCheckInBox" onclick="frOpenCalendar('checkin')">
            <div class="fr-date-box-label">Check-in</div>
            <div class="fr-date-box-value placeholder" id="frCheckInVal">Adicionar data</div>
          </div>
          <div class="fr-date-box" id="frCheckOutBox" onclick="frOpenCalendar('checkout')">
            <div class="fr-date-box-label">Checkout</div>
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
        ${ICONS.lock}&nbsp; O pagamento dos adicionais é realizado <strong>presencialmente</strong> na chegada ao hotel.
      </p>
      <p class="fr-disclaimer">
        Ao prosseguir, você declara ter lido e concordado com os <a href="https://frameag.com/termos" target="_blank">Termos</a>, a <a href="https://frameag.com/privacy" target="_blank">Privacidade</a> e a <a href="https://frameag.com/refund-policy" target="_blank">Política de Reembolso</a> da Frame Tecnologia LTDA.
      </p>
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
          Certifique-se de ser o(a) titular dos dados preenchidos.
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
      <p class="fr-sub" style="margin-bottom:4px;" id="frKycSuccessHotelMsg">Sua reserva no hotel selecionado está sendo confirmada.</p>
      <div class="fr-kyc-hotel-tag" id="frKycHotelTag">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <span id="frKycHotelTagName">Hotel selecionado</span>
      </div>
      <div class="fr-kyc-email-note">
        Você receberá o código de reserva e detalhes por e-mail assim que a análise de dados terminar.
      </div>
      <p style="font-size:0.82rem;color:var(--fr-gray);text-align:center;margin-bottom:10px;font-weight:500;">Para concluir clique abaixo:</p>
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
    <p style="font-size:0.875rem;color:var(--fr-gray);margin-bottom:20px;">Por ser um usuário Premium, você conta com hospedagem inclusa no seu agendamento — sem custo adicional.</p>
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
    <button class="fr-photo-tips-btn" onclick="frTogglePhotoTips()">Dicas</button>
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
  <div class="fr-confirm-sheet-main" id="frSheetHotelName">—</div>
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
<a href="https://t.me/suporteframebot" target="_blank" class="fr-support-btn" id="frSupportBtn">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  Suporte
</a>

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
  </div>
</div>

<!-- Toast -->
<div class="fr-toast" id="frToast"></div>

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
function frCloseWarning() {
  document.getElementById('frWarningPopup').classList.remove('show');
}

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
    frShowErr('frNome','Informe o nome completo (nome e sobrenome).');
    valid = false;
  } else if(frCheckProhibited(nome)) {
    frShowErr('frNome','Nome contém palavras não permitidas.');
    valid = false;
  } else {
    frClearErr('frNome');
  }

  if(!FR_CPF_REGEX.test(cpf) || !frValidateCpfAlgorithm(cpf)) {
    frShowErr('frCpf','CPF inválido. Verifique os dígitos e tente novamente.');
    valid = false;
  } else {
    frClearErr('frCpf');
  }

  if(rua.length < 3) { frShowErr('frRua','Informe a rua.'); valid=false; } else frClearErr('frRua');
  if(bairro.length < 2) { frShowErr('frBairro','Informe o bairro.'); valid=false; } else frClearErr('frBairro');
  if(!numero.trim()) { frShowErr('frNumero','Informe o número.'); valid=false; } else frClearErr('frNumero');
  if(cidade.length < 2) { frShowErr('frCidade','Informe a cidade.'); valid=false; } else frClearErr('frCidade');
  if(!estado) { frShowErr('frEstado','Selecione o estado.'); valid=false; } else frClearErr('frEstado');

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
    frShowErr('frDisplayName','Nome de exibição contém palavras não permitidas.');
    frState.warningCount++;
    if(frState.warningCount>=3) {
      frShowWarning('Aviso de uso inadequado','Foram detectadas palavras inadequadas repetidamente. Continue desta forma poderá resultar em bloqueio temporário da conta.');
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
    // Disable to prevent re-upload
    if(frState.docFrontFile && frState.docBackFile) {
      frontInp.disabled = true; backInp.disabled = true;
    }
  });

  backInp.addEventListener('change', e => {
    const f = e.target.files[0];
    if(!f) return;
    // Validate not same as front
    if(frState.docFrontFile && f.name === frState.docFrontFile.name && f.size === frState.docFrontFile.size) {
      frShowErr('frDoc','As imagens da frente e do verso devem ser arquivos diferentes.');
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
    if(frState.docFrontFile && frState.docBackFile) {
      frontInp.disabled = true; backInp.disabled = true;
    }
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
      <div class="fr-city-custom-option-sub">Entre em contato para verificarmos disponibilidade</div>
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
        <div style="font-size:32px;margin-bottom:12px;">🏙️</div>
        <div style="font-weight:600;margin-bottom:6px;">Nenhuma cidade encontrada</div>
        <div style="font-size:0.82rem;">Tente outra busca ou clique em "Minha cidade não está na lista" abaixo.</div>
      </div>`;
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
  frSaveState();
  frCloseCityOverlay();
  const btn = document.getElementById('frCityBtn');
  btn.classList.add('selected');
  document.getElementById('frCityBtnText').textContent = city;
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
  if(frState.hotel || frState.checkIn) {
    sheet.classList.add('show');
    hotelLabel.textContent = frState.hotelCity || 'Hotel selecionado';
    hotelName.textContent = frState.hotel ? frState.hotel.name : '—';
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
  document.getElementById('frCalTitle').textContent = mode==='checkin' ? 'Check-in — Quando?' : 'Checkout — Quando?';
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
    document.getElementById('frCalTitle').textContent = 'Checkout — Quando?';
    document.getElementById('frCalSubtitle').textContent = 'Check-out automático: pode ajustar para até 2 dias';
  } else {
    if(!frState.checkIn || dateStr <= frState.checkIn) {
      frShowToast('O checkout deve ser após o check-in.', 'error');
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
    'Sua cidade ainda não possui hotéis parceiros cadastrados que atendam aos nossos padrões. Entre em contato com nosso suporte para verificarmos opções especiais para você.'
  );
}

function frCheckStep5Complete() {
  const ok = frState.hotelCity && frState.hotel && frState.checkIn && frState.checkOut;
  const btn = document.getElementById('frSheetConfirmBtn');
  if(btn) btn.disabled = !ok;
}

function frStep5Next() {
  if(!frState.hotel || !frState.checkIn || !frState.checkOut) {
    frShowToast('Selecione a cidade, datas e um hotel.', 'error');
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
  if(!hotel) return;
  document.getElementById('frCheckoutHotelImg').src = hotel.largeImg || hotel.profileImg;
  document.getElementById('frCheckoutHotelName').textContent = hotel.name;
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
    label.textContent = 'Pagar agora';
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
  frShowLoading(
    ['Confirmando reserva...','Preparando sua experiência...','Quase lá!'],
    () => {
      frSetBtnLoading('frConfirmBtn', false);
      frShowStep(7);
    },
    2500
  );
}

// ===== STEP 7: DOCS RECEIVED =====
// Button handled inline onclick="frStartKYC()"

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
  const hotelMsg = document.getElementById('frKycSuccessHotelMsg');
  if(hotelMsg) hotelMsg.textContent = `Sua reserva no ${hotelName} está sendo confirmada.`;
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

  // CPF mask
  document.getElementById('frCpf').addEventListener('input', frCpfMask);

  // Step 1 complete check
  ['frNome','frRua','frBairro','frNumero','frCidade'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => { frCheckStep1Complete(); frSaveState(); });
  });
  document.getElementById('frEstado').addEventListener('change', () => { frCheckStep1Complete(); frSaveState(); });
  document.getElementById('frStep1Btn').addEventListener('click', frStep1Next);

  // City autocomplete step 1
  frInitCityAutocomplete();

  // Step 2
  document.getElementById('frDisplayName').addEventListener('input', () => { frCheckStep2Complete(); frSaveState(); });
  document.getElementById('frShowAge').addEventListener('change', () => { frCheckStep2Complete(); frSaveState(); });
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
    if(!frState.docType) { frShowToast('Selecione um tipo de documento.','error'); return; }
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
  frState = { step:1, totalSteps:8, userData:{}, hotel:null, hotelCity:null, checkIn:null, checkOut:null, upsell1:false, upsell2:false, docFrontFile:null, docBackFile:null, docType:null, warningCount:0, blockUntil:null, calMode:'checkin', savedAt:null, completedAt:null, sensitiveDataCleared:false };
  document.getElementById('frResumeOverlay').classList.remove('show');
  frShowStep(1);
}