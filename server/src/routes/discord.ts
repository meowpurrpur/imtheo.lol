import { Router } from "express";
import { getUserInfo } from "../controllers/discord";
import consola from "consola";

const router: Router = Router();

router.get("/:id/info", async (req, res) => {
  const { id } = req.params;

  try {
    const userInfo = await getUserInfo(id);
    if (!userInfo)
      return res.status(400).send({ message: "Unable to get user info" });

    return res.send(userInfo);
  } catch (error) {
    consola.error("Error while loading Discord info:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
