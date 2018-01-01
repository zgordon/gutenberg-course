/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const {
  registerBlockType,
  createBlock,
  Editable
} = wp.blocks;

/**
 * Register block
 */
export default registerBlockType(
    'jsforwp/editable-multiline',
    {
        title: __( 'Example - Multiline Editable' ),
        category: 'common',
        icon: icon,
        keywords: [
            __( 'Demo' ),
            __( 'Call to Action' ),
            __( 'Message' ),
        ],
        attributes: {
          message: {
            type: 'array',
            source: 'children',
            selector: '.message-body',
          }
        },
        edit: props => {
          const onChangeMessage = value => {
            props.setAttributes( { message: value } )
          };
          return (
            <div className={ props.className }>
              <Editable
                tagName="div"
                multiline="p"
                placeholder={ __( 'Enter your message here..' ) }
                value={ props.attributes.message }
                className="message-body"
                onChange={ onChangeMessage }
                focus={ props.focus }
      				/>
            </div>
          );
        },
        save: props => {
          return (
            <div>
              { props.attributes.message }
            </div>
          );
        },
    },
);
