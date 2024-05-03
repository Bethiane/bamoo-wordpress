<?php
/**
 *	Show Notice if IT Residence is not activated
 */

if (!function_exists('itlst_admin_notice')) {
	function itlst_admin_notice() { ?>
		<div class="notice notice-error is-dismissible">
			<p><?php _e('<strong>Thankyou for purchasing IT Residence Pro. Please upgrade to IT Listings Pro WordPress plugin.</strong>', 'it-listings'); ?></p>
		</div>
	<?php
	}
	add_action('admin_notices', 'itlst_admin_notice');
}
