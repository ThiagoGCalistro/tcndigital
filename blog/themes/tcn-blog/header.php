<?php
/**
 * Header do tema.
 *
 * @package tcn-blog
 */
if (!defined('ABSPATH')) { exit; }
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="profile" href="https://gmpg.org/xfn/11" />
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header" id="site-header">
    <div class="container header-inner">
        <a class="logo" href="<?php echo esc_url(TCN_MAIN_SITE); ?>" aria-label="TCN Digital">
            <img src="<?php echo esc_url(TCN_MAIN_SITE . '/logo.png'); ?>" alt="TCN Digital - Criação de Sites em Piraju e Região" />
        </a>

        <nav class="main-nav">
            <a href="<?php echo esc_url(TCN_MAIN_SITE . '/#servicos'); ?>">Serviços</a>
            <a href="<?php echo esc_url(TCN_MAIN_SITE . '/#portfolio'); ?>">Portfólio</a>
            <a href="<?php echo esc_url(TCN_MAIN_SITE . '/sobre'); ?>">Sobre</a>
            <a href="<?php echo esc_url(home_url('/')); ?>" class="active">Blog</a>
            <a href="<?php echo esc_url(TCN_MAIN_SITE . '/#depoimentos'); ?>">Depoimentos</a>
            <a href="<?php echo esc_url(TCN_MAIN_SITE . '/#contato'); ?>">Contato</a>
        </nav>

        <div class="header-cta">
            <a class="btn btn-primary" href="<?php echo esc_url(tcn_quote_url()); ?>">Solicitar Orçamento</a>
        </div>

        <button class="nav-toggle" id="nav-toggle" aria-label="Abrir menu" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
    </div>

    <div class="mobile-nav" id="mobile-nav">
        <a href="<?php echo esc_url(TCN_MAIN_SITE . '/#servicos'); ?>">Serviços</a>
        <a href="<?php echo esc_url(TCN_MAIN_SITE . '/#portfolio'); ?>">Portfólio</a>
        <a href="<?php echo esc_url(TCN_MAIN_SITE . '/sobre'); ?>">Sobre</a>
        <a href="<?php echo esc_url(home_url('/')); ?>">Blog</a>
        <a href="<?php echo esc_url(TCN_MAIN_SITE . '/#depoimentos'); ?>">Depoimentos</a>
        <a href="<?php echo esc_url(TCN_MAIN_SITE . '/#contato'); ?>">Contato</a>
        <a class="btn btn-primary" href="<?php echo esc_url(tcn_quote_url()); ?>">Solicitar Orçamento</a>
    </div>
</header>
