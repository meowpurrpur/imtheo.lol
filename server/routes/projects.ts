import { Router } from "express";
import { getRepositories as getRepositoriesGithub } from "../controllers/github";
import { getRepositories as getRepositoriesForgejo } from "../controllers/forgejo";

const router = Router();

router.get("/repos", async (req, res) => {
  try {
    if(process.env.REPO_SOURCE == "forgejo") {
      return res.send(await getRepositoriesForgejo());
    } else {
      return res.send(await getRepositoriesGithub());
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
