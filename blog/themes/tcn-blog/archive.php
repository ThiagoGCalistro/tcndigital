<?php
/**
 * Arquivos (categoria, tag, data, autor).
 *
 * @package tcn-blog
 */
if (!defined('ABSPATH')) { exit; }
get_header();

get_template_part('template-parts/listing', null, array(
    'title'    => get_the_archive_title(),
    'subtitle' => wp_strip_all_tags(get_the_archive_description()),
));

get_footer();
