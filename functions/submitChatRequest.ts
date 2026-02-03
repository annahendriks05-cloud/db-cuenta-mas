import { base44 } from '@base44/sdk';

export async function submitChatRequest(data) {
  try {
    // Guardar en Base44
    const chatSolicitud = await base44.entities.ChatSolicitud.create({
      nombre: data.name,
      telefono: data.phone,
      email: data.email,
      observacion: data.message,
      estado: 'pendiente'
    });

    // Escribir en Google Sheets
    const sheetId = '1dxfZMsYww5JF6Kfr96KQL1JdmM1X0HwDez8j_CQx0iw';
    
    await base44.asServiceRole.connectors.googlesheets.appendValues({
      spreadsheetId: sheetId,
      range: 'Chat!A:E',
      values: [[
        new Date().toLocaleString('de-DE'),
        data.name,
        data.email,
        data.phone,
        data.message
      ]]
    });

    return { success: true, id: chatSolicitud.id };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}