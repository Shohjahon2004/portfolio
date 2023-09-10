import axios from 'axios'

const instance = axios.create({
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWZiMDNhNWYxNGExNzljNjQxMzk2MWJlODU4MWQ0ZSIsInN1YiI6IjY0ZDFkODQ3NTQ5ZGRhMDBmZmE1NTE0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c_IUI7yULwr885q2sQgV249ilY6yvujRp83JRh_S_h8'
    }
});

export default instance