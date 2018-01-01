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
  Editable
} = wp.blocks;

/**
 * Register block
 */
export default registerBlockType(
    'jsforwp/editable',
    {
        title: __( 'Example - Editable' ),
        category: 'common',
        icon: icon,
        keywords: [
            __( 'Banner' ),
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
            props.setAttributes( { message: value } );
          };
          return (
            <div className={ props.className }>
              <h2>{ __( 'Call to Action' ) }</h2>
              <Editable
                tagName="div"
                placeholder={ __( 'Add your custom message' ) }
      					onChange={ onChangeMessage }
      					value={ props.attributes.message }
      					focus={ props.focus }
      					onFocus={ props.setFocus }
      				/>
            </div>
          );
        },
        save: props => {
          return (
            <div>
              <h2>{ __( 'Call to Action' ) }</h2>
              <div class="message-body">
                <p>{ props.attributes.message }</p>
              </div>
            </div>
          );
        },
    },
);
