/**
 * Block dependencies
 */
import classnames from 'classnames';
import icon from './icon';

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
    Tooltip,
    TextControl,
} = wp.components;

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwpblocks/url-input',
    {
        title: __( 'Example - URL Input', 'jsforwpblocks' ),
        description: __( 'An example of how to use the UrlInput component.', 'jsforwpblocks'),
        category: 'common',
        icon,
        keywords: [
            __( 'Link', 'jsforwpblocks' ),
            __( 'Post', 'jsforwpblocks' ),
            __( 'Search', 'jsforwpblocks' ),
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
            const { attributes: { text, url }, className, isSelected, setAttributes } = props;
            return (
                <div className={ className }>
                    { isSelected ? (
                        [
                            <TextControl
                                id="example-input-field"
                                label={ __( 'Link Text', 'jsforwpblocks' ) }
                                value={ text }
                                onChange={ text => setAttributes( { text } ) }
                            />,
                                <p>{ __( 'Link URL', 'jsforwpblocks' ) }</p>,
                            <form
                                className="blocks-button__inline-link"
                                onSubmit={ event => event.preventDefault() }
                            >
                                <Tooltip text="Add Link">
                                    {icon}
                                </Tooltip>
                                <UrlInput
                                    className="url"
                                    value={ url }
                                    onChange={ url => setAttributes( { url } ) }
                                />
                                <IconButton
                                    icon="editor-break"
                                    label={ __( 'Apply', 'jsforwpblocks' ) }
                                    type="submit"
                                />
                            </form>
                        ]
                    ) : (

                        <p>
                            <a href={ url }>
                                { text || __( 'Edit link', 'jsforwpblocks' ) }
                            </a>
                        </p>

                    )}

                </div>
            );
        },
        save: props => {
            const { attributes: { text, url } } = props;

            return (
                <p>
                    <a href={ url }>
                        { text }
                    </a>
                </p>
            );
        },
    },
);
