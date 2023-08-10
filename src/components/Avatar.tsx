import styles from './Avatar.module.css';
import { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes <HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    return(
        <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar} //tem borda ? se tiver ...x se não ":" ...y
        {...props}
        />
    )
}