<?php
/**
 * Fallback genérico de listagem.
 *
 * @package tcn-blog
 */
if (!defined('ABSPATH')) { exit; }
get_header();

get_template_part('template-parts/listing', null, array(
    'title'    => get_bloginfo('name'),
    'subtitle' => get_bloginfo('description'),
));

get_footer();
