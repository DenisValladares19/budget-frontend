import {
    DollarOutlined,
    FormOutlined,
    MobileOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons'
import { FloatButton } from 'antd'

const FloatMenu = () => {
    return (
        <FloatButton.Group
            trigger="click"
            type="primary"
            style={{ right: 24 }}
            icon={<FormOutlined />}
        >
            <FloatButton
                tooltip="Agregar ingreso"
                icon={<DollarOutlined />}
            ></FloatButton>

            <FloatButton
                tooltip="Agregar gasto"
                icon={<ShoppingCartOutlined />}
            ></FloatButton>

            <FloatButton
                tooltip="Agregar recarga"
                icon={<MobileOutlined />}
            ></FloatButton>
        </FloatButton.Group>
    )
}

export default FloatMenu
