<?php

namespace Gutenberg_Courses\Example_Blocks;

add_action( 'init', __NAMESPACE__ . '\load_textdomain' );
/**
 * Load all translations for our plugin from the MO file.
 */
function load_textdomain() {
	load_plugin_textdomain( 'jsforwpblocks', false, dirname( plugin_basename( __DIR__ ) ) . '/languages/' );
}


// // add_action( 'init', __NAMESPACE__ . '\add_localization', 15 );
// /**
//  * Pass already loaded translations to our JavaScript.
//  */
// function add_localization() {
// 	wp_add_inline_script(
// 		'jsforwp-blocks-editor-js',
// 		'wp.i18n.setLocaleData( ' . json_encode( wp_get_jed_locale_data( 'jsforwpblocks' ) ) . ', "jsforwpblocks" );',
// 		'before'
// 	);
// }