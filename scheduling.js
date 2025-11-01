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
  max-width: 600px;
  background: var(--secondary-bg);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(8px);
  padding: 24px;
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
  margin-bottom: 20px;
  text-align: center;
}

.input-group {
  margin-bottom: 16px;
  position: relative;
}

.input-group label {
  display: block;
  font-size: 1rem;
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
  border: 1px solid var(--accent-color);
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
  transition: transform 0.3s ease;
  transform: translateY(100%);
  box-shadow: 0 -4px 20px var(--shadow-color);
  backdrop-filter: blur(4px);
}

.date-fullscreen.show {
  display: flex;
  transform: translateY(0);
}

.date-header {
  padding: 16px;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  background: var(--secondary-bg);
  z-index: 1;
}

.date-content {
  padding: 16px;
  flex: 1;
  overflow-y: auto;
}

.month-section {
  margin-bottom: 24px;
}

.month-title {
  font-weight: 500;
  margin-bottom: 12px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}

.day-header {
  font-weight: 500;
  text-align: center;
  color: var(--text-color);
}

.day {
  text-align: center;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  font-size: 1rem;
}

.day.selected-start {
  background: #000;
  color: #fff;
}

.day.selected-end {
  background: rgba(0,0,0,0.1);
  color: #000;
}

.day.in-range {
  background: rgba(0,0,0,0.05);
}

.day.disabled {
  color: var(--border-color);
  cursor: not-allowed;
}

.load-more {
  display: block;
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 24px;
  background: transparent;
  color: var(--text-color);
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 24px;
  transition: background 0.2s;
}

.load-more:hover {
  background: var(--note-bg);
}

.date-actions {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--border-color);
  position: sticky;
  bottom: 0;
  background: var(--secondary-bg);
  z-index: 1;
}

.date-actions .btn {
  width: auto;
}

.city-select {
  margin-bottom: 20px;
}

.city-select .input-group {
  position: relative;
}

.city-select input {
  padding-left: 40px;
}

.city-select .search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  fill: var(--text-color);
}

#city-list {
  position: absolute;
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;
  width: 100%;
  display: none;
  box-shadow: 0 4px 12px var(--shadow-color);
}

.city-option {
  padding: 12px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
}

.city-option:hover {
  background: var(--note-bg);
}

.city-icon {
  width: 24px;
  height: 24px;
  fill: var(--primary-color);
}

.city-name {
  font-weight: 500;
}

.city-desc {
  font-size: 0.8rem;
  color: var(--text-color);
}

.hotel-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (min-width: 768px) {
  .hotel-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
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
  display: none;
  align-items: flex-end;
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

  .popup-overlay {
    align-items: center;
  }

  .popup-content {
    flex-direction: row;
    border-radius: 20px;
    transform: scale(0.95);
    transition: transform 0.3s ease, opacity 0.3s ease;
    max-height: none;
    max-width: 600px;
    gap: 24px;
  }

  .popup-overlay.show .popup-content {
    transform: scale(1);
  }

  .hotel-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 390px) {
  .container {
    width: 92%;
    padding: 16px;
  }

  h2 {
    font-size: 1.1rem;
  }

  .hotel-card {
    margin-bottom: 16px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 540px;
  }
}

.popup-img {
  width: 100%;
  height: auto;
  border-radius: 16px;
}

@media (min-width: 768px) {
  .popup-img {
    width: 50%;
    height: auto;
  }
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
  text-align: center;
}

.custom-city-popup h2 {
  text-align: center;
}

.custom-city-popup p {
  text-align: left;
}

.custom-options {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.custom-option {
  background: var(--input-bg);
  padding: 16px;
  border-radius: 16px;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.custom-option:hover {
  background: var(--note-bg);
  transform: translateY(-2px);
}

.custom-option small {
  display: block;
  font-size: 0.75rem;
  color: var(--text-color);
  text-align: left;
}

.custom-alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--secondary-bg);
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  z-index: 10002;
  display: none;
  max-width: 80%;
  text-align: center;
}

