import styles from './infoLayout.module.css'
import PropTypes from 'prop-types'

export const InfoLayout = ({displayInfo}) => {
     
    return (
        
        <div className={styles.info}>
            {displayInfo()}
        </div>
        
    )
}

InfoLayout.propTypes = {
    displayInfo: PropTypes.func
}
