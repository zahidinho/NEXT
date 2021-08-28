import { User } from "../../../models/index.js";
import { errorHelper, logger, getText } from "../../../utils/index.js";

export default async (req, res) => {
  // const user = await User.findOneAndUpdate(
  //   { email: "zahid@gmail.com" },
  //   {
  //     name: req.body.name,
  //     isVerified: req.body.isVerified,
  //     isPremium: req.body.isPremium,
  //     isActivated: req.body.isActivated,
  //   }
  // );
  // console.log(user.name, user.isVerified, user.isPremium, user.isActivated);
  // // console.log(req.body);
  // return res.status(200).json(user);
  const user = await User.findOne({ email: "zahid@gmail.com" });
  console.log(req.body, user);
  return res.status(200).json(user);
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
