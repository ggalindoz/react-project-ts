import styles from './Avatar.module.css';

interface AvatarProps {
    src: String;
    hasBorder: Boolean;
    alt: String;
}

export function Avatar({ src, hasBorder = true }: AvatarProps) {
    return (

        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
            alt=""
        />


    );
}