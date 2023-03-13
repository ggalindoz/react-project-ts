import styles from './Avatar.module.css';

interface AvatarProps {
    src: string;
    hasBorder?: Boolean;
    alt?: string;
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