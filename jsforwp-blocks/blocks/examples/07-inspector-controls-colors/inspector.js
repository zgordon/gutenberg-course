/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
  InspectorControls,
  BlockDescription,
  ColorPalette,
} = wp.blocks;
const {
  Toolbar,
  Button,
  PanelBody,
  PanelRow,
  PanelColor,
  FormToggle,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

  render() {
    return (
      <InspectorControls key="inspector">

        <BlockDescription>
          <p>{ __( 'Block controls.  Do more.' ) }</p>
        </BlockDescription>

        <PanelBody
          title={ __( 'High Contrast' ) }
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
              checked={ !! this.props.attributes.highContrast }
              onChange={ this.props.toggleHighContrast }
            />
          </PanelRow>
        </PanelBody>

        { this.props.attributes.highContrast ?
          <PanelColor
            title={ __( 'Contrast Background Color' ) }
            colorValue={ this.props.attributes.contrastBackgroundColor }
          >
            <ColorPalette
              value={ this.props.attributes.contrastBackgroundColor }
              onChange={ this.props.onChangeContrastBackgroundColor }
            />
          </PanelColor>
        : null }

      </InspectorControls>
    );
  }

}
