import './style.scss';
import './editor.scss';

// Get just the __() localization function from wp.i18n
const { __ } = wp.i18n;
// Get registerBlockType and Editable from wp.blocks
const { registerBlockType, Editable } = wp.blocks;
// Set the h2 header for the block since it is reused
const blockHeader = <h2>{ __( 'Block Demo' ) }</h2>;

/**
 * Register example block
 */
export default registerBlockType(
    // Namespaced, hyphens, lowercase, unique name
    'jsforwp/register-demo',
    {
        // Localize title using wp.i18n.__()
        title: __( 'registerBlockType - Demo' ),
        // Category Options: common, formatting, layout, widgets, embed
        category: 'common',
        // Dashicons Options - https://goo.gl/aTM1DQ
        icon: 'wordpress-alt',
        // Limit to 3 Keywords / Phrases
        keywords: [
            __( 'Example' ),
            __( 'Project' ),
            __( 'Code Samples' ),
        ],
        // Set for each piece of dynamic data used in your block
        attributes: {
            content: {
                type: 'array',
                source: 'children',
                selector: 'div.my-content',
            },
        },
        // Determines what is displayed in the editor
        edit: props => {
            // Event handler to update the value of the content when changed in editor
            const onChangeContent = value => {
                props.setAttributes( { content: value } );
            };
            // Return the markup displayed in the editor, including a core Editable field
            return <div className={props.className}>
                { blockHeader }
                <Editable
                    tagname="div"
                    multiline="p"
                    className="my-content"
                    placeholder={ __( 'Enter your ipsum here..' ) }
                    value={ props.attributes.content }
                    onChange={ onChangeContent }
                />
            </div>;
        },
        // Determines what is displayed on the frontend
        save: props => {
            // Return the markup to display on the frontend
            return (
                <div className={ props.className }>
                    { blockHeader }
                    <div className="my-content">
                      { props.attributes.content }
                    </div>
                </div>
            );
        },
    },
);
