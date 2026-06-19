import rateLimit from "../config/upstash.js";


const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await rateLimit.limit("my-limit-key")
        if(!success){
            res.status(429).json({message: "too many requests."})
            next();
        }
        next();
    } catch (error) {
        console.error("Rate Limit error", error)
        next(error);
        
    }
}

export default rateLimiter;