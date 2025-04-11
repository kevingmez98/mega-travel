// Caja contenedora
const Box = ({ children, className = "", title, subtitle }) => {
    return (
        <div className={`p-4 rounded shadow ${className}`}>

            <p className="fw-bold">{title}</p>
            {subtitle && (
                <p className="text-muted" style={{ maxWidth: '750px' }}>
                    {subtitle}
                </p>
            )}
            {children}

        </div>
    );
};

export default Box;
