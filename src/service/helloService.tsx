import request from '@/request'
export default function helloService(vm: { title: string }){
    return{
        setAttr(title:string){
            vm.title = title
        },
        getHello(params:object){
            request.getHello(params).then((result: any)=>{
                
            })
        },
        postHello(data:object){
            request.postHello(data).then((result: any)=>{
                console.log(result)
            })
        }
    }
}