<?php
/**
 * Testimonials Block.
 * 
 * @param   array   $attributes     The block attributes.
 * @param   string  $content        The block default content.
 * @param   object  $block          WP_Block - The block instance.
**/

$title = $attributes['title'];
$testimonials = $attributes['testimonials'];
$align = $attributes['align'];
?>
<section class="itre-testimonials section <?php echo esc_attr(IT_Listings::itlst_block_align( $align ) ) ?>">
    <?php
        if (!empty($title)) {
            printf( '<h2 class="itre-testimonials__title section-title">%s</h2>', esc_html( $title ) );
        }

        if (!empty($testimonials)) {
            printf('<div class="swiper"><div class="itre-testimonials__testimonials swiper-wrapper">');

            foreach($testimonials as $testimonial) {

                if (!empty($testimonial)) {
                    
                }
                $name = get_the_title($testimonial);
                $img = get_the_post_thumbnail($testimonial, array(200,200));
                $role = get_post_meta($testimonial, 'title', true);
                $content = get_the_content(null, false, $testimonial);

                printf('<div class="itre-testimonials__testimonial swiper-slide">');
                if (!empty($img)) {
                    printf('<figure>%s</figure>', $img);
                }
                printf('<h3 class="itre-testimonials__agent-name">%s</h3>', esc_html($name));
                if (!empty($role)) {
                    printf('<p class="itre-testimonials__role"><span>%s</span></p>', esc_html($role));
                }
                printf('<p class="itre-testimonials__content">%s</p>', $content);
                printf('</div>');
            }
            printf('</div>');
            printf('<div class="itre-testimonials__pagination swiper-pagination"></div>');
            printf('</div>');
        }
    ?>
</section>