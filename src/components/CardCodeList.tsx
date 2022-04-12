import { useGlobalContext } from '../GlobalContext';
import { generateCodeList } from '../helpers';

// COMPONENT
const CardCodeList: React.FC = () => {
  const { cardCodes } = useGlobalContext()

  // VIEW
  return (
    <div className='CardCodeList__container'>
      {cardCodes && generateCodeList(cardCodes)}
    </div>
 
  )
}

export default CardCodeList