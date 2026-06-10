/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Returns user list
 *     responses:
 *       200:
 *         description: Success
 */
export async function GET() {
  return Response.json([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ]);
}