import { cn } from '../lib/utils'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            viewBox="0 0 200 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('text-foreground h-8 w-auto', className)}>
            {/* Detective Badge Icon */}
            <circle cx="20" cy="20" r="15" stroke={uniColor ? 'currentColor' : 'url(#detective-gradient)'} strokeWidth="2" fill="none"/>
            <path d="M15 20L18 23L25 16" stroke={uniColor ? 'currentColor' : 'url(#detective-gradient)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            
            {/* Text: Chatspecteur */}
            <text x="45" y="28" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" fontSize="20" fontWeight="700" letterSpacing="0.5">
                Chatspecteur
            </text>
            
            <defs>
                <linearGradient
                    id="detective-gradient"
                    x1="20"
                    y1="5"
                    x2="20"
                    y2="35"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#1E40AF" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('size-8', className)}>
            {/* Detective Badge Icon */}
            <circle cx="16" cy="16" r="12" stroke={uniColor ? 'currentColor' : 'url(#icon-gradient)'} strokeWidth="2" fill="none"/>
            <path d="M12 16L14.5 18.5L20 13" stroke={uniColor ? 'currentColor' : 'url(#icon-gradient)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            
            <defs>
                <linearGradient
                    id="icon-gradient"
                    x1="16"
                    y1="4"
                    x2="16"
                    y2="28"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#1E40AF" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn('size-10 w-10', className)}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {/* Magnifying Glass - Detective Theme */}
            <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M23 23L32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
        </svg>
    )
}