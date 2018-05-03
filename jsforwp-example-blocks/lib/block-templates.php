<?php

namespace Gutenberg_Courses\Example_Blocks;

//add_filter( 'register_post_type_args', __NAMESPACE__ . '\add_template_to_post_type', 20, 2 );
function add_template_to_post_type( $args, $post_type ) {

	if ( 'post' !== $post_type ) {
		return $args;
	}

	$args['template_lock'] = true;
	$args['template']      = [
		[
			'core/image',
			[
				'align' => 'left',
			],
		],
		[
			'core/paragraph',
			[
				'placeholder' => 'The only thing you can add',
			],
		],
	];

	return $args;
}
