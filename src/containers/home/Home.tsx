import React, { useEffect, useState } from 'react'
import CardRealState from '../../components/card-real-estate/CardRealState'
import Header from '../../components/header/Header'
import { getRealEstatesService } from '../../services/real-estates/realEstates.service'
import './Home.scss'

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
      <Header />
      <div className="container mx-auto mt-5 text-center">
        <h1 className="font-semibold text-jungle-green  text-3xl  lg:text-4xl  m-10  lg:m-16">
          Listas de favoritos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
          {dataRealEstate.map((realStates: any) => (
            <div className="my-2">
              <CardRealState realEstates={realStates} />
            </div>
          ))}
          <div className="flex-col my-2">
            <div className="bg-md-blue border-solid flex items-center justify-center mx-auto h-48 rounded-2xl w-11/12">
              <i className="text-sky-blue  text-6xl fas fa-plus"></i>
            </div>
            <h2 className="my-2 text-lg  text-center text-sky-blue">
              Crea una nueva lista
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
