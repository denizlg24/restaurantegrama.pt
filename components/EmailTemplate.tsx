import * as React from "react";

interface EmailTemplateProps {
  email: string;
  subject: string;
  body: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  subject,
  body,
}) => (
  <div>
    <h1>Novo contacto através do website.</h1>
    <h2>Email de quem entrou em contacto: {email}</h2>
    <h2>Entraram em contacto para falar sobre: {subject}</h2>
    <h3>A mensagem foi a seguinte:</h3>
    <p>{body}</p>
  </div>
);
