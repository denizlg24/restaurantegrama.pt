"use server";

import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

export default async function sendEmail({
  email,
  subject,
  body,
}: {
  email: string;
  subject: string;
  body: string;
}) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["restaurantegrama@gmail.com"],
    subject: subject,
    react: EmailTemplate({ email, subject, body }),
  });
  console.log(data);
}
