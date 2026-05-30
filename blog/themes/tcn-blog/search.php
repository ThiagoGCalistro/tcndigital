<?php
/**
 * Resultados de busca.
 *
 * @package tcn-blog
 */
if (!defined('ABSPATH')) { exit; }
get_header();

get_template_part('template-parts/listing', null, array(
    'title'    => 'Resultados para "' . esc_html(get_search_query()) . '"',
    'subtitle' => '',
));

get_footer();
