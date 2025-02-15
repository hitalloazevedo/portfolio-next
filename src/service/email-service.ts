import { IEmailBody, ISendEmailStatus, IEmailConfig, emailStatusMessage } from "@/@types/email";

export async function sendEmail({ name, email, message }: IEmailBody): Promise<ISendEmailStatus> {
 
    const { NEXT_PUBLIC_TEMPLATE_ID, NEXT_PUBLIC_SERVICE_ID, NEXT_PUBLIC_PUBLIC_KEY } = process.env;
    
    if (!NEXT_PUBLIC_TEMPLATE_ID || !NEXT_PUBLIC_SERVICE_ID || !NEXT_PUBLIC_PUBLIC_KEY) {
        return {
            status: 500,
            message: "Erro na configuração do serviço de e-mail. Verifique as variáveis de ambiente."
        };
    }

    const emailConfig: IEmailConfig = {
        template_id: NEXT_PUBLIC_TEMPLATE_ID,
        service_id: NEXT_PUBLIC_SERVICE_ID,
        user_id: NEXT_PUBLIC_PUBLIC_KEY,
        template_params: { name, email, message }
    };

    try {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(emailConfig)
        });

        return {
            status: response.status,
            message: emailStatusMessage[response.status === 200 ? "SUCCESS" : "FAILURE"]
        };
    } catch (error) {
        return {
            status: 500,
            message: `Erro ao enviar e-mail: ${error instanceof Error ? error.message : "Erro desconhecido"}`
        };
    }
}
