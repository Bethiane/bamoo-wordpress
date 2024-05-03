<?php
/**
 * Template part for displaying posts.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Theme Palace
 * @subpackage  Villa Estate
 * @since  Villa Estate 1.0.0
 */

$options = villa_estate_get_theme_options();
$image    = has_post_thumbnail() ? get_the_post_thumbnail_url( get_the_id(), 'full' ) : get_template_directory_uri() . '/assets/uploads/no-featured-image-600x450.jpg';
?>

<article id="post-<?php the_ID(); ?>">
    <div class="post-wrapper">

        <div class="featured-image">
            <a href="<?php the_permalink(); ?>"><img src="<?php echo esc_url( $image ); ?>" alt="<?php the_title_attribute(); ?>"></a>
        </div><!-- .featured-image -->

        <div class="entry-container">
            <?php villa_estate_posted_on(); ?>


            <header class="entry-header">
                <h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
            </header>

            <div class="entry-content">
                <?php the_excerpt(); ?>
            </div><!-- .entry-content -->
        </div><!-- .entry-container -->
    </div><!-- .post-wrapper -->
</article>