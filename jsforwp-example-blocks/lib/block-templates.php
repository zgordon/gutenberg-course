<?php

//add_filter( 'register_post_type_args', 'jsforwpblocks_templates', 20, 2 );
function jsforwpblocks_templates( $args, $post_type ) {

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
