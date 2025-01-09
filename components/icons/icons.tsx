import { cn } from "@/lib/utils"

interface classProps {
    className?: string
}

export const FootprintIcon = ({ className }: classProps) => {
    return (
        <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M14 2C14 3.1 14.9 4 16 4C17.1 4 18 3.1 18 2C18 0.9 17.1 0 16 0C14.9 0 14 0.9 14 2ZM12 8C12 9.1 12.9 10 14 10C15.1 10 16 9.1 16 8C16 6.9 15.1 6 14 6C12.9 6 12 6.9 12 8ZM6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0C6.9 0 6 0.9 6 2ZM4 8C4 9.1 4.9 10 6 10C7.1 10 8 9.1 8 8C8 6.9 7.1 6 6 6C4.9 6 4 6.9 4 8ZM20 12C20 13.1 20.9 14 22 14C23.1 14 24 13.1 24 12C24 10.9 23.1 10 22 10C20.9 10 20 10.9 20 12Z" />
        </svg>
    )
}

export const CushionIcon = ({ className }: classProps) => (
    <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M18 6H6V18H18V6ZM19 5C19 4.44772 18.5523 4 18 4H6C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V5Z" />
    </svg>

)

export const StarIcon = ({ className }: classProps) => (
    <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
    </svg>

)

export const SneakerIcon = ({ className }: classProps) => (
    <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M22 14L19.47 11.47C19.17 11.17 18.7 11.17 18.41 11.47L16.66 13.22C16.25 13.63 15.56 13.56 15.2 13.15L13.53 11.48C13.17 11.09 12.55 11.09 12.19 11.48L10.79 13.14C10.42 13.56 9.73 13.63 9.32 13.22L7.59 11.47C7.3 11.17 6.83 11.17 6.53 11.47L4 14V16H2V17.5L4 18.5V20H5L8.27 17.14C8.63 16.74 9.13 16.74 9.47 17.14L11 18.58L11.73 19.21L11.73 19.58L12 20H12.73L13 19.58L13 19.21L13.73 18.58L15.26 17.14C15.6 16.74 16.1 16.74 16.47 17.14L19 18.5V17.5L21 16V14H22Z" />
    </svg>
)

export const TrophyIcon = ({ className }: classProps) => (
    <svg className={cn(className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M16 2C16.553 2 17 2.447 17 3V5H7V3C7 2.447 7.447 2 8 2H16ZM20 5V7H4V5H20ZM18 9V19C18 19.553 17.553 20 17 20H7C6.447 20 6 19.553 6 19V9H18ZM12 12C13.104 12 14 12.896 14 14C14 15.104 13.104 16 12 16C10.896 16 10 15.104 10 14C10 12.896 10.896 12 12 12ZM11 17H13V19H11V17Z" />
    </svg>

)