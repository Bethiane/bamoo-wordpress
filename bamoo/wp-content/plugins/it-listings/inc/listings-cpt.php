<?php
/**
 *  Registration of Property Custom Post Type
 */
 if ( ! function_exists('itre_property_cpt') ) {

 // Register Property Custom Post Type
 function itre_property_cpt() {

 	$labels = array(
 		'name'                  => _x( 'Properties', 'Post Type General Name', 'itlst' ),
 		'singular_name'         => _x( 'Property', 'Post Type Singular Name', 'itlst' ),
 		'menu_name'             => __( 'Properties', 'itlst' ),
 		'name_admin_bar'        => __( 'Property', 'itlst' ),
 		'archives'              => __( 'Property Archives', 'itlst' ),
 		'attributes'            => __( 'Property Attributes', 'itlst' ),
 		'parent_Property_colon'     => __( 'Parent Property:', 'itlst' ),
 		'all_Properties'             => __( 'All Properties', 'itlst' ),
 		'add_new_Property'          => __( 'Add New Property', 'itlst' ),
 		'add_new'               => __( 'Add New', 'itlst' ),
 		'new_Property'              => __( 'New Property', 'itlst' ),
 		'edit_Property'             => __( 'Edit Property', 'itlst' ),
 		'update_Property'           => __( 'Update Property', 'itlst' ),
 		'view_Property'             => __( 'View Property', 'itlst' ),
 		'view_Properties'            => __( 'View Properties', 'itlst' ),
 		'search_Properties'          => __( 'Search Property', 'itlst' ),
 		'not_found'             => __( 'Not found', 'itlst' ),
 		'not_found_in_trash'    => __( 'Not found in Trash', 'itlst' ),
 		'featured_image'        => __( 'Featured Image', 'itlst' ),
 		'set_featured_image'    => __( 'Set featured image', 'itlst' ),
 		'remove_featured_image' => __( 'Remove featured image', 'itlst' ),
 		'use_featured_image'    => __( 'Use as featured image', 'itlst' ),
 		'insert_into_Property'      => __( 'Insert into Property', 'itlst' ),
 		'uploaded_to_this_Property' => __( 'Uploaded to this Property', 'itlst' ),
 		'Properties_list'            => __( 'Properties list', 'itlst' ),
 		'Properties_list_navigation' => __( 'Properties list navigation', 'itlst' ),
 		'filter_Properties_list'     => __( 'Filter Properties list', 'itlst' ),
 	);
 	$args = array(
 		'label'                 => __( 'Property', 'itlst' ),
 		'labels'                => $labels,
 		'supports'              => array( 'title', 'editor', 'thumbnail' ),
 		'taxonomies'            => array( 'property-type' ),
 		'hierarchical'          => false,
 		'public'                => true,
 		'show_ui'               => true,
 		'show_in_menu'          => true,
 		'menu_position'         => 5,
 		'menu_icon'             => 'dashicons-admin-home',
 		'show_in_admin_bar'     => true,
 		'show_in_nav_menus'     => true,
 		'can_export'            => true,
 		'has_archive'           => true,
 		'exclude_from_search'   => false,
 		'publicly_queryable'    => true,
 		'capability_type'       => 'page',
 		'show_in_rest'          => true,
 	);
 	register_post_type( 'property', $args );

 }
 add_action( 'init', 'itre_property_cpt', 0 );

 }

 // Registration of Property Type Taxonomy
 if ( ! function_exists( 'itlst_property_tax_type' ) ) {

// Register Custom Taxonomy
function itlst_property_tax_type() {

	$labels = array(
		'name'                       => _x( 'Types', 'Taxonomy General Name', 'itlst' ),
		'singular_name'              => _x( 'Type', 'Taxonomy Singular Name', 'itlst' ),
		'menu_name'                  => __( 'Property Types', 'itlst' ),
		'all_Properties'                  => __( 'All Property Types', 'itlst' ),
		'parent_Property'                => __( 'Parent Property Type', 'itlst' ),
		'parent_Property_colon'          => __( 'Parent Property Type:', 'itlst' ),
		'new_Property_name'              => __( 'New Property Type', 'itlst' ),
		'add_new_Property'               => __( 'Add new Property Type', 'itlst' ),
		'edit_Property'                  => __( 'Edit Property Type', 'itlst' ),
		'update_Property'                => __( 'Update Property Type', 'itlst' ),
		'view_Property'                  => __( 'View Property Type', 'itlst' ),
		'separate_Properties_with_commas' => __( 'Separate Property Types with commas', 'itlst' ),
		'add_or_remove_Properties'        => __( 'Add or remove Property Types', 'itlst' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'itlst' ),
		'popular_Properties'              => __( 'Popular Property Types', 'itlst' ),
		'search_Properties'               => __( 'Search Property Types', 'itlst' ),
		'not_found'                  => __( 'Not Found', 'itlst' ),
		'no_terms'                   => __( 'No Property Types', 'itlst' ),
		'Properties_list'                 => __( 'Property Types list', 'itlst' ),
		'Properties_list_navigation'      => __( 'Property Types list navigation', 'itlst' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		'show_in_rest'               => true,
	);
	register_taxonomy( 'property-type', array( 'property' ), $args );

}
add_action( 'init', 'itlst_property_tax_type', 0 );
}

if ( ! function_exists( 'itlst_property_tax_location' ) ) {
function itlst_property_tax_location() {

	$labels = array(
		'name'                       => _x( 'Locations', 'Taxonomy General Name', 'itlst' ),
		'singular_name'              => _x( 'location', 'Taxonomy Singular Name', 'itlst' ),
		'menu_name'                  => __( 'Locations', 'itlst' ),
		'all_Properties'                  => __( 'All Locations', 'itlst' ),
		'parent_Property'                => __( 'Parent Location', 'itlst' ),
		'parent_Property_colon'          => __( 'Parent Location:', 'itlst' ),
		'new_Property_name'              => __( 'New Locations', 'itlst' ),
		'add_new_Property'               => __( 'Add New Location', 'itlst' ),
		'edit_Property'                  => __( 'Edit Location', 'itlst' ),
		'update_Property'                => __( 'Update Location', 'itlst' ),
		'view_Property'                  => __( 'View Location', 'itlst' ),
		'separate_Properties_with_commas' => __( 'Separate Locations with commas', 'itlst' ),
		'add_or_remove_Properties'        => __( 'Add or remove Location', 'itlst' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'itlst' ),
		'popular_Properties'              => __( 'Popular Locations', 'itlst' ),
		'search_Properties'               => __( 'Search Locations', 'itlst' ),
		'not_found'                  => __( 'Not Found', 'itlst' ),
		'no_terms'                   => __( 'No Locations', 'itlst' ),
		'Properties_list'                 => __( 'Locations list', 'itlst' ),
		'Properties_list_navigation'      => __( 'Locations list navigation', 'itlst' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		'show_in_rest'               => true,
	);
	register_taxonomy( 'location', array( 'property' ), $args );

}
add_action( 'init', 'itlst_property_tax_location', 0 );
}
