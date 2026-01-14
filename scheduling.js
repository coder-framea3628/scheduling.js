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

// ===== Injetar CSS Unificado =====
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
  --primary-color: #AB865B;
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
  box-sizing: border-box; 
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
  margin-top: 20px;
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
  display: block;
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
  display: none;
}
.circle-upload .spinner {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.upload-text {
  font-size: 0.8rem;
  color: var(--text-color);
}
.upload input {
  display: none;
}
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.2);
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
  padding: 24px;
  border-radius: 20px;
  transform: scale(0.95);
  transition: transform 0.3s ease, opacity 0.3s ease;
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
  justify-content: center;
  margin-bottom: 24px;
  font-size: 1.1rem;
  font-weight: 600;
}
.upsell-group {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 24px;
  text-align: left;
  cursor: pointer;
  transition: background 0.2s;
}
.upsell-group input {
  accent-color: var(--primary-color);
  margin-top: 4px;
}
.upsell-group.checked {
  border: 1px solid var(--primary-color);
  border-radius: 16px;
  padding: 12px;
  background: rgba(171, 134, 91, 0.05);
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
  white-space: nowrap;
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
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
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
  transition: opacity 0.3s ease;
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
.incluso-badge {
  background: #F4E8DB;
  color: var(--primary-color);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  margin-bottom: 16px;
  display: inline-block;
  animation: pulse 1.5s infinite;
  text-align: center;
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
  transition: opacity 0.3s ease;
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
  max-width: 600px;
  width: 90%;
  animation: fadeInScale 0.3s ease;
  border: 2px solid var(--primary-color);
  transition: opacity 0.3s ease;
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
.faq-answer a {
  color: brown;
  text-decoration: underline;
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
.tooltip {
  display: none;
  font-size: 0.8rem;
  color: gray;
  margin-top: 4px;
  text-align: left;
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
  transition: opacity 0.3s ease;
}
.premium-content {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  max-width: 80%;
  text-align: center;
  animation: slideUp 0.3s ease;
}
.premium-selo {
  background: #F4E8DB;
  color: var(--primary-color);
  padding: 4px 12px;
  border-radius: 16px;
  display: inline-block;
  margin-bottom: 16px;
}
#decline-premium {
  cursor: pointer;
  color: var(--primary-color);
  margin-top: 8px;
}
/* Styles from KYC.js integrated */
#kyc-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(6px);
    background: rgba(0, 0, 0, 0.3);
    display: none; /* Hidden by default */
    align-items: center;
    justify-content: center;
    z-index: 9998;
    animation: fadeIn 0.5s ease forwards;
}
#kyc-box {
    background: #fff;
    max-width: 500px;
    width: 95%;
    padding: 24px 20px;
    border-radius: 14px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    z-index: 9999;
}
#kyc-box h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 14px;
    background: linear-gradient(90deg, #AC865C, #8b6d4d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
#camera-container {
    position: relative;
    width: 100%;
    max-width: 320px;
    margin: 0 auto 16px;
    display: flex;
    justify-content: center;
}
#cameraPreview {
    width: 100%;
    height: auto;
    aspect-ratio: 3/4;
    border-radius: 12px;
    border: 3px solid rgba(172, 134, 92, 0.4);
    background: #000;
    object-fit: cover;
    display: block;
    transform: scaleX(-1);
}
#face-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    border: 5px solid rgba(172, 134, 92, 0.8);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    display: none;
}
.verificacao-status {
    margin-top: 16px;
}
.verificacao-status-top {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 4px;
    color: #333;
    opacity: 0;
    animation: fadeIn 0.5s forwards;
}
.verificacao-status-bottom {
    font-size: 14px;
    font-weight: 500;
    color: #666;
    opacity: 0;
    animation: fadeIn 0.5s forwards;
}
#loadingCircle {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(172, 134, 92, 0.3);
    border-top: 4px solid #AC865C;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
}
#centralizar-overlay, #falha-overlay, #sucesso-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    color: white;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
}
#centralizar-overlay h3, #falha-overlay h3, #sucesso-overlay h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 8px 0;
}
#centralizar-overlay p, #falha-overlay p, #sucesso-overlay p {
    font-size: 14px;
    font-weight: 400;
    margin: 0 0 16px 0;
}
#botaoEntendi, #botaoCancelar {
    background: #AC865C;
    color: white;
    padding: 10px 16px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 10px;
}
#logoMarca {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    opacity: 0.9;
}
`;
document.head.appendChild(style);

// ===== Constantes e Dados Básicos =====
const prohibitedWordsList = ['cu', 'pau', 'ppk', 'goza', 'chupa', 'puta', 'kids', 'kid', 'baby', 'bebe', 'cp', 'porno', 'estupro', 'estuprador', 'buceta', 'caralho', 'foder', 'fode', 'transar', 'sexo', 'bucetinha', 'roubar', 'exterminar', 'cuzinho', 'chupetinha', 'viado', 'baitola', 'prostituta', 'pedofilo', 'bct', 'nuds', 'leitada', 'fetiche', 'penis', 'vagina', 'se fuder', 'pepeka', 'piroca', 'gozada', 'pedofilia', 'violencia', 'ameaca', 'drogas', 'ilegal'];
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

// ===== Injetar HTML Completo =====
document.body.innerHTML = `
  <div class="container" style="opacity: 0; animation: fadeIn 0.8s ease forwards;">
    <div class="progress-bar"><div class="progress-fill"></div></div>
    
    <div id="step1" class="step active">
      <h2>Confirme sua identidade</h2>
      <p>Preencha os campos conforme seus documentos oficiais. Essa medida visa proteger a comunidade da Frame.</p>
      <div class="input-group">
        <label for="nome">Informe seu nome completo</label>
        <input type="text" id="nome" placeholder="Ex: João da Silva Oliveira">
        <div class="error-message"></div>
        <div class="tooltip">Digite seu nome completo de acordo com seu Documento Oficial do Governo.</div>
      </div>
      <div class="input-group">
        <label for="cpf">CPF</label>
        <input type="text" id="cpf" placeholder="000.000.000-00" inputmode="numeric">
        <div class="error-message"></div>
        <div class="tooltip">Dados corretos garantem a não reprovação do agendamento.</div>
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
          <input type="text" id="numero" placeholder="Ex: 143" inputmode="numeric">
          <div class="error-message"></div>
        </div>
      </div>
      <div class="row">
        <div class="input-group">
          <label for="cidade">Cidade</label>
          <input type="text" id="cidade" placeholder="São Paulo">
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
        <div class="error-message"></div>
        <div class="tooltip">Caso deseje, nesta etapa você pode optar por não utilizar/exibir seu nome real para a modelo.</div>
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
      <h2>Sua Experiência</h2>
      <div class="incluso-badge" style="display:block; margin: 0 auto 20px;">✓ TUDO INCLUSO</div>
      
      <h3 id="checkout-title" style="text-align:center; margin-bottom: 20px; color: var(--text-color); font-weight: 500;"></h3>

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

    <div id="step6" class="step">
      <h2>Documentos recebidos</h2>
      <p>Seus documentos foram enviados com sucesso e estão em análise.</p>
      <p>Na próxima etapa, você realizará uma <strong>verificação facial</strong> para confirmar sua identidade de forma segura com a tecnologia da Frame, o Frame Authentic.</p>
      <button class="btn" id="step6-btn">Prosseguir</button>
    </div>

    <div id="step7" class="step">
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
  <div class="payment-popup" id="payment-popup">
    <h2>Instruções</h2>
    <p>Nessa etapa, clique no botão abaixo para ir ao parceiro de pagamento. Ao finalizar, retorne a essa página e clique em "Pagamento efetuado".</p>
    <button class="btn" id="go-payment">Ir para pagamento</button>
    <button class="btn secondary" id="payment-done" style="display:none; background: var(--accent-light);">Pagamento efetuado</button>
  </div>
  <div class="faq-popup" id="faq-popup">
    <h2>Perguntas Frequentes</h2>
    <ul class="faq-list">
      <li><div class="faq-question">Como cancelar?</div><div class="faq-answer">Envie um e-mail pra: <a style="color: brown; text-decoration: underline;" href="mailto:contato@frameag.com">contato@frameag.com</a> com 48h de antecedência solicitando o cancelamento da experiência e do contrato, responderemos você com os próximos passos.</div></li>
      <li><div class="faq-question">O que meu agendamento inclui?</div><div class="faq-answer">Hospedagem premium, privacidade e suporte 24h de um time que está há 6 anos no mercado.</div></li>
      <li><div class="faq-question">Adicionais do checkout valem a pena?</div><div class="faq-answer">sim, oferecem vantagens e experiências extras dentro da sua que já está em processo final de agendamento.</div></li>
      <li><div class="faq-question">Vou realizar verificação facial?</div><div class="faq-answer">Sim, ao final das etapas você realizará uma verificação facial que leva menos de 15s para garantir um nível ainda mais robusto de segurança.</div></li>
    </ul>
    <button class="btn" onclick="document.getElementById('faq-popup').style.display = 'none'">Fechar</button>
  </div>
  <div class="overlay-black" id="overlay-black"></div>
  <div class="premium-overlay" id="premium-overlay">
    <div class="premium-content">
      <img src="https://framerusercontent.com/images/yVa3ycC9y0QeJOv3SFDDzBO1WYE.png" style="width:200px; height:200x; margin:0 auto;">
      <h2>Identificamos sua assinatura Premium.</h2>
      <p>Por ser um usuário Premium, você conta com hospedagem inclusa no seu agendamento.</p>
      <div class="premium-selo">Cortesia exclusiva da Frame.</div>
      <button class="btn" id="accept-premium">Seguir com a oferta</button>
      <p id="decline-premium">Rejeitar oferta</p>
    </div>
  </div>

  <div id="kyc-overlay">
    <div id="kyc-box">
        <h2>Frame Authentic</h2>
        <div id="camera-container">
            <video id="cameraPreview" autoplay playsinline muted></video>
            <div id="face-overlay"></div>
            <div id="loadingCircle"></div>
            <div id="centralizar-overlay">
                <h3>Centralize seu rosto</h3>
                <p>Posicione seu rosto no centro da tela</p>
            </div>
            <div id="falha-overlay">
                <h3>Falha na Verificação</h3>
                <p>Nossa tecnologia não conseguiu validar sua identidade devido à qualidade insuficiente. Por favor, verifique sua câmera e tente novamente mais tarde.</p>
                <button id="botaoEntendi" onclick="window.location.reload()">Tentar novamente</button>
                <button id="botaoCancelar" onclick="document.getElementById('kyc-overlay').style.display = 'none'">Cancelar</button>
            </div>
            <div id="sucesso-overlay">
                <h3>Verificação concluída</h3>
                <p>Aguarde, estamos redirecionando...</p>
            </div>
            <img id="logoMarca" src="https://framerusercontent.com/images/8eP5Buloi4fUryJ8u2WOGCAXMw.png" alt="Logomarca">
        </div>
        <div class="verificacao-status">
            <div class="verificacao-status-top">Processo de verificação</div>
            <div class="verificacao-status-bottom">Aguardando permissão para ativar sua câmera</div>
        </div>
    </div>
  </div>
