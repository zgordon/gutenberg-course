<?php
/**
 * Plugin Name: Gutenberg - Example Blocks
 * Plugin URI: https://gutenberg.courses
 * Description: An plugin containing example blocks for developers.  From <a href="https://gutenberg.courses/development">Zac Gordon's Gutenberg Development Course</a>.
 * Text Domain: jsforwpblocks
 * Domain Path: /languages
 * Author: Zac Gordon (@zgordon)
 * Author URI: https://twitter.com/zgordon
 * Version: 2.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package JSFORWPBLOCKS
 */

//  Exit if accessed directly.
defined('ABSPATH') || exit;

// Enqueue JS and CSS
include( plugin_dir_path( __FILE__ ) . 'lib/enqueue-scripts.php');
// Register meta boxes
include( plugin_dir_path( __FILE__ ) . 'lib/meta-boxes.php');
// Block Templates
include( plugin_dir_path( __FILE__ ) . 'lib/block-templates.php');

// Dynamic Blocks
include( plugin_dir_path( __FILE__ ) . 'blocks/12-dynamic/index.php');
