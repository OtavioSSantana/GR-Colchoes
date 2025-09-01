export function Footer() {
  return (
    <footer className="bg-[#05014d] text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Coluna 1 - Logo */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/imagem_gr.jpg"
            alt="Logo Colchões"
            className="h-16 w-auto object-contain md:h-20 lg:h-24"
          />
        </div>

        {/* Coluna 2 - Descrição */}
        <div className="md:col-span-1 flex items-center">
          <p className="text-sm md:text-base leading-relaxed text-center md:text-left">
            Sua loja de colchões em Hortolândia.
            Especialistas em conforto e saúde do sono. Trabalhamos com colchões
            certificados, box, baús e travesseiros de alta qualidade. Atendimento
            rápido e personalizado para Hortolândia e região. Visite nossa loja ou
            fale direto pelo WhatsApp!
          </p>
        </div>

        {/* Coluna 3 - Contato */}
        <div>
          <p className="text-sm">Av. Santana, 859 - Jardim Amanda I, - Hortolândia/SP</p>
          <p className="text-sm">CEP: 13184-000</p>
          <p className="mt-2 text-sm">Tel: (19) 99946-2361</p>
          <p className="mt-2 text-sm">Email: grcolchoes1@gmail.com</p>
        </div>

        {/* Coluna 4 - Redes Sociais */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-4 mt-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/grcolchoeshortolandia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-pink-500 transition-colors"
            >
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17" cy="7" r="1.7" fill="currentColor"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/Gr-Colchões/61550823783344"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="2"/>
                <path d="M15 8h-2a1 1 0 0 0-1 1v2h3l-.5 2H12v6h-2v-6H8v-2h2V9a3 3 0 0 1 3-3h2v2z" fill="currentColor"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5519999462361"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white hover:text-green-400 transition-colors"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.19-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.68.96.98-3.59-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.44.02 1.44 1.03 2.84 1.18 3.04.15.2 2.03 3.1 5.02 4.22.7.24 1.25.38 1.68.49.71.18 1.36.15 1.87.09.57-.07 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" fill="currentColor"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@grcolchoes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
              className="text-white hover:text-red-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a2.974 2.974 0 0 0-2.09-2.107C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.408.579a2.974 2.974 0 0 0-2.09 2.107A31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .502 5.814 2.974 2.974 0 0 0 2.09 2.107C4.495 20.5 12 20.5 12 20.5s7.505 0 9.408-.579a2.974 2.974 0 0 0 2.09-2.107A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.502-5.814ZM9.75 15.5v-7l6 3.5-6 3.5Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Linha final */}
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center text-xs border-t border-gray-600 pt-4 gap-x-40">
        <p>© {new Date().getFullYear()} GR Colchões - Todos os direitos reservados.</p>
        <p>Desenvolvido por OtavioSSantana</p>
      </div>
    </footer>
  )
}
