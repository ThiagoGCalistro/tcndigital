<?php
/**
 * Plugin Name: TCN Bootstrap
 * Description: Configura o blog no primeiro boot — ativa o tema tcn-blog, define permalinks, fuso e padrões. Roda uma única vez (guardado por option).
 * Version: 1.0.0
 * Author: TCN Digital
 *
 * @package tcn-blog
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('init', function () {
    if (get_option('tcn_blog_bootstrapped')) {
        return;
    }

    // Ativa o tema custom, se existir e ainda não estiver ativo.
    if (get_stylesheet() !== 'tcn-blog' && wp_get_theme('tcn-blog')->exists()) {
        switch_theme('tcn-blog');
    }

    // Permalinks amigáveis (essencial para o subdiretório /blog).
    if (get_option('permalink_structure') !== '/%postname%/') {
        update_option('permalink_structure', '/%postname%/');
        if (function_exists('flush_rewrite_rules')) {
            flush_rewrite_rules(false);
        }
    }

    // Padrões regionais.
    update_option('timezone_string', 'America/Sao_Paulo');
    update_option('date_format', 'd/m/Y');
    update_option('start_of_week', 0);

    // Marca como configurado para não repetir.
    update_option('tcn_blog_bootstrapped', 1);
}, 20);
