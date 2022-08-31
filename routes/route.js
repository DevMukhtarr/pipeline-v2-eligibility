import { Router } from "express";
import { calculateAge} from "../controllers/controller.js";
import { rateLimit } from "express-rate-limit";
const router = Router()


const limiter = rateLimit({
	windowMs: 1000,
	max: 3,
    message: "you can only call this endpoint 3 times in a second"
})


router.route("/howold").get(limiter, calculateAge)

export default router