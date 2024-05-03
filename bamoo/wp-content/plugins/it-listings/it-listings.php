<?php
/**
 *
 *	Plugin Name: IT Listings
 *	Plugin URI:
 *	Description: Listings Plugin for IT Residence WordPress Theme
 *	Version: 1.4.7
 *  Requires at least: 6.0
 *  Requres PHP: 8.0
 *	Author: indithemes
 *	Author URI: https://www.indithemes.com
 *	Text Domain: it-listings
 *
 */

 // Defining the Constants
 if ( !defined( 'ITL_URL' ) ) {
	define( 'ITL_URL', plugin_dir_url(__FILE__) );
}

if ( !defined( 'ITL_PATH' ) ) {
	define ( 'ITL_PATH', plugin_dir_path(__FILE__) );
}

if ( !defined( 'ITL_VERSION' ) ) {
	define( 'ITL_VERSION', '1.4.7' );
}

if (!defined( 'ITL_DEMO_DIR' ) ) {
	$upload_dir = wp_upload_dir( null, false );
	define( 'ITL_DEMO_DIR', $upload_dir['basedir'] . '/indi-demo-pack/' );
}

 class IT_Listings {

	public function __construct() {
		$theme = wp_get_theme();
		$isChild = $theme->parent();
		
		if ( "IT Residence" == $theme->get('Name') || "IT Residence Pro" == $theme->get('Name') || ( !empty($isChild) && ( "IT Residence" == $theme->parent()->get('Name') || "IT Residence Pro" == $theme->parent()->get('Name') ) ) ) {
			// Updating the body_class filter
			add_filter('body_class', array($this, 'itlst_body_classes'));
			add_filter( 'block_categories_all', array($this, 'itlst_block_custom_categories'), 10, 2 );
			add_filter( 'script_loader_tag', array($this, 'itlst_modify_script_tags'), 10, 2 );

			add_action('init', array($this, 'itlst_register_blocks'));
			
			$this->itlst_require_files();
			return;
		}

		if ( "IT Residence Pro" == $theme->name || "IT Residence Pro" == $theme->parent_name ) {
			$this->itlst_upgrade();
			return;
		}

		require_once(ITL_PATH . 'inc/notice.php');
	}

	public function itlst_register_blocks() {
		$block_paths = glob(ITL_PATH . 'assets/blocks/js/**/index.js', GLOB_BRACE);
		
		// Regsitering JS files for blocks
		foreach($block_paths as $block) {
			$block = str_replace(ITL_PATH, ITL_URL, $block);
			preg_match( '/([a-z0-9_+-]*)\/index.js/i', $block, $match);
			$id = $match[1];
			wp_register_script("itre-{$id}-js", $block, array(), ITL_VERSION, true);
		}
	
		// Registering CSS files for blocks
		$css_paths = glob(ITL_PATH . 'assets/css/*.css', GLOB_BRACE);
		foreach($css_paths as $path) {
			$block = str_replace(ITL_PATH, ITL_URL, $path);
			preg_match('/([a-z0-9_+-]*)\.css/i', $block, $match);
			$id = $match[1];
			wp_register_style("itre-{$id}-css", $block, array(), ITL_VERSION);
		}

			// Registering custom files
			wp_register_script("itre-front.testimonials-js", ITL_URL . 'assets/blocks/jsx/testimonials/custom.js', array('itre-swiper-js'), ITL_VERSION, true);
			wp_enqueue_script('itre-swiper-js', ITL_URL . 'assets/js/swiper.min.js', array(), ITL_VERSION, true );
			wp_register_style("itre-swiper-css", ITL_URL . 'assets/css/swiper.css', array(), ITL_VERSION);

		wp_enqueue_style('itre-global-css');
		
		// Registering blocks
		$blocks = glob(ITL_PATH . 'inc/blocks/**/', GLOB_BRACE);
		foreach($blocks as $path) {
			register_block_type($path);
		}
	}

	/**
	 * Add files for use in theme
	**/
	public function itlst_require_files() {
		// Adding the required files
		require_once(ITL_PATH . 'inc/listings-cpt.php' );
		require_once(ITL_PATH . 'inc/testimonials-cpt.php' );
		require_once(ITL_PATH . 'inc/metaboxes/testimonials-metabox.php');
		require_once(ITL_PATH . 'inc/register_sidebar.php');

		// Primary Importer File
		require_once(ITL_PATH . 'inc/class-demo-importer.php');

		// Importer Files
		require_once(ITL_PATH . 'inc/importers/class-customizer-importer.php');
		require_once(ITL_PATH . 'inc/importers/class-widget-importer.php');
	}

	public function itlst_body_classes( $classes ) {
		$classes[] = 'has-plugin-itlst';
		return $classes;
	}

	private function itlst_upgrade() {
		require_once(ITL_PATH . 'inc/notice-upgrade.php');
	}

	/**
	 *
	 * Register block categories
	 *
	 * @param $categories
	 * @param $post
	 *
	 * @return array
	 */
	public function itlst_block_custom_categories( $categories, $post ) {
		return array_merge(
			$categories,
			array (
				array(
					'slug' => 'it-listings',
					'title' => __( 'Theme Blocks', 'content'  ),
				),
			)
		);
	}

	/**
	 * Function to modify Script tags.
	 * Using this to load scripts as modules.
	 *
	 * @param   string  $tag     The <script> tag
	 * @param   string  $handle  Registered handle of the <script> tag
	 *
	 * @return  string           The modified tag
	 */
	public function itlst_modify_script_tags($tag, $handle) {
		if ($handle == 'itre-front.testimonials-js') {
			$tag = str_replace('<script ', '<script type="module" ', $tag);
		}
		return $tag;
	}

	public static function itlst_block_align( $align ) {
		switch ($align) {
			case 'full';
				return 'alignfull';
			break;
			case 'wide':
				return 'alignwide';
			break;
			case 'center':
				return 'center';
			break;
			default:
				return '';
		}
	}

	/**
	 * Render Properties in Featured Tabs section
	 *
	 * @param   WP_Post		$post Post Object
	 *
	 * @return  null		Featured Tabs section rendered
	 */
	public static function itlst_featured_properties( $post ) {
		printf('<div class="itre-featured-tabs__post">');
		printf( '<a href="%s" title="%s">', esc_url( get_the_permalink( $post ) ), esc_attr( get_the_title( $post ) ) );
		$for = get_post_meta( $post, 'for', true );
		$title = get_the_title( $post );

		if ($for !== 'none') {
			printf('<span class="itre-for-tag %s">%s</span>', esc_html( $for ), esc_attr( $for ) );
		}
		
		if (has_post_thumbnail($post)) {
			echo get_the_post_thumbnail( $post, [400, 500] );
		} else {
			printf( '<img src="%s" alt="%s"/>', esc_url( ITL_URL . 'assets/images/featured-types-placeholder.png' ), esc_attr( get_the_title( $post ) ) );
		}
		
		if (!empty($title)) {
			printf('<h3 class="itre-featured-tabs__post-title">%s</h3>', esc_html( get_the_title( $post ) ) );
		}

		printf('</a></div>');
	}
}

$itlisting = new IT_Listings();