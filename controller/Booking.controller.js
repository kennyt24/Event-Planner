const User = require('../model/user')
const Events = require('../model/event.model')
const Booking = require('../model/EventBooking')

exports.createbooking = async(req, res) => {
    try {
        const{NumberofTickets, Event_id, total_price } = req.body;

        //validate the request
        if (!(NumberofTickets|| Event_id, total_price)) {
            return res.status(400).send({
                message: 'All fields are required',
              });
        }

        //find a single event with an ID
        const Event = await Events.findOne({
           where: {id: Event.id}, 
           INCLUDE:[
            {
                model: Event,
                attributes: ['id', 'Eventtitle', 'Location' ]

            },
           ],
        });
        if (!Event) {
            return res.status(404).json({ message: 'Event not found' });
          }
          const booking = await Booking.create({
            Event_id: Event.dataValues.id,
            guest_id: req.user.id,
            start_date,
            total_price,
          });
    } catch (error) {
        
    }
};