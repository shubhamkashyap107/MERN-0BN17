const express = require("express")
const router = express.Router()
const { OTP } = require("../models/otp.model")
const { VerifiedMail } = require("../models/verifiedMails.model")
const { Resend } = require("resend")
const resend = new Resend(process.env.RESEND_API_KEY)
const validator = require("validator")



router.post("/send-otp", async(req, res) => {

    try {
        const{ email } = req.body // cfghsdjfkg

        if(!validator.isEmail(email))
        {
            throw new Error("Please enter a valid email...")
        }

        const genOtp = Math.floor(Math.random() * 1000000)

        const createdOtp = await OTP.create({
            email,
            otp : genOtp
        })

        await resend.emails.send({
            from: "Shubham <onboarding@resend.dev>",
            to: email,
            subject: "OTP Verification",
            html: `
                <div style="
                max-width: 600px;
                margin: 0 auto;
                padding: 40px 24px;
                font-family: Arial, Helvetica, sans-serif;
                color: #1f2937;
                line-height: 1.6;
                ">
                <h2 style="
                    margin: 0 0 24px;
                    font-size: 24px;
                    font-weight: 600;
                    color: #111827;
                ">
                    Verify your email
                </h2>

                <p style="margin: 0 0 16px;">
                    Hi,
                </p>

                <p style="margin: 0 0 24px;">
                    Use the verification code below to continue. This code will expire shortly.
                </p>

                <div style="
                    margin: 32px 0;
                    padding: 16px 24px;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    display: inline-block;
                ">
                    <span style="
                    font-size: 32px;
                    letter-spacing: 8px;
                    font-weight: 700;
                    color: #111827;
                    ">
                    ${genOtp}
                    </span>
                </div>

                <p style="
                    margin: 24px 0 0;
                    font-size: 14px;
                    color: #6b7280;
                ">
                    If you didn't request this code, you can safely ignore this email.
                </p>

                <hr style="
                    margin: 32px 0;
                    border: none;
                    border-top: 1px solid #e5e7eb;
                ">

                <p style="
                    margin: 0;
                    font-size: 13px;
                    color: #9ca3af;
                ">
                    Sent by Noisy
                </p>
                </div>
            `
        })


        res.status(201).json({
            success : true
        })
    } catch (error) {
        res.status(400).json({
            err : error.message
        })
    }

   
})


router.post("/verify-otp", async(req, res) => {
    try {
        const{email, otp} = req.body

        const foundOtp = await OTP.findOne({
            email, otp
        })

        if(!foundOtp)
        {
            throw new Error("Invalid OTP, please try again!")
        }

        await VerifiedMail.create({email})

        res.status(201).json({
            success : true,
            msg : "E-Mail verified, please sign up now.."
        })

    } catch (error) {
        res.status(400).json({
            err : error.message
        })
    }
})



module.exports = {
    authRouter : router
}