import blockIcons from '../icons.js';
import settings from '../code-snippets.js';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const blockHeading = __( 'registerBlockType [3/8] - Icon Setting' );
const blockDescription = __( 'The icon setting for registerBlockType() determines what icon will represent your custom block.  Can use a WP Dashicon or custom SVG.' );

const output = ( props ) => {
    return <div className={props.className}>
        <h2>{blockHeading}</h2>
        <p>{blockDescription}</p>
        <pre>
            {settings.opening}
            {settings.title}
            {settings.category}
            {settings.iconComment}
            {settings.icon}
            {settings.closing}
        </pre>
        <pre>
            {settings.opening}
            {settings.title}
            {settings.category}
            {settings.iconAltComment}
            {settings.iconAlt}
            {settings.closing}
        </pre>
    </div>;
};

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwp/register-icon',
    {
        title: blockHeading,
        category: 'common',
        icon: blockIcons.wapuu,
        edit: ( props ) => output( props ),
        save: ( props ) => output( props ),
    },
);
