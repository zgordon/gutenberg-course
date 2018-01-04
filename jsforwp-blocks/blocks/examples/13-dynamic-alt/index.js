import icon from './icon';
import PostList from './post-list';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


registerBlockType(
  'jsforwp/dynamic-alt',
  {
    title: 'Example - Dynamic Alt',
    icon: icon,
    category: 'widgets',
    keywords: [
      __( 'API' ),
    ],
    edit: props => {
      return (
        <PostList
          className={props.className}
        />
      );
    },
    save: props => {
      // Rendered via PHP
      return null
    },
});
