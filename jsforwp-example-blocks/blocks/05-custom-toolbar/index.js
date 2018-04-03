/**
 * Block dependencies
 */
import classnames from 'classnames';
import icon from './icon';
import './style.scss';
import './editor.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const {
    registerBlockType,
    RichText,
    AlignmentToolbar,
    BlockControls,
    BlockAlignmentToolbar,
} = wp.blocks;
const {
    Dashicon,
    Toolbar,
    Button,
    Tooltip,
} = wp.components;

/**
 * Register block
 */
export default registerBlockType(
    'jsforwpblocks/custom-toolbar',
    {
        title: __( 'Example - Custom Toolbar', 'jsforwpblocks' ),
        description: __( 'An example of how to add a custom buttom to the block toolbar.', 'jsforwpblocks'),
        category: 'common',
        icon,
        keywords: [
            __( 'Button', 'jsforwpblocks' ),
            __( 'Settings', 'jsforwpblocks' ),
            __( 'Controls', 'jsforwpblocks' ),
        ],
        attributes: {
            alignment: {
                type: 'string',
            },
            blockAlignment: {
                type: 'string',
            },
            highContrast: {
                type: 'boolean',
                default: false,
            },
            message: {
                type: 'array',
                source: 'children',
                selector: '.message-body',
            },
        },
        getEditWrapperProps( attributes ) {
            const { blockAlignment } = attributes;
            if ( 'left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment ) {
                return { 'data-align': blockAlignment };
            }
        },
        edit: props => {
            const { attributes: { alignment, blockAlignment, message, highContrast },
                isSelected, className, setAttributes } = props;
            const classes = classnames(
                className,
                { 'high-contrast': highContrast },
            );
            return (
                <div className={ classes }>
                    { isSelected && (
                        <BlockControls key="custom-controls">
                            <BlockAlignmentToolbar
                                value={ blockAlignment }
                                onChange={ blockAlignment => setAttributes( { blockAlignment } ) }
                            />
                            <AlignmentToolbar
                                value={ alignment }
                                onChange={ alignment => props.setAttributes( { alignment } ) }
                            />
                            <Toolbar>
                                <Tooltip text={ __( 'High Contrast', 'jsforwpblocks' )  }>
                                    <Button
                                        className={ classnames(
                                            'components-icon-button',
                                            'components-toolbar__control',
                                            { 'is-active': highContrast },
                                        ) }
                                        onClick={ () => setAttributes( { highContrast: ! highContrast } ) }
                                    >
                                        { icon }
                                    </Button>
                                </Tooltip>
                            </Toolbar>
                        </BlockControls>
                    ) }
                    <RichText
                        tagName="div"
                        multiline="p"
                        placeholder={ __( 'Enter your message here..', 'jsforwpblocks' ) }
                        value={ message }
                        className={ classnames(
                            'message-body',
                            { 'high-contrast': highContrast }
                        ) }
                        style={ { textAlign: alignment } }
                        onChange={ ( message ) => props.setAttributes( { message } ) }
                    />
                </div>
            );
        },
        save: props => {
            const { highContrast, alignment, message } = props.attributes;
            const className = classnames(
                'message-body',
                { 'high-contrast': highContrast },
            );
            return (
                <div
                    className={ className }
                    style={ { textAlign: alignment } }
                >
                    { message }
                </div>
            )
        },

    },
);
