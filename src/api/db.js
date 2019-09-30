import axios from 'axios';

const defaultDelayDuration = 2000;
const delay = async function delay(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
};

export default {
  async getProducts() {
    // Local file loading completes pretty fast.
    // So we use some delay to mock async call duration.
    await delay(defaultDelayDuration);

    // Of course JSON file can be simply imported without GET-request,
    // but we need to mock async data loading.
    return axios.get(`${process.env.BASE_URL}data/products.json`).then(response => response.data);
  },
  async addProductToCart(product) {
    // We got no backend to call, so we just return delay promise to mock such async call.
    return delay(defaultDelayDuration).then(() => product);
  },
  async incrementProductQuantityInCart(product) {
    // We got no backend to call, so we just return delay promise to mock such async call.
    return delay(defaultDelayDuration).then(() => product);
  },
  async decrementProductQuantityInCart(product) {
    // We got no backend to call, so we just return delay promise to mock such async call.
    return delay(defaultDelayDuration).then(() => product);
  },
  async removeProductFromCart(product) {
    // We got no backend to call, so we just return delay promise to mock such async call.
    return delay(defaultDelayDuration).then(() => product);
  }
};
