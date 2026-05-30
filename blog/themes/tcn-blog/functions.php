<?php
/**
 * TCN Blog — funções do tema.
 *
 * @package tcn-blog
 */

if (!defined('ABSPATH')) {
    exit;
}

/** URL do site principal (usada no header/footer/CTAs). Pode ser sobrescrita por env. */
if (!defined('TCN_MAIN_SITE')) {
    define('TCN_MAIN_SITE', getenv('TCN_MAIN_SITE') ?: 'https://tcndigital.com.br');
}

/** Atalho para a âncora de contato (formulário de orçamento) no site principal. */
function tcn_quote_url() {
    return TCN_MAIN_SITE . '/#contato';
}

/** Setup do tema. */
function tcn_blog_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('automatic-feed-links');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
    add_theme_support('responsive-embeds');

    register_nav_menus(array(
        'primary' => __('Menu principal', 'tcn-blog'),
    ));

    add_image_size('tcn-card', 800, 450, true);
}
add_action('after_setup_theme', 'tcn_blog_setup');

/** Enfileira fontes e estilos. */
function tcn_blog_assets() {
    wp_enqueue_style(
        'tcn-inter',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
        array(),
        null
    );
    wp_enqueue_style(
        'tcn-blog-main',
        get_template_directory_uri() . '/assets/css/main.css',
        array('tcn-inter'),
        wp_get_theme()->get('Version')
    );
    wp_enqueue_script(
        'tcn-blog-main',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        wp_get_theme()->get('Version'),
        true
    );
}
add_action('wp_enqueue_scripts', 'tcn_blog_assets');

/** Resumo mais curto e com reticências limpas. */
function tcn_blog_excerpt_length() { return 26; }
add_filter('excerpt_length', 'tcn_blog_excerpt_length');

function tcn_blog_excerpt_more() { return '…'; }
add_filter('excerpt_more', 'tcn_blog_excerpt_more');

/** Primeira categoria do post (para o badge). */
function tcn_blog_primary_category($post_id = null) {
    $cats = get_the_category($post_id);
    if (!empty($cats)) {
        return $cats[0];
    }
    return null;
}

/** Tempo estimado de leitura. */
function tcn_blog_reading_time($post_id = null) {
    $content = get_post_field('post_content', $post_id);
    $words = str_word_count(wp_strip_all_tags($content));
    $minutes = max(1, (int) ceil($words / 200));
    return sprintf(_n('%d min de leitura', '%d min de leitura', $minutes, 'tcn-blog'), $minutes);
}

/** JSON-LD BlogPosting + BreadcrumbList para posts. */
function tcn_blog_jsonld() {
    if (!is_singular('post')) {
        return;
    }
    $post_id = get_the_ID();
    $cat = tcn_blog_primary_category($post_id);
    $image = get_the_post_thumbnail_url($post_id, 'full');

    $posting = array(
        '@context' => 'https://schema.org',
        '@type'    => 'BlogPosting',
        'headline' => get_the_title($post_id),
        'datePublished' => get_the_date('c', $post_id),
        'dateModified'  => get_the_modified_date('c', $post_id),
        'author'   => array('@type' => 'Organization', 'name' => 'TCN Digital'),
        'publisher'=> array(
            '@type' => 'Organization',
            'name'  => 'TCN Digital',
            'logo'  => array('@type' => 'ImageObject', 'url' => TCN_MAIN_SITE . '/logo.png'),
        ),
        'mainEntityOfPage' => get_permalink($post_id),
    );
    if ($image) {
        $posting['image'] = $image;
    }

    $crumbs = array(
        array('@type' => 'ListItem', 'position' => 1, 'name' => 'Início', 'item' => TCN_MAIN_SITE . '/'),
        array('@type' => 'ListItem', 'position' => 2, 'name' => 'Blog', 'item' => home_url('/')),
    );
    if ($cat) {
        $crumbs[] = array('@type' => 'ListItem', 'position' => 3, 'name' => $cat->name, 'item' => get_category_link($cat->term_id));
    }
    $crumbs[] = array('@type' => 'ListItem', 'position' => count($crumbs) + 1, 'name' => get_the_title($post_id), 'item' => get_permalink($post_id));

    $breadcrumb = array('@context' => 'https://schema.org', '@type' => 'BreadcrumbList', 'itemListElement' => $crumbs);

    echo "\n<script type=\"application/ld+json\">" . wp_json_encode($posting) . "</script>\n";
    echo "<script type=\"application/ld+json\">" . wp_json_encode($breadcrumb) . "</script>\n";
}
add_action('wp_head', 'tcn_blog_jsonld');

/** Remove emoji scripts/wp-embed extras para deixar o front mais leve. */
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
