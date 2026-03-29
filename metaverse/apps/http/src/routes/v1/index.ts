//export root router

import {Router} from "express"
import { userRouter } from "./user.js";
import { spaceRouter } from "./space.js";
import { adminRouter } from "./admin.js";

export const router=  Router();

router.post("/signup", (req, res)=> {
    res.json({
       message: "Singed Up"
    })
})

router.post("/signin", (req, res)=>{

    res.json({
        message: "Signing IN"
    }
)
})

router.get("/elements", (req, res)=>{

})

router.get("/avatars", (req, res)=>{
    
})

router.use("/user", userRouter)
router.use("/space", spaceRouter)
router.use("/admin", adminRouter )
//  "build": "tsc -b"     -- invoking typescript compiler to build the project - whatever is present in sorc folder-convert it into javascript and put it into the dist folder.