/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Spinner, withAPIData } = wp.components;

registerBlockType(
    'jsforwpblocks/dynamic',
    {
        title: __( 'Example - Dynamic Block', 'jsforwpblocks'),
        description: __( 'A look at how to build a basic dynamic block.', 'jsforwpblocks'),
        icon: icon,
        category: 'widgets',
        edit: withAPIData( props => {
                return {
                    posts: `/wp/v2/posts?per_page=3`
                };
            } )( ( { posts, className, isSelected, setAttributes } ) => {
                if ( ! posts.data ) {
                    return (
                        <p className={className} >
                            <Spinner />
                            { __( 'Loading Posts', 'jsforwpblocks' ) }
                        </p>
                    );
                }
                if ( 0 === posts.data.length ) {
                    return <p>{ __( 'No Posts', 'jsforwpblocks' ) }</p>;
                }
                return (
                    <ul className={ className }>
                        { posts.data.map( post => {
                            return (
                                <li>
                                    <a className={ className } href={ post.link }>
                                        { post.title.rendered }
                                    </a>
                                </li>
                            );
                        }) }
                    </ul>
                );
            } ) // end withAPIData
        , // end edit
        save() {
            // Rendering in PHP
            return null;
        },
} );
