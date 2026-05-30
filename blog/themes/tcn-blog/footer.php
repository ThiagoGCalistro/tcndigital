<?php
/**
 * Footer do tema.
 *
 * @package tcn-blog
 */
if (!defined('ABSPATH')) { exit; }
$main = TCN_MAIN_SITE;
?>
<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <div>
                <a class="logo" href="<?php echo esc_url($main); ?>">
                    <img src="<?php echo esc_url($main . '/logo-cinza.png'); ?>" alt="TCN Digital" />
                </a>
                <p>Transformando ideias em experiências digitais únicas e impactantes.</p>
            </div>

            <div>
                <h4>Serviços</h4>
                <ul>
                    <li><a href="<?php echo esc_url($main . '/servicos/landing-page'); ?>">Landing Pages</a></li>
                    <li><a href="<?php echo esc_url($main . '/servicos/desenvolvimento-de-site'); ?>">Sites Corporativos</a></li>
                    <li><a href="<?php echo esc_url($main . '/servicos/consultoria-de-produto-e-dados'); ?>">Consultoria</a></li>
                </ul>
            </div>

            <div>
                <h4>Empresa</h4>
                <ul>
                    <li><a href="<?php echo esc_url($main . '/sobre'); ?>">Sobre Nós</a></li>
                    <li><a href="<?php echo esc_url($main . '/criacao-de-sites'); ?>">Criação de Sites na Região</a></li>
                    <li><a href="<?php echo esc_url(home_url('/')); ?>">Blog</a></li>
                    <li><a href="<?php echo esc_url($main . '/#contato'); ?>">Contato</a></li>
                </ul>
            </div>

            <div>
                <h4>Redes Sociais</h4>
                <div class="footer-socials">
                    <a href="#" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
                    <a href="#" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                    <a href="#" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; <?php echo esc_html(date('Y')); ?> TCN Digital. Todos os direitos reservados.</p>
            <div class="legal">
                <a href="<?php echo esc_url($main . '/politica-de-privacidade'); ?>">Política de Privacidade</a>
                <a href="<?php echo esc_url($main . '/condicoes-gerais-de-uso'); ?>">Condições Gerais de Uso</a>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
