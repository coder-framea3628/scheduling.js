// ===== Injetar Meta Viewport para Responsividade em Mobile =====
const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(metaViewport);
// ===== Injetar Link de Fontes =====
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap';
fontLink.rel = 'preload';
fontLink.as = 'style';
fontLink.onload = function() { this.rel = 'stylesheet'; };
document.head.appendChild(fontLink);
// ===== Injetar Lottie Player =====
const lottieScript = document.createElement('script');
lottieScript.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
document.head.appendChild(lottieScript);
// ===== Injetar CSS =====
const style = document.createElement('style');
style.textContent = `
:root {
  --bg-color: #f8f8f8;
  --text-color: #000;
  --accent-color: #AB865B;
  --accent-light: #D3AD83;
  --secondary-bg: #fff;
  --border-color: rgba(0,0,0,0.1);
  --shadow-color: rgba(0,0,0,0.1);
  --input-bg: #fff;
  --error-color: #ff4d4d;
  --note-bg: #F4E8DB;
  --primary-color: #AB865B; /* Centralized primary color */
  --dark-text: #202020;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, #f9f9f9 0%, #f0ede9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  color: var(--text-color);
  scroll-behavior: smooth;
  user-select: none;
  -webkit-user-drag: none;
}
.container {
  width: 90%;
  max-width: 540px;
  background: var(--secondary-bg);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  backdrop-filter: blur(8px);
  padding: 24px;
  position: relative;
  z-index: 10;
  overflow-y: auto;
  max-height: 90vh;
  margin: 0 auto;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.progress-bar {
  height: 4px;
  background: var(--border-color);
  border-radius: 2px;
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  z-index: 11;
}
.progress-fill {
  height: 100%;
  background: var(--primary-color);
  width: 0;
  transition: width 0.4s ease;
  border-radius: 2px;
}
.step {
  display: none;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  animation: fadeIn 0.4s ease forwards;
}
.step.active {
  display: block;
  opacity: 1;
  transform: translateY(0);
}
h2 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: center;
}
p {
  font-size: 0.95rem;
  color: var(--text-color);
  margin-bottom: 16px;
  text-align: center;
}
.input-group {
  margin-bottom: 12px;
  position: relative;
}
.input-group label {
  display: block;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 6px;
  text-align: left;
}
.input-group input, .input-group select {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 24px;
  background: var(--input-bg);
  font-size: 1rem;
  outline: none;
  transition: border 0.2s ease, box-shadow 0.2s ease;
  color: var(--text-color);
}
.input-group input:focus, .input-group select:focus {
  border: 1px solid var(--primary-color);
  box-shadow: 0 0 0 2px rgba(171,134,91,0.25);
}
.input-group.error input, .input-group.error select {
  border: 1px solid var(--error-color);
}
.error-message {
  font-size: 0.8rem;
  color: var(--error-color);
  margin-top: 4px;
  text-align: left;
  display: none;
}
.input-group.error .error-message {
  display: block;
}
.btn {
  padding: 14px 24px;
  border-radius: 24px;
  cursor: pointer;
  font-size: 1rem;
  border: none;
  background: var(--primary-color);
  color: #fff;
  transition: all 0.3s ease;
  font-weight: 500;
  display: block;
  width: 100%;
  text-align: center;
  position: relative;
}
.btn:disabled {
  background: var(--border-color);
  cursor: not-allowed;
}
.btn:hover:not(:disabled) {
  background: var(--accent-light);
  transform: translateY(-1px);
}
.btn.secondary {
  background: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
}
.checkbox-group {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  margin-top: 12px;
}
.checkbox-group input {
  accent-color: var(--primary-color);
}
.upload {
  text-align: center;
  margin-bottom: 24px;
}
.circle-upload {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.2s ease;
}
.circle-upload:hover {
  box-shadow: 0 0 0 2px rgba(171,134,91,0.15);
}
.circle-upload img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  loading: lazy;
  display: none;
}
.circle-upload .spinner {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.uploading .spinner {
  display: block;
}
.upload-text {
  font-size: 0.8rem;
  color: var(--text-color);
}
.upload input {
  display: none;
}
.date-selection {
  margin-bottom: 24px;
}
.date-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--secondary-bg);
  display: none;
  flex-direction: column;
  z-index: 10000;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}
.date-fullscreen.show {
  display: flex;
  transform: translateY(0);
}
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 20px 20px 0;
  position: sticky;
  top: 0;
  background: var(--secondary-bg);
  z-index: 1;
}
.month-title {
  font-weight: 600;
  font-size: 1.2rem;
}
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  padding: 0 20px;
}
.day-header {
  font-weight: 600;
  text-align: center;
}
.day {
  text-align: center;
  padding: 14px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  font-size: 1rem;
}
.day:hover {
  background: var(--note-bg);
  transform: scale(1.05);
}
.day.selected {
  background: rgba(171,134,91,0.2);
  color: #fff;
}
.day.disabled {
  color: var(--border-color);
  cursor: not-allowed;
  opacity: 0.5;
}
.calendar-actions {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding: 20px;
  position: sticky;
  bottom: 0;
  background: var(--secondary-bg);
  gap: 24px;
}
.calendar-actions .btn {
  width: 140px;
}
.calendar-actions .btn.secondary {
  border-radius: 24px;
}
.calendar-actions .btn#close-dates {
  font-size: 0.9rem;
  padding: 8px 16px;
  width: auto;
}
.city-select {
  margin-bottom: 24px;
}
.city-select input {
  position: relative;
  text-align: center;
  border-radius: 32px;
  padding: 16px 48px;
  font-size: 1.1rem;
}
.city-select input:focus {
  border-color: var(--primary-color);
}
.city-select::before {
  content: '';
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>') no-repeat center / contain;
}
#city-list {
  position: absolute;
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  width: 100%;
  display: none;
  box-shadow: 0 4px 12px var(--shadow-color);
}
.city-option {
  padding: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: background 0.2s;
}
.city-option:hover {
  background: var(--note-bg);
}
.city-option svg {
  width: 32px;
  height: 32px;
}
.hotel-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.hotel-card {
  background: var(--input-bg);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}
.hotel-card:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 16px var(--shadow-color);
}
.hotel-img-container {
  position: relative;
}
.hotel-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  loading: lazy;
}
.hotel-selo {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--note-bg);
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  color: var(--text-color);
}
.hotel-favorite {
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--text-color);
  transition: color 0.2s;
}
.hotel-favorite.favorited {
  color: var(--primary-color);
}
.hotel-info {
  padding: 12px;
}
.hotel-name {
  font-weight: 600;
  margin-bottom: 4px;
}
.hotel-desc {
  font-size: 0.8rem;
  color: var(--text-color);
  margin-bottom: 12px;
  text-align: left;
}
.hotel-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px 12px;
  gap: 16px;
}
.details-link {
  font-size: 0.8rem;
  color: var(--primary-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s;
}
.details-link:hover {
  color: var(--accent-light);
}
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  transition: opacity 0.3s ease;
}
.popup-content {
  background: var(--secondary-bg);
  width: 90%;
  max-width: 90%;
  padding: 24px 32px;
  border-radius: 20px;
  transform: scale(0.95);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  animation: fadeInScale 0.3s ease;
  text-align: center;
}
.popup-overlay.show {
  display: flex;
}
.popup-overlay.show .popup-content {
  transform: scale(1);
}
.popup-img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  max-height: 200px;
}
.services-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.service-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
}
.close-popup {
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--text-color);
  transition: color 0.2s;
}
.close-popup:hover {
  color: var(--primary-color);
}
.custom-city-popup .popup-content {
  align-items: center;
  text-align: center;
}
.custom-options {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.custom-option {
  background: var(--primary-color);
  padding: 16px;
  border-radius: 16px;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  text-align: center;
  color: #fff;
}
.custom-option:hover {
  background: var(--accent-light);
  transform: translateY(-2px);
}
.custom-option small {
  display: block;
  font-size: 0.8rem;
  color: var(--dark-text);
  text-align: left;
}
.custom-option.self {
  background: transparent;
  border: 2px solid var(--primary-color);
  color: #000;
}
.confirm-toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary-color);
  color: #fff;
  padding: 12px 24px;
  border-radius: 24px;
  z-index: 10001;
  animation: fadeInOut 3s ease;
  display: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
@keyframes fadeInOut {
  0% { opacity: 0; transform: translate(-50%, -20px); }
  10% { opacity: 1; transform: translate(-50%, 0); }
  90% { opacity: 1; transform: translate(-50%, 0); }
  100% { opacity: 0; transform: translate(-50%, -20px); }
}
.resumo-card {
  background: var(--note-bg);
  padding: 24px;
  border-radius: 16px;
  margin-top: 20px;
  box-shadow: 0 2px 8px var(--shadow-color);
}
.resumo-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  font-size: 0.9rem;
}
.hospedagem-option {
  margin-top: 16px;
  text-align: center;
}
.upsell-group {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 24px;
  text-align: left;
}
.upsell-group input {
  accent-color: var(--primary-color);
}
.upsell-group.checked {
  border: 1px solid var(--primary-color);
  border-radius: 16px;
  padding: 12px;
}
.upsell-info {
  flex: 1;
}
.upsell-title {
  font-weight: 600;
}
.upsell-desc {
  font-size: 0.85rem;
  color: var(--text-color);
}
.upsell-value {
  font-weight: 500;
  color: var(--primary-color);
}
.upsell-benefits {
  list-style: none;
  padding: 0;
  margin-top: 8px;
}
.upsell-benefits li {
  font-size: 0.8rem;
  margin-bottom: 4px;
}
.total-mini {
  background: var(--note-bg);
  padding: 8px 16px;
  border-radius: 16px;
  margin-bottom: 12px;
  text-align: center;
  font-size: 0.9rem;
}
.disclaimer {
  font-size: 0.75rem;
  color: var(--text-color);
  margin-top: 12px;
  text-align: center;
}
.disclaimer a {
  color: var(--primary-color);
  text-decoration: underline;
}
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.8);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  flex-direction: column;
  transition: opacity 0.3s ease;
}
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--border-color);
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 12px;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.orientation-alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--secondary-bg);
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  z-index: 10002;
  display: none;
  box-shadow: 0 4px 15px var(--shadow-color);
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInScale {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
.row {
  display: flex;
  gap: 16px;
}
.row .input-group {
  flex: 1;
}
@media (max-width: 390px) {
  .row {
    flex-direction: column;
    gap: 12px;
  }
}
.cpf-box {
  margin: 24px 0;
  padding: 14px;
  border: 2px dashed var(--primary-color);
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  background: var(--input-bg);
  color: var(--text-color);
  text-align: center;
}
.note {
  font-size: 0.8rem;
  color: var(--text-color);
  margin-top: 8px;
  text-align: left;
}
.privacy {
  margin-top: 20px;
  font-size: 0.8rem;
  color: var(--text-color);
  text-align: center;
}
.privacy a {
  color: var(--primary-color);
  text-decoration: underline;
}
#verification-pre ul {
  list-style: none;
  padding: 0;
  text-align: left;
}
#verification-pre li {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 0.9rem;
}
#verification-pre li::before {
  content: '';
  width: 24px;
  height: 24px;
  background: var(--note-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}
#camera-preview-container {
  position: relative;
  width: 100%;
  max-width: 320px;
  margin: 0 auto 16px;
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1;
  border: 3px solid var(--primary-color);
  background: #000;
}
#camera-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleX(-1);
}
#verification-success {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-top: 16px;
}
#verification-instructions {
  font-size: 0.9rem;
  margin-bottom: 16px;
}
#verification-messages {
  font-size: 1rem;
  text-align: center;
  margin-bottom: 16px;
}
.warning-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--secondary-bg);
  padding: 24px 32px;
  border-radius: 16px;
  text-align: center;
  z-index: 10002;
  display: none;
  box-shadow: 0 4px 15px var(--shadow-color);
  max-width: 90%;
  animation: fadeInScale 0.3s ease;
}
.warning-popup button {
  margin-top: 12px;
}
.blocked-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--secondary-bg);
  padding: 24px 32px;
  border-radius: 16px;
  text-align: center;
  z-index: 10002;
  display: none;
  box-shadow: 0 4px 15px var(--shadow-color);
  max-width: 90%;
}
.blocked-popup #timer {
  font-size: 1.2rem;
  color: var(--primary-color);
}
#city-suggestions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}
.city-suggestion {
  background: var(--note-bg);
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.2s;
  white-space: nowrap;
}
.city-suggestion:hover {
  background: var(--accent-light);
}
.city-suggestion small {
  font-size: 0.75rem;
  color: var(--text-color);
}
.selected-summary {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  padding: 16px;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.1);
  display: none;
  z-index: 1000;
  text-align: center;
}
.selected-summary.show {
  display: block;
}
.selected-summary p {
  margin-bottom: 8px;
  text-align: center;
}
.selected-summary button {
  width: auto;
  margin: 0 auto;
}
.bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--secondary-bg);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  z-index: 10000;
  max-height: 70vh;
  overflow-y: auto;
  box-shadow: 0 -4px 16px rgba(0,0,0,0.08);
}
.bottom-sheet.show {
  transform: translateY(0);
}
.bottom-sheet .popup-content {
  flex-direction: column;
}
.bottom-sheet .popup-img {
  width: 100%;
  margin-bottom: 16px;
}
.bottom-sheet .btn {
  position: sticky;
  bottom: 0;
  width: calc(100% - 48px);
  margin: 16px auto 0;
}
.hotel-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.hotel-photo {
  width: 80px;
  height: 80px;
  border-radius: 8px;
}
.hotel-rating {
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 4px;
}
.edit-link {
  font-size: 0.8rem;
  color: var(--primary-color);
  cursor: pointer;
}
.incluso-badge {
  background: #F4E8DB;
  color: var(--primary-color);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  margin-bottom: 16px;
  display: inline-block;
  animation: pulse 1.5s infinite;
}
.payment-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--secondary-bg);
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  z-index: 10002;
  display: none;
  box-shadow: 0 4px 15px var(--shadow-color);
  max-width: 90%;
  animation: fadeInScale 0.3s ease;
}
.payment-popup button {
  margin-top: 12px;
}
.faq-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--secondary-bg);
  padding: 32px;
  border-radius: 16px;
  text-align: left;
  z-index: 10002;
  display: none;
  box-shadow: 0 4px 15px var(--shadow-color);
  max-width: 90%;
  width: 90%;
  max-width: 600px;
  animation: fadeInScale 0.3s ease;
  border: 2px solid var(--primary-color);
}
.faq-list {
  list-style: none;
  padding: 0;
}
.faq-list li {
  margin-bottom: 16px;
}
.faq-question {
  font-weight: 600;
}
.faq-answer {
  font-size: 0.85rem;
}
.calendar-nav {
  display: flex;
  gap: 8px;
}
.calendar-nav button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}
.load-more-dates {
  background: var(--note-bg);
  padding: 12px;
  border-radius: 24px;
  margin: 16px auto;
  display: block;
  width: fit-content;
  cursor: pointer;
}
.comunicado-card {
  background: var(--input-bg);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
.comunicado-selo {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--note-bg);
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  color: var(--text-color);
}
.overlay-black {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  display: none;
  z-index: 9999;
}
.overlay-black.show {
  display: block;
}
.premium-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.9);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.premium-overlay.show {
  display: flex;
  opacity: 1;
}
.premium-content {
  background: #fff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  text-align: center;
  max-width: 80%;
  animation: fadeInScale 0.3s ease;
}
.premium-selo {
  font-size: 0.8rem;
  color: var(--primary-color);
  margin-bottom: 8px;
}
.premium-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
}
.premium-subtitle {
  font-size: 0.95rem;
  margin-bottom: 16px;
}
.tooltip {
  position: absolute;
  background: var(--note-bg);
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  color: var(--text-color);
  display: none;
  z-index: 10;
  top: 100%;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 8px var(--shadow-color);
}
.input-group:focus-within .tooltip {
  display: block;
}
`;
document.head.appendChild(style);
// ===== Dados dos Hotéis =====
const hotels = {
  'São Paulo, SP': [
    {
      name: 'Rosewood São Paulo',
      desc: 'Eleito o melhor hotel da América do Sul em 2024. Localizado na histórica Cidade Matarazzo em Bela Vista, oasis urbano com Torre Mata Atlântica projetada por Jean Nouvel, piscina infinita no rooftop, seis opções gastronômicas premiadas, spa sofisticado e serviço impecável',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/1b/47/10/premier-two-queens.jpg',
      largeImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/1b/46/fd/matarazzo-suite-room.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['SPA', 'Serviço de concierge', 'Bar/lounge', 'Academia', 'Piscina'],
      available: 12
    },
    {
      name: 'Hotel Fasano São Paulo',
      desc: 'Hotel destaque pela gastronomia e hospitalidade familiar; projeto assinado por Isay Weinfeld e Márcio Kogan, com restaurante renomado e serviço de alto padrão.',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/71/6a/bd/hotel-fasano-sao-paulo.jpg',
      largeImg: 'https://www.fasano.com.br/wp-content/uploads/2023/06/4.Suite-Deluxe.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Frigobar', 'Traslado de/para o aeroporto', 'TV de tela plana', 'Academia', 'Piscina'],
      available: 12
    },
    {
      name: 'Emiliano São Paulo',
      desc: 'Localizado no coração dos Jardins (Rua Oscar Freire), o Emiliano oferece acomodações amplas com serviço discreto, spa e gastronomia sofisticada.',
      profileImg: 'https://ak-d.tripcdn.com/images/220p0z000000mp0s969E3_W_1280_853_R5.webp',
      largeImg: 'https://ak-d.tripcdn.com/images/0220e12000l10zyo585F8_W_1280_853_R5.webp',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Serviço de quarto', 'Café da manhã', 'Hidromassagem', 'Frigobar'],
      available: 12
    },
    {
      name: 'Hotel Unique',
      desc: 'Marcos arquitetônicos assinados por Ruy Ohtake; conhecido pelo design singular, restaurante/rooftop com vista e experiência de serviço voltada a eventos e gastronomia.',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/dd/ba/f7/presidencial-oasis-suite.jpg',
      largeImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/16/be/96/oasis-suite.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['TV a cabo/por satélite', 'Estacionamento', 'Quarto para alérgicos', 'Academia', 'Piscina'],
      available: 12
    }
  ],
  'Rio de Janeiro, RJ': [
    {
      name: 'Copacabana Palace',
      desc: 'Hotel cinco estrelas tradicional em Copacabana, conhecido pelo serviço de excelência e vista para o mar.',
      profileImg: 'https://img.belmond.com/photos/cop/cop-ext05.jpg',
      largeImg: 'https://img.belmond.com/photos/cop/cop-acc-suite-penthouse-ocean-view06.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Estacionamento com manobrista', 'Café da manhã', 'Quartos com isolamento acústico', 'Piscina'],
      available: 12
    },
    {
      name: 'Hotel Fasano Rio de Janeiro',
      desc: 'Localizado em Ipanema, combina design contemporâneo e gastronomia de alto nível.',
      profileImg: 'https://fasano.com.br/wp-content/uploads/2023/10/Piscina_Fasano-Rio_danielpinheiro%C2%A9-3.jpg',
      largeImg: 'https://fasano.com.br/wp-content/uploads/2023/10/Quarto-DLX_HFRJ_credBruno-Fioravanti-2.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Geladeira', 'Sacada', 'Café da manhã', 'Academia', 'Piscina'],
      available: 12
    },
    {
      name: 'Emiliano Rio',
      desc: 'Hotel boutique à beira-mar, com ambiente intimista e serviço personalizado.',
      profileImg: 'https://emiliano.com.br/wp-content/uploads/2016/10/emiliano.com.br-004-fernandoguerra-1.jpg',
      largeImg: 'https://emiliano.com.br/wp-content/uploads/2016/10/emiliano.com.br-oceanjuniorsuite-rio-scaled.jpeg',
      selo: 'Parceiro oficial da Frame',
      services: ['Camas grandes', 'Quartos com isolamento acústico', 'Bar/lounge', 'Academia', 'Piscina'],
      available: 12
    }
  ],
  'Porto Alegre, RS': [
    {
      name: 'Hilton Porto Alegre',
      desc: 'Hotel internacional de luxo em Porto Alegre, com quartos premium, localização central e estrutura para lazer e negócios de alto nível.',
      profileImg: 'https://www.hilton.com/im/en/POAOBHH/19162817/-dnd6666.jpg',
      largeImg: 'https://www.hilton.com/im/en/POAOBHH/16481189/she-pbxsi-exec-guaiba-02.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Estacionamento', 'Café da manhã', 'Academia', 'Piscina'],
      available: 12
    },
    {
      name: 'ArtHotel Transamerica Collection Porto Alegre',
      desc: 'Apartamento de luxo remodelado na Bela Vista, oferecendo design moderno, serviços premium e proximidade com áreas gastronômicas da cidade.',
      profileImg: 'https://arthotelportoalegre.com.br/wp-content/uploads/2025/07/DSC00235-Editar-1024x1536.jpg',
      largeImg: 'https://arthotelportoalegre.com.br/wp-content/uploads/2024/08/Suite-Business-3.jpeg',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Estacionamento', 'Café da manhã', 'Academia', 'Piscina'],
      available: 12
    },
    {
      name: 'Manhattan Porto Alegre By Mercure',
      desc: 'Localizado no bairro de Moinhos dos Vento, em Porto Alegre, o Manhattan Porto Alegre disponibiliza apartamentos modernos e acesso gratuito à Internet de alta velocidade, apenas a 2 km do centro da cidade.',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/a8/22/ae/fachada.jpg',
      largeImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/79/1b/a1/guest-room.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Estacionamento', 'Micro-ondas', 'Business Center com acesso à Internet', 'Piscina'],
      available: 12
    }
  ],
  'Brasília, DF': [
    {
      name: 'Royal Tulip Brasília Alvorada',
      desc: 'Ícone de luxo à beira do Lago Paranoá, com suítes espaçosas de alto padrão, piscina infinita panorâmica, spa completo e restaurante gourmet com vistas deslumbrantes; eleito entre os mais caros e premiados da capital, ideal para estadias sofisticadas e eventos exclusivos.',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/5d/51/70/novo-projeto.jpg',
      largeImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/df/f0/55/guest-room.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Estacionamento com manobrista', 'Café da manhã gratuito', 'Cortinas blackout', 'Academia', 'Piscina'],
      available: 12
    },
    {
      name: 'Windsor Plaza Brasília',
      desc: 'Hotel cinco estrelas no coração do Setor Hoteleiro Sul, próximo à Esplanada dos Ministérios, oferecendo quartos modernos com amenities premium, rooftop bar badalado e serviço impecável; destaque como um dos mais caros, perfeito para negócios e lazer urbano de elite.',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/95/36/50/superior-executivo-double.jpg',
      largeImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/95/36/4a/standard-double.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Cafeteira/chaleira', 'Estacionamento', 'Café da manhã gratuito', 'Academia', 'Piscina'],
      available: 12
    },
    {
      name: 'Meliá Brasil 21',
      desc: 'Estabelecimento de luxo no centro político de Brasília, com design contemporâneo, centro de convenções de ponta, piscina aquecida e gastronomia internacional; posicionado entre os hotéis mais caros da cidade, valorizado por sua localização estratégica e conforto executivo superior.',
      profileImg: 'https://dam.melia.com/melia/file/ZXmPvTTLgydAaodqAJXx.jpg',
      largeImg: 'https://dam.melia.com/melia/file/2vPZqC5krmoqbsEkEpyA.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Frigobar', 'Estacionamento', 'Café da manhã', 'Cortinas blackout', 'Purificador de ar'],
      available: 12
    }
  ],
  'Curitiba, PR': [
    {
      name: 'Nomaa Hotel',
      desc: 'Localizado no bairro Batel, voltado ao design, arte e hospedagem de alto nível; ideal para quem procura elegância contemporânea.',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/03/d9/cb/caption.jpg',
      largeImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/20/36/63/nomaa-hotel.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Quartos com isolamento acústico', 'Estacionamento', 'Sacada', 'Academia', 'Spa'],
      available: 12
    },
    {
      name: 'Qoya Hotel Curitiba',
      desc: 'Hotel de luxo com design moderno, spa, suítes amplas e localização premium, uma excelente opção para estadia de alto padrão na capital paranaense.',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c3/12/95/lobby.jpg',
      largeImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c3/12/9a/guest-room-bath.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Cafeteira/chaleira', 'Estacionamento', 'Café da manhã', 'Academia', 'Piscina'],
      available: 12
    },
    {
      name: 'Radisson Hotel Curitiba Batel',
      desc: 'Situado no bairro Batel, combina padrão internacional, localização central, e estrutura completa — uma das referências de hospedagem de luxo em Curitiba.',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/7b/9f/22/radisson-hotel-curitiba.jpg',
      largeImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/ca/05/d6/business-class.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Estacionamento', 'Café da manhã', 'TV de tela plana', 'Piscina'],
      available: 12
    }
  ],
  'Florianópolis, SC': [
    {
      name: 'Fuso Concept Hotel',
      desc: 'Instalada no Morro do Forte, com a privilegiada localização entre a Praia do Forte e a badalada Jurerê Internacional. De maneira fluída, combina a modernidade e a praticidade da arquitetura com a natureza, que se encarrega de construir o paraíso no arredor.',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c9/3c/a2/fuso-concept-hotel.jpg',
      largeImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/db/c0/9a/caption.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Café da manhã gratuito', 'Quartos com isolamento acústico', 'Cafeteira/chaleira', 'Serviço de traslado', 'Piscina'],
      available: 12
    },
    {
      name: 'Awasi Santa Catarina',
      desc: 'Propriedade cinco estrelas em Governador Celso Ramos, próxima a Florianópolis, com foco em exclusividade, paisagem natural e conforto elevado.',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/3f/2c/34/bangalo-especial-esmeralda.jpg',
      largeImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/2a/9b/43/villa-tingua.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Internet sem fio gratuita', 'Lareira', 'Café da manhã', 'Frigobar', 'Piscina'],
      available: 12
    },
    {
      name: 'LK Design Hotel',
      desc: 'Localizado no ponto mais nobre da Avenida Beira-Mar Norte, o LK Design Hotel Florianópolis possui apartamentos modernos e confortáveis em Santa Catarina.',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/6a/8e/96/wk-design-hotel.jpg',
      largeImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/6a/8e/7b/wk-design-hotel.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Estacionamento', 'Café da manhã', 'Academia', 'Piscina'],
      available: 12
    }
  ],
  'Belo Horizonte, MG': [
    {
      name: 'Hotel Fasano Belo Horizonte',
      desc: 'Localizado no bairro Lourdes, um dos mais nobres de BH; suítes de 27 m² a 110 m², gastronomia de alto nível (restaurante Gero, bar Baretto), spa e piscina na cobertura.',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/71/3b/b4/hotel-fasano-belo-horizonte.jpg',
      largeImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/71/3c/41/hotel-fasano-belo-horizonte.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Estacionamento', 'Café da manhã', 'Academia', 'Piscina'],
      available: 12
    },
    {
      name: 'Ouro Minas Palace Hotel',
      desc: 'Tradicional hotel de 5 estrelas em BH, com estrutura robusta, suítes amplas, localização estratégica e referência de hospedagem de prestígio na capital mineira.',
      profileImg: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/286562442.jpg?k=b2e8243548372c8749fc0edd3202b2112529c4d49005d63537501887da430d37&o=',
      largeImg: 'https://media.omnibees.com/Images/3092/RoomTypes/640x426/1486450.jpeg/',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Estacionamento', 'Café da manhã', 'Academia', 'Piscina'],
      available: 12
    },
    {
      name: 'eSuites Virgínia Luxemburgo',
      desc: 'Um hotel boutique de luxo bem avaliado em BH, no bairro Luxemburgo, oferecendo ambiente intimista e padrão elevado para quem prefere algo mais reservado.',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/c0/49/26/ramada-encore-virginia.jpg',
      largeImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/62/83/62/caption.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Estacionamento', 'Café da manhã', 'Academia', 'Piscina'],
      available: 12
    }
  ],
  'Salvador, BA': [
    {
      name: 'Fera Palace Hotel',
      desc: 'Hotel de luxo em Salvador.',
      profileImg: 'https://example.com/fera.jpg',
      largeImg: 'https://example.com/fera-large.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Piscina'],
      available: 12
    }
    // Adicione mais se preciso
  ]
};
const cities = Object.keys(hotels);
const prohibitedWordsList = ['cu', 'pau', 'ppk', 'goza', 'chupa', 'puta', 'kids', 'kid', 'baby', 'bebe', 'cp', 'porno', 'estupro', 'estuprador', 'buceta', 'caralho', 'foder', 'fode', 'transar', 'sexo', 'bucetinha', 'roubar', 'exterminar', 'cuzinho', 'chupetinha', 'viado', 'baitola', 'prostituta', 'pedofilo', 'bct', 'nuds', 'leitada', 'fetiche', 'penis', 'vagina', 'se fuder', 'pepeka', 'piroca', 'gozada', 'pedofilia', 'violencia', 'ameaca', 'drogas', 'ilegal'];
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const popularCities = [
  { name: 'São Paulo, SP', label: 'Mais acessada' },
  { name: 'Rio de Janeiro, RJ', label: 'Melhor hospedagem' },
  { name: 'Brasília, DF', label: 'Recomendada' }
];
// ===== Injetar HTML =====
document.body.innerHTML = `
  <div class="container" style="opacity: 0; animation: fadeIn 0.8s ease forwards;">
    <div class="progress-bar"><div class="progress-fill"></div></div>
    <div id="step1" class="step active">
      <h2>Confirme sua identidade</h2>
      <p>Preencha os campos conforme seus documentos oficiais. Essa medida visa proteger a comunidade da Frame.</p>
      <div class="input-group">
        <label for="nome">Informe seu nome completo</label>
        <input type="text" id="nome" placeholder="Ex: João da Silva Oliveira">
        <div class="tooltip">Nome completo sem caracteres especiais, até 100 caracteres.</div>
        <div class="error-message"></div>
      </div>
      <div class="input-group">
        <label for="cpf">CPF</label>
        <input type="text" id="cpf" placeholder="000.000.000-00" inputmode="numeric">
        <div class="tooltip">Dados corretos garantem a não reprovação do agendamento.</div>
        <div class="error-message"></div>
      </div>
      <div class="input-group">
        <label for="rua">Rua</label>
        <input type="text" id="rua" placeholder="Ex: Rua das Flores">
        <div class="tooltip">Endereço completo sem caracteres especiais, até 100 caracteres.</div>
        <div class="error-message"></div>
      </div>
      <div class="row">
        <div class="input-group">
          <label for="bairro">Bairro</label>
          <input type="text" id="bairro" placeholder="Ex: Centro">
          <div class="tooltip">Endereço completo sem caracteres especiais, até 100 caracteres.</div>
          <div class="error-message"></div>
        </div>
        <div class="input-group">
          <label for="numero">Número</label>
          <input type="text" id="numero" placeholder="Ex: 143" inputmode="numeric">
          <div class="tooltip">Endereço completo sem caracteres especiais, até 100 caracteres.</div>
          <div class="error-message"></div>
        </div>
      </div>
      <div class="row">
        <div class="input-group">
          <label for="cidade">Cidade</label>
          <input type="text" id="cidade" placeholder="São Paulo">
          <div class="tooltip">Endereço completo sem caracteres especiais, até 100 caracteres.</div>
          <div class="error-message"></div>
        </div>
        <div class="input-group">
          <label for="estado">Estado</label>
          <select id="estado">
            <option value="" disabled selected>Selecione</option>
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
            <option value="DF">DF</option>
            <option value="MG">MG</option>
            <option value="PR">PR</option>
            <option value="RS">RS</option>
            <option value="SC">SC</option>
            <option value="BA">BA</option>
          </select>
          <div class="error-message"></div>
        </div>
      </div>
      <button class="btn" id="step1-btn" disabled>Prosseguir</button>
      <div class="privacy">Seus dados estão protegidos conforme nossa <a href="https://frameag.com/privacy" target="_blank">Política de Privacidade</a>.</div>
    </div>
    <div id="step2" class="step">
      <h2>Personalize seu perfil</h2>
      <p>Adicione uma foto de perfil e configure suas preferências de exibição.</p>
      <label class="upload">
        <input type="file" id="profilePic" accept="image/jpeg,image/png">
        <div class="circle-upload" id="profileCircle">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
          <div class="spinner"></div>
        </div>
        <div class="upload-text" style="margin-bottom: 16px;">Foto de perfil (opcional)</div>
      </label>
      <div class="input-group">
        <label for="displayName">Nome de exibição</label>
        <input type="text" id="displayName" placeholder="Ex: João Silva">
        <div class="tooltip">Nome de exibição sem caracteres especiais, até 100 caracteres.</div>
        <div class="error-message"></div>
      </div>
      <div class="input-group">
        <label for="showAge">Exibir sua idade para a modelo?</label>
        <select id="showAge">
          <option value="" disabled selected>Selecione</option>
          <option value="yes">Sim, exibir idade</option>
          <option value="no">Não exibir idade</option>
        </select>
        <div class="note">Nota: A idade será informada com base nos documentos enviados na próxima etapa.</div>
        <div class="error-message"></div>
      </div>
      <div class="checkbox-group">
        <input type="checkbox" id="terms">
        <label for="terms">Concordo com os <a href="https://frameag.com/termos" target="_blank" style="color: var(--primary-color);">Termos da Frame</a> e autorizo o tratamento de dados.</label>
      </div>
      <button class="btn" id="step2-btn" disabled>Prosseguir</button>
    </div>
    <div id="step3" class="step">
      <h2>Escolha o tipo de documento</h2>
      <p>Selecione qual documento deseja enviar na próxima etapa de verificação da Frame:</p>
      <div class="input-group">
        <select id="docType">
          <option value="" disabled selected>Selecione</option>
          <option value="CNH">CNH (Carteira de Motorista)</option>
          <option value="RG">RG (Identidade)</option>
          <option value="Passaporte">Passaporte</option>
        </select>
        <div class="error-message"></div>
      </div>
      <button class="btn" id="step3-btn" disabled>Prosseguir</button>
    </div>
    <div id="step4" class="step">
      <h2>Envie seus documentos</h2>
      <p>Seus documentos devem representar o CPF abaixo:</p>
      <div class="cpf-box" id="cpfBox"></div>
      <p id="chosenDoc"></p>
      <label class="upload">
        <input type="file" id="docFrontInput" accept="image/jpeg,image/png">
        <div class="circle-upload" id="docFront">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
          <div class="spinner"></div>
        </div>
        <div class="upload-text">Frente do documento</div>
      </label>
      <label class="upload">
        <input type="file" id="docBackInput" accept="image/jpeg,image/png">
        <div class="circle-upload" id="docBack">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
          <div class="spinner"></div>
        </div>
        <div class="upload-text">Verso do documento</div>
      </label>
      <button class="btn" id="step4-btn" disabled>Prosseguir</button>
    </div>
    <div id="step5" class="step">
      <h2>Selecione a data e hotel</h2>
      <div class="date-selection" style="display: none;">
        <label for="dates">Data da experiência</label>
        <input type="text" id="dates" placeholder="Selecionar data..." readonly>
        <div id="date-message" style="font-size: 0.85rem; margin-top: 8px;"></div>
      </div>
      <div class="comunicado-card">
        <div class="hotel-img-container">
          <img src="https://framerusercontent.com/images/fkQ25pvFwNUzjrzPp50famYE.png" class="hotel-img" alt="Comunicado">
          <div class="comunicado-selo">Comunicado Oficial</div>
        </div>
        <div class="hotel-info">
          <div class="hotel-name">A sua experiência Frame.</div>
          <p class="hotel-desc">Clique no botão 'Buscar cidade' e digite a cidade onde deseja a realização do seu encontro ou selecione 'Minha cidade não está na lista' e siga os passos na tela.</p>
        </div>
        <div class="hotel-actions">
          <button class="btn" onclick="showFaqPopup()">Acessar FAQ</button>
          <div class="details-link" onclick="document.getElementById('city-input').focus()"><svg width="16" height="16" fill="var(--primary-color)"><path d="M4 9h8l-4-4-4 4"/></svg></div>
        </div>
      </div>
      <div class="city-select">
        <label for="city-input">Cidade</label>
        <input type="text" id="city-input" placeholder="Buscar cidade…">
        <div id="city-list"></div>
        <div id="city-suggestions"></div>
        <div id="custom-city-link" class="details-link">Minha cidade não está na lista</div>
      </div>
      <h3 id="hotel-section" style="display:none;">Hotéis parceiros em: <span id="selected-city"></span></h3>
      <div id="hotel-list" class="hotel-list"></div>
      <button class="btn" id="step5-btn" disabled>Prosseguir</button>
    </div>
    <div id="step6" class="step">
      <h2>Sua Experiência</h2>
      <span class="incluso-badge">✓ TUDO INCLUSO</span>
      <div class="hotel-header">
        <img id="hotel-photo" class="hotel-photo" src="" alt="Hotel">
        <div>
          <div class="hotel-name" id="resumo-hotel"></div>
          <div class="hotel-rating">5,0 (+900)<svg width="16" height="16" fill="var(--primary-color)" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></div>
        </div>
      </div>
      <div class="resumo-card">
        <div class="resumo-item"><span>Data:</span><span id="resumo-dates"></span><span class="edit-link" onclick="editDates()">Editar</span></div>
      </div>
      <h3>Inclua e aproveite</h3>
      <div class="upsell-group" onclick="toggleUpsell(this)">
        <input type="checkbox" id="upsell1" class="upsell-checkbox">
        <div class="upsell-info">
          <div class="upsell-title">Adicionar estadia completa</div>
          <ul class="upsell-benefits">
            <li>Check-in antecipado</li>
            <li>Late check-out</li>
            <li>Café da manhã</li>
            <li>Upgrade</li>
          </ul>
          <div class="upsell-desc">Receba 1 diária integral no hotel parceiro após o término da experiência.</div>
        </div>
        <div class="upsell-value">470,00</div>
      </div>
      <div class="upsell-group" onclick="toggleUpsell(this)">
        <input type="checkbox" id="upsell2" class="upsell-checkbox">
        <div class="upsell-info">
          <div class="upsell-title">Brinquedos Eróticos</div>
          <div class="upsell-desc">Garante que a suíte esteja equipada com brinquedos (vendas de seda, chicote, algemas e óleos quentes comestíveis).</div>
        </div>
        <div class="upsell-value">525,00</div>
      </div>
      <div id="total-mini" class="total-mini" style="display:none;"></div>
      <button class="btn" id="confirm-btn" style="background: linear-gradient(to right, var(--primary-color), var(--accent-light));">Continuar agora</button>
      <div class="disclaimer">Ao prosseguir com a compra o Usuário declara ter concordado com o <a href="https://frameag.com/termos" target="_blank">Termos</a>, <a href="https://frameag.com/privacy" target="_blank">Privacidade</a> e <a href="https://frameag.com/refund-policy" target="_blank">Política de Reembolso</a> da Frame Tecnologia LTDA.</div>
    </div>
    <div id="step7" class="step">
      <h2>Documentos recebidos</h2>
      <p>Seus documentos foram enviados com sucesso e estão em análise.</p>
      <p>Na próxima etapa, você realizará uma <strong>verificação facial</strong> para confirmar sua identidade de forma segura com a tecnologia da Frame, o Frame Authentic.</p>
      <button class="btn" id="step7-btn">Prosseguir</button>
    </div>
    <div id="step8" class="step">
      <img src="https://framerusercontent.com/images/pZ3VoR0IVMlUfgFWhXRDczmt7Q.png" alt="Frame Agency Logo" style="width:150px; margin-bottom:20px; display: block; margin: 0 auto;">
      <div id="verification-pre">
        <h2>Frame Authentic</h2>
        <p>Clique em Iniciar para começarmos a validação da sua identidade.</p>
        <ul>
          <li>Escolha um lugar bem iluminado.</li>
          <li>Siga as instruções da tela.</li>
          <li>Seja o proprietário dos dados e limpe a câmera.</li>
        </ul>
        <button class="btn" id="start-verification">Iniciar</button>
      </div>
    </div>
  </div>
  <div class="date-fullscreen" id="date-fullscreen">
    <div class="progress-bar"><div class="progress-fill"></div></div>
    <div class="calendar-header">
      <button class="btn secondary" id="close-dates" style="font-size: 0.8rem; padding: 6px 12px;">Fechar</button>
      <div class="month-title" id="current-month">Data da experiência</div>
    </div>
    <div class="calendar-grid" id="calendar-grid">
      <div class="day-header">D</div>
      <div class="day-header">S</div>
      <div class="day-header">T</div>
      <div class="day-header">Q</div>
      <div class="day-header">Q</div>
      <div class="day-header">S</div>
      <div class="day-header">S</div>
    </div>
    <div class="calendar-actions">
      <button class="btn secondary" id="clear-dates">Limpar</button>
      <button class="btn" id="save-dates" style="width: 160px;">Confirmar data</button>
    </div>
  </div>
  <div class="bottom-sheet" id="hotel-popup">
    <span class="close-popup">×</span>
    <div class="popup-content"></div>
  </div>
  <div class="bottom-sheet" id="custom-city-popup">
    <span class="close-popup">×</span>
    <h2>Poxa, sentimos muito por isso.</h2>
    <p>Pode ser que sua cidade ainda não tenha um parceiro que atende nossos padrões, por isso nenhuma opção foi encontrada. Mas não se preocupe, digite sua cidade abaixo:</p>
    <div class="input-group">
      <input type="text" id="custom-city" placeholder="Digite o nome da sua cidade">
      <div class="error-message"></div>
    </div>
    <div class="loading-overlay" id="custom-loading" style="display: none; position: absolute;">
      <div class="spinner"></div>
    </div>
    <div class="custom-options">
      <div class="custom-option" data-option="frame">
        <strong>Frame Seleciona</strong>
        <small>Nessa opção, a Frame seleciona a melhor hospedagem em sua localidade e envia para aprovação via e-mail.</small>
      </div>
      <div class="custom-option self" data-option="self">
        <strong>Selecionar eu mesmo</strong>
        <small>Nessa opção, você seleciona o melhor local e envia para a Frame por e-mail ao final dessa etapa.</small>
      </div>
    </div>
  </div>
  <div class="popup-overlay" id="verification-popup">
    <div class="popup-content">
      <p id="verification-instructions">Posicione seu rosto dentro do oval.</p>
      <div id="camera-preview-container">
        <video id="camera-preview" autoplay playsinline muted></video>
        <div class="spinner" id="face-spinner" style="display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80px; height: 80px; border-width: 8px;"></div>
      </div>
      <p id="verification-messages"></p>
      <button class="btn" id="capture-face">Iniciar</button>
      <div id="verification-success" style="display:none;">Identidade verificada com sucesso.</div>
      <span class="close-popup">×</span>
    </div>
  </div>
  <div class="confirm-toast" id="confirm-toast"></div>
  <div class="loading-overlay" id="loading-overlay">
    <div class="spinner"></div>
    <p id="loading-message">Carregando...</p>
  </div>
  <div class="orientation-alert">
    <p>Por favor, utilize o seu dispositivo no modo vertical para melhor experiência nessa etapa do agendamento na Frame Agency.</p>
  </div>
  <div class="warning-popup" id="warning-popup">
    <p id="warning-message"></p>
    <button class="btn" id="close-warning">Entendi</button>
  </div>
  <div class="blocked-popup" id="blocked-popup">
    <p>Você foi bloqueado por 24 horas devido ao uso de palavras inadequadas.</p>
    <p>Tempo restante: <span id="timer"></span></p>
  </div>
  <div class="selected-summary" id="selected-summary">
    <p id="selected-dates">Data escolhida: </p>
    <p id="selected-hotel"></p>
    <button class="btn" id="proceed-btn" disabled onclick="proceedToCheckout(this)">Prosseguir</button>
  </div>
  <div class="payment-popup" id="payment-popup">
    <h2>Instruções</h2>
    <p>Nessa etapa, clique no botão abaixo para ir ao parceiro de pagamento. Ao finalizar, retorne a essa página e clique em "Pagamento efetuado".</p>
    <button class="btn" id="go-payment">Ir para pagamento</button>
    <button class="btn secondary" id="payment-done" style="display:none; background: #D3AD83; color: white;">Pagamento efetuado</button>
  </div>
  <div class="faq-popup" id="faq-popup">
    <h2>Perguntas Frequentes</h2>
    <ul class="faq-list">
      <li><div class="faq-question">Como cancelar?</div><div class="faq-answer">Envie e-mail para contato@frameag.com com 48h de antecedência (reembolso 80%)</div></li>
      <li><div class="faq-question">O que inclui?</div><div class="faq-answer">Hospedagem premium, privacidade, suporte 24h</div></li>
      <li><div class="faq-question">Adicionais do checkout valem a pena?</div><div class="faq-answer">Sim, oferecem vantagens e experiências extras</div></li>
      <li><div class="faq-question">Verificação facial?</div><div class="faq-answer">Garante segurança e leva 30s</div></li>
    </ul>
    <button class="btn" onclick="document.getElementById('faq-popup').style.display = 'none'">Fechar</button>
  </div>
  <div class="overlay-black" id="overlay-black"></div>
  <div class="premium-overlay" id="premium-overlay">
    <div class="premium-content">
      <lottie-player src="https://lottie.host/8cbce635-93a8-4ae4-b111-14aa9305a5e3/4MraxyYnP2.lottie" background="transparent" speed="1" style="width: 140px; height: 140px; margin: 0 auto;" loop autoplay></lottie-player>
      <div class="premium-selo">Cortesia exclusiva da Frame.</div>
      <div class="premium-title">Identificamos sua assinatura Premium.</div>
      <div class="premium-subtitle">Por ser um usuário Premium, você conta com hospedagem inclusa no seu agendamento.</div>
      <button class="btn" id="premium-yes">Sim, seguir com a oferta</button>
      <button class="btn secondary" id="premium-no">Prefiro não seguir</button>
    </div>
  </div>
`;
// ===== Lógica JavaScript =====
let currentStep = localStorage.getItem('currentStep') ? parseInt(localStorage.getItem('currentStep')) : 1;
const totalSteps = 8;
const userData = JSON.parse(localStorage.getItem('userData')) || {};
const progressFill = document.querySelector('.progress-fill');
let checkInDate = localStorage.getItem('checkInDate') ? new Date(localStorage.getItem('checkInDate')) : null;
let checkOutDate = localStorage.getItem('checkOutDate') ? new Date(localStorage.getItem('checkOutDate')) : null;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let verificationStream = null;
let warningCount = parseInt(localStorage.getItem('warningCount')) || 0;
let blockUntil = localStorage.getItem('blockUntil') ? new Date(localStorage.getItem('blockUntil')) : null;
let selectedHotel = JSON.parse(localStorage.getItem('selectedHotel')) || null;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
const today = new Date(2025, 10, 2); // November 2, 2025
const maxDate = new Date(today);
maxDate.setMonth(maxDate.getMonth() + 2);
function updateProgress() {
  progressFill.style.width = `${(currentStep / totalSteps) * 100}%`;
}
function showStep(step) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById(`step${step}`).classList.add('active');
  currentStep = step;
  localStorage.setItem('currentStep', step);
  updateProgress();
  window.scrollTo(0, 0);
  if (step === 6 && selectedHotel) {
    document.getElementById('resumo-dates').textContent = `${checkInDate.toLocaleDateString('pt-BR')} - ${checkOutDate.toLocaleDateString('pt-BR')}`;
    document.getElementById('resumo-hotel').textContent = selectedHotel.name;
    document.getElementById('hotel-photo').src = selectedHotel.profileImg;
  }
  if (step === 5) {
    document.getElementById('proceed-btn').disabled = !selectedHotel;
    if (checkInDate && checkOutDate) {
      document.getElementById('selected-dates').textContent = `Data escolhida: ${checkInDate.toLocaleDateString('pt-BR')} - ${checkOutDate.toLocaleDateString('pt-BR')}`;
      document.getElementById('selected-summary').classList.add('show');
    }
  }
}
function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}
function checkProhibited(inputValue) {
  const texto = inputValue.toLowerCase().trim();
  if (prohibitedWordsList.includes(texto)) {
    warningCount++;
    localStorage.setItem('warningCount', warningCount);
    if (warningCount >= 4) {
      const now = new Date();
      blockUntil = new Date(now.getTime() + 24 * 60 * 60 * 1000);
      localStorage.setItem('blockUntil', blockUntil.toISOString());
      showBlockedPopup();
      return true;
    } else {
      showWarningPopup(`Aviso ${warningCount}/3: Palavra inadequada detectada. Por favor, evite termos inapropriados no preenchimento.`);
      return true;
    }
  }
  return false;
}
function showWarningPopup(msg) {
  document.getElementById('warning-message').textContent = msg;
  document.getElementById('warning-popup').style.display = 'block';
  document.getElementById('overlay-black').style.display = 'block';
}
function showBlockedPopup() {
  document.getElementById('blocked-popup').style.display = 'block';
  updateTimer();
}
function updateTimer() {
  const interval = setInterval(() => {
    const now = new Date();
    const remaining = blockUntil - now;
    if (remaining <= 0) {
      clearInterval(interval);
      warningCount = 0;
      localStorage.setItem('warningCount', 0);
      localStorage.removeItem('blockUntil');
      document.getElementById('blocked-popup').style.display = 'none';
    } else {
      const hours = Math.floor(remaining / (60 * 60 * 1000));
      const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((remaining % (60 * 1000)) / 1000);
      document.getElementById('timer').textContent = `${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
}
if (blockUntil && new Date() < blockUntil) {
  showBlockedPopup();
}
function validateCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  let sum = 0, rest;
  for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i-1, i)) * (11 - i);
  rest = (sum * 10) % 11;
  if ((rest === 10) || (rest === 11)) rest = 0;
  if (rest !== parseInt(cpf.substring(9, 10))) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i-1, i)) * (12 - i);
  rest = (sum * 10) % 11;
  if ((rest === 10) || (rest === 11)) rest = 0;
  if (rest !== parseInt(cpf.substring(10, 11))) return false;
  return true;
}
function validateStep(step) {
  clearErrors();
  let valid = true;
  if (step === 1) {
    const nome = escapeHTML(document.getElementById('nome').value.trim());
    const cpf = document.getElementById('cpf').value.trim();
    const rua = escapeHTML(document.getElementById('rua').value.trim());
    const bairro = escapeHTML(document.getElementById('bairro').value.trim());
    const numero = escapeHTML(document.getElementById('numero').value.trim());
    const cidade = escapeHTML(document.getElementById('cidade').value.trim());
    const estado = document.getElementById('estado').value;
    if (checkProhibited(nome) || checkProhibited(rua) || checkProhibited(bairro) || checkProhibited(numero) || checkProhibited(cidade)) {
      valid = false;
    }
    if (!nome || nome.split(' ').length < 2) {
      showError('nome', 'Por favor, insira seu nome completo.');
      valid = false;
    }
    if (!cpfRegex.test(cpf) || !validateCPF(cpf)) {
      showError('cpf', 'Insira um CPF válido (ex: 000.000.000-00).');
      valid = false;
    }
    if (!rua) {
      showError('rua', 'Informe sua rua.');
      valid = false;
    }
    if (!bairro) {
      showError('bairro', 'Informe seu bairro.');
      valid = false;
    }
    if (!numero) {
      showError('numero', 'Campo obrigatório.');
      valid = false;
    }
    if (!cidade) {
      showError('cidade', 'Informe sua cidade.');
      valid = false;
    }
    if (!estado) {
      showError('estado', 'Selecione um estado.');
      valid = false;
    }
    if (valid) {
      userData.personal = { nome, cpf, rua, bairro, numero, cidade, estado };
    }
  } else if (step === 2) {
    const displayName = escapeHTML(document.getElementById('displayName').value.trim());
    const showAge = document.getElementById('showAge').value;
    const terms = document.getElementById('terms').checked;
    if (checkProhibited(displayName)) {
      valid = false;
    }
    if (!displayName) {
      showError('displayName', 'Campo obrigatório.');
      valid = false;
    }
    if (!showAge) {
      showError('showAge', 'Selecione uma opção.');
      valid = false;
    }
    if (!terms) {
      showWarningPopup('Você deve concordar com os Termos.');
      valid = false;
    }
    if (valid) {
      userData.profile = { displayName, showAge };
    }
  } else if (step === 3) {
    const docType = document.getElementById('docType').value;
    if (!docType) {
      showError('docType', 'Selecione um tipo de documento.');
      valid = false;
    }
    if (valid) {
      userData.docType = docType;
    }
  } else if (step === 4) {
    const docFront = document.getElementById('docFront').querySelector('img');
    const docBack = document.getElementById('docBack').querySelector('img');
    if (!docFront || !docBack) {
      showWarningPopup('Envie ambas as imagens do documento.');
      valid = false;
    }
  } else if (step === 5) {
    if (!checkInDate || !checkOutDate) {
      showWarningPopup('Selecione a data de check-in e check-out.');
      valid = false;
    }
    if (!selectedHotel && !userData.customCity) {
      showWarningPopup('Selecione um hotel parceiro ou uma cidade.');
      valid = false;
    }
    if (valid) {
      userData.dates = { checkIn: checkInDate, checkOut: checkOutDate };
      if (selectedHotel) userData.hotel = selectedHotel;
      localStorage.setItem('checkInDate', checkInDate.toISOString());
      localStorage.setItem('checkOutDate', checkOutDate.toISOString());
      localStorage.setItem('selectedHotel', JSON.stringify(selectedHotel));
    }
  }
  if (valid) {
    localStorage.setItem('userData', JSON.stringify(userData));
    checkLocalStorageUsage();
  }
  return valid;
}
function checkLocalStorageUsage() {
  const total = 5 * 1024 * 1024; // Typical limit 5MB
  const used = new Blob([localStorage.getItem('userData')]).size;
  if (used / total > 0.8) {
    showWarningPopup('Armazenamento quase cheio. Limpando dados antigos.');
    // Clear old data logic here, e.g., remove non-essential keys
  }
}
function showError(id, msg) {
  const group = document.getElementById(id).parentElement;
  group.classList.add('error');
  group.querySelector('.error-message').textContent = msg;
}
function clearErrors() {
  document.querySelectorAll('.input-group.error').forEach(g => g.classList.remove('error'));
}
function previewImage(event, targetId) {
  const file = event.target.files[0];
  const circle = document.getElementById(targetId);
  const icon = circle.querySelector('svg');
  const spinner = circle.querySelector('.spinner');
  const img = document.createElement('img');
  const validTypes = ['image/jpeg', 'image/png'];
  if (file && validTypes.includes(file.type) && file.size <= 5 * 1024 * 1024) {
    icon.style.display = 'none';
    spinner.style.display = 'block';
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const size = 300;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, size, size);
        const compressed = canvas.toDataURL('image/jpeg', 0.7);
        img.src = compressed;
        img.style.display = 'block';
        circle.appendChild(img);
        spinner.style.display = 'none';
        if (targetId.includes('doc')) {
          checkDocsUploaded();
        } else if (targetId === 'profileCircle') {
          userData.profilePhoto = compressed;
          localStorage.setItem('userData', JSON.stringify(userData));
        }
      };
    };
    reader.readAsDataURL(file);
  } else {
    showWarningPopup('Envie uma imagem no formato PNG/JPG com no máximo 5MB.');
  }
}
function checkDocsUploaded() {
  const front = document.getElementById('docFront').querySelector('img');
  const back = document.getElementById('docBack').querySelector('img');
  document.getElementById('step4-btn').disabled = !(front && back);
}
function renderCalendar(month, year) {
  const grid = document.getElementById('calendar-grid');
  grid.innerHTML = '';
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  document.getElementById('current-month').textContent = new Date(year, month).toLocaleString('pt-BR', { month: 'long', year: 'numeric' });
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    empty.className = 'day disabled';
    grid.appendChild(empty);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const dayDate = new Date(year, month, d);
    const day = document.createElement('div');
    day.className = 'day';
    day.textContent = d;
    if (dayDate < today || dayDate > maxDate) {
      day.classList.add('disabled');
    } else {
      day.addEventListener('click', () => selectDate(dayDate));
    }
    if (checkInDate && checkInDate.getTime() === dayDate.getTime()) {
      day.classList.add('selected');
    } else if (checkOutDate && checkOutDate.getTime() === dayDate.getTime()) {
      day.classList.add('selected');
    } else if (checkInDate && checkOutDate && dayDate > checkInDate && dayDate < checkOutDate) {
      day.classList.add('in-range');
    } else {
      day.style.opacity = (checkInDate || checkOutDate) ? 0.5 : 1;
    }
    grid.appendChild(day);
  }
}
function selectDate(date) {
  if (!checkInDate) {
    checkInDate = date;
    document.getElementById('date-message').textContent = 'Selecionou o Check-in';
    checkOutDate = new Date(date);
    checkOutDate.setDate(checkOutDate.getDate() + 1);
    const diff = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    if (diff > 5) {
      checkOutDate = new Date(checkInDate);
      checkOutDate.setDate(checkOutDate.getDate() + 5);
    }
    document.getElementById('date-message').textContent = 'Check-out selecionado';
  } else {
    checkInDate = date;
    checkOutDate = null;
    document.getElementById('date-message').textContent = 'Selecionou o Check-in';
  }
  renderCalendar(currentMonth, currentYear);
  document.getElementById('save-dates').disabled = !(checkInDate && checkOutDate);
}
function showCalendar() {
  document.getElementById('date-fullscreen').classList.add('show');
  renderCalendar(currentMonth, currentYear);
}
function initAutocomplete() {
  const input = document.getElementById('city-input');
  const list = document.getElementById('city-list');
  const suggestions = document.getElementById('city-suggestions');
  suggestions.innerHTML = '';
  popularCities.forEach(city => {
    const sug = document.createElement('div');
    sug.className = 'city-suggestion';
    sug.innerHTML = `<span>${city.name}</span><small>${city.label}</small>`;
    sug.addEventListener('click', () => {
      input.value = city.name;
      list.style.display = 'none';
      suggestions.style.display = 'none';
      loadHotels(city.name);
    });
    suggestions.appendChild(sug);
  });
  input.addEventListener('focus', () => {
    suggestions.style.display = 'flex';
    list.style.display = 'none';
  });
  input.addEventListener('input', () => {
    const val = normalizeString(input.value.toLowerCase());
    list.innerHTML = '';
    if (!val) {
      suggestions.style.display = 'flex';
      list.style.display = 'none';
      return;
    }
    suggestions.style.display = 'none';
    const filtered = cities.filter(c => normalizeString(c.toLowerCase()).includes(val));
    filtered.forEach(c => {
      const option = document.createElement('div');
      option.className = 'city-option';
      option.innerHTML = `<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>${c}<small>12 hotéis disponíveis</small><span class="badge">${c.includes('SP') ? 'SP' : (c.includes('Rio') ? 'POPULAR' : '')}</span>`;
      option.addEventListener('click', () => {
        input.value = c;
        list.style.display = 'none';
        loadHotels(c);
      });
      list.appendChild(option);
    });
    list.style.display = filtered.length ? 'block' : 'none';
    if (!filtered.length) {
      showBottomSheet('custom-city-popup');
    }
  });
}
function normalizeString(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
function loadHotels(city) {
  const listContainer = document.getElementById('hotel-list');
  listContainer.innerHTML = '';
  if (hotels[city]) {
    document.getElementById('hotel-section').style.display = 'block';
    document.getElementById('selected-city').textContent = city;
    hotels[city].forEach((hotel, index) => {
      const card = document.createElement('div');
      card.className = 'hotel-card';
      card.innerHTML = `
        <div class="hotel-img-container">
          <img src="${hotel.profileImg}" class="hotel-img" alt="${hotel.name}" data-src="${hotel.profileImg}">
          <div class="hotel-selo">${hotel.selo}</div>
          <svg class="hotel-favorite ${favorites.includes(city + index) ? 'favorited' : ''}" onclick="toggleFavorite(this, '${city}', ${index})" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-color)" stroke-width="2"><path d="M12 21l-1.45-1.3C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21z"/></svg>
        </div>
        <div class="hotel-info">
          <div class="hotel-name">${hotel.name}</div>
          <p class="hotel-desc">${hotel.desc}</p>
        </div>
        <div class="hotel-actions">
          <button class="btn" onclick="selectHotel('${city}', ${index}, this)">Selecionar hotel</button>
          <div class="details-link" onclick="showHotelDetails('${city}', ${index})">Mais detalhes <svg width="16" height="16" fill="var(--primary-color)"><path d="M4 9h8l-4-4-4 4"/></svg></div>
        </div>
      `;
      listContainer.appendChild(card);
    });
    const imgs = listContainer.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    });
    imgs.forEach(img => observer.observe(img));
  }
  document.getElementById('step5-btn').disabled = true;
  document.getElementById('proceed-btn').disabled = !selectedHotel;
}
function toggleFavorite(el, city, index) {
  const key = city + index;
  if (favorites.includes(key)) {
    favorites = favorites.filter(f => f !== key);
    el.setAttribute('fill', 'none');
    el.setAttribute('stroke', 'var(--text-color)');
  } else {
    favorites.push(key);
    el.setAttribute('fill', 'var(--primary-color)');
    el.setAttribute('stroke', 'var(--primary-color)');
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  showToast(favorites.includes(key) ? 'Hotel favoritado!' : 'Hotel removido dos favoritos.');
}
function showHotelDetails(city, index) {
  const hotel = hotels[city][index];
  const content = document.getElementById('hotel-popup').querySelector('.popup-content');
  content.innerHTML = `
    <img src="${hotel.largeImg}" class="popup-img" alt="${hotel.name}">
    <div>
      <h3 style="font-size: 1.2rem; font-weight: bold;">${hotel.name}</h3>
      <p style="font-size: 0.9rem; text-align: left;">${hotel.desc}</p>
      <div class="services-list">
        ${hotel.services.map(s => `<div class="service-item"><svg class="service-icon" width="24" height="24" fill="var(--primary-color)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>${s}</div>`).join('')}
      </div>
      <button class="btn" onclick="selectHotel('${city}', ${index})">Selecionar hotel</button>
    </div>
  `;
  showBottomSheet('hotel-popup');
  document.getElementById('overlay-black').style.display = 'block';
}
function selectHotel(city, index, btn) {
  if (!btn) btn = document.querySelector(`.hotel-card:nth-child(${index+1}) .btn`);
  const originalText = btn.textContent;
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  spinner.style.position = 'absolute';
  spinner.style.left = '50%';
  spinner.style.top = '50%';
  spinner.style.transform = 'translate(-50%, -50%)';
  btn.textContent = '';
  btn.appendChild(spinner);
  setTimeout(() => {
    btn.textContent = originalText;
    btn.removeChild(spinner);
    selectedHotel = Object.assign({}, hotels[city][index], { city });
    showToast(`Hotel ${selectedHotel.name} adicionado à sua experiência.`);
    document.getElementById('step5-btn').disabled = false;
    closeBottomSheet('hotel-popup');
    document.getElementById('selected-dates').textContent = `Data escolhida: ${checkInDate.toLocaleDateString('pt-BR')} - ${checkOutDate.toLocaleDateString('pt-BR')}`;
    document.getElementById('selected-hotel').textContent = selectedHotel.name;
    document.getElementById('selected-summary').classList.add('show');
    document.getElementById('proceed-btn').disabled = false;
    localStorage.setItem('selectedHotel', JSON.stringify(selectedHotel));
  }, 1500);
}
function proceedToCheckout(btn) {
  const text = btn.querySelector('span') || btn;
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  spinner.style.position = 'absolute';
  spinner.style.left = '50%';
  spinner.style.top = '50%';
  spinner.style.transform = 'translate(-50%, -50%)';
  text.style.display = 'none';
  btn.appendChild(spinner);
  setTimeout(() => {
    text.style.display = 'block';
    btn.removeChild(spinner);
    document.getElementById('selected-summary').classList.remove('show');
    showStep(6);
  }, 1500);
}
function showBottomSheet(id) {
  document.getElementById(id).classList.add('show');
  document.getElementById('overlay-black').style.display = 'block';
}
function closeBottomSheet(id) {
  document.getElementById(id).classList.remove('show');
  document.getElementById('overlay-black').style.display = 'none';
}
document.getElementById('custom-city-link').addEventListener('click', () => {
  showBottomSheet('custom-city-popup');
});
document.querySelectorAll('.custom-option').forEach(opt => {
  opt.addEventListener('click', () => {
    const option = opt.dataset.option;
    const customCity = escapeHTML(document.getElementById('custom-city').value.trim());
    if (checkProhibited(customCity)) return;
    if (!customCity) {
      showError('custom-city', 'Digite o nome da sua cidade.');
      return;
    }
    showLoading('custom-loading');
    setTimeout(() => {
      hideLoading('custom-loading');
      userData.customCity = customCity;
      userData.customOption = option;
      localStorage.setItem('userData', JSON.stringify(userData));
      closeBottomSheet('custom-city-popup');
      if (option === 'self') {
        showToast('Envie o nome e o endereço do hotel escolhido para o e-mail contato@frameag.com ou Telegram oficial da Frame.');
      }
      document.getElementById('step5-btn').disabled = false;
    }, 1500);
  });
});
function showLoading(id) {
  document.getElementById(id).style.display = 'flex';
}
function hideLoading(id) {
  document.getElementById(id).style.display = 'none';
}
function editDates() {
  showCalendar();
}
const upsellCheckboxes = document.querySelectorAll('.upsell-checkbox');
const confirmBtn = document.getElementById('confirm-btn');
const totalMini = document.getElementById('total-mini');
upsellCheckboxes.forEach(cb => {
  cb.addEventListener('change', updateUpsell);
});
function updateUpsell() {
  let total = 0;
  const selected = Array.from(upsellCheckboxes).filter(cb => cb.checked).length;
  if (document.getElementById('upsell1').checked) total += 470;
  if (document.getElementById('upsell2').checked) total += 525;
  if (total > 0) {
    confirmBtn.textContent = 'Ir para pagamento';
    totalMini.textContent = `Total: ${total.toFixed(2)}`;
    totalMini.style.display = 'block';
  } else {
    confirmBtn.textContent = 'Continuar agora';
    totalMini.style.display = 'none';
  }
  const groups = document.querySelectorAll('.upsell-group');
  groups.forEach(g => g.classList.toggle('checked', g.querySelector('input').checked));
}
confirmBtn.addEventListener('click', () => {
  let upsellTotal = 0;
  if (document.getElementById('upsell1').checked) upsellTotal += 470;
  if (document.getElementById('upsell2').checked) upsellTotal += 525;
  let link;
  if (upsellTotal === 470) link = 'https://app.pushinpay.com.br/service/pay/A03FD477-AB8F-4223-9EED-A6C23F95CC5D';
  else if (upsellTotal === 525) link = 'https://app.pushinpay.com.br/service/pay/A03FD477-AB8F-4223-9EED-A6C23F95CC';
  else if (upsellTotal === 995) link = 'https://buy.stripe.com/6oU4gy4eJ04sg67b50cV22b';
  else {
    showStep(7);
    return;
  }
  showLoadingOverlay(['Redirecionando…'], () => {});
  window.open(link, '_blank');
  setTimeout(() => {
    document.getElementById('loading-overlay').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('loading-overlay').style.display = 'none';
      document.getElementById('loading-overlay').style.opacity = 1;
    }, 300);
    confirmBtn.textContent = 'Pagamento efetuado';
    confirmBtn.style.background = '#D3AD83';
    confirmBtn.style.color = 'white';
    confirmBtn.onclick = () => {
      showToast('Pagamento será verificado junto com os dados.');
      showLoadingOverlay(['Verificando pagamento…', 'Tudo certo!'], () => showStep(7));
    };
  }, 1500);
});
function toggleUpsell(el) {
  const cb = el.querySelector('input');
  cb.checked = !cb.checked;
  updateUpsell();
  showToast(cb.checked ? 'Vantagem adicionada!' : 'Vantagem removida!');
}
function showToast(msg) {
  const toast = document.getElementById('confirm-toast');
  toast.textContent = msg;
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 3000);
}
function startVerification() {
  // Removed
}
function showLoadingOverlay(messages, callback) {
  document.getElementById('loading-overlay').style.display = 'flex';
  document.getElementById('overlay-black').style.display = 'block';
  let i = 0;
  const interval = setInterval(() => {
    document.getElementById('loading-message').textContent = messages[i];
    i = (i + 1) % messages.length;
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    document.getElementById('loading-overlay').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('loading-overlay').style.display = 'none';
      document.getElementById('loading-overlay').style.opacity = 1;
      document.getElementById('overlay-black').style.display = 'none';
      callback();
    }, 300);
  }, 3000);
}
// Injetar Chatbot
const chatbotScript = document.createElement('script');
chatbotScript.src = 'URL_DO_CHATBOT_SCRIPT'; // Substitua pela URL real do script do chatbot
chatbotScript.async = true;
document.body.appendChild(chatbotScript);
// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  document.body.oncontextmenu = () => false;
  updateProgress();
  showStep(currentStep);
  initAutocomplete();
  renderCalendar(currentMonth, currentYear);
  document.getElementById('dates').addEventListener('click', showCalendar);
  document.getElementById('close-dates').addEventListener('click', () => document.getElementById('date-fullscreen').classList.remove('show'));
  document.getElementById('clear-dates').addEventListener('click', () => {
    checkInDate = null;
    checkOutDate = null;
    renderCalendar(currentMonth, currentYear);
  });
  document.getElementById('save-dates').addEventListener('click', () => {
    if (checkInDate && checkOutDate) {
      document.getElementById('dates').value = `${checkInDate.toLocaleDateString('pt-BR')} - ${checkOutDate.toLocaleDateString('pt-BR')}`;
      document.getElementById('date-fullscreen').classList.remove('show');
      showToast('O horário será alinhado por e-mail');
      showLoadingOverlay(['Salvando as informações...', 'Agendando...'], () => showStep(5));
    }
  });
  document.getElementById('step1-btn').addEventListener('click', () => { if (validateStep(1)) {
    document.getElementById('premium-overlay').classList.add('show');
    document.getElementById('premium-yes').onclick = () => {
      document.getElementById('premium-overlay').classList.remove('show');
      showStep(2);
    };
    document.getElementById('premium-no').onclick = () => {
      document.getElementById('premium-overlay').classList.remove('show');
      showStep(2);
    };
  } });
  document.getElementById('step2-btn').addEventListener('click', () => { if (validateStep(2)) showStep(3); });
  document.getElementById('step3-btn').addEventListener('click', () => { if (validateStep(3)) {
    document.getElementById('chosenDoc').textContent = `Documento escolhido: ${userData.docType}`;
    document.getElementById('cpfBox').textContent = userData.personal.cpf;
    showLoadingOverlay(['Verificando informações…', 'Analisando seus dados…', 'Tudo certo!'], () => showStep(4));
  } });
  document.getElementById('step4-btn').addEventListener('click', () => { if (validateStep(4)) showCalendar(); });
  document.getElementById('step5-btn').addEventListener('click', () => { if (validateStep(5)) showStep(6); });
  document.getElementById('step7-btn').addEventListener('click', () => window.open('https://frameag.com/kyc/demo', '_blank'));
  document.getElementById('profilePic').addEventListener('change', e => previewImage(e, 'profileCircle'));
  document.getElementById('docFrontInput').addEventListener('change', e => previewImage(e, 'docFront'));
  document.getElementById('docBackInput').addEventListener('change', e => previewImage(e, 'docBack'));
  const inputsStep1 = document.querySelectorAll('#step1 input, #step1 select');
  inputsStep1.forEach(i => i.addEventListener('input', () => checkFormComplete('step1-btn', inputsStep1)));
  const inputsStep2 = document.querySelectorAll('#step2 input:not([type=file]), #step2 select');
  inputsStep2.forEach(i => i.addEventListener('input', () => checkFormComplete('step2-btn', inputsStep2)));
  const selectDoc = document.getElementById('docType');
  selectDoc.addEventListener('change', () => document.getElementById('step3-btn').disabled = !selectDoc.value);
  if (userData.customOption === 'self') {
    const reminder = document.createElement('p');
    reminder.textContent = 'Envie o nome e o endereço do hotel escolhido para o e-mail contato@frameag.com ou Telegram oficial da Frame.';
    document.getElementById('step8').appendChild(reminder);
  }
  document.querySelectorAll('.close-popup').forEach(c => c.addEventListener('click', () => closeBottomSheet(c.closest('.bottom-sheet').id)));
  document.getElementById('close-warning').addEventListener('click', () => {
    document.getElementById('warning-popup').style.display = 'none';
    document.getElementById('overlay-black').style.display = 'none';
  });
  document.getElementById('cpf').addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.slice(0, 11);
    val = val.replace(/(\d{3})(\d)/, '$1.$2');
    val = val.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    val = val.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{2})/, '$1.$2.$3-$4');
    e.target.value = val;
  });
  const formInputs = document.querySelectorAll('input');
  formInputs.forEach((input, idx) => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const next = formInputs[idx + 1];
        if (next) next.focus();
      }
    });
  });
  document.getElementById('overlay-black').addEventListener('click', () => {
    document.querySelectorAll('.bottom-sheet.show, .payment-popup, .faq-popup, .warning-popup').forEach(el => {
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.display = 'none';
        el.style.opacity = 1;
      }, 300);
    });
    document.getElementById('overlay-black').style.display = 'none';
  });
  const realTimeInputs = document.querySelectorAll('#nome, #rua, #bairro, #numero, #cidade, #displayName');
  realTimeInputs.forEach(input => {
    input.addEventListener('input', () => {
      const val = input.value.trim();
      if (val.length > 100 || /[^a-zA-Z\s]/.test(val)) {
        showError(input.id, 'Sem caracteres especiais, até 100 caracteres.');
      } else {
        clearErrors();
      }
    });
  });
});
function checkFormComplete(btnId, inputs) {
  document.getElementById(btnId).disabled = !Array.from(inputs).every(el => el.value.trim());
}
function showFaqPopup() {
  document.getElementById('faq-popup').style.display = 'block';
  document.getElementById('overlay-black').style.display = 'block';
}
window.addEventListener('orientationchange', () => {
  if (Math.abs(window.orientation) === 90) {
    document.querySelector('.orientation-alert').style.display = 'block';
  } else {
    document.querySelector('.orientation-alert').style.display = 'none';
  }
});
updateProgress();