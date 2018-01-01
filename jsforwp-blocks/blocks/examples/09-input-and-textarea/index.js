/**
 * Block dependencies
 */
import icon from './icon';
import Input from './input';
import Textarea from './textarea';

import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwp/input-textarea',
    {
        title: __( 'Example - Textarea & Input' ),
        category: 'common',
        icon: icon,
        keywords: [
            __( 'Demo' ),
            __( 'HTML' ),
            __( 'Field' ),
        ],
        attributes: {
          title: {
            source: 'text',
            type: 'string',
            selector: '.title',
          },
          content: {
            source: 'html',
            selector: '.content',
          }
        },
        edit: props => {
          const onChangeIntput = ( event ) => {
            props.setAttributes( { title: event.target.value } );
          };
          const onChangeTextArea = ( event ) => {
            props.setAttributes( { content: event.target.value } );
          };
          return (
            <div className={ props.className }>
              <h2 class="message-title">
                <Input
                  id="example-input-field"
                  className="wide"
                  labelText="Custom text field"
                  { ...{ onChangeIntput, ...props } }
                />
              </h2>
              <p>
                <Textarea
                  id="example-textarea"
                  className="wide"
                  labelText="Custom textarea"
                  { ...{ onChangeTextArea, ...props } }
                />
              </p>
            </div>
          );
        },
        save: props => {
          return (
            <div>
              <h2 class="title">
                { props.attributes.title }
              </h2>
              <p className="content">
                { props.attributes.content }
              </p>
            </div>
          );
        },
    },
);
