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
  Editable,
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
    'jsforwp/custom-toolbar',
    {
        title: __( 'Example - Custom Toolbar' ),
        category: 'common',
        icon: icon,
        keywords: [
            __( 'Button' ),
            __( 'Settings' ),
            __( 'Controls' ),
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
          highContrast: {
            type: 'boolean',
          }
        },
        edit: props => {
          const toggleHighContrast = () => {
            props.setAttributes( { highContrast: ! props.attributes.highContrast } );
          }
          return (
            <div className={ classnames(
              props.className,
              { 'high-contrast': props.attributes.highContrast },
            ) }>
              {
      					!! props.focus && (
                  <BlockControls key="custom-controls">
                  	<AlignmentToolbar
                  		value={ props.attributes.alignment }
                  		onChange={ ( value ) => props.setAttributes( { alignment: value } ) }
                  	/>
                    <Toolbar>
                      <Tooltip text={ __( 'High Contrast' )  }>
                        <Button
                          className={ classnames(
                            'components-icon-button',
                            'components-toolbar__control',
                            { 'is-active': props.attributes.highContrast },
                          ) }
                          onClick={ toggleHighContrast }
                        >
                          { icon }
                        </Button>
                      </Tooltip>
                    </Toolbar>
                  </BlockControls>
      					)
      				}
              <Editable
                tagName="div"
                multiline="p"
                placeholder={ __( 'Enter your message here..' ) }
                value={ props.attributes.message }
                className={ classnames(
                  'message-body',
                  { 'high-contrast': props.attributes.highContrast }
                ) }
                style={ { textAlign: props.attributes.alignment } }
                onChange={ ( value ) => props.setAttributes( { message: value } ) }
                focus={ props.focus }
      				/>
            </div>
          );
        },
        save: props => {
          const className = classnames(
            'message-body',
            { 'high-contrast': props.attributes.highContrast },
          );
          return (
            <div
              className={ className }
              style={ { textAlign: props.attributes.alignment } }
            >
              { props.attributes.message }
            </div>
          )
        },

    },
);
