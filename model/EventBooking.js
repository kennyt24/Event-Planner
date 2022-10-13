const BookingSchema = new mongoose.Schema({
    NumberofTickets: {
        type: String,
      },

      Event_id: {
        type: String,

      },

      total_price: {
        type: Number,

      },

},
{
    timestamps:  true,
}
);


module.exports = mongoose.model('Book', BookingSchema)