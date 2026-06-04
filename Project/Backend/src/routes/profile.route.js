const express = require("express")
const router = express.Router()
const validator = require("validator")
const { User } = require("../models/user.model")
const { isLoggedIn } = require("../middlewares/isLoggedIn")


router.put("/complete",isLoggedIn, async(req, res) => {
    try {
        const{firstName, lastName, dateOfBirth, gender, displayPicture, bio} = req.body
        const{ userId } = req.params
        const foundUser = req.user

        if(!firstName || !lastName || !dateOfBirth || !gender)
        {
            throw new Error("Firstname, lastname, gender and DOB are required..")
        }

        if(!validator.isDate(dateOfBirth))
        {
            throw new Error("Invalid Date")
        }

        
        foundUser.firstName = firstName,
        foundUser.lastName = lastName,
        foundUser.bio = bio,
        foundUser.gender = gender,
        foundUser.dateOfBirth = dateOfBirth,
        foundUser.displayPicture = displayPicture,

        await foundUser.save()




        res.status(200).json({
            success : true, 
            msg : "Profile updated",
            data : {
                email : foundUser.email,
                username : foundUser.username,
                firstName : foundUser.firstName,
                lastName : foundUser.lastName,
                bio : foundUser.bio,
                gender : foundUser.gender,
                dateOfBirth : foundUser.dateOfBirth,
                displayPicture : foundUser.displayPicture,
                followers : foundUser.followers,
                following : foundUser.following,
                posts : foundUser.posts,
            }
        })


    } catch (error) {
        res.status(400).json({
            err : error.message
        })
    }
})






module.exports = {
    profileRouter : router
}