/**
 * Block dependencies
 */
import classnames from 'classnames';
import Inspector from './inspector';
import Controls from './controls';
import icon from './icon';
import attributes from './attributes';
import './style.scss';

const { __ } = wp.i18n;
const {
    registerBlockType,
    RichText,
} = wp.blocks;

let settings = [];

/**
 * Register static block example block
 */
export default registerBlockType(
    'jsforwpblocks/inspector-control-fields',
    {
        title: __( 'Example - Inspector Fields', 'jsforwpblocks' ),
        description: __( 'An example of how to use form fields in the Inspector element.', 'jsforwpblocks'),        
        category: 'common',
        icon,
        keywords: [
            __( 'Palette', 'jsforwpblocks' ),
            __( 'Settings', 'jsforwpblocks' ),
            __( 'Scheme', 'jsforwpblocks' ),
        ],
        attributes,
        getEditWrapperProps( attributes ) {
            const { blockAlignment } = attributes;
            if ( 'left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment ) {
                return { 'data-align': blockAlignment };
            }
        },
        edit: props => {
            const { attributes: { textAlignment, blockAlignment, message },
                attributes, isSelected, className, setAttributes } = props;

            settings.length = 0;
            for( let attribute in attributes ) {
                let value = attributes[ attribute ];
                if( 'boolean' === typeof attributes[ attribute ] ) {
                    value = value.toString();
                }
                settings.push( <li>{ attribute }: { value }</li> );
            }

            return [
                isSelected && <Inspector { ...{ setAttributes, ...props} } />,
                isSelected && <Controls { ...{ setAttributes, ...props } }/>,
                <div
                    className={ className }
                    style={ { textAlign: textAlignment } }
                >
                    <ul>
                        { settings }
                    </ul>
                </div>
            ];
        },
        save: props => {
            const { textAlignment, blockAlignment } = props.attributes;
            return (
                <div
                  className={ `align${blockAlignment}` }
                  style={ { textAlign: textAlignment } }
                >
                    <ul>
                        {settings}
                    </ul>
                </div>
            );
        },
    },
);
