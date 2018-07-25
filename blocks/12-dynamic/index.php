<?php

// Removed global namespace

/**
 * Register the dynamic block.
 *
 * @since 2.1.0
 *
 * @return void
 */
function zac_namespace_register_dynamic_block() { //Changed namespace.
	
	// Only load if Gutenberg is available.
	//Moved inside function. 
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}	
	
	// Hook server side rendering into render callback
	register_block_type( 'jsforwpblocks/dynamic', [
		'render_callback' => 'zac_namespace_render_dynamic_block', //Changed namespace.
	] );
}
add_action( 'init', 'zac_namespace_register_dynamic_block' ); //Moved Call below Function. Changed Namespace.


/**
 * Server rendering for /blocks/examples/12-dynamic
 */
function render_dynamic_block() {
	$recent_posts = wp_get_recent_posts( [
		'numberposts' => 3,
		'post_status' => 'publish',
	] );

	if ( empty( $recent_posts ) ) {
		return '<p>No posts</p>';
	}

	$markup = '<ul>';

	foreach ( $recent_posts as $post ) {
		$post_id  = $post['ID'];
		$markup  .= sprintf(
			'<li><a href="%1$s">%2$s</a></li>',
			esc_url( get_permalink( $post_id ) ),
			esc_html( get_the_title( $post_id ) )
		);
	}

	return "{$markup}<ul>";
}
