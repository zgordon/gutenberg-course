<?php

namespace Gutenberg_Courses\Example_Blocks;

add_action('init', __NAMESPACE__ . '\register_meta');
/**
 * Registering meta fields for block attributes that use meta storage
 */
function register_meta() {

    $args = array(
        'type' => 'string',
        'single' => true,
        'show_in_rest' => true,
    );
    register_meta( 'post', 'jsforwpblocks_gb_metabox', $args );

}
