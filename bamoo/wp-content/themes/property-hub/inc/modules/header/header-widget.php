<?php
/**
 *  Default Header
 * 
 * @package Property_Hub
 */
 ?>

 <header id="masthead" class="site-header header-widget">
    <?php itre_get_top_bar(); ?>
    
    <div id="header-image">
        <div class="header-wrapper container">
            <div class="header-hero-wrapper">
                <div class="header-hero-area itre-hero-area">
                    <?php
                        $site_title = get_theme_mod('itre_hero_title', 'Let\'s get you a new home!');
                        $site_desc = get_theme_mod('itre_hero_desc', 'We are here to get you the property you\'ve always been dreaming of!!');
                        if (!empty($site_title)) {
                            printf( '<h1 class="itre-hero-title">%s</h1>', esc_html__( $site_title, 'property-hub' ) );
                        }

                        if (!empty($site_desc)) {
                            printf( '<p class="itre-hero-desc">%s</p>', esc_html__( $site_desc, 'property-hub') );
                        }
                    ?>
                </div>
            </div>

            <div class="header-widget-area-wrapper">
            <?php
                if ( is_active_sidebar( 'header' ) ) :
                    echo '<div class="header-widget-area">';
                    dynamic_sidebar( 'header');
                    echo '</div>';
                endif;
            ?>
            </div>
        </div>
    </div>
 </header><!-- #masthead -->
