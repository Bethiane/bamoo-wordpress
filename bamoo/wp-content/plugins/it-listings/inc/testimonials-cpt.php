<?php
/**
 *
 *  Regsiter Testimonials Custom Post Type
 *
 */

if (!function_exists('itlst_tstmnl_cpt')) {
	function itlst_tstmnl_cpt() {

		$labels = array(
			'name'                  => _x( 'Testimonials', 'Post Type General Name', 'it-listings' ),
			'singular_name'         => _x( 'Testimonial', 'Post Type Singular Name', 'it-listings' ),
			'menu_name'             => __( 'Testimonials', 'it-listings' ),
			'name_admin_bar'        => __( 'Testimonial', 'it-listings' ),
			'archives'              => __( 'Testimonial Archives', 'it-listings' ),
			'attributes'            => __( 'Testimonial Attributes', 'it-listings' ),
			'parent_item_colon'     => __( 'Parent Agent:', 'it-listings' ),
			'all_items'             => __( 'All Testimonials', 'it-listings' ),
			'add_new_item'          => __( 'Add New Testimonial', 'it-listings' ),
			'add_new'               => __( 'Add New', 'it-listings' ),
			'new_item'              => __( 'New Testimonial', 'it-listings' ),
			'edit_item'             => __( 'Edit Testimonial', 'it-listings' ),
			'update_item'           => __( 'Update Testimonial', 'it-listings' ),
			'view_item'             => __( 'View Testimonial', 'it-listings' ),
			'view_items'            => __( 'View Testimonials', 'it-listings' ),
			'search_items'          => __( 'Search Testimonials', 'it-listings' ),
			'not_found'             => __( 'Not found', 'it-listings' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'it-listings' ),
			'featured_image'        => __( 'Featured Image', 'it-listings' ),
			'set_featured_image'    => __( 'Set featured image', 'it-listings' ),
			'remove_featured_image' => __( 'Remove featured image', 'it-listings' ),
			'use_featured_image'    => __( 'Use as featured image', 'it-listings' ),
			'insert_into_item'      => __( 'Insert into Testimonial', 'it-listings' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Testimonial', 'it-listings' ),
			'items_list'            => __( 'Testimonials list', 'it-listings' ),
			'items_list_navigation' => __( 'Testimonials list navigation', 'it-listings' ),
			'filter_items_list'     => __( 'Filter Testimonials list', 'it-listings' ),
		);
		$args = array(
			'label'                 => __( 'Testimonial', 'it-listings' ),
			'description'           => __( 'Testimonials Custom Post Type', 'it-listings' ),
			'labels'                => $labels,
			'supports'              => array( 'title', 'editor', 'custom-fields', 'thumbnail' ),
			'hierarchical'          => false,
			'public'                => true,
			'show_ui'               => true,
			'show_in_menu'          => true,
			'menu_position'         => 5,
			'menu_icon'             => 'dashicons-businessperson',
			'show_in_admin_bar'     => true,
			'show_in_nav_menus'     => true,
			'can_export'            => true,
			'has_archive'           => true,
			'exclude_from_search'   => false,
			'publicly_queryable'    => true,
			'capability_type'       => 'page',
			'show_in_rest'          => true,
		);
		register_post_type( 'Testimonial', $args );

	}
add_action( 'init', 'itlst_tstmnl_cpt', 0 );
}
