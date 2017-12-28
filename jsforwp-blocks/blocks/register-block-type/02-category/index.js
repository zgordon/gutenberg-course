import blockIcons from '../../block-icons.js';
import settings from '../code-snippets.js';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const blockHeading = __( 'registerBlockType [2/8] - Category Setting' );
const blockDescription = __( 'The category setting for registerBlockType determines under which heading a user can find your block.  Options include "common", "formatting", "layout", "widgets" and "embed".' );

const output = ( props ) => {
    return <div className={props.className}>
        <h2>{blockHeading}</h2>
        <p>{blockDescription}</p>
        <pre>
            {settings.opening}
            {settings.title}
            {settings.categoryComment}
            {settings.category}
            {settings.closing}
        </pre>
    </div>;
};

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwp/register-category',
    {
        title: blockHeading,
        category: 'common',
        icon: blockIcons.wapuu,
        edit: ( props ) => output( props ),
        save: ( props ) => output( props ),
    },
);
