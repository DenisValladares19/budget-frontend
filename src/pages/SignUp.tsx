import { requiredMessage } from '@helpers/Constants.utils'
import { useApi } from '@hooks/useApi'
import PublicLayout from '@layout/PublicLayout'
import { UserDTO } from '@root/interfaces/UserDTO'
import { Button, Form, Input, message } from 'antd'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [stateFetch, fetchData] = useApi<UserDTO>()
    const [form] = Form.useForm()

    const onFinish = async (value: UserDTO) => {
        const response = await fetchData({
            method: 'POST',
            url: '/users',
            data: value,
        })

        if (response.ok) {
            message.success('Se creo tu cuenta exitosamente')
            return
        }

        if (response.code === '400') {
            message.error(response.message)
            return
        }

        message.error('Ocurrió un error por favor intenta mas tarde')
    }

    return (
        <PublicLayout>
            <div className="bg-white flex flex-col w-full max-w-[400px] px-6 py-6 rounded-md m-5">
                <h5 className="text-xl text-slate-950 font-medium">
                    Datos personales
                </h5>
                <p className="text-xs text-slate-700">
                    Por favor completa el siguiente formulario
                </p>

                <Form form={form} onFinish={onFinish} className="mt-3">
                    <div className="grid grid-cols-1">
                        <div className="flex flex-col">
                            <label>
                                Nombre <span className="text-red-600">*</span>
                            </label>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                        message: requiredMessage,
                                    },
                                ]}
                                className="mb-2"
                                name={'name'}
                            >
                                <Input placeholder="Ingresar" />
                            </Form.Item>
                        </div>

                        <div className="flex flex-col">
                            <label>
                                Apellido <span className="text-red-600">*</span>
                            </label>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                        message: requiredMessage,
                                    },
                                ]}
                                className="mb-2"
                                name={'lastName'}
                            >
                                <Input placeholder="Ingresar" />
                            </Form.Item>
                        </div>
                    </div>

                    <div className="grid grid-cols-1">
                        <div className="flex flex-col">
                            <label>
                                Correo electrónico
                                <span className="text-red-600">*</span>
                            </label>
                            <Form.Item
                                className="mb-2"
                                name={'email'}
                                rules={[
                                    {
                                        required: true,
                                        message: requiredMessage,
                                    },
                                ]}
                            >
                                <Input placeholder="Ingresar" />
                            </Form.Item>
                        </div>

                        <div className="flex flex-col">
                            <label>
                                Contraseña
                                <span className="text-red-600">*</span>
                            </label>
                            <Form.Item
                                className="mb-2"
                                name={'password'}
                                rules={[
                                    {
                                        required: true,
                                        message: requiredMessage,
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="Ingresar"
                                    type="password"
                                />
                            </Form.Item>
                        </div>
                    </div>

                    <Button
                        className="bg-slate-700 w-full mt-3 hover:bg-white hover:text-slate-700 active:bg-white active:text-slate-700"
                        type="primary"
                        htmlType="submit"
                        loading={stateFetch.isLoading}
                    >
                        Guardar
                    </Button>

                    <div className="text-center mt-3">
                        Ya tienes cuenta?{' '}
                        <Link to="/signin" className="text-sky-800">
                            inicia sesión
                        </Link>
                    </div>
                </Form>
            </div>
        </PublicLayout>
    )
}

export default SignUp
