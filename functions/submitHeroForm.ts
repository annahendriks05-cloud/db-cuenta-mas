import { base44 } from '@base44/sdk';

export async function submitHeroForm(data) {
  try {
    // Guardar en Base44
    const contactForm = await base44.entities.ContactoFormulario.create({
      vorname: data.firstName,
      nachname: data.lastName,
      personalausweis: data.idCard,
      telefon: data.phone,
      email: data.email,
      postleitzahl: data.zipCode,
      autorizo: data.authorize,
      estado: 'pendiente'
    });

    // Escribir en Google Sheets
    const sheetId = '1dxfZMsYww5JF6Kfr96KQL1JdmM1X0HwDez8j_CQx0iw';
    
    await base44.asServiceRole.connectors.googlesheets.appendValues({
      spreadsheetId: sheetId,
      range: 'Hero!A:G',
      values: [[
        new Date().toLocaleString('de-DE'),
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.zipCode,
        data.idCard,
        data.authorize ? 'Sí' : 'No'
      ]]
    });

    return { success: true, id: contactForm.id };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}