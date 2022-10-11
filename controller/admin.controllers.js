const bcrypt = require('bcrypt');
const User = require('../model/user')
const Events = require('../model/event.model')
const cloudinary = require('../utils/cloudinary')


exports.UserSignup = async (req, res) => {
    try {
      const { firstName, lastName, role, email, password,} = req.body;
    //   const user = await User.findOne({ where: { email } });
    //   if (user) {
    //     return res.status(400).json({ message: 'User exists' });
    //   }
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        firstName,
        lastName,
        role,
        email,
        password: hashPassword,
      });
      return res
      .status(201)
      .json({
        message: 'User has been created',
        newUser,
        userId: newUser.userId,
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  exports.UserLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ message: 'Invalid password' });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  exports.AdminPostEvent = async (req, res) =>{
    try {
        const {Eventtitle, Location, TicketPrice, EventImage, is_available } =
        req.body;
        // // validate request
        // if(!Eventtitle ||  !Location || !description || !TicketPrice ||) {
        //     res.status(400).send({
        //         message: 'Content can not be empty!',
        //       });
        //       return;
        //     }
        //     const user = await User.findOne({ where: { id: req.user.id } });
        //     if (!user) {
        //       return res.status(404).json({ message: 'User not found' });
        //     }

        //Authorization 
            // if (user.role !== 'admin') {
            //   return res
            //     .status(403)
            //     .json({ message: 'Not authorized to perform this role' });
            // }
            // upload array of images to cloudinary and get the urls
        
            const images = [];
            for (let i = 0; i < req.files.length; i++) {
              const result = await cloudinary.uploader.upload(req.files[i].path);
              images.push(result.secure_url);
              console.log('=============== uploading image ========================');
            }

            const Event = await Events.create({
                Eventtitle, 
                Location,
                TicketPrice, 
                EventImage : images,
                is_available,
            });
            return res.status(201).json({ newEvents });


    } catch (error) {
        return res.status(500).send({message: error });
    }
  }

  // To get all events
exports.FindAllEvents =(req,res)=>{
    try {
        // pagination of 10per time of 25 data
           const package =Package.findAll()
           res.send(package);
    } catch (err) {
        res.status(500).send({
            message:err.message});
        
    }
};