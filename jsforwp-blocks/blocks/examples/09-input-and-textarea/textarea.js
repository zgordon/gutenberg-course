/**
 * Component dependencies
 */
import classnames from 'classnames';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

/**
  * Create a textarea field Component
 */
export default class Textarea extends Component {
  render() {
    return [
      <label
        htmlFor={ this.props.id }
        className="blocks-base-control__label"
      >
        { this.props.labelText }
      </label>,
      <textarea
        id={ this.props.id }
        placeholder={ __( 'Add your text' ) }
        className={ classnames(
          'jsforwp-field',
          { 'wide': this.props.isFullWidth }
        ) }
        value={ this.props.inputValue }
        onChange={ this.props.onChangeTextArea }
      />
    ];
  }
}