.custom-alert.show {
  display: block;
}

.custom-alert p {
  margin-bottom: 16px;
  font-size: 1rem;
}

.custom-alert button {
  padding: 12px 24px;
  border-radius: 24px;
  background: var(--primary-color);
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}

.custom-alert button:hover {
  background: var(--accent-light);
}

.block-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--secondary-bg);
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  z-index: 10002;
  display: none;
  max-width: 80%;
  text-align: center;
}

.block-popup.show {
  display: block;
}

.block-timer {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--error-color);
}

.chatbot-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10001;
}

.row {
  display: flex;
  gap: 16px;
}

.row .input-group {
  flex: 1;
}

@media (max-width: 767px) {
  .row {
    flex-direction: column;
    gap: 16px;
  }

  .custom-options {
    grid-template-columns: 1fr;
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
  font-size: 0.8rem;
  color: var(--text-color);
  text-align: center;
  margin-top: 24px;
}

.privacy a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.2s;
}

.privacy a:hover {
  color: var(--accent-light);
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

@media (max-width: 390px) {
  .container {
    width: 92%;
    padding: 16px;
  }

  h2 {
    font-size: 1.1rem;
  }

  .hotel-card {
    margin-bottom: 16px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 540px;
  }
}

@media (orientation: landscape) and (max-width: 767px) {
  .orientation-alert {
    display: block;
  }
}
`;
document.head.appendChild(style);

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
        <input type="text" id="cpf" placeholder="000.000.000-00" maxlength="14">
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
      <div class="privacy">
        Seus dados estão protegidos conforme nossa <a href="https://frameag.com/privacy" target="_blank">Política de Privacidade</a>.
      </div>
    </div>
    <div id="step2" class="step">
      <h2>Personalize seu perfil</h2>
      <p>Adicione uma foto de perfil e configure suas preferências de exibição.</p>
      <label class="upload">
        <input type="file" id="profilePic" accept="image/jpeg,image/png">
        <div class="circle-upload" id="profileCircle"><svg width="24" height="24" fill="var(--primary-color)"><path d="M12 5v14M5 12h14"/></svg></div>
        <div class="spinner" id="profile-spinner"></div>
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
    <div id="step5" class="step">
      <h2>Selecione a data e hotel</h2>
      <div class="date-selection">
        <label for="dates">Datas da experiência</label>
        <input type="text" id="dates" placeholder="Selecione datas" readonly>
      </div>
      <div class="city-select">
        <label for="city-input">Cidade</label>
        <div class="input-group">
          <svg class="search-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <input type="text" id="city-input" placeholder="Busque uma cidade">
        </div>
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
        <div class="resumo-item"><span>Datas:</span><span id="resumo-dates"></span></div>
        <div class="resumo-item"><span>Local:</span><span id="resumo-hotel"></span></div>
        <div class="resumo-item"><span>Verificação facial:</span><span>Pendente</span></div>
      </div>
      <div class="hospedagem-option">
        <p>Aproveite hospedagem completa com valor especial Frame: R$ 425,00. O valor cobre sua permanência integral no hotel parceiro, após o término da experiência.</p>
        <button class="btn" id="add-hospedagem">Adicionar hospedagem completa — R$ 425,00</button>
        <div class="details-link" id="skip-hospedagem">Seguir sem hospedagem completa</div>
      </div>
      <button class="btn" id="go-to-payment" style="display:none;">Ir para pagamento</button>
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
        <div class="spinner" id="docFront-spinner"></div>
        <div class="upload-text">Frente do documento</div>
      </label>
      <label class="upload">
        <input type="file" id="docBackInput" accept="image/jpeg,image/png">
        <div class="circle-upload" id="docBack"><svg width="24" height="24" fill="var(--primary-color)"><path d="M12 5v14M5 12h14"/></svg></div>
        <div class="spinner" id="docBack-spinner"></div>
        <div class="upload-text">Verso do documento</div>
      </label>
      <button class="btn" id="step4-btn" disabled>Prosseguir</button>
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
  <div class="popup-overlay" id="hotel-popup">
    <div class="popup-content">
      <span class="close-popup">×</span>
    </div>
  </div>
  <div class="popup-overlay" id="custom-city-popup">
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
      </div>
      <span class="close-popup">×</span>
    </div>
  </div>
  <div class="popup-overlay" id="verification-popup">
    <div class="popup-content">
      <p id="verification-instructions">Posicione seu rosto dentro do oval.</p>
      <div id="camera-preview-container">
        <video id="camera-preview" autoplay playsinline muted></video>
      </div>
      <button class="btn" id="capture-face">Iniciar</button>
      <div id="verification-success" style="display:none;">Verificação bem sucedida!</div>
      <span class="close-popup">×</span>
    </div>
  </div>
  <div class="confirm-toast" id="confirm-toast"></div>
  <div class="loading-overlay" id="loading-overlay">
    <div class="spinner"></div>
    <p>Carregando...</p>
  </div>
  <div class="orientation-alert">
    <p>Por favor, use o dispositivo no modo vertical para melhor experiência.</p>
  </div>
  <div class="custom-alert" id="custom-alert">
    <p id="alert-message"></p>
    <button onclick="closeAlert()">Fechar</button>
  </div>
  <div class="block-popup" id="block-popup">
    <h2>Acesso bloqueado</h2>
    <p>Devido a entradas inadequadas, o acesso está bloqueado por <span id="block-timer"></span>.</p>
    <button onclick="closeBlockPopup()">Fechar</button>
  </div>
  <div class="chatbot-container"></div>
`;

// Append chatbase script
const chatbaseScript = document.createElement('script');
chatbaseScript.innerHTML = `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="DtsV2GjthGS1V0h0-Etsa";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`;
document.head.appendChild(chatbaseScript);

// ===== Lógica JavaScript =====
let currentStep = localStorage.getItem('currentStep') ? parseInt(localStorage.getItem('currentStep')) : 1;
const totalSteps = 8;
const userData = JSON.parse(localStorage.getItem('userData')) || {};
const progressFill = document.querySelector('.progress-fill');
let checkInDate = null;
let checkOutDate = null;
let currentMonths = [new Date().getMonth(), new Date().getMonth() + 1];
let currentYear = new Date().getFullYear();
let verificationStream = null;
const prohibitedList = ['cu', 'pau', 'ppk', 'goza', 'chupa', 'puta', 'kids', 'kid', 'baby', 'bebe', 'cp', 'porno', 'estupro', 'estuprador', 'buceta', 'caralho', 'foder', 'fode', 'transar', 'sexo', 'bucetinha', 'roubar', 'exterminar', 'cuzinho', 'chupetinha', 'viado', 'baitola', 'prostituta', 'pedofilo', 'bct', 'nuds', 'leitada', 'fetiche', 'penis', 'vagina', 'se fuder', 'pepeka', 'piroca', 'gozada', 'pedofilia', 'violencia', 'ameaca', 'drogas', 'ilegal'];
let warningCount = parseInt(localStorage.getItem('warningCount')) || 0;
let blockEnd = localStorage.getItem('blockEnd') ? new Date(localStorage.getItem('blockEnd')) : null;
let blockTimerInterval = null;

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
  if (total > 4 * 1024 * 1024) { // Close to 5MB
    localStorage.clear();
    showToast('Espaço de armazenamento limpo para continuar.');
  }
}

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
  checkLocalStorageSize();
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
    if (!nome || nome.split(' ').length < 2) {
      showError('nome', 'Por favor, insira seu nome completo.');
      valid = false;
    }
    if (prohibitedList.some(word => nome.toLowerCase().includes(word))) {
      handleProhibited();
      valid = false;
    }
    if (!cpfRegex.test(cpf)) {
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
    if (!displayName) {
      showError('displayName', 'Campo obrigatório.');
      valid = false;
    }
    if (prohibitedList.some(word => displayName.toLowerCase().includes(word))) {
      handleProhibited();
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
      userData.dates = { checkIn: checkInDate.toISOString(), checkOut: checkOutDate.toISOString() };
    }
  }
  if (valid) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }
  return valid;
}

