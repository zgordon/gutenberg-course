/**
 * Block dependencies
 */
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const {
  registerBlockType,
  Editable,
  AlignmentToolbar,
  BlockControls,
  BlockAlignmentToolbar,
} = wp.blocks;

/**
  * Register block
 */
export default registerBlockType(
    'jsforwp/alignment-toolbar',
    {
        title: __( 'Example - Alignment Toolbar' ),
        category: 'common',
        icon: 'editor-alignleft',
        keywords: [
            __( 'Toolbar' ),
            __( 'Settings' ),
            __( 'Float' ),
        ],
        attributes: {
          message: {
            type: 'array',
            source: 'children',
            selector: '.message-body',
          },
          alignment: {
            type: 'string',
          },
        },
        edit: props => {
          const onChangeMessage = value => {
            props.setAttributes( { message: value } );
          };
          const onChangeAlignment = value => {
            props.setAttributes( { alignment: value } );
          };
          return (
            <div className={ props.className }>
              {
      					!! props.focus && (
                  <BlockControls key="controls">
                  	<AlignmentToolbar
                  		value={ props.attributes.alignment }
                  		onChange={ onChangeAlignment }
                  	/>
                  </BlockControls>
      					)
      				}
              <Editable
                tagName="div"
                multiline="p"
                placeholder={ __( 'Enter your message here..' ) }
                value={ props.attributes.message }
                className='message-body'
                style={ { textAlign: props.attributes.alignment } }
                onChange={ onChangeMessage }
                focus={ props.focus }
      				/>
            </div>
          );
        },
        save: props => {
          return (
            <div
              className='message-body'
              style={ { textAlign: props.attributes.alignment } }
            >
              { props.attributes.message }
            </div>
          );
        },

    },
);
