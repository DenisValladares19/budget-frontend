import {
    CaretDownOutlined,
    DollarOutlined,
    LogoutOutlined,
    MobileOutlined,
    ShoppingCartOutlined,
    UserOutlined,
} from '@ant-design/icons'
import useUser from '@hooks/useUser'
import { Avatar, Dropdown, MenuProps } from 'antd'

const Header = () => {
    const { methods, userData } = useUser()

    const items: MenuProps = {
        items: [
            {
                key: '1',
                label: (
                    <a href="#" className="flex gap-2">
                        <UserOutlined />
                        Perfil
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a href="#" className="flex gap-2">
                        <DollarOutlined />
                        Agregar ingreso
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a href="#" className="flex gap-2">
                        <ShoppingCartOutlined />
                        Agregar gasto
                    </a>
                ),
            },

            {
                key: '4',
                label: (
                    <a className="flex gap-2">
                        <MobileOutlined />
                        Agregar recarga
                    </a>
                ),
            },
            { type: 'divider' },
            {
                key: '5',
                label: (
                    <a
                        onClick={() => methods.onLogout()}
                        className="flex gap-2"
                    >
                        <LogoutOutlined />
                        Cerrar sesión
                    </a>
                ),
            },
        ],
    }

    const getInitialLetters = (first?: string, second?: string): string => {
        if (!first) return ''
        if (!second) return first[0]?.toLocaleUpperCase()

        const a = first[0]?.toLocaleUpperCase()
        const b = second[0]?.toLocaleUpperCase()

        return `${a}${b}`
    }

    return (
        <div className="bg-slate-700 w-screen flex justify-center">
            <div className="flex justify-between relative py-4 px-8 w-full max-w-[1200px] items-center">
                <div className="flex">
                    <span className="text-white text-3xl font-bold">
                        Budget
                    </span>
                </div>

                {userData.loggedIn && (
                    <div className="flex absolute right-5 top-0 text-white gap-3">
                        <Dropdown menu={items} className="cursor-pointer">
                            <div className="flex items-center gap-2 hover:bg-slate-600 h-[68px] pl-4 pr-2">
                                <Avatar
                                    style={{
                                        backgroundColor: '#fde3cf',
                                        color: '#f56a00',
                                    }}
                                >
                                    {getInitialLetters(
                                        userData.data?.name,
                                        userData.data?.lastName
                                    )}
                                </Avatar>
                                <CaretDownOutlined />
                            </div>
                        </Dropdown>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header
