import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar.js";
import styles from './Comment.module.css'


export function Comment({ content, onDeleteComment }) {

    const [amountsOfLikes, setAmaountOfLikes] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleNewLikeComment() {
        setAmaountOfLikes((qtdLikes) => {
            return qtdLikes + 1
        })
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Guilherme Galindo</strong>
                            <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:35">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} weight="bold" />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer className={styles.footer}>
                    <button onClick={handleNewLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{amountsOfLikes}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}