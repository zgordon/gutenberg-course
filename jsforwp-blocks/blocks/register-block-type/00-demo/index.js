import './style.scss';

// Get just the __() localization function from wp.i18n
const { __ } = wp.i18n;
// Get registerBlockType and Editable from wp.blocks
const { registerBlockType, Editable } = wp.blocks;
// Rename wp.element.createElement() to el() for ease of use
const el = wp.element.createElement;
// Set the block title since it is reused
const blockHeader = <h2>{__( 'Block Demo' )}</h2>;

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwp/example-demo',
    {
        title: __( 'registerBlockType - Demo' ),
        category: 'common',
        icon: 'wordpress',
        keywords: [ __( 'Example' ), __( 'Project' ), __( 'Demo' ) ],
        attributes: {
            content: {
                type: 'array',
                source: 'children',
                selector: 'div.my-content',
            },
        },
        edit: props => {
            const onChangeContent = value => {
                props.setAttributes( { content: value } );
            };
            return <div className={props.className}>
                {blockHeader}
                <Editable
                    tagname="div"
                    multiline="p"
                    className="my-content"
                    placeholder={__( 'Add your content...' )}
                    value={props.attributes.content}
                    onChange={onChangeContent}
                />
            </div>;
        },
        save: props => {
            return (
                <div className={props.className}>
                    {blockHeader}
                    {props.attributes.content}
                </div>
            );
        },
    },
);
