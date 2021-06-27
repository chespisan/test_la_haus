import { getRealEstatesService } from '../../../services/real-estates/realEstates.service'

describe('Test service', () => {
  test('test est', async () => {
    const data = await getRealEstatesService()
    expect(data.length).toBe(4)
  })
})
