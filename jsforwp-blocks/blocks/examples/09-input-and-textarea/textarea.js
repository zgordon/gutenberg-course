const { __ } = wp.i18n;
const { Component } = wp.element;

export default class Textarea extends Component {
  constructor() {
    super( ...arguments );
  }
  render() {
    return (
      <p>
        <label
          htmlFor={ this.props.id }
          className="blocks-base-control__label"
        >
          { this.props.labelText }
        </label>
        <textarea
          id={ this.props.id }
          placeholder={ __( 'Add your text' ) }
          value={ this.props.attributes.content }
          onChange={ this.props.onChangeTextArea }
        />
      </p>
    );
  }
}
