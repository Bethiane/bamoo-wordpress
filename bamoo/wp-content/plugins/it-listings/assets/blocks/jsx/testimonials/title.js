import { useContext } from 'react';
import { TextControl } from '@wordpress/components';
import { attsContext } from './index';
import { __ } from '@wordpress/i18n';

const Title = () => {
    const { attributes, setAttributes } = useContext(attsContext);
    const { title } = attributes;

    return (
        <>
            <h2>{__("Testimonials")}</h2>
            <p>
                <TextControl
                label="Title"
                    value={title}
                    onChange={value => setAttributes({title: value})}
                />
            </p>
        </>
    )
};

export default Title;