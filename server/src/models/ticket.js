import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ticketSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
      select: false,
    },
    customerId: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    attachment: {
      type: Buffer,
    },
    status: {
      type: String,
      enum: ["waiting", "completed", "notcompleted", "unknown"],
      required: true,
    },
    /*NOTE: If you are using admin panel and controllers specific to admin panel,
      you can control the authority of users with the help of this field.*/
    id: {
      type: String,
    },
    //NOTE: In case the user delete its account, you can store its non-personalized information anonymously.
    deletedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = model("Ticket", ticketSchema);
export default Ticket;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         name:
 *           type: string
 *         username:
 *           type: string
 *         type:
 *           type: string
 *           enum: ['user', 'admin', 'creator', 'reader']
 *         language:
 *           type: string
 *           enum: ['tr', 'en']
 *         isPremium:
 *           type: boolean
 *         gender:
 *           type: string
 *           enum: ['male', 'female', 'other']
 *         countryCode:
 *           type: string
 *         timezone:
 *           type: number
 *         birthDate:
 *           type: string
 *         photoUrl:
 *           type: string
 *         isActivated:
 *           type: boolean
 *         isVerified:
 *           type: boolean
 *         deviceId:
 *           type: string
 *         platform:
 *           type: string
 *           enum: ['Android', 'IOS']
 *         deletedAt:
 *           type: string
 */
