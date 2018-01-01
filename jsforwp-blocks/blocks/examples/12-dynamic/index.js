/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';
import './editor.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { withAPIData } = wp.components;

registerBlockType(
  'jsforwp/dynamic', {
    title: 'Example - Dynamic Block',
    icon: icon,
    category: 'widgets',

    edit: withAPIData( () => {
        return {
            posts: '/wp/v2/posts?per_page=1'
        };
      } )( ( { posts, className } ) => {
          if ( ! posts.data ) {
              return "loading !";
          }
          if ( posts.data.length === 0 ) {
              return "No posts";
          }
          var post = posts.data[ 0 ];

          return (<a className={ className } href={ post.link }>
              { post.title.rendered }
          </a>);
      } ) // end withAPIData
    , // end edit

    save() {
        // Rendering in PHP
        return null;
    },
} );
