import $axios from '@/utils/axios'
export default {
    getHello(params:object){
        return $axios.get("/luo/hello",{params});
    },
    postHello(data:object){
        return $axios.post("/luo/hello",data);
    }
}