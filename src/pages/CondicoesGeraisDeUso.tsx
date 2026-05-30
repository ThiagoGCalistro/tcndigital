import { Link } from "react-router-dom";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { Seo } from "@/components/Seo";

const CondicoesGeraisDeUso = () => {
  return (
    <>
    <Seo
      title="Condições Gerais de Uso | TCN Digital"
      description="Conheça as regras e condições para a utilização do site da TCN Digital."
      path="/condicoes-gerais-de-uso"
    />
    <LegalLayout
      title="Condições Gerais de Uso"
      subtitle="Regras e condições para a utilização do site da TCN Digital."
      updatedAt="30 de maio de 2026"
    >
      <LegalSection title="1. Aceitação dos termos">
        <p>
          Ao acessar e utilizar o site da <strong className="text-foreground">TCN Digital</strong>,
          você concorda integralmente com estas Condições Gerais de Uso. Caso não concorde com
          qualquer disposição, recomendamos que não utilize o site.
        </p>
      </LegalSection>

      <LegalSection title="2. Objeto">
        <p>
          O site tem como finalidade apresentar os serviços da TCN Digital — como desenvolvimento
          de sites, landing pages, sistemas personalizados e consultoria — além de permitir o
          contato e a solicitação de orçamentos. As informações aqui disponibilizadas têm caráter
          informativo e não constituem oferta vinculante.
        </p>
      </LegalSection>

      <LegalSection title="3. Uso adequado do site">
        <p>Ao utilizar o site, você se compromete a:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fornecer informações verdadeiras e atualizadas nos formulários;</li>
          <li>Não utilizar o site para fins ilícitos ou que violem direitos de terceiros;</li>
          <li>
            Não tentar acessar áreas restritas, comprometer a segurança ou o funcionamento do
            site;
          </li>
          <li>Respeitar a legislação vigente e os direitos de propriedade intelectual.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Propriedade intelectual">
        <p>
          Todo o conteúdo do site — incluindo textos, imagens, logotipos, marcas, layout e código —
          é de propriedade da TCN Digital ou de seus licenciadores, sendo protegido pela legislação
          de propriedade intelectual. É proibida a reprodução, distribuição ou modificação sem
          autorização prévia e por escrito.
        </p>
      </LegalSection>

      <LegalSection title="5. Orçamentos e propostas">
        <p>
          Os valores divulgados no site são iniciais e podem variar conforme o escopo de cada
          projeto. As solicitações de orçamento não geram obrigação de contratação para nenhuma das
          partes. Condições específicas de cada serviço serão formalizadas em proposta ou contrato
          próprio.
        </p>
      </LegalSection>

      <LegalSection title="6. Links e serviços de terceiros">
        <p>
          O site pode conter links para páginas e serviços de terceiros. A TCN Digital não se
          responsabiliza pelo conteúdo, políticas ou práticas desses sites externos, recomendando a
          leitura dos respectivos termos e políticas.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitação de responsabilidade">
        <p>
          A TCN Digital empenha-se para manter o site atualizado e em pleno funcionamento, mas não
          garante que ele estará disponível de forma ininterrupta ou livre de erros. Não nos
          responsabilizamos por eventuais danos decorrentes do uso ou da indisponibilidade
          temporária do site.
        </p>
      </LegalSection>

      <LegalSection title="8. Privacidade e proteção de dados">
        <p>
          O tratamento dos dados pessoais coletados por meio do site é regido pela nossa{" "}
          <Link to="/politica-de-privacidade" className="text-accent hover:underline">
            Política de Privacidade
          </Link>
          , que faz parte integrante destas Condições Gerais de Uso.
        </p>
      </LegalSection>

      <LegalSection title="9. Alterações das condições">
        <p>
          Estas Condições Gerais de Uso podem ser alteradas a qualquer momento, sem aviso prévio. A
          versão vigente estará sempre disponível nesta página, com a respectiva data de
          atualização. O uso contínuo do site após eventuais mudanças representa a sua concordância
          com os novos termos.
        </p>
      </LegalSection>

      <LegalSection title="10. Legislação e foro">
        <p>
          Estas condições são regidas pelas leis da República Federativa do Brasil. Fica eleito o
          foro da comarca de Piraju, Estado de São Paulo, para dirimir quaisquer controvérsias
          decorrentes destes termos, com renúncia a qualquer outro, por mais privilegiado que seja.
        </p>
      </LegalSection>

      <LegalSection title="11. Contato">
        <p>
          Em caso de dúvidas sobre estas Condições Gerais de Uso, entre em contato pelo e-mail{" "}
          <a href="mailto:contato@tcndigital.com.br" className="text-accent hover:underline">
            contato@tcndigital.com.br
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
    </>
  );
};

export default CondicoesGeraisDeUso;
