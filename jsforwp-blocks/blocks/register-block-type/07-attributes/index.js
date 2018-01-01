import blockIcons from '../icons.js';
import './style.scss';
import settings from '../code-snippets';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const el = wp.element.createElement;

const blockHeading = __( 'registerBlockType [7/8] - Attribute Setting\n' );
const blockDescription = __( 'The attribute setting identifies what dynamic content we are using in our blocks. Several attribute options exist depending on what types of data we are using. Attribute settings are optional if your block uses no dynamic data. This data is then made available via props.attributes.name.' );

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
            {settings.attributesComment}
            {settings.attributes}
            {settings.edit}
            {settings.save}
            {settings.closing}
        </pre>
    </div>;
};

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwp/register-attributes',
    {
        title: blockHeading,
        category: 'common',
        icon: blockIcons.wapuu,
        edit: ( props ) => output( props ),
        save: ( props ) => output( props ),
    },
);
