import Card from '../components/card/card'
import LogoReact from '../img/logo192.png'

const Main = () => {
    return (
        <>
            <h1>Main</h1>
            { /* It's calling the Card component and passing it props. */}
            <Card title="Je suis un titre" desc="lorem ipsum..." image={LogoReact} />

            <Card title="rfrg" desc="lorem ipsum..." image={LogoReact} />
        </>
    )
}

export default Main
