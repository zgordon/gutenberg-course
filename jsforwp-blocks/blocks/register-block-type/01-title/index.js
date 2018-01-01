import blockIcons from '../icons.js';
import settings from '../code-snippets.js';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const blockHeading = __( 'registerBlockType [1/8] - Title Setting' );
const blockDescription = __( 'The title setting for registerBlockType() gives your block a searchable, human readable name.  It should be escaped using wp.i18n.__()' );

const output = ( props ) => {
    return <div className={props.className}>
        <h2>{blockHeading}</h2>
        <p>{blockDescription}</p>
        <pre>
            {settings.opening}
            {settings.titleComment}
            {settings.title}
            {settings.closing}
        </pre>
    </div>;
};

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwp/register-title',
    {
        title: blockHeading,
        category: 'common',
        icon: blockIcons.wapuu,
        edit: ( props ) => output( props ),
        save: ( props ) => output( props ),
    },
);
