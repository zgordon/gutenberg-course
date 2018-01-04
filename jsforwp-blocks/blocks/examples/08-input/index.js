/**
 * Block dependencies
 */
import icon from './icon';
import Input from './input';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
export default registerBlockType(
    'jsforwp/input',
    {
        title: __( 'Example - Input Field' ),
        category: 'common',
        icon: icon,
        keywords: [
            __( 'Custom' ),
            __( 'HTML' ),
            __( 'Form' ),
        ],
        attributes: {
          title: {
            source: 'text',
            type: 'string',
            selector: '.message-title',
          }
        },
        edit: props => {
          const onChangeInput = ( event ) => {
            props.setAttributes( { title: event.target.value } );
          };
          return (
            <div className={ props.className }>
              <Input
                id="example-input-field"
                labelText="Custom Input Field"
                { ...{ onChangeInput, ...props } }
              />
            </div>
          );
        },
        save: props => {
          return (
            <div>
              <p class="message-title">
                { props.attributes.title }
              </p>
            </div>
          );
        },
    },
);
