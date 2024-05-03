<?php
/**
 * Customizer Settings for Property Hub WordPress Theme
 * 
 * @package Property_Hub
 */
function phb_customizer_register( $wp_customize ) {

    $wp_customize->add_setting(
        'phb_header_layout',
        array(
            'sanitize_callback' =>  'itre_sanitize_select',
            'default'           =>  'default'
        )
    );

    $wp_customize->add_control(
        'phb_header_layout', array(
            'title'         =>  __('Header Layout', 'property-hub'),
            'description'   =>  __('Select Header Layout for Home Page', 'property-hub'),
            'section'       =>  'itre_header_options',
            'type'          =>  'select',
            'choices'       =>  array(
                'default'       =>  __('Default', 'property-hub'),
                'widget'        =>  __('Header Widget', 'property-hub')
            )
        )
    );

    // Button to control Header Widget
    $wp_customize->add_control(
        new ITRE_Custom_Button_Control(
            $wp_customize, 'phb_header_widget', array(
                'label'     =>  __('Manage Header Widget', 'property-hub'),
                'section'   =>  'itre_header_options',
                'type'      =>  'itre-button',
                'settings'  =>  []
            )
        )
    );

    $control = $wp_customize->get_control('phb_header_widget');
    $control->active_callback = function( $control ) {
        $setting = $control->manager->get_setting( 'phb_header_layout' );
        return $setting->value() == 'widget' ? true : false;
    };
}
add_action('customize_register', 'phb_customizer_register');

function phb_modify_theme_settings( $wp_customize ) {
    $wp_customize->get_setting( "itre_hero_title" )->default = __("Let's Get you a New Home!", 'property-hub');
    $wp_customize->get_setting( "itre_hero_desc" )->default = __("We are here to get you the property you've always been dreaming of !!", 'property-hub');
}
add_action('customize_register', 'phb_modify_theme_settings', 20);