`;

// ===== Lógica JavaScript =====
let currentStep = localStorage.getItem('currentStep') ? parseInt(localStorage.getItem('currentStep')) : 1;
// Ajuste se o usuário estava no passo antigo 5
if (currentStep === 5 && !localStorage.getItem('userData')) {
    currentStep = 4; // fallback de segurança
}

const totalSteps = 7; // Reduzido de 8 para 7
const userData = JSON.parse(localStorage.getItem('userData')) || {};
const progressFill = document.querySelector('.progress-fill');
let warningCount = parseInt(localStorage.getItem('warningCount')) || 0;
let blockUntil = localStorage.getItem('blockUntil') ? new Date(localStorage.getItem('blockUntil')) : null;

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

  // Configuração Específica do Passo 5 (Antigo 6 - Checkout)
  if (step === 5) {
      let firstName = "Visitante";
      if (userData.personal && userData.personal.nome) {
          firstName = userData.personal.nome.split(' ')[0];
      }
      document.getElementById('checkout-title').textContent = `Experiência completa para ${firstName}`;
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
  }
  // Step 5 não precisa de validação extra além do upsell
  if (valid) {
    localStorage.setItem('userData', JSON.stringify(userData));
    checkLocalStorageUsage();
  }
  return valid;
}

function checkLocalStorageUsage() {
  const total = 5 * 1024 * 1024;
  const used = new Blob([localStorage.getItem('userData')]).size;
  if (used / total > 0.8) {
    showWarningPopup('Armazenamento quase cheio. Limpando dados antigos.');
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
      const tempImg = new Image();
      tempImg.src = e.target.result;
      tempImg.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (targetId === 'profileCircle') {
          canvas.width = tempImg.width;
          canvas.height = tempImg.height;
          ctx.drawImage(tempImg, 0, 0);
          const compressed = canvas.toDataURL('image/jpeg', 0.7);
          img.src = compressed;
          userData.profilePhoto = compressed;
        } else {
          canvas.width = 300;
          canvas.height = 300;
          ctx.drawImage(tempImg, 0, 0, 300, 300);
          const compressed = canvas.toDataURL('image/jpeg', 0.7);
          img.src = compressed;
        }
        img.style.display = 'block';
        circle.appendChild(img);
        spinner.style.display = 'none';
        if (targetId.includes('doc')) {
          checkDocsUploaded();
        } else if (targetId === 'profileCircle') {
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

function showLoading(id) {
  document.getElementById(id).style.display = 'flex';
}

function hideLoading(id) {
  document.getElementById(id).style.display = 'none';
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

function handlePayment() {
  let upsellTotal = 0;
  if (document.getElementById('upsell1').checked) upsellTotal += 470;
  if (document.getElementById('upsell2').checked) upsellTotal += 525;
  let link;
  if (upsellTotal === 470) link = 'https://app.pushinpay.com.br/service/pay/A03FD477-AB8F-4223-9EED-A6C23F95CC5D';
  else if (upsellTotal === 525) link = 'https://app.pushinpay.com.br/service/pay/A03FD477-AB8F-4223-9EED-A6C23F95CC';
  else if (upsellTotal === 995) link = 'https://buy.stripe.com/6oU4gy4eJ04sg67b50cV22b';
  else {
    showStep(6); // Vai para "Documentos Recebidos" (Antigo 7)
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
    confirmBtn.removeEventListener('click', handlePayment);
    confirmBtn.addEventListener('click', () => {
      showToast('Pagamento será verificado junto com os dados.');
      showLoadingOverlay(['Verificando pagamento…', 'Tudo certo!'], () => showStep(6));
    });
  }, 1000);
}

confirmBtn.addEventListener('click', handlePayment);

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

// ===== Lógica de KYC (Integrada) =====
function initiateKYC() {
    const kycOverlay = document.getElementById('kyc-overlay');
    const statusTop = document.querySelector('.verificacao-status-top');
    const statusBottom = document.querySelector('.verificacao-status-bottom');
    const loadingCircle = document.getElementById('loadingCircle');
    const falhaOverlay = document.getElementById('falha-overlay');
    const centralizarOverlay = document.getElementById('centralizar-overlay');
    const sucessoOverlay = document.getElementById('sucesso-overlay');
    const cameraPreview = document.getElementById('cameraPreview');
    const faceOverlay = document.getElementById('face-overlay');

    // Mostrar o Overlay
    kycOverlay.style.display = 'flex';

    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        cameraPreview.srcObject = stream;
        statusTop.textContent = "Verificação em andamento...";
        statusBottom.textContent = "Sua câmera está ativa. Aguarde as instruções.";
        loadingCircle.style.display = "block";
        
        setTimeout(() => {
            loadingCircle.style.display = "none";
            centralizarOverlay.style.display = "flex";
            faceOverlay.style.display = "block";

            setTimeout(() => {
                centralizarOverlay.style.display = "none";
                faceOverlay.style.display = "none";
                statusTop.textContent = "Processando dados biométricos...";
                statusBottom.textContent = "Aguarde...";
                loadingCircle.style.display = "block";

                setTimeout(() => {
                    loadingCircle.style.display = "none";
                    statusTop.textContent = "Confirmando sua identidade...";
                    statusBottom.textContent = "Aguarde...";
                    loadingCircle.style.display = "block";

                    setTimeout(() => {
                        loadingCircle.style.display = "none";
                        statusTop.textContent = "Validando qualidade de imagem...";
                        statusBottom.textContent = "Aguarde...";
                        loadingCircle.style.display = "block";

                        setTimeout(() => {
                            loadingCircle.style.display = "none";
                            sucessoOverlay.style.display = "flex";
                            statusTop.textContent = "Verificação concluída!";
                            statusBottom.textContent = "Redirecionando...";
                            setTimeout(() => {
                                window.location.href = "https://www.frameag.com/kyc/success";
                            }, 3000);
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 1000);
        }, 1000);
    }).catch(function(err) {
        console.error(err);
        statusTop.textContent = "Permissão negada";
        statusBottom.textContent = "Reinicie a página para tentar novamente.";
    });
}

// ===== Event Listeners =====
document.addEventListener('DOMContentLoaded', () => {
  updateProgress();
  showStep(currentStep);
  
  // Botões de navegação
  document.getElementById('step1-btn').addEventListener('click', () => { 
    if (validateStep(1)) {
      document.getElementById('premium-overlay').style.display = 'flex';
    } 
  });
  
  document.getElementById('accept-premium').addEventListener('click', () => {
    document.getElementById('premium-overlay').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('premium-overlay').style.display = 'none';
      document.getElementById('premium-overlay').style.opacity = 1;
      showStep(2);
    }, 300);
  });
  
  document.getElementById('decline-premium').addEventListener('click', () => {
    document.getElementById('premium-overlay').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('premium-overlay').style.display = 'none';
      document.getElementById('premium-overlay').style.opacity = 1;
      showStep(2);
    }, 300);
  });
  
  document.getElementById('step2-btn').addEventListener('click', () => { if (validateStep(2)) showStep(3); });
  
  document.getElementById('step3-btn').addEventListener('click', () => { if (validateStep(3)) {
    document.getElementById('chosenDoc').textContent = `Documento escolhido: ${userData.docType}`;
    document.getElementById('cpfBox').textContent = userData.personal.cpf;
    showLoadingOverlay(['Verificando informações…', 'Analisando seus dados…', 'Tudo certo!'], () => showStep(4));
  } });
  
  // No step 4 (Upload), ao clicar prosseguir, vamos direto pro Checkout (Step 5)
  document.getElementById('step4-btn').addEventListener('click', () => { 
      if (validateStep(4)) {
          showLoadingOverlay(['Processando documentos...'], () => showStep(5));
      }
  });

  // Step 6 (Transição de docs recebidos) -> Vai para Step 7 (KYC Intro)
  document.getElementById('step6-btn').addEventListener('click', () => showStep(7));
  
  // Step 7 (KYC Intro) -> Inicia a câmera
  document.getElementById('start-verification').addEventListener('click', initiateKYC);

  // Inputs e Uploads
  document.getElementById('profilePic').addEventListener('change', e => previewImage(e, 'profileCircle'));
  document.getElementById('docFrontInput').addEventListener('change', e => previewImage(e, 'docFront'));
  document.getElementById('docBackInput').addEventListener('change', e => previewImage(e, 'docBack'));
  
  const inputsStep1 = document.querySelectorAll('#step1 input, #step1 select');
  inputsStep1.forEach(i => i.addEventListener('input', () => checkFormComplete('step1-btn', inputsStep1)));
  
  const inputsStep2 = document.querySelectorAll('#step2 input:not([type=file]), #step2 select');
  inputsStep2.forEach(i => i.addEventListener('input', () => checkFormComplete('step2-btn', inputsStep2)));
  
  const selectDoc = document.getElementById('docType');
  selectDoc.addEventListener('change', () => document.getElementById('step3-btn').disabled = !selectDoc.value);
  
  document.getElementById('close-warning').addEventListener('click', () => {
    document.getElementById('warning-popup').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('warning-popup').style.display = 'none';
      document.getElementById('warning-popup').style.opacity = 1;
      document.getElementById('overlay-black').style.display = 'none';
    }, 300);
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
    document.querySelectorAll('.payment-popup, .faq-popup, .warning-popup').forEach(el => {
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.display = 'none';
        el.style.opacity = 1;
      }, 300);
    });
    document.getElementById('overlay-black').style.display = 'none';
  });
  
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('dblclick', e => e.preventDefault());
  document.addEventListener('dragstart', e => e.preventDefault());
  
  const tooltips = document.querySelectorAll('.tooltip');
  const tooltipInputs = ['nome', 'cpf', 'displayName'];
  tooltipInputs.forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener('focus', () => input.nextElementSibling.nextElementSibling.style.display = 'block');
    input.addEventListener('blur', () => input.nextElementSibling.nextElementSibling.style.display = 'none');
  });
  
  const validateInputs = ['nome', 'rua', 'bairro', 'numero', 'cidade', 'displayName'];
  validateInputs.forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener('input', () => {
      const val = input.value;
      if (val.length > 100) {
        input.value = val.slice(0, 100);
      }
      if (!/^[a-zA-Zà-úÀ-Ú0-9 ]*$/.test(val) && (id !== 'numero' || !/^[0-9]*$/.test(val))) {
        showError(id, 'Sem caracteres especiais.');
      } else {
        clearErrors();
      }
      if (id === 'displayName' && checkProhibited(val)) {
        showError(id, 'Não é permitido.');
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