import blockIcons from '../../block-icons.js';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const el = wp.element.createElement;
const blockTitle = __( 'registerBlockType [6/8] - Save Setting' );
const blockText = __( 'The save setting for registerBlockType determines what be displayed when the block is converted to content for the frontend. Must return a valid React element using wp.element.createElement() or JSX.  Also accepts dynamic data as a props parameter.' );
const blockCode = `wp.blocks.registerBlockType(
    'namespace/block-name',
    {
        // wp.element.createElement() example
        save: wp.element.createElement( 'p', {}, 'Hello World!' );
    }
);`;
const blockCode2 = `wp.blocks.registerBlockType(
    'namespace/block-name',
    {
        // JSX example
        save: <p>Hello World!</p>;
    }
);`;
const blockCode3 = `wp.blocks.registerBlockType(
    'namespace/block-name',
    {
        // Can also accept dynamic data via props variable
        save: props => <p>{props.attributes.title}</p>;
    }
);`;
const output = ( props ) => {
    return <div className={props.className}>
        <h2>{blockTitle}</h2>
        <p>{blockText}</p>
        <pre>{blockCode}</pre>
        <pre>{blockCode2}</pre>
        <pre>{blockCode3}</pre>
    </div>;
};

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwp/example-save',
    {
        title: blockTitle,
        category: 'common',
        icon: blockIcons.wapuu,
        edit: ( props ) => output( props ),
        save: ( props ) => output( props ),
    },
);
