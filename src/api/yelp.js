import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 4aHrmrRibyUPPMraSMCrhe9-1nQUy-ecd0WzAhS3cIvldtsGgGqeovxUWCgdGGLgV5Z8m7RPNYhpJNkJRRByFFBpgpUg4q4WbdMMwoWjWKKfZZ3dkQJXYTBsi46DXnYx'
    }
});