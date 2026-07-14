import { Router } from "express";
import { getUserInfo } from "../controllers/discord";

const router = Router();

router.get("/:id/info", async (req, res) => {
  const { id } = req.params;

  try {
    const userInfo = await getUserInfo(id);
    if (!userInfo)
      return res.status(400).send({ message: "Unable to get user info" });

    return res.send(userInfo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
