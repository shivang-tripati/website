export const SALES_PHONE = "919810787931";

export function getWhatsAppUrl(phone?: string) {
    const message = phone
        ? `Hello, I am interested in your services. My number is ${phone}.`
        : `Hello, I am interested in your services. I would like to know more.`;

    return `https://wa.me/${SALES_PHONE}?text=${encodeURIComponent(
        message
    )}`;
}