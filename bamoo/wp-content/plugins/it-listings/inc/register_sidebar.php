<?php
/**
 *
 * Register Property Sidebar
 *
 */
if ( !function_exists('itlst_widgets_init')) {
    function itlst_widgets_init() {
        register_sidebar(
     		array(
     			'name'          => esc_html__( 'Property Sidebar', 'it-residence' ),
     			'id'            => 'sidebar-property',
     			'description'   => esc_html__( 'This is the sidebar for Property Archive Pages. Add widgets here.', 'it-residence' ),
     			'before_widget' => '<section id="%1$s" class="widget %2$s">',
     			'after_widget'  => '</section>',
     			'before_title'  => '<h4 class="widget-title"><span>',
     			'after_title'   => '</span></h4>',
     		)
     	);
    }
    add_action('widgets_init', 'itlst_widgets_init', 20);
}
