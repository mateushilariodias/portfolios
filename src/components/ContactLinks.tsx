'use client'

export default function ContactLinks() {
  return (
    <address className="not-italic flex flex-col text-blue-600 space-y-1">
      <a
        href="https://wa.me/5516991190429?text=Olá,%20Mateus!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com Mateus no WhatsApp"
        className="hover:underline"
      >
        (16) 99119-0429
      </a>
      <a
        href="mailto:mateusilariodias@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enviar e-mail para Mateus"
        className="hover:underline"
      >
        mateusilariodias@gmail.com
      </a>
    </address>
  )
}