/**
 * Block dependencies
 */
import classnames from 'classnames';
import Inspector from './inspector';
import Controls from './controls';
import icons from './icons';
import './style.scss';

const { __ } = wp.i18n;
const {
  registerBlockType,
  Editable,
} = wp.blocks;

/**
 * Register static block example block
 */
export default registerBlockType(
  'jsforwp/inspector-controls-color',
  {
    title: __( 'Example - Inspector Colors' ),
    category: 'common',
    icon: icons.colors,
    keywords: [
      __( 'Palette' ),
      __( 'Settings' ),
      __( 'Scheme' ),
    ],
    attributes: {
      message: {
        type: 'array',
        source: 'children',
        selector: '.message-body',
      },
      alignment: {
        type: 'string',
      },
      highContrast: {
        type: 'boolean',
        default: false,
      },
      contrastBackgroundColor: {
        type: 'string',
        default: '#000000'
      },
    },
    edit: props => {
      const toggleHighContrast = () => {
        props.setAttributes( { highContrast: ! props.attributes.highContrast } );
      }
      const onChangeContrastBackgroundColor = value => {
        props.setAttributes( { contrastBackgroundColor: value } );
      }
      const onChangeAlignment = value =>  {
        props.setAttributes( { alignment: value } );
      }

      return [
				!! props.focus && (
          <Inspector
            { ...{ toggleHighContrast, onChangeContrastBackgroundColor, ...props} }
          />
				),
        !! props.focus && (
          <Controls
            toggleHighContrast={ toggleHighContrast }
            onChangeAlignment={ onChangeAlignment }
            attributes={ {
              highContrast: props.attributes.highContrast,
              alignment: props.attributes.alignment,
            } }            
          />
        ),
        <div
          style={ {
            backgroundColor: props.attributes.contrastBackgroundColor
          } }
          className={ classnames(
            props.className,
            { 'high-contrast': props.attributes.highContrast },
          ) }>
          <Editable
            tagName="div"
            multiline="p"
            placeholder={ __( 'Enter your message here..' ) }
            value={ props.attributes.message }
            className='message-body'
            style={ {
              textAlign: props.attributes.alignment,
            } }
            onChange={ ( value ) => props.setAttributes( { message: value } ) }
            focus={ props.focus }
  				/>
        </div>
      ];
    },
    save: props => {
      return (
        <div
          className={ classnames(
            'message-body',
            { 'high-contrast': props.attributes.highContrast },
          ) }
          style={ {
            textAlign: props.attributes.alignment,
            backgroundColor: props.attributes.contrastBackgroundColor,
          } }
        >
          { props.attributes.message }
        </div>
      );
    },
  },
);
