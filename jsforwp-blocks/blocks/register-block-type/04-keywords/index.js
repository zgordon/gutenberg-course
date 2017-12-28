import blockIcons from '../../block-icons.js';
import settings from '../code-snippets.js';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const blockHeading = __( 'registerBlockType [4/8] - Keywords Setting' );
const blockDescription = __( 'The keyword setting for registerBlockType provides three additional keyword / phrases that will display your block when searched for. Limited to 3.' );

const output = ( props ) => {
    return <div className={props.className}>
        <h2>{blockHeading}</h2>
        <p>{blockDescription}</p>
        <pre>
            {settings.opening}
            {settings.title}
            {settings.category}
            {settings.icon}
            {settings.keywordsComment}
            {settings.keywords}
            {settings.closing}
        </pre>
    </div>;
};

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwp/register-keywords',
    {
        title: blockHeading,
        category: 'common',
        icon: blockIcons.wapuu,
        edit: ( props ) => output( props ),
        save: ( props ) => output( props ),
    },
);
