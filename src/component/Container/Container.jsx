import { Images } from "./Images"
import styles from './Container.module.css'


export function Container(props) {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.imagesWrapper}>
                    <Images src="https://picsum.photos/1000?random=1" alt="alt srs" />
                    <Images src="https://picsum.photos/1000?random=2" alt="alt srs" />
                </div>
                <div className={styles.imagesWrapper}>
                    <Images src="https://picsum.photos/1000?random=3" alt="alt srs" />
                    <Images src="https://picsum.photos/1000?random=4" alt="alt srs" />
                </div>
            </div>
        </div>
    )
}