function showCustomAlert(msg) {
  document.getElementById('alert-message').textContent = msg;
  document.getElementById('custom-alert').classList.add('show');
}

function closeAlert() {
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
  const now = new Date();
  if (now >= blockEnd) {
    clearInterval(blockTimerInterval);
    localStorage.removeItem('blockEnd');
    localStorage.removeItem('warningCount');
    warningCount = 0;
    closeBlockPopup();
    enableInputs();
  } else {
    const remaining = blockEnd - now;
    const hours = Math.floor(remaining / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    document.getElementById('block-timer').textContent = `${hours}h ${minutes}m`;
  }
}

function closeBlockPopup() {
  document.getElementById('block-popup').classList.remove('show');
}

function disableInputs() {
  document.querySelectorAll('input, select, button').forEach(el => el.disabled = true);
}

function enableInputs() {
  document.querySelectorAll('input, select, button').forEach(el => el.disabled = false);
}

function formatCPF(e) {
  let value = e.target.value.replace(/\D/g, '');
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
    circle.querySelector('svg') ? circle.querySelector('svg').remove() : null;
    spinner.style.display = 'none';
    if (targetId === 'profileCircle') {
      // Optional handling
    } else {
      checkDocsUploaded();
    }
  };
  reader.readAsDataURL(file);
}

