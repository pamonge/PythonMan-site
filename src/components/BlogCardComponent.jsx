import React , {useState} from 'react'
import styles from './BlogCardComponentStyles.module.css'

export const BlogCardComponent = ({ blogCardData }) => {
	const [card_class, setCardClass] = useState(`${styles.blogCard} ${styles.hidden}`)
	const [button_class, setButtonClass] = useState(`${styles.extendButtonBar} ${styles.unclicked}`)

	const [isCardClicked, setIsCardClicked] = useState(false)

	const showCard = () => {
		if(!isCardClicked) {
			setCardClass(`${styles.blogCard} ${styles.visible}`)
			setButtonClass(`${styles.extendButtonBar} ${styles.clicked}`)
			setIsCardClicked(!isCardClicked)
		}
	}

	const closeCard = () => {
		if(isCardClicked) {
			setCardClass(`${styles.blogCard} ${styles.hidden}`)
			setButtonClass(`${styles.extendButtonBar} ${styles.unclicked}`)
			setIsCardClicked(!isCardClicked)
		}
		
	}
	return (
		<div className={card_class} onClick={showCard}>
			<div key={blogCardData.id}> 
				<div className={styles.beforeTitle}>
					<p>{blogCardData.author} - {blogCardData.date} - {blogCardData.readingTime}</p>
					<div className={styles.extendButton} onClick={closeCard}>
						<div className={button_class}></div>
						<div className={button_class}></div>
					</div>
				</div>
				<h2>{blogCardData.title}</h2>
				<p>{blogCardData.content}</p>
			</div>
		</div>
	)
}
