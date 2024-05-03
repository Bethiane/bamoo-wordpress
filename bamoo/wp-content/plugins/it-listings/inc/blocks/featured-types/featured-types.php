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
<section class="itre-featured-types section <?php echo esc_attr(IT_Listings::itlst_block_align( $align ) ) ?>">
    <?php
        if (!empty($title)) {
            printf( '<h2 class="itre-featured-type__title section-title">%s</h2>', esc_html( $title ) );
        }

        if (!empty($desc)) {
            printf('<p class="itre-featured-type__description section-sub">%s</p>', esc_html($desc));
        }

        printf('<div class="itre-featured-types__sections">');
            foreach($sections as $section) {
                $img = $section['mediaId'];
                $term = $section['type'];

                printf('<div class="itre-featured-types__section">');
                    if (!empty($term)) {
                        printf( '<a href="%s" title="%s">', esc_url( get_term_link( $term ) ), get_term( $term )->name );
                        if (!empty($img)) {
                            printf( '<figure>%s</figure>', wp_get_attachment_image( $img, 'full' ) );
                        } else {
                            printf('<img src="%s" alt="%s"/>', esc_url( ITLP_URL . 'assets/images/featured-types-placeholder.png'), get_term($term)->name );
                        }
                        printf('</a>');
                        
                        printf('<h3 class="itre-featured-types__type-title"><span>%s</span></h3>', esc_html( get_term( $term )->name ) );
                    }
                printf('</div>');
            }
        printf('</div>');
    ?>
</section>