function initCitySuggestions() {
  const list = document.getElementById('city-list');
  list.style.display = 'block';
  const suggestions = [
    { city: 'São Paulo, SP', desc: 'Mais acessada' },
    { city: 'Rio de Janeiro, RJ', desc: 'Melhores hotéis' },
    { city: 'Brasília, DF', desc: 'Melhores opções' }
  ];
  suggestions.forEach(s => {
    const option = document.createElement('div');
    option.className = 'city-option';
    option.innerHTML = `
      <svg class="city-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      <div>
        <div class="city-name">${s.city}</div>
        <div class="city-desc">${s.desc}</div>
      </div>
    `;
    option.addEventListener('click', () => {
      document.getElementById('city-input').value = s.city;
      list.style.display = 'none';
      loadHotels(s.city);
    });
    list.appendChild(option);
  });
}

function normalizeString(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function initAutocomplete() {
  const input = document.getElementById('city-input');
  const list = document.getElementById('city-list');
  input.addEventListener('focus', () => {
    if (!input.value) {
      initCitySuggestions();
    }
  });
  input.addEventListener('input', () => {
    const val = normalizeString(input.value);
    list.innerHTML = '';
    if (!val) {
      initCitySuggestions();
      return;
    }
    cities.filter(c => normalizeString(c).includes(val)).forEach(c => {
      const option = document.createElement('div');
      option.className = 'city-option';
      option.innerHTML = `
        <svg class="city-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        <div class="city-name">${c}</div>
      `;
      option.addEventListener('click', () => {
        input.value = c;
        list.style.display = 'none';
        loadHotels(c);
      });
      list.appendChild(option);
    });
    list.style.display = 'block';
  });
  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !list.contains(e.target)) {
      list.style.display = 'none';
    }
  });
}

function renderMonths() {
  const content = document.getElementById('date-content');
  content.innerHTML = '';
  for (let i = 0; i < currentMonths.length; i++) {
    const month = currentMonths[i] % 12;
    const year = currentYear + Math.floor(currentMonths[i] / 12);
    const monthSection = document.createElement('div');
    monthSection.className = 'month-section';
    monthSection.innerHTML = `
      <div class="month-title">${new Date(year, month).toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}</div>
      <div class="calendar-grid" id="calendar-grid-${i}"></div>
    `;
    content.appendChild(monthSection);
    renderCalendar(month, year, `calendar-grid-${i}`);
  }
}

