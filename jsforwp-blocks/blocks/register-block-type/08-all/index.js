import blockIcons from '../../block-icons.js';
import settings from  '../code-snippets.js';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const el = wp.element.createElement;
const blockHeading = __( 'registerBlockType [8/8] - All Together' );
const blockText = __( 'Here we see all of the registerBlockType settings together.' );

const output = ( props ) => {
    return <div className={props.className}>
        <h2>{blockHeading}</h2>
        <p>{blockText}</p>
        <pre>
            {settings.opening}
            {settings.titleComment}
            {settings.title}
            {settings.categoryComment}
            {settings.category}
            {settings.iconComment}
            {settings.icon}
            {settings.keywordsComment}
            {settings.keywords}
            {settings.attributesComment}
            {settings.attributes}
            {settings.editComment}
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
    'jsforwp/example-all',
    {
        title: blockHeading,
        category: 'common',
        icon: blockIcons.wapuu,
        edit: ( props ) => output( props ),
        save: ( props ) => output( props ),
    },
);
