<?php

add_action('init', 'jsforwpblocks_register_meta');
/**
 * Registering meta fields for block attributes that use meta storage
 */
function jsforwpblocks_register_meta() {

    $args = array(
        'type' => 'string',
        'single' => true,
        'show_in_rest' => true,
    );
    register_meta( 'post', 'jsforwpblocks_gb_metabox', $args );

}