function renderCalendar(month, year, gridId) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = '';
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
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
      day.classList.add('selected-start');
    } else if (checkOutDate && checkOutDate.getTime() === new Date(year, month, d).getTime()) {
      day.classList.add('selected-end');
    } else if (checkInDate && checkOutDate && new Date(year, month, d) > checkInDate && new Date(year, month, d) < checkOutDate) {
      day.classList.add('in-range');
    }
    grid.appendChild(day);
  }
}

function selectDate(date) {
  if (!checkInDate || date < checkInDate || checkOutDate) {
    checkInDate = date;
    checkOutDate = null;
  } else {
    checkOutDate = date;
  }
  renderMonths();
  document.getElementById('save-dates').disabled = !(checkInDate && checkOutDate);
}

function loadMoreDates() {
  currentMonths.push(currentMonths[currentMonths.length - 1] + 1);
  renderMonths();
}

function showDateFullscreen() {
  document.getElementById('date-fullscreen').classList.add('show');
  renderMonths();
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
    circle.innerHTML = `<img src="${e.target.result}" alt="Imagem" loading="lazy">`;
    spinner.style.display = 'none';
    if (targetId === 'profileCircle') {
      circle.querySelector('svg').remove();
    } else if (targetId.includes('doc')) {
      circle.querySelector('svg').remove();
      checkDocsUploaded();
    }
  };
  reader.readAsDataURL(file);
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
          <img src="${hotel.profileImg}" class="hotel-img" alt="${hotel.name}" loading="lazy">
          <div class="hotel-selo">${hotel.selo}</div>
          <svg class="hotel-favorite${userData.favorites && userData.favorites.includes(hotel.name) ? ' filled' : ''}" onclick="toggleFavorite('${hotel.name}', this)" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <div class="hotel-info">
          <div class="hotel-name">${hotel.name}</div>
          <p class="hotel-desc">${hotel.desc.substring(0, 120)}...</p>
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

function toggleFavorite(name, icon) {
  if (!userData.favorites) userData.favorites = [];
  if (userData.favorites.includes(name)) {
    userData.favorites = userData.favorites.filter(f => f !== name);
    icon.classList.remove('filled');
    showToast('Hotel removido dos favoritos.');
  } else {
    userData.favorites.push(name);
    icon.classList.add('filled');
    showToast('Hotel favoritado.');
  }
  localStorage.setItem('userData', JSON.stringify(userData));
}

function checkBlock() {
  const now = new Date();
  if (blockEnd && now < blockEnd) {
    showBlockPopup();
    disableInputs();
  } else if (blockEnd) {
    localStorage.removeItem('blockEnd');
    localStorage.removeItem('warningCount');
    warningCount = 0;
  }
}

// Init
checkBlock();
document.getElementById('cpf').addEventListener('input', formatCPF);
document.getElementById('profilePic').addEventListener('change', e => handleUpload(e, 'profileCircle', 'profile-spinner'));
document.getElementById('docFrontInput').addEventListener('change', e => handleUpload(e, 'docFront', 'docFront-spinner'));
document.getElementById('docBackInput').addEventListener('change', e => handleUpload(e, 'docBack', 'docBack-spinner'));
document.getElementById('dates').addEventListener('click', showDateFullscreen);
document.getElementById('clear-dates').addEventListener('click', () => {
  checkInDate = null;
  checkOutDate = null;
  renderMonths();
  document.getElementById('save-dates').disabled = true;
});
document.getElementById('save-dates').addEventListener('click', () => {
  if (checkInDate && checkOutDate) {
    document.getElementById('dates').value = `${checkInDate.toLocaleDateString('pt-BR')} - ${checkOutDate.toLocaleDateString('pt-BR')}`;
    document.getElementById('date-fullscreen').classList.remove('show');
  }
});
document.getElementById('load-more-dates').addEventListener('click', loadMoreDates);
initAutocomplete();
updateProgress();
showStep(currentStep);
});