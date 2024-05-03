import { useContext } from 'react';
import { MediaUpload, MediaUploadCheck } from '@wordpress/blockEditor';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { SelectControl, ResponsiveWrapper, Button } from '@wordpress/components';
import { attsContext } from './index';
const ALLOWED_TYPES = ['image'];

const Section = ({ order, media }) => {
    const { attributes: { sections }, setAttributes } = useContext(attsContext);
    const section = sections.filter(item => item['order'] === order)[0];

    const allTerms = useSelect(select => (
        select('core').getEntityRecords('taxonomy', 'location', {per_page: -1})
    ), []);

    const image = useSelect(select => (
        media !== undefined &&
        select('core').getMedia(media)
    ), [media]);

    const onSelectMedia = (media) => {
        const newSections = sections.map(item => {
            if(item['order'] === order) {
               return {...item, mediaId: media.id }
            }
            return item;
        });
        setAttributes({sections: newSections});
    }
    
    return (
        <div className="itre-editor-featured-locations__section">
            <>
                {allTerms !== null &&
                    <p>
                        <SelectControl
                            label={__("Location")}
                            value={section['location']}
                            onChange={(value) => {
                                const newSections = sections.map(item => {
                                    if (item['order'] === order) {
                                        return {...item, location: parseInt(value)}
                                    }
                                    return item;
                                });
                                setAttributes({sections: newSections})
                            }}
                        >
                            <option value={0}>{__("Select Location")}</option>
                            {allTerms.map( term => <option value={term.id}>{__(term.name)}</option> )}
                        </SelectControl>
                    </p>
                }

                <p>
                    <MediaUploadCheck>
                        <MediaUpload
                            allowed={ALLOWED_TYPES}
                            multiple={false}
                            render={({open})=> {
                                return (
                                    <>
                                        {
                                            section.mediaId === 0 &&
                                            <p>
                                                <span class="dashicons dashicons-format-image"></span><span class="placeholder-text">Image</span>
                                            </p>
                                        }

                                        {   
                                        image !== undefined &&    
                                            Object.keys(image).length !== 0 &&
                                            <ResponsiveWrapper
                                                naturalWidth={ image.media_details.width }
                                                naturalHeight={ image.media_details.height }
                                            >
                                                <img src={ image.source_url } />
                                            </ResponsiveWrapper>
                                        }

                                        <p>
                                            <Button
                                                className={image === undefined || Object.keys(image).length === 0 ? 'is-primary' : 'is-secondary'}
                                                onClick={open}
                                            >
                                                {section.mediaId === 0 ? __('Choose an Image', 'it-listings') : __('Replace Image', 'it-listings')}
                                            </Button>
                                        </p>
                                    </>
                                )
                            }}
                            value={section['mediaId']}
                            onSelect={ onSelectMedia }
                        >
                        </MediaUpload>
                    </MediaUploadCheck>
                </p>
            </>
        </div>
    )
}

export default Section;