const Header = () => {
    return (
        <div className="bg-slate-700 w-screen flex justify-center">
            <div className="flex justify-between py-4 px-8 w-full max-w-[1200px] items-center">
                <div className="flex">
                    <span className="text-white text-3xl font-bold">
                        Budget
                    </span>
                </div>

                <div className="flex text-white gap-3">
                    <a href="#">Recargas</a>
                    <a href="#">Movimientos</a>
                    <a href="#">Perfil</a>
                </div>
            </div>
        </div>
    )
}

export default Header
