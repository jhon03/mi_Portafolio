 export default function NavbarButton({

    children,

    primary = false

}) {

    return (

        <button
            className={
                primary
                    ? "btn btn-primary"
                    : "btn btn-secondary"
            }
        >

            {children}

        </button>

    );

}