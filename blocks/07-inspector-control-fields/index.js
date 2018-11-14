/**
 * Block dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import Controls from "./controls";
import icon from "./icon";
import attributes from "./attributes";
import "./style.scss";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

function getSettings(attributes) {
  let settings = [];
  for (let attribute in attributes) {
    let value = attributes[attribute];
    if ("boolean" === typeof attributes[attribute]) {
      value = value.toString();
    }
    settings.push(
      <li>
        {attribute}: {value}
      </li>
    );
  }
  return settings;
}

/**
 * Register inspector control example block
 */
export default registerBlockType("jsforwpblocks/inspector-control-fields", {
  title: __("Example - Inspector Fields", "jsforwpblocks"),
  description: __(
    "An example of how to use form fields in the Inspector element.",
    "jsforwpblocks"
  ),
  category: "common",
  icon: {
    background: "rgba(254, 243, 224, 0.52)",
    src: icon
  },
  keywords: [
    __("Palette", "jsforwpblocks"),
    __("Settings", "jsforwpblocks"),
    __("Scheme", "jsforwpblocks")
  ],
  attributes,
  getEditWrapperProps(attributes) {
    const { blockAlignment } = attributes;
    if (
      "left" === blockAlignment ||
      "right" === blockAlignment ||
      "full" === blockAlignment
    ) {
      return { "data-align": blockAlignment };
    }
  },
  edit: props => {
    const {
      attributes: { textAlignment, blockAlignment, message },
      attributes,
      className,
      setAttributes
    } = props;

    let settings = getSettings(attributes);

    return [
      <Inspector {...{ setAttributes, ...props }} />,
      <Controls {...{ setAttributes, ...props }} />,
      <div className={className} style={{ textAlign: textAlignment }}>
        <ul>{settings}</ul>
      </div>
    ];
  },
  save: props => {
    const {
      attributes: { textAlignment, blockAlignment },
      attributes
    } = props;

    let settings = getSettings(attributes);

    return (
      <div
        className={`align${blockAlignment}`}
        style={{ textAlign: textAlignment }}
      >
        <ul>{settings}</ul>
      </div>
    );
  }
});
