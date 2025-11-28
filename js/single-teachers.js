let path = new URLSearchParams(location.search);
let id = path.get("teacherId");
console.log(id);
async function getData(){
    try{
        let res = await axios.get(`https://6925beea82b59600d725044c.mockapi.io/teachers/${id}`)
        console.log(res.data);
        let res2 = await axios.get(`https://6925beea82b59600d725044c.mockapi.io/teachers/${id}/students`)
        console.log(res.data);
    }catch(err){
        console.log(err);
        
    }
}
getData();
