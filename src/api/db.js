import axios from 'axios';

const delay = async function delay(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
};

export default {
  async getProducts() {
    // Local file loading completes pretty fast.
    // So we use some delay to mock loading duration.
    await delay(2000);

    // Of course JSON file can be simply imported without GET-request,
    // but we need to mock async data loading.
    return axios.get(`${process.env.BASE_URL}data/products.json`).then(response => response.data);
  }
};
