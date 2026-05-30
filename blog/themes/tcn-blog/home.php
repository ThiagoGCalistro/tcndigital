<?php
/**
 * Home do blog (lista de posts mais recentes).
 *
 * @package tcn-blog
 */
if (!defined('ABSPATH')) { exit; }
get_header();

get_template_part('template-parts/listing', null, array(
    'title'    => 'Blog da <span class="text-gradient">TCN Digital</span>',
    'subtitle' => 'Dicas, novidades e conteúdos sobre criação de sites, marketing digital e presença online para o seu negócio.',
));

get_footer();
