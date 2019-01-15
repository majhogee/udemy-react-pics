import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 229bf5324a7a39fe05461a73fb0e3511cd3cab26828a78aff4c7284d65bb38f8'
  }
});
