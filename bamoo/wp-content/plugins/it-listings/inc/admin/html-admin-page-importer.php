<?php
/**
 * Admin View: Page - Importer
 */

defined('ABSPATH') || exit;
?>
<div class="demo-importer">
    <?php
        $theme = wp_get_theme();
        $themeFree = "IT Residence" == $theme->name || (!empty($theme->parent()) && "IT Residence" == $theme->parent()->get('Name'));
        $themePro  = "IT Residence Pro" == $theme->name || (!empty($theme->parent()) && "IT Residence Pro" == $theme->parent()->get('Name'));
    ?>
    <h1 class="wp-heading-inline"><?php esc_html_e('Demo Importer', 'it-listings'); ?></h1>

	<hr class="wp-header-end">
	
	<h2 class="screen-reader-text hide-if-no-js"><?php esc_html_e( 'Themes list', 'indi-demo-importer' ); ?></h2>
	<div class="demos-wrapper">
    <?php
    foreach($demos as $demo) {
        $img        = $demo['screenshot_url'];
        $preview    = $demo['preview_url'];
        $title      = $demo['theme'];
        $slug       = $demo['slug'];
        $pro        = $demo['isPro'];
        $disabled   = $pro && !$themePro ? 'disabled' : '';
        ?>
        <div class="demos-wrapper__demo">
            <?php
                if (!empty($pro)) {
                    printf('<span class="pro-tag">Pro</span>');
                }
            ?>
            <figure>
                <?php printf('<img src="%s" alt="%s"/>', esc_url( $img ), esc_attr( $title ) ); ?>
            </figure>
            <div class="demos-wrapper__buttons">
                <button class="demos-wrapper__buttons--import" type="button" data-slug="<?php echo esc_attr($slug) ?>" <?php echo $disabled ?>>Import</button>
                <?php printf('<a class="demos-wrapper__buttons--demo" href="%s" title="%s" target="_blank">Demo</a>', esc_url( $preview ), esc_attr( $title ) ); ?>
            </div>
        </div>
        <?php
    }
    ?>
    </div>
</div>