import { getBlockType, registerBlockType, unregisterBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { dispatch, subscribe, select } from '@wordpress/data';
import { createContext } from 'react';
import Section from './section';
import Title from './title';
import metadata from '../../../../inc/blocks/featured-types/block.json';

let registered = false;
const slug = 'it-listings/featured-types';
export const attsContext = createContext();

const blockData = {
    icon: {
        src: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h6v-6h2v6h6v-8h3L19,9.3z M17,18h-2v-6H9v6H7v-7.81l5-4.5l5,4.5V18z"/><path d="M10,10h4c0-1.1-0.9-2-2-2S10,8.9,10,10z"/></g></g></svg>
    },
    edit: (props) => {
        const { attributes, setAttributes } = props;
        const { sections } = attributes;

        return (
            <section {...useBlockProps({ className: 'itre-editor-featured-types section' })}>
                <attsContext.Provider value={{ attributes, setAttributes }}>
                    <Title />
                    <div className="itre-editor-featured-types__sections">
                        {sections.map(section => (
                            <Section order={section.order} />
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

// Subscribe to State Changes
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