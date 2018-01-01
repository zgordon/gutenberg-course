/**
 * Block dependencies
 */
import classnames from 'classnames';
import icons from './icons';
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
  InspectorControls,
  BlockDescription,
  ColorPalette,
} = wp.blocks;
const {
  Toolbar,
  Button,
  Tooltip,
  PanelBody,
  PanelColor,
  FormToggle,
} = wp.components;


/**
  * Register block
 */
export default registerBlockType(
    'jsforwp/inspector-controls',
    {
        title: __( 'Example - Inspector Controls' ),
        category: 'common',
        icon: icons.sidebar,
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
            default: false,
          },
          contrastBackgroundColor: {
            type: 'string',
            default: '#000000'
          },
        },
        edit: props => {
          const toggleHighContrast = () => {
            props.setAttributes( { highContrast: ! props.attributes.highContrast } );
          }
          const onChangeContrastBackgroundColor = value => {
            props.setAttributes( { contrastBackgroundColor: value } );
          }

          return [
  					!! props.focus && (
              <InspectorControls key="inspector">

                <BlockDescription>
                  <p>{ __( 'Block controls.  Do more.' ) }</p>
                </BlockDescription>

                <PanelBody title={ __( 'High Contrast' ) }>
                  {/* contrastButton */}
                  <div className="blocks-base-control blocks-toggle-control">
                    <label
                      htmlFor="high-contrast-form-toggle"
                      className="blocks-base-control__label"
                    >
                      { __( 'High Contrast' ) }
                    </label>
                    <FormToggle
                      id="high-contrast-form-toggle"
                      label={ __( 'High Contrast' ) }
              				checked={ !! props.attributes.highContrast }
              				onChange={ toggleHighContrast }
              			/>
                  </div>
                </PanelBody>

                { props.attributes.highContrast ?
                  <PanelColor
                    title={ __( 'Contrast Background Color' ) }
                    colorValue={ props.attributes.contrastBackgroundColor }
                    initialOpen={ open }
                  >
                    <ColorPalette
                      value={ props.attributes.contrastBackgroundColor }
                      onChange={ ( value ) => props.setAttributes( { contrastBackgroundColor: value } ) }
                    />
                  </PanelColor>
                : null }

              </InspectorControls>
  					),
            !! props.focus && (
              <BlockControls key="controls">
                <AlignmentToolbar
                  value={ props.attributes.alignment }
                  onChange={ ( value ) => props.setAttributes( { alignment: value } ) }
                />
                <Toolbar
                  className='components-toolbar'
                >
                  <Tooltip text={ __( 'High Contrast' )  }>
                    <Button
                      className={ classnames(
                        'components-icon-button',
                        'components-toolbar__control',
                        { 'is-active': props.attributes.highContrast },
                      ) }
                      onClick={ toggleHighContrast }
                    >
                      {icons.contrast}
                    </Button>
                  </Tooltip>
                </Toolbar>
              </BlockControls>
            ),
            <div
              style={ {
                backgroundColor: props.attributes.contrastBackgroundColor
              } }
              className={ classnames(
                props.className,
                { 'high-contrast': props.attributes.highContrast },
              ) }>
              <Editable
                tagName="div"
                multiline="p"
                placeholder={ __( 'Enter your message here..' ) }
                value={ props.attributes.message }
                style={ { textAlign: props.attributes.alignment } }
                onChange={ ( value ) => props.setAttributes( { message: value } ) }
                focus={ props.focus }
      				/>
            </div>
          ];
        },
        save: props => {
          return (
            <div
              className={ classnames(
                'message-body',
                { 'high-contrast': props.attributes.highContrast },
              ) }
              style={ {
                textAlign: props.attributes.alignment,
                backgroundColor: props.attributes.contrastBackgroundColor,
              } }
            >
              { props.attributes.message }
            </div>
          );
        },

    },
);
