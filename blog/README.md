# Blog WordPress da TCN Digital

Blog em WordPress com tema custom (`tcn-blog`) que replica a identidade visual do site React, para rodar em `https://tcndigital.com.br/blog` via **EasyPanel**, usando o **MariaDB existente** na VPS.

```
blog/
├─ Dockerfile               # imagem WordPress + tema embutido
├─ docker-compose.yml       # APENAS dev local (MariaDB local)
├─ .env.example             # variáveis (sem segredos)
├─ mu-plugins/              # bootstrap (ativa tema, permalinks, fuso)
└─ themes/tcn-blog/         # tema custom (header/footer/cards no estilo do site)
```

---

## 1. Testar localmente (recomendado antes do deploy)

```bash
cd blog
cp .env.example .env        # valores locais já servem
docker compose up --build
```

Abra `http://localhost:8080`, finalize a instalação do WordPress e confira o visual.
O tema `TCN Blog` é ativado automaticamente no 1º boot (mu-plugin). Edições em
`themes/tcn-blog/` aparecem ao recarregar (bind mount).

---

## 2. Banco de dados (produção)

No MariaDB existente, crie um **banco dedicado** para o blog (não misturar com outras tabelas):

```sql
CREATE DATABASE tcndigital_blog CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- reutilizando o usuário tcnuser, garanta acesso:
GRANT ALL PRIVILEGES ON tcndigital_blog.* TO 'tcnuser'@'%';
FLUSH PRIVILEGES;
```

> Use o **host interno** (`tcndigital_mariadb:3306`), não o IP público.

---

## 3. Deploy no EasyPanel (projeto `tcndigital`)

### 3.1 Criar o serviço
- Novo serviço → **App** (ex.: `tcndigital-blog`).
- Source: **GitHub** (este repositório), **Build path / context = `blog`** (usa o `Dockerfile`).
  - Adicione a **deploy key** fornecida ao repositório para o EasyPanel clonar.

### 3.2 Variáveis de ambiente (marque como **Secret** as senhas)
```
WORDPRESS_DB_HOST=tcndigital_mariadb:3306
WORDPRESS_DB_NAME=tcndigital_blog
WORDPRESS_DB_USER=tcnuser
WORDPRESS_DB_PASSWORD=********            # secret
WORDPRESS_TABLE_PREFIX=wp_
TCN_MAIN_SITE=https://tcndigital.com.br
WORDPRESS_CONFIG_EXTRA=define('WP_HOME','https://tcndigital.com.br/blog');define('WP_SITEURL','https://tcndigital.com.br/blog');if(isset($_SERVER['HTTP_X_FORWARDED_PROTO'])&&$_SERVER['HTTP_X_FORWARDED_PROTO']==='https'){$_SERVER['HTTPS']='on';}
```
Gere também as **WordPress salts** (https://api.wordpress.org/secret-key/1.1/salt/) e adicione ao `WORDPRESS_CONFIG_EXTRA` (ou deixe o WP gerar — recomendado definir).

### 3.3 Volume persistente
- Monte um volume em **`/var/www/html/wp-content/uploads`** (preserva as imagens dos posts entre deploys). O core e o tema vêm da imagem.

### 3.4 Domínio / rota `/blog`
- No serviço do blog, adicione o domínio **`tcndigital.com.br`** com **Path = `/blog`** (Traefik), **sem strip do prefixo**.
- Ative **HTTPS (Let's Encrypt)**.
- O serviço do site principal (`tcndigital-site`) continua servindo `tcndigital.com.br` no path `/`. O Traefik direciona `/blog/*` para o blog por especificidade.

> ⚠️ Pré-requisito: o apex `tcndigital.com.br` precisa ser servido por este EasyPanel
> (Traefik). Se o site principal estiver em outro host que não faz proxy de `/blog`,
> use um subdomínio `blog.tcndigital.com.br` (basta trocar WP_HOME/WP_SITEURL e o domínio).

---

## 4. Pós-deploy
1. Acesse `https://tcndigital.com.br/blog/wp-admin/install.php` e finalize a instalação.
2. Confirme que o tema **TCN Blog** está ativo (Aparência → Temas).
3. **Configurações → Links permanentes** → "Nome do post" (já vem assim pelo mu-plugin) → Salvar.
4. **Idioma do site**: Configurações → Geral → Português do Brasil.
5. Instale e configure o **Rank Math** (ou Yoast) para SEO/sitemap. Aponte o sitemap no Google Search Console.
6. Publique um post de teste com imagem destacada e valide o visual + o schema no Rich Results Test.

---

## 5. Segurança (importante)
- **Rotacione** a API key do EasyPanel e as senhas do banco que foram compartilhadas no chat.
- Mantenha a **porta 3306 externa fechada** no firewall (use o host interno).
- Senhas/salts só como **secrets** no EasyPanel — nunca no repositório.
- Mantenha WordPress, tema e plugins atualizados; considere um plugin de segurança (ex.: Wordfence) e backups automáticos do volume + banco.
