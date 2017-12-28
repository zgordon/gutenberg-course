<?php
/**
 * Plugin Name: Gutenberg - Block Examples
 * Plugin URI: https://gutenberg.courses
 * Description: An plugin containing example blocks for developers.  From <a href="https://gutenberg.courses">Zac Gordon's Gutenberg Course</a>.
 * Author: Zac Gordon
 * Author URI: https://zacgordon.com
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package JSFORWPBLOCKS
 */

//  Exit if accessed directly.
defined('ABSPATH') || exit;


/**
 * Enqueue block editor JavaScript and CSS
 */
function jsforwpblocks_editor_scripts()
{

    // Make paths variables so we don't write em twice ;)
    $blockPath = '/assets/js/blocks.min.js';
    $editorStylePath = '/assets/css/blocks.editor.css';

    // Enqueue the bundled block JS file
    wp_enqueue_script(
        'jsforwp-blocks-js',
        plugins_url($blockPath, __FILE__),
        ['wp-i18n', 'wp-element', 'wp-blocks', 'wp-components'],
        filemtime(plugin_dir_path(__FILE__) . $blockPath)
    );

    // Enqueue optional editor only styles
    wp_enqueue_style(
        'jsforwp-blocks-editor-css',
        plugins_url($editorStylePath, __FILE__),
        ['wp-blocks'],
        filemtime(plugin_dir_path(__FILE__) . $editorStylePath)
    );

}

// Hook scripts function into block editor hook
add_action('enqueue_block_editor_assets', 'jsforwpblocks_editor_scripts');


/**
 * Enqueue block editor JavaScript and CSS
 */
function jsforwpblocks_scripts()
{

    // Make paths variables so we don't write em twice ;)
    $stylePath = '/assets/css/blocks.style.css';

    // Enqueue frontend and editor block styles
    wp_enqueue_style(
        'jsforwp-blocks-css',
        plugins_url($stylePath, __FILE__),
        ['wp-blocks'],
        filemtime(plugin_dir_path(__FILE__) . $stylePath)
    );

}

// Hook scripts function into block editor hook
add_action('enqueue_block_assets', 'jsforwpblocks_scripts');
