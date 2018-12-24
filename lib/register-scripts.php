<?php

namespace Gutenberg_Courses\Example_Blocks;

add_action( 'init', __NAMESPACE__ . '\register_block_assets' );
/**
 * Enqueue block editor only JavaScript and CSS.
 */
function register_block_assets() {

	// Make paths variables so we don't write em twice ;)
	$editor_js_path = '/assets/js/blocks.editor.js';
	$editor_style_path = '/assets/css/blocks.editor.css';
	$style_path = '/assets/css/blocks.style.css';

	// Register the bundled block JS file
	wp_register_script(
		'jsforwp-blocks-editor-js',
		_get_plugin_url() . $editor_js_path,
		[ 'wp-i18n','wp-editor', 'wp-api-fetch', 'wp-element', 'wp-blocks', 'wp-components' ],
		filemtime( _get_plugin_directory() . $editor_js_path )
	);	

	wp_set_script_translations( 'jsforwp-blocks-editor-js', 'jsforwpblocks', _get_plugin_directory() . '/languages' );

	// Register editor only styles
	wp_register_style(
		'jsforwp-blocks-editor-css',
		_get_plugin_url() . $editor_style_path,
		[],
		filemtime( _get_plugin_directory() . $editor_style_path )
	);

	// Register shared editor and frontend styles
	wp_register_style(
		'jsforwp-blocks-css',
		_get_plugin_url() . $style_path,
		[],
		filemtime( _get_plugin_directory() . $style_path )
	);
	
}

