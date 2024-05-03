<?php
/**
 *	Show Notice if IT Residence is not activated
 */

if (!function_exists('itlst_admin_notice')) {
	function itlst_admin_notice() { ?>
		<div class="notice notice-error is-dismissable">
			<p><?php _e('The activated theme does not support <b>IT Listings</b> plugin. If you want to use <b>IT Listings</b> plugin, consider switching to <a href="https://www.wordpress.org/themes/it-residence">IT Residence</a> WordPress Theme.</p>', 'it-listings'); ?></p>
		</div>
	<?php
	}
	add_action('admin_notices', 'itlst_admin_notice');
}
