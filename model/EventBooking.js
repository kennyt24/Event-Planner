const BookingSchema = new mongoose.Schema({
    NumberofTickets: {
        type: String,
      },

      userId: {
        type: String,

      },

      userId: {
        type: String,

      },


},
{
    timestamps:  true,
}
);


module.exports = mongoose.model('Book', BookingSchema)