import blockIcons from '../../block-icons.js';
import settings from '../code-snippets.js';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const el = wp.element.createElement;

const blockHeading = __( 'registerBlockType [6/8] - Save Setting' );
const blockDescription = __( 'The save setting for registerBlockType() determines what be displayed when the block is converted to content for the frontend. Must return a valid React element using wp.element.createElement() or JSX.  Also accepts dynamic data as a props parameter.' );

const output = ( props ) => {
    return <div className={props.className}>
        <h2>{blockHeading}</h2>
        <p>{blockDescription}</p>
        <pre>
            {settings.opening}
            {settings.title}
            {settings.category}
            {settings.icon}
            {settings.keywords}
            {settings.edit}
            {settings.saveComment}
            {settings.save}
            {settings.closing}
        </pre>
    </div>;
};

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwp/register-save',
    {
        title: blockHeading,
        category: 'common',
        icon: blockIcons.wapuu,
        edit: ( props ) => output( props ),
        save: ( props ) => output( props ),
    },
);
