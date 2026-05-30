<?php
/**
 * Card de post para as listagens.
 *
 * @package tcn-blog
 */
if (!defined('ABSPATH')) { exit; }
$cat = tcn_blog_primary_category();
?>
<article <?php post_class('post-card'); ?>>
    <a class="thumb" href="<?php the_permalink(); ?>" aria-label="<?php the_title_attribute(); ?>">
        <?php if (has_post_thumbnail()) : ?>
            <?php the_post_thumbnail('tcn-card', array('loading' => 'lazy', 'alt' => get_the_title())); ?>
        <?php else : ?>
            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/img/placeholder.svg'); ?>" alt="<?php the_title_attribute(); ?>" />
        <?php endif; ?>
    </a>
    <div class="body">
        <?php if ($cat) : ?>
            <a class="cat" href="<?php echo esc_url(get_category_link($cat->term_id)); ?>"><?php echo esc_html($cat->name); ?></a>
        <?php endif; ?>
        <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
        <p class="excerpt"><?php echo esc_html(get_the_excerpt()); ?></p>
        <div class="meta">
            <span><?php echo esc_html(get_the_date()); ?></span>
            <a class="read-more" href="<?php the_permalink(); ?>">Ler mais →</a>
        </div>
    </div>
</article>
