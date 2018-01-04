/**
 * Block dependencies
 */
import classnames from 'classnames';
import icons from './icons';
import Input from './input';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const {
  registerBlockType,
  UrlInput,
} = wp.blocks;
const {
  IconButton,
  Button,
  Tooltip,
} = wp.components;

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwp/url-input',
    {
        title: __( 'Example - URL Input' ),
        category: 'common',
        icon: icons.link,
        keywords: [
            __( 'Link' ),
            __( 'Post' ),
            __( 'Search' ),
        ],
        attributes: {
          text: {
            type: 'string',
            source: 'text',
            selector: 'a',
          },
          url: {
            type: 'string',
            source: 'attribute',
            selector: 'a',
            attribute: 'href',
          },
        },
        edit: props => {
          const onChangeURL = value => {
            props.setAttributes( { url: value } );
          };
          const onChangeInput = ( event ) => {
            props.setAttributes( { text: event.target.value } );
          };
          return (
            <div
              className={ classnames(
                props.className,
                { 'in-focus': !! props.focus },
              ) }
            >
              { !! props.focus ? (
                [
                  <p>
                    <Input
                      id="example-input-field"
                      labelText="Custom text field"
                      inputValue={ props.attributes.text }
                      onChangeInput={ onChangeInput }
                    />
                  </p>,
                  <form
                    key="form-link"
                    className="blocks-button__inline-link"
                    onSubmit={ event => event.preventDefault() }
                  >
                    <Tooltip text="Add Link">
                      {icons.link}
                    </Tooltip>
                    <UrlInput
                      className="url"
                      value={ props.attributes.url }
                      onChange={ onChangeURL }
                    />
                    <IconButton
                      icon="editor-break"
                      label={ __( 'Apply' ) }
                      type="submit"
                    />
                  </form>
                ]
              ) : (

                <p>
                  <a href={props.attributes.url}>
                    { props.attributes.text || __( 'Edit link' ) }
                  </a>
                </p>

              ) }

            </div>
          );
        },
        save: props => {
          return (
            <p>
              <a href={ props.attributes.url }>
                { props.attributes.text }
              </a>
            </p>
          );
        },
    },
);
