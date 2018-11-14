/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;
const {
  CheckboxControl,
  PanelBody,
  PanelRow,
  RadioControl,
  RangeControl,
  TextControl,
  TextareaControl,
  ToggleControl,
  SelectControl
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        checkboxControl,
        colorPaletteControl,
        radioControl,
        rangeControl,
        textControl,
        textareaControl,
        toggleControl,
        selectControl
      },
      setAttributes
    } = this.props;

    return (
      <InspectorControls>
        <PanelBody
          title={__("Panel Body Title", "jsforwpblocks")}
          initialOpen={false}
        >
          <PanelRow>
            <p>{__("Panel Body Copy", "jsforwpblocks")}</p>
          </PanelRow>
        </PanelBody>

        <PanelBody>
          <CheckboxControl
            heading={__("Checkbox Control", "jsforwpblocks")}
            label={__("Check here", "jsforwpblocks")}
            help={__("Checkbox control help text", "jsforwpblocks")}
            checked={checkboxControl}
            onChange={checkboxControl => setAttributes({ checkboxControl })}
          />
        </PanelBody>

        <PanelColorSettings
          title={__("Color Panel", "jsforwpblocks")}
          colorSettings={[
            {
              label: __("Color Picker"),
              value: colorPaletteControl,
              onChange: colorPaletteControl => {
                setAttributes({ colorPaletteControl });
              }
            }
          ]}
        />

        <PanelBody>
          <RadioControl
            label={__("Radio Control", "jsforwpblocks")}
            selected={radioControl}
            options={[
              { label: "Author", value: "a" },
              { label: "Editor", value: "e" }
            ]}
            onChange={radioControl => setAttributes({ radioControl })}
          />
        </PanelBody>

        <PanelBody>
          <RangeControl
            beforeIcon="arrow-left-alt2"
            afterIcon="arrow-right-alt2"
            label={__("Range Control", "jsforwpblocks")}
            value={rangeControl}
            onChange={rangeControl => setAttributes({ rangeControl })}
            min={1}
            max={10}
          />
        </PanelBody>

        <PanelBody>
          <TextControl
            label={__("Text Control", "jsforwpblocks")}
            help={__("Text control help text", "jsforwpblocks")}
            value={textControl}
            onChange={textControl => setAttributes({ textControl })}
          />
        </PanelBody>

        <PanelBody>
          <TextareaControl
            label={__("Text Area Control", "jsforwpblocks")}
            help={__("Text area control help text", "jsforwpblocks")}
            value={textareaControl}
            onChange={textareaControl => setAttributes({ textareaControl })}
          />
        </PanelBody>

        <PanelBody>
          <ToggleControl
            label={__("Toggle Control", "jsforwpblocks")}
            checked={toggleControl}
            onChange={toggleControl => setAttributes({ toggleControl })}
          />
        </PanelBody>

        <PanelBody>
          <SelectControl
            label={__("Select Control", "jsforwpblocks")}
            value={selectControl}
            options={[
              { value: "a", label: "Option A" },
              { value: "b", label: "Option B" },
              { value: "c", label: "Option C" }
            ]}
            onChange={selectControl => setAttributes({ selectControl })}
          />
        </PanelBody>
      </InspectorControls>
    );
  }
}
