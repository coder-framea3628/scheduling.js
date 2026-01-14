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
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
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
#popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(6px);
    background: rgba(0, 0, 0, 0.3);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 9998;
    animation: fadeIn 0.5s ease forwards;
}
#popup-box {
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
#popup-box h2 {
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
@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.98); }
    to { opacity: 1; transform: scale(1); }
}
@keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
}
`;
document.head.appendChild(style);

// ===== Injetar HTML (sem step 5 e elementos relacionados) =====
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
      </div>
      <div class="input-group">
        <label for="cpf">CPF</label>
        <input type="text" id="cpf" placeholder="000.000.000-00" inputmode="numeric">
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

    <div id="step6" class="step">
      <h2>Sua Experiência</h2>
      <div class="incluso-badge">✓ TUDO INCLUSO</div>
      <div class="resumo-card">
        <div class="resumo-item">
          <span>Experiência completa para:</span>
          <span id="resumo-nome"></span>
        </div>
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

  <!-- Popup de verificação facial (Frame Authentic) -->
  <div id="popup-overlay">
    <div id="popup-box">
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
          <button id="botaoEntendi">Certo, tentar novamente</button>
          <button id="botaoCancelar">Cancelar</button>
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

  <div class="loading-overlay" id="loading-overlay">
    <div class="spinner"></div>
    <p id="loading-message">Carregando...</p>
  </div>
`;

// ===== Lógica JavaScript =====
let currentStep = localStorage.getItem('currentStep') ? parseInt(localStorage.getItem('currentStep')) : 1;
const totalSteps = 7; // Agora são 7 steps (1-4,6,7,8)
const userData = JSON.parse(localStorage.getItem('userData')) || {};
const progressFill = document.querySelector('.progress-fill');

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

  if (step === 6) {
    const firstName = (userData.personal?.nome || 'Usuário').split(' ')[0];
    document.getElementById('resumo-nome').textContent = firstName;
  }
}

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function checkProhibited(inputValue) {
  const texto = inputValue.toLowerCase().trim();
  const prohibited = ['cu', 'pau', 'ppk', 'goza', 'chupa', 'puta', /* ... sua lista completa ... */];
  if (prohibited.includes(texto)) {
    alert('Palavra inadequada detectada. Por favor, evite termos inapropriados.');
    return true;
  }
  return false;
}

function validateCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  let sum = 0, rest;
  for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i-1, i)) * (11 - i);
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.substring(9, 10))) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i-1, i)) * (12 - i);
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.substring(10, 11))) return false;
  return true;
}

function validateStep(step) {
  let valid = true;
  if (step === 1) {
    const nome = document.getElementById('nome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    if (!nome || nome.split(' ').length < 2) valid = false;
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf) || !validateCPF(cpf)) valid = false;
    if (valid) userData.personal = { nome, cpf };
  } else if (step === 2) {
    const displayName = document.getElementById('displayName').value.trim();
    const showAge = document.getElementById('showAge').value;
    const terms = document.getElementById('terms').checked;
    if (!displayName || !showAge || !terms) valid = false;
    if (valid) userData.profile = { displayName, showAge };
  } else if (step === 3) {
    const docType = document.getElementById('docType').value;
    if (!docType) valid = false;
    if (valid) userData.docType = docType;
  } else if (step === 4) {
    const front = document.getElementById('docFront').querySelector('img');
    const back = document.getElementById('docBack').querySelector('img');
    if (!front || !back) valid = false;
  }
  if (valid) localStorage.setItem('userData', JSON.stringify(userData));
  return valid;
}

function previewImage(event, targetId) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const img = document.createElement('img');
    img.src = e.target.result;
    document.getElementById(targetId).innerHTML = '';
    document.getElementById(targetId).appendChild(img);
    if (targetId.includes('doc')) {
      document.getElementById('step4-btn').disabled = !(document.getElementById('docFront').querySelector('img') && document.getElementById('docBack').querySelector('img'));
    }
  };
  reader.readAsDataURL(file);
}

// Upsell logic
const upsellCheckboxes = document.querySelectorAll('.upsell-checkbox');
const confirmBtn = document.getElementById('confirm-btn');
const totalMini = document.getElementById('total-mini');

function updateUpsell() {
  let total = 0;
  if (document.getElementById('upsell1').checked) total += 470;
  if (document.getElementById('upsell2').checked) total += 525;
  if (total > 0) {
    confirmBtn.textContent = 'Ir para pagamento';
    totalMini.textContent = `Total adicional: R$ ${total.toFixed(2)}`;
    totalMini.style.display = 'block';
  } else {
    confirmBtn.textContent = 'Continuar agora';
    totalMini.style.display = 'none';
  }
}

upsellCheckboxes.forEach(cb => cb.addEventListener('change', updateUpsell));

function toggleUpsell(el) {
  const cb = el.querySelector('input');
  cb.checked = !cb.checked;
  updateUpsell();
}

// Verificação facial (popup KYC)
function startKYC() {
  document.getElementById('popup-overlay').style.display = 'flex';
  const video = document.getElementById('cameraPreview');
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
      document.querySelector('.verificacao-status-bottom').textContent = 'Câmera ativada. Centralize o rosto.';
    })
    .catch(err => {
      document.querySelector('.verificacao-status-top').textContent = 'Erro ao acessar câmera';
    });

  // Simulação simples de sucesso (você pode melhorar com detecção real)
  setTimeout(() => {
    document.getElementById('centralizar-overlay').style.display = 'none';
    document.getElementById('sucesso-overlay').style.display = 'flex';
    setTimeout(() => {
      window.location.href = 'https://www.frameag.com/kyc/success';
    }, 3000);
  }, 5000);
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
  updateProgress();
  showStep(currentStep);

  document.getElementById('step1-btn').addEventListener('click', () => {
    if (validateStep(1)) showStep(2);
  });

  document.getElementById('step2-btn').addEventListener('click', () => {
    if (validateStep(2)) showStep(3);
  });

  document.getElementById('step3-btn').addEventListener('click', () => {
    if (validateStep(3)) showStep(4);
  });

  document.getElementById('step4-btn').addEventListener('click', () => {
    if (validateStep(4)) showStep(6);
  });

  document.getElementById('confirm-btn').addEventListener('click', () => {
    showStep(7);
  });

  document.getElementById('step7-btn').addEventListener('click', startKYC);

  document.getElementById('profilePic').addEventListener('change', e => previewImage(e, 'profileCircle'));
  document.getElementById('docFrontInput').addEventListener('change', e => previewImage(e, 'docFront'));
  document.getElementById('docBackInput').addEventListener('change', e => previewImage(e, 'docBack'));

  // Botão "tentar novamente" no popup de falha
  document.getElementById('botaoEntendi').addEventListener('click', () => {
    document.getElementById('popup-overlay').style.display = 'none';
    startKYC(); // Tenta de novo
  });
});