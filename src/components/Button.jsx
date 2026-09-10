// Props are arguments passed into React components. Props are passed to components via HTML attributes.
export const Button = ({className ="", size = "default", children, href, ...props})=> {


    const baseClases = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/10 inline-flex items-center justify-center transition-all duration-300";
    
    const sizeClasses = {
        sm:"px-4 py-2 text-sm",
        default:"px-6 py-3 text-base",
        lg:"px-8 py-4 text-lg"
    }
    
    const classes = `${baseClases} ${sizeClasses[size]} ${className}`;
    
    const content = (
        <span className="relative flex items-center justify-center gap-2 ">
            {children}
        </span>
    );

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {content}
            </a>
        );
    }

    return ( 
        <button className={classes} {...props}>
            {content}
        </button>
    );
}