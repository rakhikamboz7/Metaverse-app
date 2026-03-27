//export root router

import {Router} from "express"

export const router=  Router();

router.get("/signup", (req, res)=> {
    res.json({
       message: "Singed Up"
    })
})

router.get("/signin", (req, res)=>{

    res.json({
        message: "Signing IN"
    }
)
})

//  "build": "tsc -b"     -- invoking typescript compiler to build the project - whatever is present in sorc folder-convert it into javascript and put it into the dist folder.