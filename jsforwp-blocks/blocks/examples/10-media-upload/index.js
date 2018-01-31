/**
 * Block dependencies
 */
import icons from './icons';
import './editor.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const {
  registerBlockType,
  Editable,
  MediaUpload,
} = wp.blocks;
const {
  Button,
} = wp.components;

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwp/media-upload',
    {
        title: __( 'Example - Media Upload Button' ),
        category: 'common',
        icon: icons.upload,
        keywords: [
            __( 'Image' ),
            __( 'MediaUpload' ),
            __( 'Message' ),
        ],
        attributes: {
          imgURL: {
            type: 'string',
            source: 'attribute',
            attribute: 'src',
            selector: 'img',
          },
          imgID: {
            type: 'number',
          },
          imgAlt: {
            type: 'string',
            source: 'attribute',
            attribute: 'alt',
            selector: 'img',
          }
        },
        edit: props => {
          const onSelectImage = img => {
            props.setAttributes( {
              imgID: img.id,
              imgURL: img.url,
              imgAlt: img.alt,
            } );
          };
          const onRemoveImage = () => {
            props.setAttributes({
              imgID: null,
              imgURL: null,
              imgAlt: null,
            });
          }
          return (
            <div className={ props.className }>

              { ! props.attributes.imgID ? (

                <MediaUpload
                  onSelect={ onSelectImage }
                  type="image"
                  value={ props.attributes.imgID }
                  render={ ( { open } ) => (
                    <Button
                      className="components-button button button-large"
                      onClick={ open }
                    >
                      { icons.upload }
                      { __( 'Upload Image' ) }
                    </Button>
                  ) }
                />

              ) : (

                <p class="image-wrapper">
                  <img
                    src={ props.attributes.imgURL }
                    alt={ props.attributes.imgAlt }
                  />
                  { props.focus ? (
                    <Button
                      className="remove-image"
                      onClick={ onRemoveImage }
                    >
                      { icons.remove }
                    </Button>
                  ) : null }

                </p>
              )}

            </div>
          );
        },
        save: props => {
          return (
            <p>
              <img
                src={props.attributes.imgURL}
                alt={props.attributes.imgAlt}
              />
            </p>
          );
        },
    },
);
