<?php
/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package     Gutenberg_Courses\Example_Blocks
 * @author      Zac Gordon (@zgordon)
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: Gutenberg - Example Blocks
 * Plugin URI:  https://gutenberg.courses
 * Description: An plugin containing example blocks for developers.  From <a href="https://gutenberg.courses/development">Zac Gordon's Gutenberg Development Course</a>.
 * Version:     2.0.0
 * Author:      Zac Gordon (@zgordon)
 * Author URI:  https://twitter.com/zgordon
 * Text Domain: jsforwpblocks
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

//  Exit if accessed directly.
defined('ABSPATH') || exit;

// Enqueue JS and CSS
include plugin_dir_path( __FILE__ ) . 'lib/enqueue-scripts.php';
// Register meta boxes
include plugin_dir_path( __FILE__ ) . 'lib/meta-boxes.php';
// Block Templates
include plugin_dir_path( __FILE__ ) . 'lib/block-templates.php';

// Dynamic Blocks
include plugin_dir_path( __FILE__ ) . 'blocks/12-dynamic/index.php';
