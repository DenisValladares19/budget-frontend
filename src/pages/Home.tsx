import CardMovement from '@components/CardMovement'
import Layout from '@layout/index'

const Home = () => {
    return (
        <Layout>
            <div className="flex items-center flex-col my-10 w-auto">
                <span className="text-7xl text-slate-600">$0.00</span>
                <span>Saldo disponible</span>
            </div>
            <div className="text-lg">Movimientos</div>
            <div className="flex flex-col">
                <CardMovement />
                <CardMovement />
                <CardMovement />
            </div>
        </Layout>
    )
}

export default Home
