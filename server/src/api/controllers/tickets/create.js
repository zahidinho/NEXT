import { Ticket } from "../../../models/index.js";
import { errorHelper, logger, getText } from "../../../utils/index.js";

export default async (req, res) => {
  // const user = await User.find({}).catch(err => {
  //   return res.status(500).json(errorHelper('00088', req, err.message));
  // });

  const ticket = new Ticket({
    userId: "612560978f29642b20f3fe8dd",
    note: "Deneme",
    customerId: "612560978f29642b20f3fse8d",
    status: "waiting",
    attachment: "asdasdasd",
    id: "1",
  });
  user = await ticket.save().catch((err) => {
    console.log(err);
    return res.status(200).json(req);
  });

  // logger('00089', req.user._id, getText('en', '00089'), 'Info', req);
  // return res.status(200).json({
  //   resultMessage: { en: getText('en', '00089'), tr: getText('tr', '00089') },
  //   resultCode: '00089',
  //   user
  // });
};

/**
 * @swagger
 * /tickets:
 *    get:
 *      summary: Get All Tickets
 *      parameters:
 *        - in: header
 *          name: Authorization
 *          schema:
 *            type: string
 *          description: Put access token here
 *      tags:
 *        - Tickets
 *      responses:
 *        "200":
 *          description: The user information has gotten successfully.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          resultMessage:
 *                              $ref: '#/components/schemas/ResultMessage'
 *                          resultCode:
 *                              $ref: '#/components/schemas/ResultCode'
 *                          user:
 *                              $ref: '#/components/schemas/User'
 *        "401":
 *          description: Invalid token.
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Result'
 *        "500":
 *          description: An internal server error occurred, please try again.
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Result'
 */
