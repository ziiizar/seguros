import { Lead } from "@prisma/client";
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from "./env.config";

export const sendNewLeadNotification = async (lead: Lead) => {
    try {
      console.log("Iniciando notificación de lead...");
      

      
      // 2. Construir el mensaje
      const messageText = `
      🚀 *Nuevo Lead Creado* 
      --------------------------
      *Nombre*: ${lead.name}
      *Email*: ${lead.email}
      *Teléfono*: ${lead.phone}
      *Edad*: ${lead.age}
      *Seguro solicitado*: ${lead.insuranceRequested}
      --------------------------
      Fecha: ${new Date().toLocaleDateString()}
      `;
  
      // 3. Enviar mensaje via API de Telegram
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: messageText,
            parse_mode: "Markdown", // Formato markdown
          }),
        }
      );
  
      const result = await response.json();
      
      console.log("Notificación enviada a Telegram:", result);
      console.log("Proceso completado");
  
      return result;
  
    } catch (error) {
      console.error("Error en notificación Telegram:", error);
      throw error;
    }
  };