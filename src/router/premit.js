import router from "./index";
import store from '@/store'
router.beforeEach((to,from,next)=>{
       
        if(to.path=='/movies'){
            store.state.app.title="我的电影"
        }
        if(to.path=='/mine'){
            store.state.app.title="个人中心"
        }
        if(to.path=='/cinema'){
            store.state.app.title="喵喵影院"
        }
      
        next()
})

