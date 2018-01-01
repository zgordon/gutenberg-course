const { __ } = wp.i18n;
const { Component } = wp.element;

/**
  * Create an input field Component
 */
export default class Input extends Component {
  constructor( props ) {
    super( ...arguments );
  }
  render() {
    return (
      <p>
        <label
          htmlFor={ this.props.id }
        >
          { this.props.labelText }
        </label>
        <input
          id={ this.props.id }
          type="text"
          placeholder={ __( 'Add your text' ) }
          className={ this.props.className }
          value={ this.props.attributes.title }
          onChange={ this.props.onChangeInput }
        />
      </p>
    );
  }
}
