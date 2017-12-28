import blockIcons from '../../block-icons.js';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const el = wp.element.createElement;
const blockTitle = __( 'registerBlockType [7/8] - Attribute Setting\n' );
const blockText = __( 'The attribute setting identifies what dynamic content we are using in our blocks. Several attribute options exist depending on what types of data we are using. Attribute settings are optional if your block uses no dynamic data. This data is then made available via props.attributes.name.' );
const blockCode = `wp.blocks.registerBlockType(
    'namespace/block-name',
    {
        // Attributes are set for each type of dynamic data used in your block
        attributes: {
            title: {
                // Text Attribute Example
                type: 'string'
                source: 'text',
                selector: 'h2.my-title',
            },
            description: {
                // Children Attribute Example
                type: 'array',
                source: 'children',
                selector: 'div.my-content',
            },
            url: {
                // Attribute Attribute Example
                type: 'string'
                source: 'attribute',
                attribute: 'href',
                selector: 'a.my-link',                    
            }
        }
        save: props => <div className={props.className}">
            <h2 className="my-title">
                <a href={props.attributes.url} className="my-link">
                    {props.attributes.title}
                </a>                
            </h2>
            <div className="my-description">
                {props.attributes.description}
            </div>            
        </div>
    }
);`;
const output = ( props ) => {
    return <div className={props.className}>
        <h2>{blockTitle}</h2>
        <p>{blockText}</p>
        <pre>{blockCode}</pre>
    </div>;
};

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwp/example-attributes',
    {
        title: blockTitle,
        category: 'common',
        icon: blockIcons.wapuu,
        edit: ( props ) => output( props ),
        save: ( props ) => output( props ),
    },
);
