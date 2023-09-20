import { LoadingOutlined } from '@ant-design/icons'

const LoadingFullScreen = () => {
    return (
        <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center bg-white">
            <div className="flex">
                <LoadingOutlined className="text-4xl" />
                <div className="flex flex-col ml-2">
                    <p className="text-3xl mb-0 font-bold text-slate-700">
                        Budget
                    </p>
                    <span className="-mt-[1px] text-xs">
                        Restaurando sesión...
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LoadingFullScreen
