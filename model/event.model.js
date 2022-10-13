const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
    Eventtitle: {
        type: String,
      
      },
      Location: {
        type: String,
      
      },
      TicketPrice:{
        type: String,
    
      },

      EventImage:{
        type: String,
    
      },
      cloudinary_id:{
        type: String,
    
      },

      is_available: {
        type: Boolean,
        default: true
      },
},
{
    timestamps:  true,
}
);


module.exports = mongoose.model('Event', EventSchema)