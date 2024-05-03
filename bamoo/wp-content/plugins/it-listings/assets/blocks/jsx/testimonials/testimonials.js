import { useContext } from 'react';
import { useSelect } from '@wordpress/data';
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { attsContext } from ".";

const Testimonials = () => {
    const { attributes, setAttributes } = useContext(attsContext);
    let allTestimonials = [];

    allTestimonials = useSelect(select => select('core').getEntityRecords('postType', 'testimonial', {per_page: -1}), []);

    const { testimonials } = attributes;
    return(
        <p>
            <SelectControl
                label={__("Select Testimonials")}
                multiple={true}
                autoFocus={true}
                value={testimonials}
                onChange={value => {
                    setAttributes({testimonials: [...value]})
                }}
                >   
                {
                    allTestimonials !== null &&
                    allTestimonials.map(item => {
                        return <option value={item.id}>{item.title.rendered}</option>
                    })
                }

             </SelectControl>
        </p>
    )
}
 
export default Testimonials;