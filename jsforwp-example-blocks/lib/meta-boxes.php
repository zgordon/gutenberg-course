<?php

/**
 * Registering meta fields for block attributes that use meta storage
 */
function jsforwp_register_meta() {

    $args = array(
        'type' => 'string',
        'single' => true,
        'show_in_rest' => true,
    );
    register_meta( 'post', 'jsforwp_gb_metabox', $args );

}
add_action('init', 'jsforwp_register_meta');
