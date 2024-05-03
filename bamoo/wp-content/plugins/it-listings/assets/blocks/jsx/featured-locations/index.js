import { getBlockType, registerBlockType, unregisterBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { subscribe, select, dispatch } from '@wordpress/data';
import { createContext } from 'react';
import Section from './section';
import Title from './title';
import metadata from '../../../../inc/blocks/featured-locations/block.json';

let registered = false;
const slug = 'it-listings/featured-locations';
export const attsContext = createContext();

const blockData = {
    icon: {
        src: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/></svg>
    },
    edit: (props) => {
        const { attributes, setAttributes } = props;
        const { sections } = attributes;
        return (
            <section {...useBlockProps({ className: 'itre-editor-featured-locations section' })}>
                <attsContext.Provider value={{ attributes, setAttributes }}>
                    <Title />
                    <div className="itre-editor-featured-locations__sections">
                        {sections.map((section) => (
                            <Section order={section['order']} media={section['mediaId']} />
                        ))}
                    </div>
                </attsContext.Provider>
            </section>
        )
    },
    save: () => null,
    ...metadata
};
registerBlockType(slug, blockData);

// Listen for subsequent saves and template changes
subscribe(() => {
    const blocks = select('core/block-editor').getBlocks();

    if (!select('core/editor')) {
        return;
    }
    
    const template = select('core/editor').getEditedPostAttribute('template');
    
    if (template === undefined) {
        return;
    }

    if (template === 'template-property-listings.php' && registered === false) {
        registered = true;
        if (getBlockType(slug)) {
            return;
        }
        registerBlockType(slug, blockData);
    }
    
    if (template !== 'template-property-listings.php') {

        if (blocks.length !== 0) {
            const filteredBlocks = blocks.filter(block => block.name === slug);
            filteredBlocks.forEach( block => {
                const { clientId } = block;
                dispatch('core/editor').removeBlock(clientId);
            });
        }
        
        if (getBlockType(slug)) {
            unregisterBlockType(slug);
            registered = false;
        }
    }
});