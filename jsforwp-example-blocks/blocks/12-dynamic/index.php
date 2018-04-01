<?php

/**
 * Server rendering for /blocks/examples/12-dynamic
 */
function jsforwp_dynamic_block_render( $attributes ) {

    $recent_posts = wp_get_recent_posts( [
        'numberposts' => 3,
        'post_status' => 'publish',
    ] );
    if ( count( $recent_posts ) === 0 ) {
        return 'No posts';
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

function jsforwpblocks_register_blocks() {
  // Hook server side rendering into render callback
  register_block_type( 'jsforwpblocks/dynamic', [
      'render_callback' => 'jsforwp_dynamic_block_render',
  ] );
}
// Make sure that Gutenberg is available
if ( function_exists( 'register_block_type' ) ) {
  add_action( 'init', 'jsforwpblocks_register_blocks' );
}
