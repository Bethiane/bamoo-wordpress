<?php
/**
 * Required functions
 */

if ( ! defined('PHB_VERSION') ) {
    define( 'PHB_VERSION', '1.0.4' );
}

if ( ! defined('PHB_PATH') ) {
    define( 'PHB_PATH', trailingslashit( get_stylesheet_directory(), '/' ) );
}

function phb_register_header_sidebar() {
    register_sidebar(
        array(
            'name'          => esc_html__( 'Header Sidebar', 'property-hub'  ),
            'id'            => 'header',
            'description'   => esc_html__( 'Header Widget Area', 'property-hub'  ),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h4 class="widget-title"><span>',
            'after_title'   => '</span></h4>',
        )
    );
}
add_action( 'widgets_init', 'phb_register_header_sidebar' );

/**
 * Enqueuing Child Theme Scripts and Styles
 *
 * @return  null  Enqueued Scripts and Styles
 */
function phb_enqueue_scripts() {
    $parentStyle = 'itre-style';
    $parentMainStyle = 'itre-main';
    $theme = wp_get_theme();

    wp_enqueue_style( $parentStyle, esc_url(get_template_directory_uri() . '/style.css'), array(), $theme->parent()->get('Version') );
    wp_enqueue_style( $parentMainStyle, esc_url(get_template_directory_uri() . '/assets/theme-styles/css/main.css'), array(), $theme->parent()->get('Version') );
    wp_enqueue_style( 'phb-style', esc_url(get_stylesheet_uri()), array( $parentMainStyle ), $theme->get('Version') );
    wp_enqueue_style( 'phb-main', esc_url(get_stylesheet_directory_uri() . '/css/main.css'), array( $parentMainStyle ), $theme->get('Version') );
}
add_action('wp_enqueue_scripts', 'phb_enqueue_scripts');

/**
 * Enqueue scripts in Customizer
 */
function phb_enqueue_customizer_scripts() {
    $theme = wp_get_theme();
    wp_enqueue_script('phb-customize-controls-js', esc_url( get_stylesheet_directory_uri() . '/js/customize-controls.js'), array(), $theme->parent()->get('Version'), true );
}
add_action('customize_controls_enqueue_scripts', 'phb_enqueue_customizer_scripts');

/**
 * Include Customizer Controls
 */
require_once PHB_PATH . 'inc/customizer.php';

/**
 * Get the Header Template
 * Overriding Parent Theme function
 *
 * @return  null  Added the required template
 */
function itre_get_header() {
    $header_layout = get_theme_mod('phb_header_layout', 'default');

    switch ( $header_layout ) :
        case 'default':
            require_once get_template_directory() . '/framework/sections/header/header-default.php';
        break;
        case 'widget':
            require_once PHB_PATH . 'inc/modules/header/header-widget.php';
        break;
        default:
            require_once get_template_directory() . '/framework/sections/header/header-default.php';
    endswitch;
}