import { InfoLayout } from "./infoLayout";
import PropTypes from 'prop-types'

export const Info = ({isDraw, isGameEnded, currentPlayer}) => {

    const displayInfo = () => {

        if (isDraw === true) {
            return 'Ничья'
        } else if (isDraw === false && isGameEnded === true) {

            return `Победил ${currentPlayer}`
        } else if (isDraw === false && isGameEnded === false) {
            return `Ходит ${currentPlayer}`
            
        }
    }
    
    return (
        <div>
            <InfoLayout displayInfo={displayInfo}/>
        </div>
    )
}

Info.propTypes = {
    isDraw: PropTypes.bool,
    isGameEnded: PropTypes.bool,
    currentPlayer: PropTypes.string
}
