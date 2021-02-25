import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/nicolaswalcker.png" alt="Foto de perfil"/>
            <div>
                <strong>Nicolas Walcker</strong>
                <p>
                    <img src="icons/level.svg" alt="Icone level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}