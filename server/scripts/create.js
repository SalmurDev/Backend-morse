import axios from 'axios';

async function call() {
    let postDate = new Date();
    let res = await axios.post('http://localhost:8000/morses', {
        date: postDate,
    })
    console.log(res.status, res.data);
}

call(process.argv[2])