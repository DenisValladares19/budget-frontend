const CardMovement = () => {
    return (
        <div
            className="flex w-full cursor-pointer items-center justify-between px-1 py-1"
            style={{
                borderBottomWidth: '1px',
                borderBottomColor: 'rgba(0, 0, 0, 0.1)',
            }}
        >
            <div className="flex flex-col">
                <span className="text-base">Comida</span>
            </div>

            <div className="flex flex-col text-right">
                <p className="text-sm text-red-700">-$3.00</p>
                <span className="text-xs">$1,400</span>
            </div>
        </div>
    )
}

export default CardMovement
