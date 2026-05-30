<?php
/**
 * Post individual.
 *
 * @package tcn-blog
 */
if (!defined('ABSPATH')) { exit; }
get_header();

while (have_posts()) :
    the_post();
    $cat = tcn_blog_primary_category();
    ?>

    <article <?php post_class(); ?>>
        <header class="page-hero">
            <div class="container">
                <a class="eyebrow" href="<?php echo esc_url(home_url('/')); ?>">← Voltar para o blog</a>
                <?php if ($cat) : ?>
                    <div style="margin-bottom: 1rem;">
                        <span class="badge"><?php echo esc_html($cat->name); ?></span>
                    </div>
                <?php endif; ?>
                <h1><?php the_title(); ?></h1>
                <div class="hero-meta">
                    <span><?php echo esc_html(get_the_date()); ?></span>
                    <span>•</span>
                    <span><?php echo esc_html(tcn_blog_reading_time()); ?></span>
                    <span>•</span>
                    <span>Por <?php the_author(); ?></span>
                </div>
            </div>
        </header>

        <?php if (has_post_thumbnail()) : ?>
            <div class="container" style="margin-top: -2.5rem; position: relative; z-index: 2;">
                <div style="max-width: 860px; margin: 0 auto;">
                    <?php the_post_thumbnail('full', array('style' => 'border-radius: 1rem; box-shadow: var(--shadow-card); width:100%;')); ?>
                </div>
            </div>
        <?php endif; ?>

        <div class="post-content">
            <?php
            the_content();
            wp_link_pages(array('before' => '<div class="pagination">', 'after' => '</div>'));
            ?>

            <?php if (has_tag()) : ?>
                <p style="margin-top: 2rem;"><?php the_tags('', ' '); ?></p>
            <?php endif; ?>
        </div>
    </article>

    <section class="section">
        <div class="container">
            <div class="cta-band">
                <span class="blob tr"></span>
                <span class="blob bl"></span>
                <h2>Gostou? Vamos criar algo assim para você</h2>
                <p>Sites, landing pages e sistemas sob medida para empresas e profissionais de Piraju e região.</p>
                <a class="btn btn-light" href="<?php echo esc_url(tcn_quote_url()); ?>">Solicitar Orçamento</a>
            </div>
        </div>
    </section>

    <?php
    // Posts relacionados (mesma categoria).
    if ($cat) :
        $related = new WP_Query(array(
            'category__in'        => array($cat->term_id),
            'post__not_in'        => array(get_the_ID()),
            'posts_per_page'      => 3,
            'ignore_sticky_posts' => true,
        ));
        if ($related->have_posts()) : ?>
            <section class="section">
                <div class="container">
                    <h2 class="section-title text-center" style="margin-bottom: 2.5rem;">Leia também</h2>
                    <div class="posts-grid">
                        <?php while ($related->have_posts()) : $related->the_post(); ?>
                            <?php get_template_part('template-parts/content', 'card'); ?>
                        <?php endwhile; ?>
                    </div>
                </div>
            </section>
            <?php
        endif;
        wp_reset_postdata();
    endif;

endwhile;

get_footer();
