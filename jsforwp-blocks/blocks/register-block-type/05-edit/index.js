import blockIcons from '../../block-icons.js';
import settings from '../code-snippets.js';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const el = wp.element.createElement;

const blockHeading = __( 'registerBlockType [5/8] - Edit Setting' );
const blockDescription = __( 'The edit setting for registerBlockType() determines what will display in the editor area for the block. This includes block markup and functionality. Must return a valid element using wp.element.createElement() or JSX. Also accepts dynamic data via a "props" parameter.' );

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
            {settings.editComment}
            {settings.edit}
            {settings.closing}
        </pre>
    </div>;
};

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwp/register-edit',
    {
        title: blockHeading,
        category: 'common',
        icon: blockIcons.wapuu,
        edit: ( props ) => output( props ),
        save: ( props ) => output( props ),
    },
);
