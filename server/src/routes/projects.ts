import { Router } from "express";
import { getRepositories } from "../controllers/repos";

const router: Router = Router();

router.get("/repos", async (req, res) => {
  try {
    return res.send(await getRepositories());
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
