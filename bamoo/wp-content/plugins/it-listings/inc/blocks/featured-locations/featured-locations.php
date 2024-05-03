<?php
/**
 * Featured Property Types Block.
 * 
 * @param   array   $attributes     The block attributes.
 * @param   string  $content        The block default content.
 * @param   object  $block          WP_Block - The block instance.
 */

$title = $attributes['title'];
$desc = $attributes['description'];
$sections = $attributes['sections'];
$align = $attributes['align'];

?>
<section class="featured-locations section <?php echo esc_attr(IT_Listings::itlst_block_align( $align ) ) ?>">
    <?php
        if (!empty($title)) {
            printf( '<h2 class="itre-featured-locations__title section-title">%s</h2>', esc_html( $title ) );
        }

        if (!empty($desc)) {
            printf('<p class="itre-featured-type__description section-sub">%s</p>', esc_html($desc));
        }

        printf('<div class="itre-featured-locations__sections">');
            foreach($sections as $section) {
                $img = $section['mediaId'];
                $location = $section['location'];
                if (!empty($location)) {
                    printf('<div class="itre-featured-locations__section">');
                        printf('<a href="%s" title="%s">', esc_url( get_term_link( $location ) ), esc_attr( get_term( $location )->name ) );
                            if (!empty($img)) {
                                printf('<div class="itre-featured-locations__location-thumb">%s</div>', wp_get_attachment_image( $img, array(500, 500) ) );
                            } else {
                                printf('<img src="%s" alt="%s"/>', esc_url( ITLP_PATH . 'assets/images/featured-types-placeholder.png' ), get_term( $location )->name );
                            }
                        printf('</a>');

                        printf('<div class="itre-featured-locations__location-name"><h3><a href="%s" title="%s">%s</a></h3></div>', esc_url( get_term_link( $location ) ), esc_attr( get_term( $location )->name ), esc_html( get_term( $location )->name ) );
                    printf('</div>');
                }   
            }
        printf('</div>');
    ?>
</section>