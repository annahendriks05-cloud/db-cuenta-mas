import { base44 } from '@base44/sdk';

export async function submitContactForm(data) {
  try {
    // Guardar en Base44
    const kontaktRequest = await base44.entities.Kontaktanfrage.create({
      vorname: data.firstName,
      nachname: data.lastName,
      email: data.email,
      telefon: data.phone,
      betreff: data.subject,
      nachricht: data.message,
      status: 'neu'
    });

    // Escribir en Google Sheets
    const sheetId = '1dxfZMsYww5JF6Kfr96KQL1JdmM1X0HwDez8j_CQx0iw';
    const accessToken = await base44.asServiceRole.connectors.getAccessToken('googlesheets');
    
    await base44.asServiceRole.connectors.googlesheets.appendValues({
      spreadsheetId: sheetId,
      range: 'Kontakt!A:F',
      values: [[
        new Date().toLocaleString('de-DE'),
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.message
      ]]
    });

    return { success: true, id: kontaktRequest.id };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}