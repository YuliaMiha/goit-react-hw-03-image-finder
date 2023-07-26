import axios from "axios";

const galleryServices = axios.create({
     baseURL: 'https://pixabay.com/api',
})
export const getGallery = async (search, page) => {
     const response = await galleryServices.get(`/`, {
          params: {
               key: '38444817-437a5cd9ef2f4cde90370cec5',
               image_type: 'photo',
               orientation: 'horizontal',
               per_page: 12,
               page: page,
               q: search,
          }
     });
     return response.data;
}