import Card from '../components/card/card'
import JsxExemple from '../components/jsx/exemple1'
import StateExemple from '../hooks/exemple0'
import HeaderEffect from '../hooks/exemple2'
import LogoReact from '../img/logo192.png'

const Main = () => {
    return (
        <>
            <h1>Main</h1>
            {/* It's calling the Card component and passing it props. */}
            <Card title="Je suis un titre" desc="lorem ipsum..." image={LogoReact} />
            <JsxExemple />
            <StateExemple />
            <HeaderEffect />
        </>
    )
}

export default Main
