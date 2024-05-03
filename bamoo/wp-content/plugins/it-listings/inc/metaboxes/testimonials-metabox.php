<?php

/**
 *
 *	PHP file for the Metabox containing Loan Options
 *
**/

if ( !function_exists('itlst_test_custom_meta') ) {
function itlst_test_custom_meta() {
    add_meta_box( 'itlst_test_meta', __( 'Testimonial Details', 'it-listings' ), 'itlst_test_meta_callback', 'testimonial','normal','high' );
}
add_action( 'add_meta_boxes', 'itlst_test_custom_meta' );
}

/**
 * Outputs the content of the meta box
 */
 if ( !function_exists('itlst_test_meta_callback') ) {
    function itlst_test_meta_callback( $post ) {
        wp_nonce_field( basename( __FILE__ ), 'itlst_test_nonce' );
        $itlst_stored_meta = get_post_meta( $post->ID );

        $title	=	isset( $itlst_stored_meta['title']) ? $itlst_stored_meta['title'][0] : "";

        ?>

    	    <div class="row">

    		     <label for="title">
    		    	<h4>Title</h4>
    		    	<input type="text" name="title" id="title" autocomplete="on" value="<?php echo esc_attr($title) ?>" placeholder="<?php esc_attr_e('Buyer', 'it-listings'); ?>">
    		    </label>

    	    </div>
        <?php
    }
}


/**
 * Saves the custom meta input
 */
 if ( !function_exists('itlst_test_meta_save') ) {
    function itlst_test_meta_save( $post_id ) {

        // Checks save status
        $is_autosave = wp_is_post_autosave( $post_id );
        $is_revision = wp_is_post_revision( $post_id );
        $is_valid_nonce = ( isset( $_POST[ 'itlst_test_nonce' ] ) && wp_verify_nonce( $_POST[ 'itlst_test_nonce' ], basename( __FILE__ ) ) ) ? 'true' : 'false';

        // Exits script depending on save status
        if ( $is_autosave || !$is_valid_nonce ) {
            return;
        }

        if ( isset($_POST['title'])) {
    	    $title	=	sanitize_text_field($_POST['title']);
        } else {
    	   $title	=	"";
        }
        update_post_meta( $post_id, 'title', $title);
    }
    add_action( 'save_post', 'itlst_test_meta_save' );
}
