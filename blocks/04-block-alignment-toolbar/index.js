/**
 * Block dependencies
 */
import classnames from 'classnames';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    RichText,
    AlignmentToolbar,
    BlockControls,
    BlockAlignmentToolbar,
} = wp.editor;


/**
  * Register block
 */
export default registerBlockType(
    'jsforwpblocks/block-alignment-toolbar',
    {
        title: __( 'Example - Block Alignment Toolbar', 'jsforwpblocks' ),
        description: __( 'How to add an alignment toolbar to a block for aligning an entire block.', 'jsforwpblocks' ),
        category: 'common',
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: 'align-none',
        },           
        keywords: [
            __( 'Toolbar', 'jsforwpblocks' ),
            __( 'Settings', 'jsforwpblocks' ),
            __( 'Float', 'jsforwpblocks' ),
        ],
        attributes: {
            message: {
                type: 'array',
                source: 'children',
                selector: '.message-body',
            },
            textAlignment: {
                type: 'string',
            },
            blockAlignment: {
                type: 'string',
                default: 'wide',
            },
        },
        getEditWrapperProps( { blockAlignment } ) {
            if ( 'left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment ) {
                return { 'data-align': blockAlignment };
            }
        },
        edit: props => {
          const {
              attributes: { textAlignment, blockAlignment, message },
              className, setAttributes } = props;

          return (
            <div className={ className } >
                <BlockControls>
                    <BlockAlignmentToolbar
                        value={ blockAlignment }
                        onChange={ blockAlignment => setAttributes( { blockAlignment } ) }
                    />
                    <AlignmentToolbar
                        value={ textAlignment }
                        onChange={ textAlignment => setAttributes( { textAlignment } ) }
                    />
                </BlockControls>
                <RichText
                    tagName="div"
                    multiline="p"
                    placeholder={ __( 'Enter your message here..', 'jsforwpblocks' ) }
                    value={ message }
                    style={ { textAlign: textAlignment } }
                    onChange={ message => setAttributes( { message } ) }
                />
            </div>
          );
        },
        save: props => {
          const { blockAlignment, textAlignment, message } = props.attributes;
          return (
            <div
              className={classnames(
                  `align${blockAlignment}`,
                  'message-body',
              )}
              style={ { textAlign: textAlignment } }
            >
              { message }
            </div>
          );
        },

    },
);
