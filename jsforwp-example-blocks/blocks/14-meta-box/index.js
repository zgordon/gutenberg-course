/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType, InspectorControls } = wp.blocks;
const { TextControl, PanelBody } = wp.components;

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwpblocks/meta-box',
    {
        title: __( 'Example - Meta Box', 'jsforwpblocks' ),
        description: __( 'An example of how to build a block with a meta box field.', 'jsforwpblocks'),
        category: 'common',
        icon,
        keywords: [
            __( 'Meta', 'jsforwpblocks' ),
            __( 'Custom field', 'jsforwpblocks' ),
            __( 'Box', 'jsforwpblocks' ),
        ],
        attributes: {
            text: {
                type: 'string',
                source: 'meta',
                meta: 'jsforwp_gb_metabox',
            },
        },
        edit: props => {
            const { attributes: { text }, className, setAttributes, isSelected } = props;
            return [
                isSelected && (
                    <InspectorControls>
                        <PanelBody>
                            <TextControl
                                label={ __( 'Meta box', 'jsforwpblocks' ) }
                                value={ text }
                                onChange={ text => setAttributes( { text } ) }
                            />
                        </PanelBody>
                    </InspectorControls>
                ),
                <div className={ className } >
                    <p>{ __( 'Check the meta', 'jsforwpblocks' ) }</p>
                </div>
            ];
        },
        save: props => {
            return (
                <p>{ __( 'Check the meta', 'jsforwpblocks' ) }</p>
            );
        },
    },
);
