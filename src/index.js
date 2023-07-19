import { initialLoad } from "./interface.js";
import { loadTasks, loadProject } from "./storage.js";

window.onload = loadTasks();
window.onload = loadProject();
initialLoad();
