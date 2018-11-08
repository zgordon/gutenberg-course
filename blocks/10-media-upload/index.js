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
} = wp.blocks;
const {
    Editable,
    MediaUpload,
} = wp.editor;
const {
    Button,
} = wp.components;

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwpblocks/media-upload',
    {
        title: __( 'Example - Media Upload Button', 'jsforwpblocks' ),
        description: __( 'An example of how to use the MediaUpload component.', 'jsforwpblocks'),
        category: 'common',
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: icons.upload,
        },         
        keywords: [
            __( 'Image', 'jsforwpblocks' ),
            __( 'MediaUpload', 'jsforwpblocks' ),
            __( 'Message', 'jsforwpblocks' ),
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
            const { attributes: { imgID, imgURL, imgAlt },
                className, setAttributes, isSelected } = props;
            const onSelectImage = img => {
                setAttributes( {
                    imgID: img.id,
                    imgURL: img.url,
                    imgAlt: img.alt,
                } );
            };
            const onRemoveImage = () => {
                setAttributes({
                    imgID: null,
                    imgURL: null,
                    imgAlt: null,
                });
            }
            return (
                <div className={ className }>

                    { ! imgID ? (

                        <MediaUpload
                            onSelect={ onSelectImage }
                            type="image"
                            value={ imgID }
                            render={ ( { open } ) => (
                                <Button
                                    className={ "button button-large" }
                                    onClick={ open }
                                >
                                    { icons.upload }
                                    { __( ' Upload Image', 'jsforwpblocks' ) }
                                </Button>
                            ) }
                        >
                        </MediaUpload>

                    ) : (

                        <p class="image-wrapper">
                            <img
                                src={ imgURL }
                                alt={ imgAlt }
                            />

                            { isSelected ? (

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
            const { imgURL, imgAlt } = props.attributes;
            return (
                <p>
                    <img
                        src={ imgURL }
                        alt={ imgAlt }
                    />
                </p>
            );
        },
    },
);
