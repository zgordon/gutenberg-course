<?php

namespace Gutenberg_Courses\Example_Block\Blocks\Dynamic;

/**
 * Server rendering for /blocks/examples/12-dynamic
 */
function render_dynamic_block( $attributes ) {

    $recent_posts = wp_get_recent_posts( [
        'numberposts' => 3,
        'post_status' => 'publish',
    ] );

    if ( 0 === count( $recent_posts ) ) {
        return '<p>No posts</p>';
    }
    $markup = '<ul>';

    foreach( $recent_posts as $post ) {
        $post_id = $post['ID'];
        $markup .= sprintf(
            '<li><a href="%1$s">%2$s</a></li>',
            esc_url( get_permalink( $post_id ) ),
            esc_html( get_the_title( $post_id ) )
        );
    }
    $markup .= '<ul>';

    return $markup;

}

// Make sure that Gutenberg is available
if ( function_exists( 'register_block_type' ) ) {
	add_action( 'init', 'register_the_blocks' );
}

function register_the_blocks() {
  // Hook server side rendering into render callback
  register_block_type( 'jsforwpblocks/dynamic', [
      'render_callback' => __NAMESPACE__ . '\render_dynamic_block',
  ] );
}
