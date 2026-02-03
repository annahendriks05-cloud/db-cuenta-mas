import { base44 } from '@base44/sdk';

export async function submitAnlageForm(data) {
  try {
    // Guardar en Base44
    const anlage = await base44.entities.Anlage.create({
      vorname: data.firstName,
      nachname: data.lastName,
      email: data.email,
      rufnummer: data.phone,
      waehrung: data.currency,
      anlagebetrag: parseFloat(data.amount)
    });

    // Escribir en Google Sheets
    const sheetId = '1dxfZMsYww5JF6Kfr96KQL1JdmM1X0HwDez8j_CQx0iw';
    
    await base44.asServiceRole.connectors.googlesheets.appendValues({
      spreadsheetId: sheetId,
      range: 'Anlage!A:F',
      values: [[
        new Date().toLocaleString('de-DE'),
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.currency,
        data.amount
      ]]
    });

    return { success: true, id: anlage.id };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}