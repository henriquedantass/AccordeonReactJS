import { Item , Container} from './styles'
import { FiChevronDown } from 'react-icons/fi';


const AccordionItem = ({title, children, isActive, handleOnClick}) => {

    return (
    <>
    <Container>
         <Item isOpen={isActive}>
        <header onClick={handleOnClick}>
            <FiChevronDown />
            <span>{title}</span>
        </header>
        <main>{children}</main>
    </Item>
    </Container>
    </>
    )
}

export default AccordionItem;