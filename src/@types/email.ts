export interface IEmailBody {
    name: string;
    email: string;
    message: string;
}

export interface IEmailConfig {
    service_id: string;
    user_id: string;
    template_id: string;
    template_params: {
        name: string,
        email: string,
        message: string
    }
}

export interface ISendEmailStatus {
    status: number;
    message: string;
}

export enum emailStatusMessage {
    SUCCESS="email sent sucessfully.",
    FAILURE="error sending email."
}