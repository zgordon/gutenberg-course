<?php

namespace Gutenberg_Courses\Example_Blocks;

add_action( 'init', __NAMESPACE__ . '\register_blocks', 40 );
/**
 * Enqueue block editor only JavaScript and CSS.
 */
function register_blocks() {	

    // Fail if block editor is not supported
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

    // List all of the blocks for your plugin
    $blocks = [
        'jsforwpblocks/static',
        'jsforwpblocks/richtext',
        // 'jsforwpblocks/text-alignment-toolbar',
        // 'jsforwpblocks/block-alignment-toolbar',
        // 'jsforwpblocks/custom-toolbar',
        // 'jsforwpblocks/inspector-controls',
        // 'jsforwpblocks/inspector-control-fields',
        // 'jsforwpblocks/form-fields',
        // 'jsforwpblocks/media-upload',
        // 'jsforwpblocks/url-input',
        // 'jsforwpblocks/url-input-conditional',
        // 'jsforwpblocks/dynamic',
        // 'jsforwpblocks/meta-box',
    ];

    // Register each block with same CSS and JS
    foreach( $blocks as $block ) {
        register_block_type( $block, [
            'editor_script' => 'jsforwp-blocks-editor-js',
            'editor_style'  => 'jsforwp-blocks-editor-css',
            'style' => 'jsforwp-blocks-css'
         ] );	  
    }

    

}



