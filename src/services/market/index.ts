import axiosInstance from "@/config/axios.config"

export const getOfferApi = (offerType: 'Buy' | 'Sell') => {
  return axiosInstance.get('/offer', {params: {offerType}})
}