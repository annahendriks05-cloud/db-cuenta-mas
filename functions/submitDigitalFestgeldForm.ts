import { base44 } from '@base44/sdk';

export async function submitDigitalFestgeldForm(data) {
  try {
    // Guardar en Base44 usando ContactoFormulario
    const contact = await base44.entities.ContactoFormulario.create({
      vorname: data.firstName,
      nachname: data.lastName,
      email: data.email,
      telefon: data.phone,
      personalausweis: data.idCard || '',
      postleitzahl: data.zipCode || '',
      autorizo: data.authorize,
      estado: 'pendiente'
    });

    // Escribir en Google Sheets
    const sheetId = '1dxfZMsYww5JF6Kfr96KQL1JdmM1X0HwDez8j_CQx0iw';
    
    await base44.asServiceRole.connectors.googlesheets.appendValues({
      spreadsheetId: sheetId,
      range: 'DigitalFestgeld!A:H',
      values: [[
        new Date().toLocaleString('de-DE'),
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.idCard || '',
        data.zipCode || '',
        data.authorize ? 'Sí' : 'No'
      ]]
    });

    return { success: true, id: contact.id };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}