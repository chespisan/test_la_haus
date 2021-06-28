export interface DataRealEstate {
  id: string
  attributes: {
    name: string
    real_estate_ids: number[]
    real_estates?: {}
  }
}

export interface IncludedRealEstate {
  id: string
  attributes: {
    slug: string
    name: string
    description: string
    code: string
    city: string
    country: string
    neighborhood: string
    min_area: number
    min_price: number
    max_price: number
    is_new: boolean
    stratum: number
    matterport: number
    gallery_urls: string[]
    administration_price: number
    bathroom: number[]
    bedroom: number[]
    amenities: string[]
    parking_lots_units: number[]
    parking_lots: number[]
    year_built: number
    reservation_fee: null
    reservation_fee_measure_unit: null
    builder: null
    fiduciary: null
    latitude: number
    longitude: number
    la_haus_state: string
    is_prelaunch: boolean
    la_haus_city: string
    delivered_at: string
    price_per_square_meter: number
    minimum_price_guaranteed: null
  }
}

export interface RealEstate {
  data: [DataRealEstate]
  included: [IncludedRealEstate]
}
