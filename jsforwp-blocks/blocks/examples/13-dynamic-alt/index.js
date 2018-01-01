import icon from './icon';
import PostList from './post-list';
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { withAPIData } = wp.components;


registerBlockType(
  'jsforwp/dynamic-alt',
  {
    title: 'Example - Dynamic Alt',
    icon: icon,
    category: 'widgets',
    keywords: [
      __( 'API' ),
    ],
    attributes: {
      posts: {
        type: 'array',
        source: 'children',
      }
    },
    edit: props => <PostList className={props.className} />,
    save: props => <PostList className={props.className} />,
});
