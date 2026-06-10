/**
 * @openapi
 * /api/hello:
 *   get:
 *     summary: Get hello message
 *     description: Returns a simple hello world response
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
export async function GET() {
  return Response.json({ message: "Hello World" });
}