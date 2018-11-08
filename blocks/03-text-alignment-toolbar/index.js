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
} = wp.editor;


/**
  * Register block
 */
export default registerBlockType(
    'jsforwpblocks/text-alignment-toolbar',
    {
        title: __( 'Example - Alignment Toolbar', 'jsforwpblocks' ),
        description: __( 'How to add an alignment toolbar to a block for aligning text.', 'jsforwpblocks' ),
        category: 'common',
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: 'editor-alignleft',
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
        },
        edit: props => {
          const {
              attributes: { textAlignment, message },
              className, setAttributes } = props;

          return (
            <div className={ className } >
                <BlockControls>
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
          const { textAlignment, message } = props.attributes;
          return (
            <div 
                className="message-body" 
                style={ { textAlign: textAlignment } } 
            >
              { message }
            </div>
          );
        },

    },
);
