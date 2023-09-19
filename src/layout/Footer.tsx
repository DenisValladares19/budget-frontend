const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className="text-center text-xs text-slate-700 p-8">
            &copy; Todos los derechos reservados - Denis Valladares {year}
        </div>
    )
}

export default Footer
