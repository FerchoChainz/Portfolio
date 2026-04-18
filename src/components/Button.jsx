// Props are arguments passed into React components. Props are passed to components via HTML attributes.
export const Button = ({className ="", size = "default", children})=> {


    const baseClases = "relative oveflow-hidden rounded-full font-medium focus:outline-none focus:visible:ring-2 focus-visible:ring-primary bg-primary text-primray-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

    const sizeClasses = {
        sm:"px-4 py-2 text-sm",
        default:"px-6 py-3 text-base",
        lg:"px-8 py-4 text-lg"
    }
    
    const classes = `${baseClases} ${sizeClasses[size]} ${className}`;
    return ( 
        <button className={classes}>
            <span className="relative flex items-center justify-center gap-2 ">{children}</span>
        </button>
    );
}