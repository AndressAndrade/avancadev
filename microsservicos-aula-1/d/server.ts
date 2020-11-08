import express, {Request, Response} from 'express';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());

const coupons = [
    "abc",
    "abd",
    "cde",
    "edf"
]

app.post('/validateCoupon/:coupon', (req: Request, res: Response) => {
    const {coupon} = req.params;
    if (!coupon) {
        return res.status(400).json({
            Status: "invalid"
        });
    }
    if (coupons.includes(coupon)) {
        return res.status(200).json({
            Status: "valid"
        });
    }
    else {
        return res.status(404).json({
            Status: "invalid"
        });
    }
});

app.listen(3333);