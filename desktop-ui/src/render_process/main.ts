import { ChildProcess, exec } from "child_process";
import { log } from "console";
import * as path from "path";

const app = document.getElementById("app");
if (app != null) {
  app.innerHTML = "Click here";
}

class Core {
  private child: ChildProcess;
  constructor() {
    const coreBinPath = path
      .resolve(
        __dirname,
        "..",
        "core",
        "target",
        "debug",
        "experiment-electron-rust-ui");
    this.child = exec(coreBinPath);

    this.child.stdin.setDefaultEncoding("utf8");
    this.child.stdout.setEncoding("utf8");
    this.child.stderr.setEncoding("utf8");

    this.child.on("close", () => {
      log("child process closed");
    });
    this.child.stdout.on("data", (raw: string) => {
      log("receiving");
      log(raw);
      if (app != null) {
        app.innerHTML += raw;
      }
    });
    this.child.stderr.on("data", (raw: string) => {
      log(raw);
    });
  }

  public send() {
    log("sending");
    this.child.stdin.write("hello\n");
  }
}

const core = new Core();

if (app != null) {
  app.onclick = () => {
    core.send();
  };
}
