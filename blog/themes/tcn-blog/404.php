<?php
/**
 * Página 404.
 *
 * @package tcn-blog
 */
if (!defined('ABSPATH')) { exit; }
get_header();
?>

<section class="page-hero">
    <div class="container">
        <h1>Página não encontrada</h1>
        <p>O conteúdo que você procura não existe ou foi movido.</p>
        <div class="hero-meta">
            <a class="btn btn-light" href="<?php echo esc_url(home_url('/')); ?>">Ir para o blog</a>
            <a class="btn btn-outline" style="color:#fff;border-color:rgba(255,255,255,.4);" href="<?php echo esc_url(TCN_MAIN_SITE); ?>">Voltar ao site</a>
        </div>
    </div>
</section>

<?php get_footer();
