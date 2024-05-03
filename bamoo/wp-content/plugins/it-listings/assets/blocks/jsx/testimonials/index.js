import { getBlockType, registerBlockType, unregisterBlockType } from '@wordpress/blocks';
import { createContext } from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { select, subscribe, dispatch } from '@wordpress/data';
import Title from './title';
import Testimonials from './testimonials';
import metadata from '../../../../inc/blocks/testimonials/block.json';

export const attsContext = createContext();
let registered = false;
const slug = 'it-listings/testimonials';

const blockData = {
    icon: {
        src: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,16H5.17L4,17.17V4h16V16z"/><polygon points="12,15 13.57,11.57 17,10 13.57,8.43 12,5 10.43,8.43 7,10 10.43,11.57"/></g></g></svg>
    },
    edit: ({ attributes, setAttributes }) => {
        return(
            <attsContext.Provider value={{ attributes, setAttributes }}>
                <section {...useBlockProps({className: 'itre-editor-testimonials'})}>
                    <Title/>
                    <Testimonials/>
                </section>
            </attsContext.Provider>
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