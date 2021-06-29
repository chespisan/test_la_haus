import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import CardRealEstate from 'components/card-real-estate/CardRealEstate'
import Header from 'components/header/Header'
import { getRealEstatesService } from 'services/real-estates/realEstates.service'

const Home: React.FC = () => {
  const [dataRealEstate, setDataRealState] = useState<any>([])

  const getRealEstates = async (): Promise<void> => {
    const data = await getRealEstatesService()
    setDataRealState(data)
  }

  useEffect(() => {
    getRealEstates()
  }, [])

  return (
    <>
      <Helmet>
        <title>
          La Haus más que una inmobiliaria ¡Compra finca raíz a tu ritmo!
        </title>
        <meta
          name="description"
          content="¿Buscas una inmobiliaria? Tenemos una buena noticia, somos mucho más. La tecnología y oferta de finca raíz harán más fácil la compra de tu vivienda nueva."
        />
      </Helmet>
      <Header />
      <div className="container-home">
        <h1 className="title-home">Listas de favoritos</h1>

        <div className="container-card-real-estate">
          {dataRealEstate.map((realStates: any) => (
            <div className="my-2" key={realStates.id}>
              <CardRealEstate realEstates={realStates} />
            </div>
          ))}

          <div className="container-new-card">
            <div className="content-new-card">
              <i className="icon-new-card  fas fa-plus"></i>
            </div>
            <h2 className="title-new-card">Crea una nueva lista</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
