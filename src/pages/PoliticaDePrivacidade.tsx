import { Link } from "react-router-dom";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { Seo } from "@/components/Seo";

const openCookiePreferences = () => {
  window.dispatchEvent(new Event("open-cookie-preferences"));
};

const PoliticaDePrivacidade = () => {
  return (
    <>
    <Seo
      title="Política de Privacidade | TCN Digital"
      description="Saiba como a TCN Digital coleta, usa e protege os seus dados pessoais, em conformidade com a LGPD."
      path="/politica-de-privacidade"
    />
    <LegalLayout
      title="Política de Privacidade"
      subtitle="Como a TCN Digital coleta, usa e protege os seus dados pessoais."
      updatedAt="30 de maio de 2026"
    >
      <LegalSection title="1. Introdução">
        <p>
          A <strong className="text-foreground">TCN Digital</strong>, com sede em Piraju, São
          Paulo, valoriza a sua privacidade e está comprometida com a proteção dos seus dados
          pessoais. Esta Política de Privacidade explica, de forma transparente, quais dados
          coletamos, como os utilizamos e quais são os seus direitos, em conformidade com a Lei
          nº 13.709/2018, a Lei Geral de Proteção de Dados Pessoais (LGPD).
        </p>
        <p>
          Ao navegar em nosso site e utilizar nossos serviços, você declara estar ciente e de
          acordo com as condições descritas neste documento.
        </p>
      </LegalSection>

      <LegalSection title="2. Quais dados coletamos">
        <p>Podemos coletar as seguintes categorias de dados:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-foreground">Dados de identificação e contato:</strong> nome,
            e-mail e telefone, fornecidos voluntariamente por você ao preencher o formulário de
            orçamento ou entrar em contato conosco.
          </li>
          <li>
            <strong className="text-foreground">Informações sobre o projeto:</strong> tipo de
            serviço, urgência, descrição e referências que você compartilha para que possamos
            elaborar uma proposta.
          </li>
          <li>
            <strong className="text-foreground">Dados de navegação:</strong> informações
            coletadas automaticamente por meio de cookies e tecnologias semelhantes, como páginas
            visitadas, tempo de permanência e dados aproximados de localização e dispositivo.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Como utilizamos os seus dados">
        <p>Utilizamos os dados coletados para as seguintes finalidades:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Responder a solicitações de orçamento e contato;</li>
          <li>Elaborar propostas e prestar os serviços contratados;</li>
          <li>Enviar comunicações sobre os serviços, quando autorizado;</li>
          <li>Melhorar a experiência de navegação e o desempenho do site;</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>
        <p>
          O tratamento dos seus dados se baseia no seu consentimento, na execução de contrato e no
          legítimo interesse, sempre respeitando os princípios da LGPD.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookies">
        <p>
          Utilizamos cookies necessários, analíticos e de marketing. Os cookies necessários são
          indispensáveis para o funcionamento do site; os demais dependem do seu consentimento.
          Você pode revisar e alterar suas escolhas a qualquer momento.
        </p>
        <p>
          <button
            onClick={openCookiePreferences}
            className="text-accent hover:underline font-medium"
          >
            Gerenciar preferências de cookies
          </button>
        </p>
      </LegalSection>

      <LegalSection title="5. Compartilhamento de dados">
        <p>
          A TCN Digital não vende seus dados pessoais. Podemos compartilhá-los apenas quando
          necessário com:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-foreground">Provedores de serviços</strong> que nos apoiam na
            operação (ex.: hospedagem, ferramentas de comunicação como o WhatsApp);
          </li>
          <li>
            <strong className="text-foreground">Plataformas de análise e marketing</strong> (ex.:
            Google e Meta), conforme as suas preferências de cookies;
          </li>
          <li>
            <strong className="text-foreground">Autoridades públicas</strong>, quando exigido por
            lei ou ordem judicial.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Os seus direitos como titular">
        <p>De acordo com a LGPD, você tem o direito de:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirmar a existência de tratamento dos seus dados;</li>
          <li>Acessar, corrigir ou atualizar seus dados;</li>
          <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Revogar o consentimento a qualquer momento;</li>
          <li>Solicitar a portabilidade dos dados, nos termos da lei.</li>
        </ul>
        <p>
          Para exercer qualquer um desses direitos, basta entrar em contato pelo e-mail{" "}
          <a href="mailto:contato@tcndigital.com.br" className="text-accent hover:underline">
            contato@tcndigital.com.br
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="7. Segurança e retenção">
        <p>
          Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não
          autorizados, perda ou divulgação indevida. Mantemos os dados apenas pelo período
          necessário para cumprir as finalidades descritas nesta política ou conforme exigido por
          lei.
        </p>
      </LegalSection>

      <LegalSection title="8. Alterações desta política">
        <p>
          Esta Política de Privacidade pode ser atualizada a qualquer momento para refletir
          mudanças em nossos serviços ou na legislação. A versão mais recente estará sempre
          disponível nesta página, com a data da última atualização.
        </p>
      </LegalSection>

      <LegalSection title="9. Contato">
        <p>
          Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus dados, entre em
          contato conosco pelo e-mail{" "}
          <a href="mailto:contato@tcndigital.com.br" className="text-accent hover:underline">
            contato@tcndigital.com.br
          </a>
          . Consulte também nossas{" "}
          <Link to="/condicoes-gerais-de-uso" className="text-accent hover:underline">
            Condições Gerais de Uso
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
    </>
  );
};

export default PoliticaDePrivacidade;
