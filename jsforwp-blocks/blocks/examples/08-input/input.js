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
          className="blocks-base-control__label"
        >
          { this.props.labelText }
        </label>
        <input
          id={ this.props.id }
          type="text"
          placeholder={ __( 'Add your text' ) }
          className={ classnames(
            'jsforwp-field',
            { 'wide': this.props.isFullWidth }
          ) }
          value={ this.props.attributes.title }
          focus={ !! this.props.focus }
          onFocus={ this.props.setFocus }
          onChange={ this.props.onChangeInput }
        />
      </p>
    );
  }
}
