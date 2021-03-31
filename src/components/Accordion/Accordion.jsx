
import { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({data}) => {

    const [itemOpen , setItemOpen] = useState(null);
    const toggleItemOpen = index => {
        setItemOpen(itemOpen === index ? null : index)
    }

    return (
    <>
        {data.map((item, index) => (
            <AccordionItem 
            title={item.title} 
            key={item.title} 
            isActive={itemOpen === index}
            handleOnClick = {() => {toggleItemOpen(index);}}
            >
            <div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy t
                    ext ever since the 1500s, when an unknown printer took a galley 
                    of type and scrambled it to make a type specimen book. </p>
            </div>
        </AccordionItem>

        ))}
    </>         
    )

}


export default Accordion;