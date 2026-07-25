import { Router } from "express";
import { getRepositories } from "../controllers/repos";
import consola from "consola";

const router: Router = Router();

router.get("/repos", async (req, res) => {
  try {
    return res.send(await getRepositories());
  } catch (error) {
    consola.error("Error while processing /repos", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
