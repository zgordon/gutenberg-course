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
} = wp.blocks;
const {
  Toolbar,
  Button,
  Tooltip,
  PanelBody,
  PanelRow,
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
        },
        edit: props => {
          const toggleHighContrast = () => {
            props.setAttributes( { highContrast: ! props.attributes.highContrast } );
          }

          return [
  					!! props.focus && (
              <InspectorControls key="inspector">

                <BlockDescription>
                  <p>{ __( 'Block controls.  Do more.' ) }</p>
                </BlockDescription>

                <PanelBody title={ __( 'High Contrast' ) }
                >

                  <PanelRow>
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
                  </PanelRow>

                </PanelBody>

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
              className={ classnames(
                props.className,
                { 'high-contrast': props.attributes.highContrast },
              ) }
            >
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
              style={ { textAlign: props.attributes.alignment } }
            >
              { props.attributes.message }
            </div>
          );
        },

    },
);
