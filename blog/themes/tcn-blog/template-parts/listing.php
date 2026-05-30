<?php
/**
 * Listagem de posts (hero + grid + paginação + CTA).
 * Recebe $args['title'] e $args['subtitle'].
 *
 * @package tcn-blog
 */
if (!defined('ABSPATH')) { exit; }

$title    = isset($args['title']) ? $args['title'] : get_bloginfo('name');
$subtitle = isset($args['subtitle']) ? $args['subtitle'] : '';
?>

<section class="page-hero">
    <div class="container">
        <div class="eyebrow">Blog da TCN Digital</div>
        <h1><?php echo wp_kses_post($title); ?></h1>
        <?php if ($subtitle) : ?>
            <p><?php echo esc_html($subtitle); ?></p>
        <?php endif; ?>
    </div>
</section>

<section class="section">
    <div class="container">
        <?php if (have_posts()) : ?>
            <div class="posts-grid">
                <?php while (have_posts()) : the_post(); ?>
                    <?php get_template_part('template-parts/content', 'card'); ?>
                <?php endwhile; ?>
            </div>

            <div class="pagination">
                <?php
                echo paginate_links(array(
                    'mid_size'  => 1,
                    'prev_text' => '← Anterior',
                    'next_text' => 'Próximo →',
                ));
                ?>
            </div>
        <?php else : ?>
            <p class="text-center section-subtitle">Nenhum post encontrado por aqui ainda. Volte em breve!</p>
        <?php endif; ?>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="cta-band">
            <span class="blob tr"></span>
            <span class="blob bl"></span>
            <h2>Quer um site assim para o seu negócio?</h2>
            <p>A TCN Digital cria sites, landing pages e sistemas sob medida em Piraju e região. Solicite um orçamento sem compromisso.</p>
            <a class="btn btn-light" href="<?php echo esc_url(tcn_quote_url()); ?>">Solicitar Orçamento</a>
        </div>
    </div>
</section>
